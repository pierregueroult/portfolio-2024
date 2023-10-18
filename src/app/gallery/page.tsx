import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../../prisma";

export default async function Gallery() {
  const images = await prisma.gallery.findMany();

  if (!images) {
    throw new Error("Images not found");
  }

  return (
    <main>
      <ul>
        {images.map(image => {
          return (
            <li key={image.id}>
              <Link href={`/gallery/image/${image.id}`}>
                <Image
                  src={`/gallery/${image.image}`}
                  alt={image.image}
                  width={200}
                  height={200}
                  layout="responsive"
                  className={styles.image}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
