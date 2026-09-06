import "../style/Home.css";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
  <>
    <Navbar />
    <section className="hero">
      <article className="hero-left">
        <h1>Hyr bilen som passar dig</h1>
        <p>Välj datum och hitta tillgängliga bilar på några sekunder!</p>
      </article>
    </section>
  </>
);
}