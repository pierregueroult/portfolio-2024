"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Modal.module.scss";
import { motion, Variants as AnimationVariants } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
}

const variants: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

function Modal({ children }: ModalProps) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    const keys = ["Escape", "/", ":"];

    const handleClose = (event: KeyboardEvent) => keys.includes(event.key) && router.back();

    document.addEventListener("keydown", handleClose);

    return () => {
      document.body.style.overflowY = "auto";
      document.removeEventListener("keydown", handleClose);
    };
  });

  return (
    <motion.div
      className={styles.modal}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, type: "linear" }}
    >
      <div className={styles.container}>{children}</div>
    </motion.div>
  );
}

export default Modal;
