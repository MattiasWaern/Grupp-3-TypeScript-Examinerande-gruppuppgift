import CarList from "../Components/CarList";
import type { Car } from "../types/bookingTypes";

type CarsPageProps = {
  cars: Car[];
};

function CarsPage({ cars }: CarsPageProps) {
  return (
    <main>
      <h1>Tillgängliga bilar</h1>

      <CarList cars={cars} />
    </main>
  );
}

export default CarsPage;