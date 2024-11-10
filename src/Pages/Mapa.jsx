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

export default function Intro() {
  const API_KEY = import.meta.env.GOOGLE_MAPS_API_KEY;
  const MAP_ID = import.meta.env.NEXT_PUBLIC_MAP_ID;

  return (
    <div>
      <APIProvider apiKey="AIzaSyAi0RXyT9ed2ldXSKD5F4uL5QdU-VGGo_k">
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat:-16.3992754, lng: -71.5372471 }}
          defaultZoom={3}
          mapId='fb9f5de9cedd0760'
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
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
          <span style={{ fontSize: "2rem" }}>
            <img src="imgs/alert.svg" width={50} alt="img" />{" "}
          </span>
        </AdvancedMarker>
      ))}
    </>
  );
};
