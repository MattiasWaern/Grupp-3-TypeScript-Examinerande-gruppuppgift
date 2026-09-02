import { useState } from "react";
import "../style/Booking.css";

export default function BookingPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="booking-page">
      <button className="back-button">
        Tillbaka till resultat
      </button>

      <h1>Boka Volvo XC40</h1>

      <section className="booking-content">
        <div className="booking-summary">
          <div className="car-summary">
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935"
              alt="Volvo XC40"
              className="car-image"
            />

            <div className="car-info">
              <h2>Volvo XC40</h2>
              <p>700 kr / dag</p>
            </div>
          </div>

          <div className="booking-details">
            <div>
              <span>Startdatum</span>
              <strong>10 september 2026</strong>
            </div>

            <div>
              <span>Slutdatum</span>
              <strong>15 september 2026</strong>
            </div>

            <div>
              <span>Antal dagar</span>
              <strong>5</strong>
            </div>

            <div>
              <span>Totalt pris</span>
              <strong>3 500 kr</strong>
            </div>
          </div>
        </div>

        <div className="booking-form-container">
          <label htmlFor="email">
            Din e-postadress
          </label>

          <input
            id="email"
            type="email"
            placeholder="namn@exempel.se"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <p className="email-description">
            Vi skickar bokningsbekräftelsen till denna e-post
          </p>

          <div className="information-box">
            <strong>Viktig information</strong>

            <p>
              Fri avbokning fram till 24 timmar innan bokningsstart.
            </p>
          </div>

          <button className="confirm-button">
            Bekräfta bokning
          </button>
        </div>
      </section>
    </main>
  );
}