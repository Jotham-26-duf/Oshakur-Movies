import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

function loadCatalog(fileName, exportName) {
  const filePath = path.join(process.cwd(), "data", fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const declaration = findArrayDeclaration(sourceFile, exportName);

  if (!declaration) {
    throw new Error(`Could not find exported array "${exportName}" in ${fileName}`);
  }

  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const loadedModule = { exports: {} };
  new Function("module", "exports", compiled)(loadedModule, loadedModule.exports);

  const values = loadedModule.exports[exportName];
  return values.map((value, index) => ({
    ...value,
    sourceFile: fileName,
    sourceLine:
      sourceFile.getLineAndCharacterOfPosition(
        declaration.elements[index].getStart(sourceFile),
      ).line + 1,
  }));
}

function findArrayDeclaration(sourceFile, exportName) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;

    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === exportName &&
        declaration.initializer &&
        ts.isArrayLiteralExpression(declaration.initializer)
      ) {
        return declaration.initializer;
      }
    }
  }

  return null;
}

function reportDuplicates(items, field, label, issues) {
  const groups = new Map();

  for (const item of items) {
    const value = item[field];
    if (typeof value !== "string" || value.length === 0) continue;
    const group = groups.get(value) ?? [];
    group.push(item);
    groups.set(value, group);
  }

  for (const [value, matches] of groups) {
    if (matches.length < 2) continue;

    const details = matches
      .map(
        (item) =>
          `${item.id} (${JSON.stringify(item.title)}) at ${item.sourceFile}:${item.sourceLine}`,
      )
      .join("; ");
    issues.push(`${label} ${JSON.stringify(value)} is duplicated: ${details}`);
  }
}

const movies = loadCatalog("movies.ts", "movies");
const series = loadCatalog("series.ts", "series");
const episodes = series.flatMap((parent) =>
  (parent.episodes ?? []).map((episode) => ({
    ...episode,
    seriesSlug: parent.slug,
    sourceFile: "series.ts",
    sourceLine: parent.sourceLine,
  })),
);
const issues = [];

reportDuplicates(movies, "id", "Movie ID", issues);
reportDuplicates(movies, "slug", "Movie slug", issues);
reportDuplicates(series, "id", "Series ID", issues);
reportDuplicates(series, "slug", "Series slug", issues);
reportDuplicates(episodes, "id", "Episode ID", issues);

for (const parent of series) {
  if (!Array.isArray(parent.episodes)) {
    issues.push(`Series ${parent.slug} is missing its nested episodes array.`);
  }
  for (const episode of parent.episodes ?? []) {
    if (!Number.isInteger(episode.episodeNumber) || episode.episodeNumber < 1) {
      issues.push(`Episode ${episode.id} (${JSON.stringify(episode.title)}) has invalid episode number ${JSON.stringify(episode.episodeNumber)}.`);
    }
  }
}

if (issues.length > 0) {
  console.error(`Catalog validation found ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(
    `Catalog validation passed: ${movies.length} movies, ${series.length} series, ${episodes.length} episodes; no duplicate IDs/slugs and every episode has a valid number and nested parent.`,
  );
}
