import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mapa from "./Pages/Mapa";
import Anuncio from "./Pages/Anuncio";
import Grupo from "./Pages/Grupo";
import Bar from "./components/Bar";
import Menu from "./Pages/Menu";

function App() {
  return (
    <div className="relative h-[100vh]">
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/anuncio" element={<Anuncio />} />
        <Route path="/grupos" element={<Grupo />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Bar />
    </div>
  );
}

export default App;
