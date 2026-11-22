import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();

function loadTypeScriptModule(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const loaded = { exports: {} };
  new Function("module", "exports", compiled)(loaded, loaded.exports);
  return loaded.exports;
}

function readCatalog(fileName, exportName) {
  return loadTypeScriptModule(path.join(root, "data", fileName))[exportName];
}

const { GENRES, GENRE_SECTION_ORDER } = loadTypeScriptModule(path.join(root, "data", "genres.ts"));
const movies = readCatalog("movies.ts", "movies");
const series = readCatalog("series.ts", "series");
const { getGenreCollection } = loadTypeScriptModule(path.join(root, "app", "lib", "genreCollections.ts"));
const supported = new Set(GENRES);
const errors = [];
const manualReview = new Set();
const manualForWeakDescription = new Set();
const counts = { zeroGenres: 0, multipleGenres: 0, unsupportedAssignments: 0, duplicateAssignments: 0, missingOrInvalidDates: 0, invalidIds: 0, duplicateIds: 0, duplicateCollectionEntries: 0 };
const records = [
  ...movies.map((item) => ({ type: "movie", item })),
  ...series.map((item) => ({ type: "series", item })),
];

function validateIds(items, type) {
  const ids = new Map();
  for (const item of items) {
    if (typeof item.id !== "string" || item.id.trim() === "") {
      counts.invalidIds += 1;
      errors.push(`${type} ${item.slug ?? "<missing slug>"} has a missing or invalid ID.`);
      continue;
    }
    const matches = ids.get(item.id) ?? [];
    matches.push(item);
    ids.set(item.id, matches);
  }
  for (const [id, matches] of ids) {
    if (matches.length > 1) {
      counts.duplicateIds += matches.length - 1;
      errors.push(`${type} ID ${JSON.stringify(id)} is duplicated: ${matches.map((item) => `${item.title} (${item.slug})`).join("; ")}.`);
    }
  }
}

validateIds(movies, "Movie");
validateIds(series, "Series");

for (const { type, item } of records) {
  const label = `${type} ${item.id} (${item.slug})`;
  const genres = Array.isArray(item.genres) ? item.genres : [];
  if (genres.length === 0) counts.zeroGenres += 1;
  if (genres.length > 1) counts.multipleGenres += 1;
  if (genres.length !== 1) {
    errors.push(`${label} must have exactly one genre; found ${genres.length}.`);
    manualReview.add(label);
  }
  if (new Set(genres).size !== genres.length) {
    counts.duplicateAssignments += 1;
    errors.push(`${label} has duplicate genre assignments.`);
  }
  for (const genre of genres) {
    if (!supported.has(genre)) {
      counts.unsupportedAssignments += 1;
      errors.push(`${label} has unsupported genre ${JSON.stringify(genre)}.`);
    }
  }

  const timestamp = Date.parse(item.createdAt);
  if (!item.createdAt || !Number.isFinite(timestamp)) {
    counts.missingOrInvalidDates += 1;
    errors.push(`${label} has missing or invalid createdAt catalogue addition date ${JSON.stringify(item.createdAt)}.`);
  }

  const description = `${item.description ?? ""} ${item.episodes?.map((episode) => episode.description).join(" ") ?? ""}`.trim();
  if (description.length < 50 || /^(a movie presented in multiple parts|a drama series following|the story (continues|begins)|a series following)/i.test(description)) {
    manualForWeakDescription.add(label);
    manualReview.add(label);
  }
}

for (const genre of GENRE_SECTION_ORDER) {
  const collection = getGenreCollection(movies, series, genre);
  const expected = records.filter(({ item }) => Array.isArray(item.genres) && item.genres.includes(genre));
  const keys = (entries) => entries.map(({ type, item }) => `${type}:${item.id}`);
  const actualKeys = keys(collection);
  const expectedKeys = keys(expected);
  if (new Set(actualKeys).size !== actualKeys.length) {
    const duplicates = actualKeys.filter((key, index) => actualKeys.indexOf(key) !== index);
    counts.duplicateCollectionEntries += duplicates.length;
    errors.push(`${genre} collection contains duplicate entries: ${[...new Set(duplicates)].join(", ")}.`);
  }
  if (actualKeys.length !== expectedKeys.length || expectedKeys.some((key) => !actualKeys.includes(key))) {
    errors.push(`${genre} collection is missing or duplicating movie/series records.`);
  }

  for (let index = 1; index < collection.length; index += 1) {
    const previous = collection[index - 1];
    const current = collection[index];
    const previousDate = Date.parse(previous.item.createdAt);
    const currentDate = Date.parse(current.item.createdAt);
    if (!Number.isFinite(previousDate) || !Number.isFinite(currentDate)) continue;
    if (previousDate < currentDate) {
      errors.push(`${genre} collection is not newest-first at ${previous.type}:${previous.item.id} -> ${current.type}:${current.item.id}.`);
    } else if (previousDate === currentDate) {
      const expectedTie = previous.type === current.type
        ? previous.item.id.localeCompare(current.item.id, undefined, { numeric: true }) <= 0
        : previous.type === "movie";
      if (!expectedTie) errors.push(`${genre} collection has inconsistent equal-date ordering.`);
    }
  }
}

console.log(`Movies audited: ${movies.length}. Series audited: ${series.length}. Total: ${records.length}.`);
console.log(`Movie and series IDs checked for missing values and duplicates.`);
console.log(`Invalid IDs: ${counts.invalidIds}; duplicate IDs: ${counts.duplicateIds}; repeated genre entries: ${counts.duplicateCollectionEntries}.`);
console.log(`Records currently with exactly one genre: ${records.filter(({ item }) => item.genres?.length === 1).length}.`);
console.log(`Multiple genres: ${counts.multipleGenres}; no genre: ${counts.zeroGenres}; unsupported assignments: ${counts.unsupportedAssignments}; duplicate assignments: ${counts.duplicateAssignments}; missing/invalid createdAt: ${counts.missingOrInvalidDates}.`);
console.log(`Records requiring manual primary-genre review: ${manualReview.size} (${manualForWeakDescription.size} have weak descriptions).`);
console.log(`Genre sections checked for combined membership and newest-first ordering: ${GENRE_SECTION_ORDER.length}.`);
if (errors.length) {
  console.error(`Genre validation failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 30)) console.error(`- ${error}`);
  if (errors.length > 30) console.error(`... ${errors.length - 30} additional issue(s) omitted.`);
  if (manualReview.size) console.error(`Manual review required for ${manualReview.size} record(s).`);
  process.exitCode = 1;
} else {
  console.log("Genre validation passed: every record has exactly one supported genre and every collection is correctly combined and sorted.");
}
