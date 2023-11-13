import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <> 
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Federico Sznajderhaus</Link>
          </li>
          <li>
            <Link to="/Creations">Mis Creaciones</Link>
          </li>
          <li>
            <Link to="/Info">Información Personal</Link>
          </li>
          <li>
            <Link to="/Favorite">favoritos</Link>
          </li>
        </ul>
      </nav>
      </header>
      
      <Outlet />
      <footer>
      <nav>
        <ul>
        <li>
            <Link to="/Contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      </footer>
    </>
  )
};

export default Layout;