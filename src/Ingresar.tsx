import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";

const Ingresar = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword ] = useState("");


    const onIngresar = async () => {{
           if(correo==null){
               alert("El Correo es requerido");
               }
               if(password==null){
                   alert("La contraseña es requerida");
                   }
       const url = "http://localhost:4000/Ingresar";
       const response = await fetch(url,{
           method: "Post",
           body: JSON.stringify({
               Correo: correo,
               Contrasena: password
       }),
       headers: {
           "Content-Type": "application/json"
       }
   });
   
   if(response.ok){
    navigate("/categorias");
 }else{
     const error= await response.text();
     alert (error);
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
      
      
      <div className="agrupador-password">
        <div>Contraseña</div>
        <div>
            <input
            type="password"
            placeholder="Password"
            className="caja-password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            </div>
        </div>

        <div className="agrupador-boton">
            <button className="boton-ingresar" onClick={()=>onIngresar()}>Ingresar</button>
            </div>

            <div className="otros-botones">
                <a href="/registro" className="link-registro">Registrarse</a>
                <a href="/OlvidarContrasena" className="link-password">Olvide mi contrseña</a>
                </div>
                
                </div>
    )
}
 
export default Ingresar