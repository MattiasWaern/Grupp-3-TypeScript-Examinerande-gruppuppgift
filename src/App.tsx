import CarCard from "../src/Components/CarCard";

import type { Car } from "./types/bookingTypes";

const testCar: Car = {
  id: "1",
  brand: "Volvo",
  model: "XC40",
  year: 2024,
  pricePerDay: 700,
  available: true,
  description: "En bekväm och säker SUV.",
  image: "/image/Volvo XC40.png",
  seats: 5,
  transmission: "Automat",
  fuelType: "Bensin",
  airConditioning: true,
  luggageCapacity: 460,
};

function App() {
  return (
    <>
      <h1>Välkommen till våran fina app :D</h1>

      <CarCard car={testCar} />
    </>
  );
}

export default App;