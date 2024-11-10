"use client";

import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useState, useRef } from "react";
import trees from "../data/trees";
import AlertButton from "../components/AlertButton";

export default function Intro() {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.VITE_PUBLIC_MAP_ID;

  const mapOptions = {
    disableDefaultUI: true,
  };

  return (
    <div>
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: -16.3992754, lng: -71.5372471 }}
          defaultZoom={15}
          mapId={MAP_ID}
          options={mapOptions}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
         
        >
          <img src="imgs/location.svg" width={60} alt="Marcador central" />
        </div>
        <AlertButton />
        <Markers points={trees} />
      </APIProvider>
    </div>
  );
}

const Markers = ({ points }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
        >
          <span>
            <img src="imgs/alert.svg" width={50} alt="img" />{" "}
          </span>
        </AdvancedMarker>
      ))}
    </>
  );
};
