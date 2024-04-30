import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-underline" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "nav-underline" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
