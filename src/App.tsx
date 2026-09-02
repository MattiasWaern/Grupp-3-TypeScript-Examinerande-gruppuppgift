import CarsPage from "./pages/CarsPage";
import { testCars } from "./data/testCars";

function App() {
  return <CarsPage cars={testCars} />;
}

export default App;