"use client";
import Error from "@/components/ErrorSlugTemplate/ErrorSlugTemplate";

interface ProjectErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProjectError({ error, reset }: ProjectErrorProps): React.ReactNode {
  return (
    <Error error={error} reset={reset} text="Ce projet n'existe pas." buttonLink="/projects" />
  );
}
