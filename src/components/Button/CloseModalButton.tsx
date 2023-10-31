"use client";

import { Fragment } from "react";
import styles from "./Button.module.scss";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "warning" | "danger" | "success";
  size: "small" | "medium" | "large";
  disabled?: boolean;
}

export default function Button({
  text,
  variant,
  size,
  disabled = false,
}: ButtonProps): JSX.Element {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  if (disabled) {
    return (
      <button
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles.disabled}`}
        disabled
      >
        {text}
      </button>
    );
  }

  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} onClick={closeModal}>
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
      {text}
    </button>
  );
}
