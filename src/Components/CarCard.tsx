import type { Car } from "../types/bookingTypes";

type CarCardProps = {
  car: Car;
};

function CarCard({ car }: CarCardProps) {
  return (
    <article className="car-card">
      <div className="car-card__content">
        <h2>
          {car.brand} {car.model}
        </h2>

        <p>Årsmodell: {car.year}</p>
        <p>{car.pricePerDay} kr/dag</p>

        <p>
          {car.available ? "Tillgänglig" : "Inte tillgänglig"}
        </p>

        <button>Visa detaljer</button>
      </div>
    </article>
  );
}

export default CarCard;