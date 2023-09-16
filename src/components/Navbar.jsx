import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Usuarios</NavLink>
        </li>
        <li>
          <NavLink to="/crear">Crear Usuario</NavLink>
        </li>
        <li>
          <NavLink to="/form">Completar formulario</NavLink>
        </li>
      </ul>
    </nav>
  );
}
