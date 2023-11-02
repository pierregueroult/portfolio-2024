// styles
import styles from "./page.module.scss";
// contents
import getImageData from "@/contents/getImageData";
// components
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";
import ModalButton from "@/components/Button/CloseModalButton";
import Table from "@/components/Table/Table";
// types
import { Photo } from "@prisma/client";

interface ImageProps {
  params: {
    id: string;
  };
}

export default async function ImageModal({ params: { id } }: ImageProps) {
  // récupération des données de l'image
  const image: Photo | null = await getImageData(id);

  // gestion d'erreur
  if (!image) throw new Error("Image not found");

  return (
    <Modal>
      <article className={styles.container}>
        <figure className={styles.figure}>
          <Image
            src={`/gallery/${image.imagePath}`}
            alt={image.title}
            width={1200}
            height={1500}
            className={styles.image}
            quality={100}
          />
        </figure>
        <aside className={styles.aside}>
          <Table
            title="Informations"
            head={{ info: "Info", value: "Valeur" }}
            data={[
              {
                info: "Appareil",
                value: image.device,
              },
              {
                info: "Exposition",
                value: image.exposure,
              },
              {
                info: "Vitesse d'obturation",
                value: image.shutterSpeed,
              },
              {
                info: "Ouverture",
                value: image.aperture,
              },
              {
                info: "ISO",
                value: image.iso,
              },
            ]}
          />

          <Button
            text="Pleine résolution"
            href={`/gallery/${image.imagePath}`}
            variant="success"
            size="medium"
            blank={true}
            icon={
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
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          />
          <ModalButton text="Fermer" variant="danger" size="medium" />
        </aside>
      </article>
    </Modal>
  );
}
