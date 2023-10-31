"use client";

import styles from "./ContactForm.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await response.json();

    console.log(json);

    if (!json.error) {
      toast.success(json.message);
      form.reset();
    } else if (json.error) {
      toast.error(json.message);
      console.log(e);
    } else {
      toast.error("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.information}>
        <input type="text" name="name" id="name" required />
        <label htmlFor="name">
          Nom <span>*</span>
        </label>
      </div>
      <div className={styles.information}>
        <input type="text" name="email" id="email" required />
        <label htmlFor="email">
          Email <span>*</span>
        </label>
      </div>
      <div className={styles.text}>
        <textarea name="message" id="message" cols={30} rows={2} required />
        <label htmlFor="message">
          Message <span>*</span>
        </label>
      </div>
      <div className={styles.submitContainer}>
        <div className={styles.legalContainer}>
          <p className={styles.legal}>
            <span>*</span> Champs obligatoires.
            <br />
            Pensez à consulter <a href="/legals/privacypolicy">la politique de confidentialité</a>
          </p>
        </div>
        <input type="submit" value="Envoyer" className={styles.submit} />
      </div>
    </form>
  );
}
