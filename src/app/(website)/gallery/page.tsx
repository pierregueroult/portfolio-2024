import getImagesData from "@/contents/getImagesData";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

export default async function Gallery() {
  var photos = await getImagesData();

  if (!photos) return <div>Chargement...</div>;

  photos = [...photos, ...photos, ...photos, ...photos, ...photos, ...photos, ...photos];

  return (
    <main>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>
          Gallerie
          <br />
          <span>photographies</span>
        </h1>
        <p className={styles.text}>
          La photographie c&apos;est pas trop mon truc, mais des fois j&apos;aime bien mettre mes
          photos ici !
        </p>
        <ul className={styles.imageContainer}>
          {photos.map(photo => (
            <li key={photo.id} className={styles.imageContainerItem}>
              <Link href={`/gallery/image/${photo.id}`} className={styles.link}>
                <Image
                  src={photo.imagePath}
                  alt={photo.title}
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
