import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../style/Booking.css";

import type { Car } from "../types/bookingTypes";

type BookingPageState = {
  car: Car;
  startDate: string;
  endDate: string;
}

export default function BookingPage() {
  const [email, setEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const bookingState = location.state as BookingPageState | null;

  if (!bookingState) {
    return (
      <main>
        <h1>Ingen bokning hittades</h1>

        <button onClick={() => navigate("/")}>
          Till startsidan
        </button>
      </main>
    );
  }

const { car, startDate, endDate } = bookingState;

  const calculateDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const difference = end.getTime() - start.getTime();

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const days = calculateDays();
  const totalPrice = days * car.pricePerDay;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("sv-SE",{
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleBooking = () => {
    if (!email){
      alert("Fyll i din e-postadress");
      return;
    }

  navigate("/booking-confirmation",{
    state:{
      car,
      email,
      startDate,
      endDate,
      days,
      totalPrice,
    },
  })
}

  return (
    <main className="booking-page">
      <button 
      className="back-button"
      onClick={() => navigate(-1)}
      >
        Tillbaka till resultat
      </button>

      <h1>Boka {car.brand} {car.model}</h1>

      <section className="booking-content">
        <div className="booking-summary">
          <div className="car-summary">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="car-image"
            />

            <div className="car-info">
              <h2>{car.brand} {car.model}</h2>
              <p>{car.pricePerDay} / dag</p>
            </div>
          </div>

          <div className="booking-details">
            <div>
              <span>Startdatum</span>
              <strong>{formatDate(startDate)}</strong>
            </div>

            <div>
              <span>Slutdatum</span>
              <strong>{formatDate(endDate)}</strong>
            </div>

            <div>
              <span>Antal dagar</span>
              <strong>{days}</strong>
            </div>

            <div>
              <span>Totalt pris</span>
              <strong>{totalPrice.toLocaleString("sv-SE")} kr</strong>
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

          <button className="confirm-button"
          onClick={handleBooking}
          >
            Bekräfta bokning
          </button>
        </div>
      </section>
    </main>
  );
}