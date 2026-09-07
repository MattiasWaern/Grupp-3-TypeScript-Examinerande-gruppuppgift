import "../style/Navbar.css";


import { FaCar, FaEnvelope, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (

    <nav className="navbar">

      <span className="navbar-logo">
        <FaCar /> GoRide
      </span>


      <ul className="navbar-links">
        <li>Hem</li>
        <li>Mina bokningar</li>
        <li>Om oss</li>
      </ul>
      <span className="navbar-icons">
        <FaEnvelope />
        <FaUser />
      </span>
    </nav>
  );
}
