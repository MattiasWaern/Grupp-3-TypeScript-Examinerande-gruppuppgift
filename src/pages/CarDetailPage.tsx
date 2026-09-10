import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import {
  FaUsers,
  FaGear,
  FaGasPump,
  FaSnowflake,
  FaSuitcase,
  FaArrowLeft,
} from "react-icons/fa6";

import type { Car } from "../types/bookingTypes";
import { getCarById } from "../api/cars";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../style/CarDetailPage.css";

type CarDetailPageState = {
  startDate: string;
  endDate: string;
};

function CarDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [car, setCar] = useState<Car | null>(null);
  const [error, setError] = useState("");

  const bookingDates = location.state as CarDetailPageState | null;

  useEffect(() => {
    if (!id) {
      setError("Bilens id saknas.");
      return;
    }

    getCarById(id)
      .then((data) => {
        setCar(data);
      })
      .catch(() => {
        setError("Kunde inte hämta bilen.");
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!car) {
    return <p>Laddar bil...</p>;
  }

  const handleBooking = () => {
    if (!bookingDates?.startDate || !bookingDates?.endDate) {
      setError("Bokningsdatum saknas. Gå tillbaka och välj datum igen.");
      return;
    }

    navigate("/booking", {
      state: {
        car,
        startDate: bookingDates.startDate,
        endDate: bookingDates.endDate,
      },
    });
  };

  return (
    <>
      <Navbar />

      <main className="car-detail-page">
        <button
          className="car-detail-back"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          Tillbaka till resultat
        </button>

        <section className="car-detail">
          <div className="car-detail-left">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="car-detail-image"
            />

            <div className="car-detail-description">
              <h3>Om bilen</h3>
              <p>{car.description}</p>
            </div>
          </div>

          <div className="car-detail-info">
            <h1>
              {car.brand} {car.model}
            </h1>

            <div className="car-detail-features">
              <p>
                <FaUsers />
                {car.seats} platser
              </p>

              <p>
                <FaGear />
                {car.transmission}
              </p>

              <p>
                <FaGasPump />
                {car.fuelType}
              </p>

              <p>
                <FaSnowflake />
                {car.airConditioning ? "AC" : "Ingen AC"}
              </p>

              <p>
                <FaSuitcase />
                Bagageutrymme: {car.luggageCapacity} L
              </p>
            </div>

            <p className="car-detail-price">
              <span>{car.pricePerDay} kr</span> / dag
            </p>

            <button
              className="car-detail-book-button"
              onClick={handleBooking}
            >
              Gå vidare och boka
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CarDetailPage;

