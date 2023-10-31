"use client";

import { useEffect } from "react";

export default function FixedHeader(): React.ReactNode {
  useEffect(() => {
    document.body.classList.add("fixed-header");

    return () => document.body.classList.remove("fixed-header");
  }, []);

  return <></>;
}
