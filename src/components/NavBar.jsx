import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MiEcommerce</Link>

      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/category/gaming">Gaming</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/oficina">Oficina</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
