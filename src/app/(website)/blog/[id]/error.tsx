"use client";
import Error from "@/components/ErrorSlugTemplate/ErrorSlugTemplate";

interface BlogErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogError({ error, reset }: BlogErrorProps): React.ReactNode {
  return (
    <Error error={error} reset={reset} text="Cette article n'existe pas." buttonLink="/blog" />
  );
}
