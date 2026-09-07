import "../style/Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <article className="hero-left">
          <h1>Hyr bilen som passar dig</h1>
          <p>Välj datum och hitta tillgängliga bilar på några sekunder!</p>

          <form className="search-form">
           <label className="search-label">
              Startdatum
              <input
                type="date"
                defaultValue="2026-09-10"
                className="search-input"
              />
            </label>
            <label className="search-label">
              Slutdatum
              <input
                type="date"
                defaultValue="2026-09-15"
                className="search-input"
              />
            </label>
            <button type="submit" className="search-button">
              Sök lediga bilar
            </button>
          </form>
        </article>
      </section>
      <Footer />
    </>
  );
}