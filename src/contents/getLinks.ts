export type linkType = {
  name: string;
  href: string;
};

export type linksType = linkType[];

export default function getLinks() {
  const links: linksType = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "CV", href: "/curriculum-vitae" },
    // { name: "Gallerie", href: "/gallery" },
    // { name: "Blog", href: "/blog" },
  ];
  return links;
}
