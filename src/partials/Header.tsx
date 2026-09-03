import React from "react";
import {  FaCar, FaRegEnvelope, FaRegUser, FaBeer } from "react-icons/fa";
import "./Header.css";


class Question extends React.Component {
  render() {
    return <h3>lets go for a <FaBeer />? </h3>;
  }
}
export default function Header() {
  return (
    <header className="header">
      <FaCar className="logoCar"/>
      <h1 className="logo">Hyrbil</h1>

      <nav>
        <a href="#">Hem </a>
        <a href="#">Bilar </a>
        <a href="#">Om oss </a>
        <a href="#">Kontakt</a>
      </nav>

      <FaRegEnvelope className="envelope"/>
      <FaRegUser className="user"/>
        

    </header>
  )
}