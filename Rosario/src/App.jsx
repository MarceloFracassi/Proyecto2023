import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InitialPage from "./components/InitialPage/InitialPage";
import Home from "./components/Home/Home";
import History from "./components/History/History";
import Hospedaje from "./components/Hospedaje/Hospedaje";
import Estudiantes from "./components/Estudiantes/Estudiantes";
import Arquitectura from "./components/Actividades/Arquitectura/Arquitectura";
import Tours from "./components/Actividades/Tours/Tours";
import Cultural from "./components/Actividades/Cultural/Cultural";
import Deportivo from "./components/Actividades/Deportivo/Deportivo";
import Movilidad from "./components/Actividades/Movilidad/Movilidad";

function App() {
  ///me faltaria el h1 Porfolio de joe

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<InitialPage />} />
          <Route path="/Historia" element={<History />} />
          <Route path="/Hospedaje" element={<Hospedaje />} />
          <Route path="/Estudiantes" element={<Estudiantes />} />
          <Route path="/Arquitectura" element={<Arquitectura />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Cultural" element={<Cultural />} />
          <Route path="/Deportivo" element={<Deportivo/>} />
          <Route path="/Movilidad" element={<Movilidad />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
