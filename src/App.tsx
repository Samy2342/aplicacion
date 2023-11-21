import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registro from "./Registro"
import Recuperar from "./Recuperar"
import Categorias from "./Categorias";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Ingresar from "./Ingresar";
import Senias from "./Senias";
import ResultadoBuscar from "./ResultadoBuscar";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/Ingresar"element={<Ingresar/>}/>
      <Route path= "/registro"element={<Registro/>}/>
      <Route path= "/OlvidarContrasena"element={<Recuperar />}/>
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/lenguaje/:idCategoria"element={<Senias />}/>
      <Route path="/buscar" element={<ResultadoBuscar />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App