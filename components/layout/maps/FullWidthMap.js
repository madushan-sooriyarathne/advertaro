import mapboxgl from "mapbox-gl";
import { MapContainer } from "./FullWidthMapStyles";
import { useEffect } from "react";

const FullWidthMap = () => {
  useEffect(() => {
    // Initialize mapbox map
    // configure mapbox with api key
    mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

    // draw mapbox on page
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/light-v10",
      center: [79.871117, 6.840108],
      zoom: 12,
      pitch: 50,
      minZoom: 10,
    });

    // Add marker
    new mapboxgl.Marker().setLngLat([79.871117, 6.840108]).addTo(map);
  });

  return <MapContainer id="map-container"></MapContainer>;
};

export default FullWidthMap;
