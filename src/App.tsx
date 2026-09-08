import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";



export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/booking" element={<BookingPage />} />
<Route path="/booking-confirmation" element={<BookingConfirmation />} />
<Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
);
}