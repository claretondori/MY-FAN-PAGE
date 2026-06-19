import Card from "./Card";
import styles from "./CardGrid.module.css";
import Link from "next/link";

export default function CardGrid({ items }) {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <Link href={`/faves/${item.id}`} key={item.id}>
          <Card
            name={item.name}
            blurb={item.blurb}
            rating={item.rating}
            emoji={item.emoji}
            images={item.images}
            focus={item.focus}
          />
        </Link>
      ))}
    </div>
  );
}
