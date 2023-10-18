import styles from "./page.module.scss";
import getImageData from "@/contents/getImageData";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";
import ModalButton from "@/components/Button/CloseModalButton";
import Table from "@/components/Table/Table";

interface ImageProps {
  params: {
    id: string;
  };
}

export default async function ImageModal({ params: { id } }: ImageProps) {
  const image = await getImageData(id);

  if (!image) {
    throw new Error("Image not found");
  }

  return (
    <Modal>
      <article className={styles.container}>
        <figure className={styles.figure}>
          <Image
            src={`/gallery/${image.image}`}
            alt={image.image}
            width={200}
            height={200}
            className={styles.image}
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
            text="Voir en pleine résolution"
            href={`/gallery/${image.image}`}
            variant="success"
            size="medium"
            blank={true}
          />
          <ModalButton text="Fermer" variant="danger" size="medium" />
        </aside>
      </article>
    </Modal>
  );
}
