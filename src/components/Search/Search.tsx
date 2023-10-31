"use client";
import styles from "./Search.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

interface HeaderSearchProps {
  placeholder: string;
  shortcut: string[];
}

export default function HeaderSearch({ placeholder, shortcut }: HeaderSearchProps): JSX.Element {
  const shorcutRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    var shortcutElement = shorcutRef.current!;
    var inputElement = inputRef.current!;

    function focusSearch() {
      if (document.activeElement !== inputElement) {
        inputElement.focus();
      } else {
        inputElement.blur();
      }
    }

    function handleKeydown(event: KeyboardEvent) {
      // test if the key is present in the shortcut array
      if (shortcut.includes(event.key)) {
        event.preventDefault();
        focusSearch();
      }
    }

    document.addEventListener("keypress", handleKeydown);

    return () => {
      document.removeEventListener("keypress", handleKeydown);
    };
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
        onChange={event => setSearch(event.target.value)}
      />
    </form>
  );
}
