export function normalizeExplainerName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

const explainerImages: Record<string, string> = {
  "perfect": "/images/Explainer/perfect.jpg",
  "yanga": "/images/Explainer/yanga.jpg",
  "b-the-great": "/images/Explainer/b-the-great.jpg",
  "b the great": "/images/Explainer/b-the-great.jpg",
  "gaheza simba": "/images/Explainer/gaheza-simba.jpg",
  "gaheza": "/images/Explainer/gaheza-simba.jpg",
  "sankara": "/images/Explainer/sankara.jpg",
  "savimbi": "/images/Explainer/savimbi.jpg",
  "mussa savimbi": "/images/Explainer/savimbi.jpg",
  "junior giti": "/images/Explainer/junior-giti.jpg",
  "rock kimomo": "/images/Explainer/rock-kimomo.jpg",
};

export function getExplainerImage(name: string): string | undefined {
  return explainerImages[normalizeExplainerName(name)];
}

export function getCanonicalExplainerName(name: string): string {
  const normalized = normalizeExplainerName(name);
  return ({
        perfect: "Perfect",
        yanga: "Yanga",
        "b-the-great": "B-The-Great",
        "b the great": "B-The-Great",
        "gaheza simba": "Gaheza Simba",
        gaheza: "Gaheza",
        sankara: "Sankara",
        savimbi: "Savimbi",
        "mussa savimbi": "Mussa Savimbi",
        "junior giti": "Junior Giti",
        "rock kimomo": "Rock Kimomo",
      } as Record<string, string>)[normalized] ?? name.trim();
}
