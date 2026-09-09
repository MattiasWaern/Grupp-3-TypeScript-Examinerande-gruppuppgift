import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CarsPage from "./pages/CarsPage";
import CarDetailPage from "./pages/CarDetailPage";
import BookingPage from "./pages/BookingPage";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cars", element: <CarsPage /> },
  { path: "/cars/:id", element: <CarDetailPage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/booking-confirmation", element: <BookingConfirmation /> },
  { path: "/about", element: <About /> },
]);

export default router;
