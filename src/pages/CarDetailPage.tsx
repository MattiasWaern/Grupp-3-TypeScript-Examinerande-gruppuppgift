import { useEffect, useState } from "react";
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

function CarDetailPage() {
  const [car, setCar] = useState<Car | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getCarById("1")
      .then((data) => {
        setCar(data);
      })
      .catch(() => {
        setError("Kunde inte hämta bilen.");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!car) {
    return <p>Laddar bil...</p>;
  }

  return (
    <>
      <Navbar />

      <main className="car-detail-page">
        <button className="car-detail-back">
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

            <button className="car-detail-book-button">
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