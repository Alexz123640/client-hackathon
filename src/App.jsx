import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Mapa from "./Pages/Mapa";
import Anuncio from "./Pages/Anuncio";
import Grupo from "./Pages/Grupo";
import Bar from "./components/Bar";
import Menu from "./Pages/Menu";
import Alerta from "./Pages/Alerta";

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
      </Routes>
      {location.pathname !== "/alerta" && <Bar />}
    </div>
  );
}

export default App;
