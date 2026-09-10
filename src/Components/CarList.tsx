import type { Car } from "../types/bookingTypes";
import CarCard from "./CarCard";
import "../style/CarList.css";
import GenericList from "./GenericsList";

type CarListProps = {
  cars: Car[];
  startDate: string;
  endDate: string;
};

function CarList({ cars, startDate, endDate }: CarListProps) {
  return (
    <GenericList
      items={cars}
      renderItem={(car) => (
        <CarCard
          car={car}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    />
  );
}

export default CarList;
