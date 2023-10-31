"use client";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

import styles from "./Newsletter.module.scss";

export default function Newsletter(): React.ReactNode {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    if (!inputRef.current || !inputRef.current.value) {
      toast.error("🤔 Erreur de chargement");
      setIsLoading(false);
      return;
    }
    const email = inputRef.current.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(email)) {
      toast.error("✉️ Adresse e-mail invalide");
      setIsLoading(false);
      return;
    }
    const message = await fetch(`/api/register?mail=${email}`);
    const json = await message.json();
    if (json.message == "error") {
      toast.error("🤔 Erreur de chargement");
      setIsLoading(false);
      return;
    } else if (json.message == "already") {
      toast.error("🤓 Vous êtes déjà inscrit");
      setIsLoading(false);
      return;
    } else if (json.message == "success") {
      toast.success("✉️ Vous êtes bien inscrit");
      inputRef.current.value = "";
      setIsLoading(false);
      return;
    } else if (json.message == "mail error") {
      toast.error("🤔 Erreur avec le mail de confirmation");
      setIsLoading(false);
      return;
    } else {
      toast.error("🤔 Erreur de chargement");
      setIsLoading(false);
      return;
    }
  };

  return (
    <form action="" className={styles.newsletter} onSubmit={handleSubmit}>
      <input
        type="mail"
        placeholder="Votre adresse e-mail"
        className={styles.input}
        ref={inputRef}
      />
      <button type="submit" className={styles.button}>
        {isLoading ? <ButtonLoader /> : "S'inscrire"}
      </button>
    </form>
  );
}
