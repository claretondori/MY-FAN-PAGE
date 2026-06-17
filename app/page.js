import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
export default function Home() {
  return (
    <main>
      <Hero
        title="The Jonasi Drama Club"
        tagline="We Hate Jonasi Gomora Club 🖤🚮Just a fan page entirely obsessed with
        the chaos of The Polygamist!🎬 Triggers, drama, and daily rants about
        Jonasi's lies.👇 Choose a side: Joyce, Matipa, Essie, or Lindani!"
      />
      <CardGrid items={items} />
    </main>
  );
}
