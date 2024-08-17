import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const [position, setPosition] = useState([13.0294926, 77.6251392]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition([latitude, longitude]);
          setLoaded(true);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setLoaded(true);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return <p>Loading map...</p>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "400px",
        width: "100%",
        marginTop: "50px",
        borderRadius: "8px",
        border: "2px  solid",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your current location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
