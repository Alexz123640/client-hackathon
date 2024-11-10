import React from "react";
import { Link } from "react-router-dom";

const Bar = () => {
  const options = [
    { name: "Mapa", icon: "Map.svg", path: "" },
    { name: "Anuncio", icon: "Document.svg", path: "anuncio" },
    { name: "Grupo", icon: "Team.svg", path: "grupos" },
    { name: "Menu", icon: "Menu.svg", path: "menu" },
  ];
  return (
    <>
      <div className="bg-[#fff] absolute bottom-0 flex w-[100%] justify-around p-2 text-[13px]">
        {options.map((option, index) => (
          <Link
            key={index}
            to={`/${option.path}`}
            className="flex justify-center items-center flex-col cursor-pointer"
          >
            <img src={`imgs/${option.icon}`} alt={option.name} />
            <span className="text-[#113768]">{option.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Bar;
