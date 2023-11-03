"use client";
// styles
import styles from "./page.module.scss";
// components
import Modal from "@/components/Modal/Modal";
import { motion } from "framer-motion";
// hooks
import { useState, useEffect, useRef } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
// types
import { SearchResults, SearchResult, SearchResponse } from "@/types/SearchResult";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function SearchPage(): JSX.Element {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch: string = useDebounce<string>(search, 500);
  const [results, setResults] = useState<SearchResults>([]);
  const [time, setTime] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [start, setStart] = useState<number>(0);
  const end = start + 5;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => event.preventDefault();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);
  const handleClose = () => router.back();
  const handleLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    handleClose();
    router.push(event.currentTarget.href);
  };

  useEffect(() => {
    async function fetchSearchResults() {
      const response: Response = await fetch(`/api/search?q=${debouncedSearch}`);
      const { results, time }: SearchResponse = await response.json();
      setResults(results);
      setTime(time);
    }

    if (debouncedSearch) {
      fetchSearchResults();
    }
  }, [debouncedSearch]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 500);
  }, []);

  return (
    <Modal>
      <div className={styles.container}>
        <form className={styles.search} onSubmit={handleSubmit}>
          <button
            type="button"
            className={styles.close}
            onClick={handleClose}
            aria-label="Fermer la recherche"
          >
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Rechercher sur le site ..."
              value={search}
              onChange={handleChange}
              className={styles.input}
              ref={inputRef}
            />
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
          </div>
        </form>
        <div className={styles.results}>
          <p className={styles.count}>
            {results.length} résultat pour la recherche &quot;{debouncedSearch}&quot; en{" "}
            {time / 1000} seconde
          </p>
          <ul
            className={styles.list}
            style={{
              height:
                results.length < 5 ? (results.length === 0 ? 74 : results.length * 74) : 5 * 74,
            }}
          >
            {results.slice(start, end).map((result: SearchResult) => (
              <motion.li
                key={result.id}
                className={styles.item}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <a href={result.url} onClick={handleClose}>
                  <div>
                    {result.type === "website" ? (
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
                        <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
                        <path d="M6 8h.001" />
                        <path d="M10 8h.001" />
                        <path d="M14 8h.001" />
                        <path d="M18 8h.001" />
                        <path d="M8 12h.001" />
                        <path d="M12 12h.001" />
                        <path d="M16 12h.001" />
                        <path d="M7 16h10" />
                      </svg>
                    ) : result.type === "article" ? (
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
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14h-8" />
                        <path d="M15 18h-5" />
                        <path d="M10 6h8v4h-8V6Z" />
                      </svg>
                    ) : result.type === "photo" ? (
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
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    ) : result.type === "video" ? (
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
                        <path d="m22 8-6 4 6 4V8Z" />
                        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                      </svg>
                    ) : result.type === "link" ? (
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
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <line x1="3" x2="21" y1="9" y2="9" />
                      </svg>
                    ) : (
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
                        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                        <line x1="8" x2="16" y1="12" y2="12" />
                      </svg>
                    )}
                    <div className={styles.titles}>
                      <h2>{result.title}</h2>
                      <p>{result.url}</p>
                    </div>
                  </div>
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
                    className={styles.icon}
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </motion.li>
            ))}
            {results.length === 0 && (
              <li className={styles.noItem}>
                <p>Aucun résultat pour la recherche &quot;{debouncedSearch || " "}&quot;</p>
              </li>
            )}
          </ul>
          {results.length > 5 && (
            <div className={styles.pagination}>
              {Array.from({ length: Math.ceil(results.length / 5) }, (_, i) => i).map(
                (page: number) => (
                  <button
                    key={page}
                    type="button"
                    className={styles.button}
                    onClick={() => setStart(page * 5)}
                    disabled={start === page * 5}
                  >
                    {page + 1}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
