import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CarsPage from "./pages/CarsPage";
import CarDetailPage from "./pages/CarDetailPage";
import BookingPage from "./pages/BookingPage";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyBookings from "./pages/Bookings";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cars", element: <CarsPage /> },
  { path: "/cars/:id", element: <CarDetailPage /> },
  { path: "/bookings", element: <MyBookings/> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/booking-confirmation", element: <BookingConfirmation /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
