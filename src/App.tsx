import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}