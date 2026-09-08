import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../style/Booking.css";

import type { Car } from "../types/bookingTypes";
import { getBookingsByCarId, createBooking } from "../api/bookings";
import { hasOverlap } from "../utils/bookingValidation";
type BookingPageState = {
  car: Car;
  startDate: string;
  endDate: string;
}

export default function BookingPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleBooking = async () => {
    if (!email){
      alert("Fyll i din e-postadress");
      return;
    }

    setIsSubmitting(true);

    try {
      const existingBookings = await getBookingsByCarId(car.id);

      if (hasOverlap(existingBookings, startDate, endDate)) {
        setError("Bilen är redan bokad under den här perioden, välj andra datum.");
        return;
      }


       await createBooking({
        carId: car.id,
        customerName: "",
        email,
        startDate,
        endDate,
        status: "confirmed",
      });

      navigate("/booking-confirmation", {
        state: {
          car,
          email,
          startDate,
          endDate,
          days,
          totalPrice,
        },
       });
    }
    catch (error) {
      setError("Något gick fel när bokningen skulle skapas, försök igen.");
    } finally {
      setIsSubmitting(false);
    
    }
  };
}