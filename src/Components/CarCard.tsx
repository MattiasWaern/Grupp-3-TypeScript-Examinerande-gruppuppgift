import type { Car } from "../types/bookingTypes";
import "./CarCard.css";

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

        <p>
          {car.seats} platser · {car.transmission}
        </p>

        <p>{car.pricePerDay} kr / dag</p>

        <button>Visa detaljer</button>
      </div>
    </article>
  );
}

export default CarCard;