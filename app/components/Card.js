import styles from "./Card.module.css";
import Image from "next/image";
import LikeButton from "./LikeButton";
export default function Card({ name, blurb, rating, emoji, focus, images }) {
  return (
    <article className={styles.card}>
      {images ? (
        <Image src={images} alt={name} width={240} height={285} />
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p>{focus}</p>

      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      <LikeButton />
    </article>
  );
}
