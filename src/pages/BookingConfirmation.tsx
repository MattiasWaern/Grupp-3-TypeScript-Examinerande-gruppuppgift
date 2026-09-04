import "../style/BookingConfirmation.css";

type BookingConfirmationProps = {
  email: string;
  startDate: string;
  endDate: string;
  days: number;
  totalPrice: number;
};

export default function BookingConfirmation({
  email = "namn@exempel.se",
  startDate = "10 september 2026",
  endDate = "15 september 2026",
  days = 5,
  totalPrice = 3500,
}: Partial<BookingConfirmationProps>) {
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
          src="https://images.unsplash.com/photo-1563720223185-11003d516935"
          alt="Volvo XC40"
          className="confirmation-car-image"
        />

        <div className="confirmation-details">
          <div>
            <span>Startdatum</span>
            <strong>{startDate}</strong>
          </div>

          <div>
            <span>Slutdatum</span>
            <strong>{endDate}</strong>
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
        <button className="btn-outline">Till startsidan</button>
        <button className="btn-filled">Mina bokningar</button>
      </div>
    </main>
  );
}