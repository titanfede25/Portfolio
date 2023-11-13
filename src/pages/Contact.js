import { Link } from "react-router-dom";
export default function Contact() {
    return (
      <><br></br><br></br><br></br><br></br>
        <div className="TituloForm"><br></br><br></br><br></br>
          <u>Contactate conmigo!</u>
        </div>
        
        <form >   
            <br></br><br></br>
            <input required type="text"  placeholder="Nombre"  className="u-full-width"  /><br></br><br></br>
            <input required type="text"  placeholder="Apellido"  className="u-full-width" /><br></br><br></br>
            <input type="text"  placeholder="Empresa"  className="u-full-width" /><br></br><br></br>
            <input required type="text" placeholder="Email"  className="u-full-width" />
            <br></br><br></br>
            <div className="pixel2">Enviar</div> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </form>
      </>
    );
  }