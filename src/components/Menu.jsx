import React from "react";

const Menu = () => {
  const options = [
    { name: "Mapa", icon: "Map.svg" },
    { name: "Anuncio", icon: "Document.svg" },
    { name: "Grupo", icon: "Team.svg" },
    { name: "Menu", icon: "Menu.svg" },
  ];
  return (
    <>
      <div className="bg-[#f2f2f2] absolute bottom-0 flex w-[100%] justify-around p-2 text-[13px]">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col "
          >
            <img src={`imgs/${option.icon}`} alt={option.name} />
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
