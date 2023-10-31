"use client";

import { useEffect } from "react";

export default function NoFooter(): React.ReactNode {
  useEffect(() => {
    document.body.classList.add("no-footer");

    return () => document.body.classList.remove("no-footer");
  }, []);

  return <></>;
}
