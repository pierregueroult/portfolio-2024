export default function getTopics(): string[] {
  const topics: string[] = [
    "Développement web",
    "Création graphique",
    "Travail d'équipe",
    "Intégration web",
    "Codage créatif",
    "Star Wars",
    "Legos",
    "Art et musée",
  ];

  return topics.sort(() => Math.random() - 0.5);
}
