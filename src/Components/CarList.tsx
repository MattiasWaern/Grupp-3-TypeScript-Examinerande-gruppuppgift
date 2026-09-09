import type { Car } from "../types/bookingTypes";
import CarCard from "./CarCard";
import "../style/CarList.css";

type CarListProps = {
  cars: Car[];
  startDate: string;
  endDate: string;
};

function CarList({ cars, startDate, endDate }: CarListProps) {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          startDate={startDate}
          endDate={endDate}
        />
      ))}
    </div>
  );
}

export default CarList;

