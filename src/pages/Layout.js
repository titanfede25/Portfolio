import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <> 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Nuestras Creaciones</Link>
          </li>
          <li>
            <Link to="/Info">Información Personal</Link>
          </li>
          <li>
            <Link to="/Info">favoritos</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            Perfil de LinkedIn
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;