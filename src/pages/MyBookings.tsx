import { useState } from "react";
import { getBookingsByEmail, cancelBooking } from "../api/bookings";
import type { Booking } from "../types/bookingTypes";
import { formatDate } from "../utils/formatDate";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MinaSidor() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Du måste ange en e-postadress.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const result = await getBookingsByEmail(email);
      setBookings(result);
      setHasSearched(true);
    } catch (err) {
      setError("Något gick fel när bokningarna skulle hämtas, försök igen.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await cancelBooking(id);
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id ? { ...booking, status: "cancelled" } : booking
        )
      );
    } catch (err) {
      setError("Kunde inte avboka just nu, försök igen.");
    }
  };

  return (
  <>
 <Navbar/>
    <main>
      <h1>Mina sidor</h1>

      <form onSubmit={handleSearch}>
        <label htmlFor="email">Din e-postadress</label>
        <input
          id="email"
          type="email"
          placeholder="namn@exempel.se"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Hämtar..." : "Visa mina bokningar"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {hasSearched && bookings.length === 0 && !error && (
        <p>Inga bokningar hittades för den här e-postadressen.</p>
      )}

      {bookings.length > 0 && (
        <ul className="bookings-list">
          {bookings.map((booking) => (
            <li key={booking.id} className="booking-item">
              <div>
                <span>Startdatum</span>
                <strong>{formatDate(booking.startDate)}</strong>
              </div>

              <div>
                <span>Slutdatum</span>
                <strong>{formatDate(booking.endDate)}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {booking.status === "confirmed" ? "Bekräftad" : "Avbokad"}
                </strong>
              </div>

              {booking.status === "confirmed" && (
                <button onClick={() => handleCancel(booking.id)}>
                  Avboka
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
    <Footer/>
 </>
  );
}