import "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-links">
      <nav className="app-nav">
        <h1 className="app-title">TKH Planets</h1>
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/randomPlanet">Random Planet</NavLink>
        </li>
      </nav>
    </header>
  );
}
