import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'
export const Header = () => {
  return <header className="header">
    <Link className="link" to='/' style={{textDecoration: "none"}}>Strona główna</Link>
    <Link className="link" to='/info' style={{textDecoration: "none"}}>Informacje</Link>
  </header>
}