"use client";
import styles from "./Search.module.scss";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useRouter, usePathname } from "next/navigation";

interface HeaderSearchProps {
  placeholder: string;
  shortcut: string[];
}

export default function HeaderSearch({ placeholder, shortcut }: HeaderSearchProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    router.push("/search", {
      scroll: false,
    });
    event.target.blur();
  };

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) =>
      shortcut.includes(event.key) && inputRef.current?.focus();

    document.addEventListener("keydown", handleShortcut);

    return () => document.removeEventListener("keydown", handleShortcut);
  }, [shortcut]);

  return (
    <form className={styles.search}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={handleFocus}
      />
    </form>
  );
}
