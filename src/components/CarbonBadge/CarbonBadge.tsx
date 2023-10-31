"use client";

import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clear } from "console";

export function CarbonBadge(): React.ReactNode {
  const pathname: string = usePathname();

  return <WebsiteCarbonBadge url={`https://pierregueroult.dev${pathname}`} dark={true} lang="fr" />;
}

interface CarbonBadgeProps {
  className?: string;
}

export default function CarbonBadgeElement({ className }: CarbonBadgeProps): React.ReactNode {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    var timeout: NodeJS.Timeout;

    function removeCarbonBadge() {
      setIsMounted(false);
    }

    if (isMounted) {
      timeout = setTimeout(removeCarbonBadge, 10000);
    }

    return () => clearTimeout(timeout);
  }, [isMounted]);

  return isMounted ? (
    <CarbonBadge />
  ) : (
    <button className={className} onClick={() => setIsMounted(true)}>
      Afficher le bilan carbone
    </button>
  );
}
