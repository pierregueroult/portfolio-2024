export type Diploma = {
  title: string;
  date: string;
  description: string;
  honors: string;
};

export type Diplomas = Diploma[];

export default function getDiplomas(): Diplomas {
  const diplomas: Diplomas = [
    {
      title: "Baccalauréat Général",
      date: "2022",
      description:
        "Obtenu avec 17.2/20 en note finale, mention très bien européenne (anglais). Membre délégué du Conseil de Vie Lycéenne, Représentant des élèves au conseil d'administration du lycée, Représentant des élèves dans la communication digitale du lycée.",
      honors: "Mention Très Bien",
    },
    {
      title: "Diplôme Cambridge English",
      date: "2022",
      description:
        "Passé dans le cadre de mon baccalauréat européen, j'ai pu passer le diplôme Cambridge English grâce au financement de la Région Normandie.",
      honors: "B2 First ",
    },
    {
      title: "DUT MMI",
      date: "2024",
      description:
        "À la fin de cette deuxième année de Bachelor Universitaire de Technologie MMI, je serai diplômé d'un DUT MMI, attestant de mes compétences en développement web, en communication digitale, en design graphique et en audiovisuel.",
      honors: "En cours",
    },
    {
      title: "BUT MMI",
      date: "2025",
      description:
        "À la fin de ma troisième année de Bachelor Universitaire de Technologie MMI (l'année prochaine avec de l'alternance) je serai diplômé d'un BUT MMI, attestant de mes compétences en développement web, en communication digitale, en design graphique et en audiovisuel.",
      honors: "En cours",
    },
  ];

  return diplomas;
}
