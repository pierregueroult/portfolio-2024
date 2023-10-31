import styles from "./Button.module.scss";
import Link from "next/link";
import { Fragment } from "react";

interface ButtonProps {
  text: string;
  href?: string;
  variant: "primary" | "secondary" | "warning" | "danger" | "success";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  blank?: boolean;
  icon?: React.ReactNode;
  action?: () => void;
}

export default function Button({
  text,
  href,
  variant,
  size,
  blank = false,
  disabled = false,
  icon = <Fragment />,
  action,
}: ButtonProps): JSX.Element {
  if (action) {
    return (
      <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} onClick={action}>
        {icon ? icon : <Fragment />}
        {text}
      </button>
    );
  }

  if (disabled || !href) {
    return (
      <button
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles.disabled}`}
        disabled
      >
        {icon ? icon : <Fragment />}
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
        {icon ? icon : <Fragment />}
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
          {icon ? icon : <Fragment />}
          {text}
        </a>
      );

    return (
      <Link href={href} className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
        {icon ? icon : <Fragment />}
        {text}
      </Link>
    );
  }

  return <Fragment />;
}
