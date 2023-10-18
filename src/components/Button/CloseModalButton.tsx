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
      {text}
    </button>
  );
}
