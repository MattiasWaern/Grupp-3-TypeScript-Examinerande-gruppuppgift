import { useState } from "react";
import "../src/style/Booking.css";


export default function BookingPage(){
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
                <p>700kr / dag</p>
              </div>
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
            <span>Total pris</span>
            <strong>3 500 kr</strong>
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
          onChange={((event) => setEmail(event.target.value))}
          />

          <p className="email-description">
            Vi skickar bokningsbekräftelse till deaa e-post
          </p>

          <div className="information-box">
            <strong>Viktig information</strong>

            <p>
              Fri avbokning fram till 24h innan bokning
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