"use client";
import styles from "./Modal.module.scss";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const router = useRouter();

  return (
    <div className={styles.modal}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Modal;
