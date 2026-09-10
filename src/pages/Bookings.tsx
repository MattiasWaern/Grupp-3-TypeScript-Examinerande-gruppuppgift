import { useState } from "react";
import { getBookingsByEmail, cancelBooking } from "../api/bookings";
import type { Booking } from "../types/bookingTypes";
import { formatDate } from "../utils/formatDate";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../style/MyBookings.css";

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
          booking.id === id
            ? { ...booking, status: "cancelled" }
            : booking
        )
      );
    } catch (err) {
      setError("Kunde inte avboka just nu, försök igen.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="my-bookings">
        <h1 className="my-bookings-title">Mina sidor</h1>

        <form className="my-bookings-form" onSubmit={handleSearch}>
          <label className="my-bookings-label" htmlFor="email">
            Din e-postadress
          </label>

          <input
            className="my-bookings-input"
            id="email"
            type="email"
            placeholder="namn@exempel.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="my-bookings-search-button"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Hämtar..." : "Visa mina bokningar"}
          </button>
        </form>

        {error && (
          <p className="my-bookings-error">
            {error}
          </p>
        )}

        {hasSearched && bookings.length === 0 && !error && (
          <p className="my-bookings-empty">
            Inga bokningar hittades för den här e-postadressen.
          </p>
        )}

        {bookings.length > 0 && (
          <ul className="my-bookings-list">
            {bookings.map((booking) => (
              <li
                key={booking.id}
                className="my-bookings-item"
              >
                <div className="my-bookings-info">
                  <span className="my-bookings-label">
                    Startdatum
                  </span>

                  <strong className="my-bookings__value">
                    {formatDate(booking.startDate)}
                  </strong>
                </div>

                <div className="my-bookings-info">
                  <span className="my-bookings-label">
                    Slutdatum
                  </span>

                  <strong className="my-bookings-value">
                    {formatDate(booking.endDate)}
                  </strong>
                </div>

                <div className="my-bookings-info">
                  <span className="my-bookings-label">
                    Status
                  </span>

                  <strong
                    className={`my-bookings-status ${
                      booking.status === "confirmed"
                        ? "my-bookings-status-confirmed"
                        : "my-bookings-status-cancelled"
                    }`}
                  >
                    {booking.status === "confirmed"
                      ? "Bekräftad"
                      : "Avbokad"}
                  </strong>
                </div>

                {booking.status === "confirmed" && (
                  <button
                    className="my-bookings-cancel-button"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Avboka
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </>
  );
}