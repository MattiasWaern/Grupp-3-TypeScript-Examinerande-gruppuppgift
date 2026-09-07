import { useEffect, useState } from "react";
import CarList from "../Components/CarList";
import { getCars } from "../api/cars";
import type { Car } from "../types/bookingTypes";

function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars()
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error("Kunde inte hämta bilar:", error);
      });
  }, []);

  return (
    <main>
      <h1>Tillgängliga bilar</h1>

      <CarList cars={cars} />
    </main>
  );
}

export default CarsPage;