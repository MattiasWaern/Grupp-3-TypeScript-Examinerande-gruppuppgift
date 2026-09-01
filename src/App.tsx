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

        
      </section>
    </main>
  );
}