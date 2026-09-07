import "../style/Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  const today = new Date().toISOString().split("T")[0];
  
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 5);
  const defaultEnd = futureDate.toISOString().split("T")[0];

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
                defaultValue={today}
                className="search-input"
              />
            </label>
            <label className="search-label">
              Slutdatum
              <input
                type="date"
                defaultValue={defaultEnd}
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