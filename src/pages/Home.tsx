import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/booking?start=${startDate}&end=${endDate}`);
  };

  return (
    <>
      <Navbar />
      <main className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hyr bilen som passar dig</h1>
            <p>Välj datum och hitta tillgängliga bilar direkt!</p>
          </div>

          <div className="search-card">
            <form onSubmit={handleSearch} className="search-form">
              <label className="search-label">
                Startdatum
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="search-input"
                />
              </label>
              <label className="search-label">
                Slutdatum
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="search-input"
                />
              </label>
              <button type="submit" className="search-button">
                Sök lediga bilar
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}