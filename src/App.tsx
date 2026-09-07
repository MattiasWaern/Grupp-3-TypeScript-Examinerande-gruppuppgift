import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import BookingConfirmation from "./pages/BookingConfirmation";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/booking"
        element={<BookingPage />}
      />

      <Route
        path="/booking-confirmation"
        element={<BookingConfirmation />}
      />
    </Routes>
  );
}

export default App;