import { Link } from "react-router-dom";
export default function Contact() {
    return (
      <>
        <div className="TituloForm">
          <u>Contactate conmigo!</u>
        </div>
        
        <form >   
            <br></br><br></br>
            <input required type="text"  placeholder="Nombre"  className="u-full-width"  /><br></br><br></br>
            <input required type="text"  placeholder="Apellido"  className="u-full-width" /><br></br><br></br>
            <input type="text"  placeholder="Empresa"  className="u-full-width" /><br></br><br></br>
            <input required type="text" placeholder="Email"  className="u-full-width" />
            <br></br><br></br>
            <div className="pixel2">Enviar</div> <br></br><br></br>
        </form>

        <Link to="https://www.linkedin.com/in/federico-sznajderhaus-46299724b/"><div className="TituloForm">
        <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" className=""/>
        </div></Link>
      </>
    );
  }