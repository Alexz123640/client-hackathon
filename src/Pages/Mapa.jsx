"use client";

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
      <APIProvider apiKey='AIzaSyBGZcIQ5-5IKAgM513s5CVC9msfiFjt7Rg'>
        <div style={{height: "100vh", width: "100%"}}> 
          <Map 
            zoom={9} 
            center={position} 
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            >
              <AdvancedMarker position={position}>
                <Pin
                  background={"grey"}
                  borderColor={"green"}
                  glyphColor={"purple"}
                ></Pin>
              </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    </>
  );
};

export default Mapa;
