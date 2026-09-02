import type { Car } from "../types/bookingTypes";
import CarCard from "./CarCard";
import "./CarList.css";

type CarListProps = {
  cars: Car[];
};

function CarList({ cars }: CarListProps) {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;