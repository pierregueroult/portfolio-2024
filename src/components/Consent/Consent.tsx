"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "../Analytics/Analytics";
import ConsentForm from "../ConsentForm/ConsentForm";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ConsentObject } from "@/types/ConsentObject";

export default function Consent(): JSX.Element {
  const [consent, setConsent] = useState<ConsentObject>({
    vercel: false,
    google: false,
    speedinsight: false,
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

  const handleChange = ({ vercel, google, speedinsight }: ConsentObject) => {
    localStorage.setItem("consent", JSON.stringify({ vercel, google, speedinsight }));
    setConsent({ vercel, google, speedinsight });
    setHasChosen(true);
  };

  const handleForm = ({ vercel, google, speedinsight }: ConsentObject) => {
    localStorage.setItem("consent", JSON.stringify({ vercel, google, speedinsight }));
    setConsent({ vercel, google, speedinsight });
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
          {consent.speedinsight && <SpeedInsights />}
        </>
      )}
    </>
  );
}
