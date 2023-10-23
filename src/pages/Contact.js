export default function Contact() {
    return (
      <>
        <div className="TituloForm">
        <u>Contactate con nosotros!</u>  
        </div>
        
        <form >   
            <br></br><br></br>
            <input required type="text"  placeholder="Nombre"  className="u-full-width"  /><br></br><br></br>
            <input required type="text"  placeholder="Apellido"  className="u-full-width" /><br></br><br></br>
            <input type="text"  placeholder="Empresa"  className="u-full-width" /><br></br><br></br>
            <input required type="text" placeholder="Email"  className="u-full-width" />
            <br></br><br></br>
            <div className="pixel2">Enviar</div>     
        </form>
      </>
    );
  }