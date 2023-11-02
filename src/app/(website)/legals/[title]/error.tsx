"use client";
import Error from "@/components/ErrorSlugTemplate/ErrorSlugTemplate";

interface LegalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LegalError({ error, reset }: LegalErrorProps): React.ReactNode {
  return <Error error={error} reset={reset} text="Ce fichier n'existe pas." buttonLink="/" />;
}
