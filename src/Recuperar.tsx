import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";

const Acceso = () => {
    const [correo, setCorreo] = useState("");
   

    const onIngresar = async () => {{
            if(correo==null){
                alert("El Correo es requerido");
                }
                
                
                           

        const url = "http://localhost:4000/OlvidarContrasena";
        const response = await fetch(url,{
            method: "Post",
            body: JSON.stringify({
                CorreoNuevo: correo,
                
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if(!response.ok){
        const mensaje = await response.json();
        alert(mensaje);
    }
    else {
        alert("Acceso consedido");
    }
        
    }}

    return(
        <div className="contenedor">

        <div className="titulo">Enseña.Me LSM </div>

        <div> 
            <img src={logotipo} className="logo" />
        </div>

        <div className="agrupador-correo">
            <div>Correo Electronico</div>
        </div>
        <div>
        <input
        type="Text"
        placeholder="Ingresa tu Correo Electronico"
        className="caja-correo"
        value={correo}
        onChange={(e)=> setCorreo(e.target.value)} />
        </div>


        <div className="agrupador-boton">
            <button className="boton-ingresar" onClick={()=>onIngresar()}>Ingresar</button>
            </div>
            <a href="/Ingresar" className="link-Ingresar">Regresar</a>

            </div>
)}

 
export default Acceso