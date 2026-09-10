import { useLocation, useNavigate } from "react-router";
import "../style/BookingConfirmation.css";
import type { BookingDates, Car } from "../types/bookingTypes";
import { formatDate } from "../utils/formatDate";

type ConfirmationState = {
  car: Car;
  email: string;
  days: number;
  totalPrice: number;
} & BookingDates;


export default function BookingConfirmation (){
  const location = useLocation();
  const navigate = useNavigate();

  const confirmationState =
    location.state as ConfirmationState | null;

  if (!confirmationState) {
    return (
      <main>
        <h1>Ingen bokning hittades</h1>

        <button onClick={() => navigate("/")}>
          Till startsidan
        </button>
      </main>
    );
  }

  const {
    car,
    email,
    startDate,
    endDate,
    days,
    totalPrice,
  } = confirmationState;

  return (
    <main className="confirmation-page">
      <div className="confirmation-icon">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1>Din bokning är genomförd!</h1>

      <p className="confirmation-subtitle">
        Tack! Vi har skickat en bekräftelse till <strong>{email}</strong>
      </p>

      <div className="confirmation-summary">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="confirmation-car-image"
        />

        <div className="confirmation-details">
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
            <strong>{days} dagar</strong>
          </div>

          <div>
            <span>Totalt pris</span>
            <strong>{totalPrice.toLocaleString("sv-SE")} kr</strong>
          </div>
        </div>
      </div>

      <div className="confirmation-actions">
        <button className="btn-outline"
        onClick={() => navigate("/")}
        >
        Till startsidan</button>

        <button className="btn-filled"
        onClick={() => navigate("/bookings")}
        >
        Mina bokningar</button>
      </div>
    </main>
  );
}