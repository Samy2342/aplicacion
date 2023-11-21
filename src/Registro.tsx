import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";

const Registrar = () => {

const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword ] = useState("");
    const [nombre, setNombre] = useState("");
    const onIngresar = async () => {{
         if(nombre==""){
            alert("El Nombre es requerido");
            }
            if(correo==""){
                alert("El Correo es requerido");
                }
                if(password==""){
                    alert("La contraseña es requerido");
                    }
                
                           

        const url = "http://localhost:4000/Registro/registrarse";
        const response = await fetch(url,{
            method: "Post",
            body: JSON.stringify({
                Nombre: nombre,
                CorreoNuevo: correo,
                ContraseñaNueva: password
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
        alert("Usuario registrado correctamente");
        navigate ("/");
    }
}}
        

    return(
        <div className="contenedor">

        <div className="titulo">Enseña.Me LSM </div>

        <div> 
            <img src={logotipo} className="logo" />
        </div>


        <div className="agrupador-Nombre"> 
           <div>Nombre</div>
        <div>
            <input 
            type="text"
            placeholder="Ingresa tu nombre"
            className="caja-nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}/>
            </div>
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
            <button className="boton-Registrarse" onClick={()=>onIngresar()}>Registrarse</button>
            </div>
            

            <div className="otros-botones">
                </div>
                <a href="/Ingresar" className="link-Ingresar">Regresar</a>

                </div>
    )
}
 
export default Registrar