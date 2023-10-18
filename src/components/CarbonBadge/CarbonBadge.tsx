"use client";

import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function CarbonBadge(): React.ReactNode {
  const pathname: string = usePathname();

  return <WebsiteCarbonBadge url={`https://pierregueroult.dev${pathname}`} dark={true} lang="fr" />;
}

interface CarbonBadgeProps {
  className?: string;
}

export default function CarbonBadgeElement({ className }: CarbonBadgeProps): React.ReactNode {
  const [isMounted, setIsMounted] = useState(false);
  return isMounted ? (
    <CarbonBadge />
  ) : (
    <button className={className} onClick={() => setIsMounted(true)}>
      Afficher le bilan carbone
    </button>
  );
}
