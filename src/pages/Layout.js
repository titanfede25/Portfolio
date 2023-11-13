import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <> 
    <header style={{ position: "fixed", left: "0", top: "0", right: "0", padding: "10px" }}>
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
      <footer >
      <nav>
        <ul>
        <li>
            <Link to="/Contact">Contacto</Link>
          </li>
          <li>
          <Link to="https://www.instagram.com/fede_haus/">
        <img src="https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?pid=ImgDet&rs=1" style={{ width: "5%", height: "auto" }} className=""/>
        </Link>
        <Link to="https://www.linkedin.com/in/federico-sznajderhaus-46299724b/">
        <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" style={{ width: "5%", height: "auto" }} className=""/>
        </Link>
          </li>
         
        </ul>
      </nav>
      </footer>
    </>
  )
};

export default Layout;