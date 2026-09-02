import type { Car } from "../types/bookingTypes";
import "./CarCard.css";
import { FaUserGroup, FaGear } from "react-icons/fa6";

type CarCardProps = {
  car: Car;
};

function CarCard({ car }: CarCardProps) {
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
          <span className="car-card__price-period"> / dag</span>
        </p>

        <button>Visa detaljer</button>
      </div>
    </article>
  );
}

export default CarCard;