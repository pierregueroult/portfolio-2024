import styles from "./page.module.scss";

interface BlogArticleProps {
  params: {
    id: string;
  };
}

export default function BlogArticle({ params: { id } }: BlogArticleProps) {
  return <main></main>;
}
