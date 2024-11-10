import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMap,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import { Navigate } from "react-router-dom";
import AlertButton from "../components/AlertButton";

const Grupo = () => {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_PUBLIC_MAP_ID;

  const mapOptions = {
    disableDefaultUI: true,
  };



  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: -16.3992754, lng: -71.5372471 }}
        defaultZoom={15}
        mapId={MAP_ID}
        options={mapOptions}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          onClick={() => alert("Marcador clickeado!")}
        >
          <img src="imgs/location.svg" width={60} alt="Marcador central" />
        </div>
        <AlertButton />
      </Map>
    </APIProvider>
  );
};

export default Grupo;
