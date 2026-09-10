import { FaCar, FaEnvelope, FaPhone } from "react-icons/fa";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>
            <FaCar />
            GoRide
          </h2>
          <p>
            Enkel och trygg biluthyrning för alla tillfällen. Vi har flera olika bilar att välja på som passar din stil och smak!
          </p>
        </div>

        <div className="footer-section">
          <h3>Snabblänkar</h3>
          <ul>
            <li>Hem</li>
            <li>Våra bilar</li>
            <li>Mina bokningar</li>
            <li>Om oss</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kontakt</h3>

          <p>
            <FaEnvelope />
            info@go-ride.se
          </p>

          <p>
            <FaPhone />
            010-123 45 67
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 GoRide. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}