import { useState } from "react";
import { useNavigate } from "react-router";
import "../style/Home.css";


export default function Home() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setError("Du måste välja både startdatum och slutdatum.");
      return;
    }

    if (endDate < startDate) {
      setError("Slutdatum kan inte vara före startdatum.");
      return;
    }

    setError("");
    navigate(`/cars?start=${startDate}&end=${endDate}`);
  };

  return (
    <>
      
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
                            {error && <p className="error-message">{error}</p>}
              <button type="submit" className="search-button">
                Sök lediga bilar
              </button>
            </form>
          </div>
        </div>
      </main>
     
    </>
  );
}