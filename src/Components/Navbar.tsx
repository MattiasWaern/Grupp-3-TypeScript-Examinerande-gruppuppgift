import "../style/Navbar.css";
import { Link } from "react-router";
import { FaCar, FaEnvelope, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (

    <nav className="navbar">
      
      <Link to="/" className="navbar-logo">
        <FaCar />
        <span>GoRide</span>
      </Link>


      <ul className="navbar-links">
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/bookings">Mina bokningar</Link></li>
        <li><Link to="/about">Om oss</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
      <span className="navbar-icons">
        <FaEnvelope />
        <FaUser />
      </span>
    </nav>
  );
}
