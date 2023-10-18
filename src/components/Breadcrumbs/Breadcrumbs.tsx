"use client";

import { usePathname } from "next/navigation";
import { useEffect, Fragment, useState } from "react";
import Link from "next/link";

export default function Breadcrumbs(): JSX.Element {
  const path = usePathname();
  const [pathnames, setPathnames] = useState<string[]>([]);

  useEffect(() => {
    setPathnames(path.split("/").filter(pathname => pathname !== ""));
  }, [path]);

  return (
    <Fragment>
      {pathnames.map((pathname, i) => {
        return (
          <Fragment key={i}>
            <span>/</span>
            <Link href={`/${pathnames.slice(0, i + 1).join("/")}`}>{pathname}</Link>
          </Fragment>
        );
      })}
    </Fragment>
  );
}
