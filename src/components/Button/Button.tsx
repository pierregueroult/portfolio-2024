import styles from "./Button.module.scss";
import Link from "next/link";
import { Fragment } from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "warning" | "danger" | "success";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  blank?: boolean;
}

export default function Button({
  text,
  href,
  variant,
  size,
  blank = false,
  disabled = false,
}: ButtonProps): JSX.Element {
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

  if (href.startsWith("https")) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      >
        {text}
      </a>
    );
  }

  if (href.startsWith("/")) {
    if (blank)
      return (
        <a
          href={href}
          className={`${styles.button} ${styles[variant]} ${styles[size]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      );

    return (
      <Link href={href} className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
        {text}
      </Link>
    );
  }

  return <Fragment />;
}
