import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Mapa = () => {
  const position = { lat: -16.398829, lng: -71.5394728 };

  return (
    <>
      <APIProvider key='AIzaSyBGZcIQ5-5IKAgM513s5CVC9msfiFjt7Rg'>
        <div>MAPA</div>
      </APIProvider>
    </>
  );
};

export default Mapa;
