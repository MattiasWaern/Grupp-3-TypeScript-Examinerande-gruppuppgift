import type { Car } from "../types/bookingTypes";
import "../style/CarCard.css";
import { FaUserGroup, FaGear } from "react-icons/fa6";
import { Link } from "react-router";

type CarCardProps = {
  car: Car;
  startDate: string;
  endDate: string;
};

function CarCard({ car, startDate, endDate }: CarCardProps) {
  return (
    <article className="car-card">
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        className="car-card__image"
      />

      <div className="car-card__content">
        <h2>
          {car.brand} {car.model}
        </h2>

        <p className="car-card__meta">
          <span>
            <FaUserGroup />
            {car.seats} platser
          </span>

          <span>
            <FaGear />
            {car.transmission}
          </span>
        </p>

        <p className="car-card__price">
          <span className="car-card__price-amount">
            {car.pricePerDay} kr
          </span>

          <span className="car-card__price-period">
            {" / dag"}
          </span>
        </p>

        <Link
          to={`/cars/${car.id}`}
          state={{
            startDate,
            endDate,
          }}
        >
          <button>Visa detaljer</button>
        </Link>
      </div>
    </article>
  );
}

export default CarCard;

