import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Mapa from "./Pages/Mapa";
import Anuncio from "./Pages/Anuncio";
import Grupo from "./Pages/Grupo";
import Bar from "./components/Bar";
import Menu from "./Pages/Menu";
import Alerta from "./Pages/Alerta";
import DetalleEvento from "./Pages/DetalleEvento";
import DetalleComentarEvento from "./Pages/DetalleComentarEvento";
import CrearGrupo from "./Pages/CrearGrupo";
import UnirmeGrupo from "./Pages/UnirmeGrupo";

function App() {
  const location = useLocation();
  return (
    <div className="relative h-[100vh]">
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/anuncio" element={<Anuncio />} />
        <Route path="/grupos" element={<Grupo />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/alerta" element={<Alerta />} />
        <Route path="/detalleEvento" element={<DetalleEvento />} />
        <Route path="/detalleComentarEvento" element={<DetalleComentarEvento />} />
        <Route path="/crear-grupo" element={<CrearGrupo />} />
        <Route path="/unirme-grupo" element={<UnirmeGrupo />} />
      </Routes>
      {location.pathname !== "/alerta" && <Bar />}
    </div>
  );
}

export default App;
