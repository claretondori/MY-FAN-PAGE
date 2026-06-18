import styles from "./Card.module.css";
import Image from "next/image";
import LikeButton from "./LikeButton";

export default function Card({ name, blurb, rating, emoji, focus, images }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {images ? (
          <Image
            src={images}
            alt={name}
            fill
            className={styles.cardImage}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        ) : (
          <div className={styles.emoji}>{emoji}</div>
        )}
      </div>

      <div className={styles.cardContent}>
        <span className={styles.tag}>{focus}</span>

        <h2 className={styles.title}>{name}</h2>
        <p className={styles.blurb}>{blurb}</p>

        <div className={styles.footer}>
          <p className={styles.rating}>
            {"⭐".repeat(rating)} {emoji}
          </p>
          <LikeButton />
        </div>
      </div>
    </article>
  );
}
