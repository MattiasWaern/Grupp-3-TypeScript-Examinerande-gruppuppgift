import CarCard from "../src/Components/CarCard";

const testCar = {
  id: "1",
  brand: "Volvo",
  model: "XC40",
  year: 2024,
  pricePerDay: 699,
  available: true,
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