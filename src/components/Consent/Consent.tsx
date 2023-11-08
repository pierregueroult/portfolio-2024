"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import GoogleAnalytics from "../Analytics/Analytics";
import ConsentForm from "../ConsentForm/ConsentForm";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ConsentObject } from "@/types/ConsentObject";

export default function Consent(): JSX.Element {
  const [consent, setConsent] = useState<ConsentObject>({
    vercel: false,
    google: false,
  });
  const [hasChosen, setHasChosen] = useState<boolean | null>(null);

  useEffect(() => {
    const consentStorage = localStorage.getItem("consent");
    if (consentStorage) {
      setConsent(JSON.parse(consentStorage) as ConsentObject);
      setHasChosen(true);
    } else {
      setHasChosen(false);
    }
  }, []);

  const handleChange = ({ vercel, google }: ConsentObject) => {
    localStorage.setItem("consent", JSON.stringify({ vercel, google }));
    setConsent({ vercel, google });
    setHasChosen(true);
  };

  const handleForm = ({ vercel, google }: ConsentObject) => {
    localStorage.setItem("consent", JSON.stringify({ vercel, google }));
    setConsent({ vercel, google });
    setHasChosen(true);
  };

  return (
    <>
      <AnimatePresence>
        {hasChosen === false && <ConsentForm handleChange={handleChange} handleForm={handleForm} />}
      </AnimatePresence>
      {hasChosen === true && (
        <>
          {consent.vercel && <VercelAnalytics />}
          {consent.google && <GoogleAnalytics />}
        </>
      )}
    </>
  );
}
