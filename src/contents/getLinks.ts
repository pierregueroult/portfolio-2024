import { linksType } from "../types/link";

export default function getLinks() {
  const links: linksType = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Gallerie", href: "/gallery" },
  ];
  return links;
}
