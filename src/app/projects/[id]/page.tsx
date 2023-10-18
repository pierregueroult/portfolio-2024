import styles from "./page.module.scss";

interface ProjectProps {
  params: {
    id: string;
  };
}

export default function Project({ params: { id } }: ProjectProps) {
  return <main></main>;
}
