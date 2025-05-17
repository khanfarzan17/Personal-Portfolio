import React from "react";
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
  // Fixed location coordinates - you can change these to your desired location
  const position = [13.025673286873252, 77.62791881670542]; // Bangalore coordinates

  // Google Maps URL with coordinates
  const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "382px",
        width: "100%",
        marginTop: "50px",
        borderRadius: "8px",
        border: "2px solid",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          My location <br />
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1a73e8", // A refined Google-style blue
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "14px",
              borderBottom: "2px solid transparent",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderBottom = "2px solid #1a73e8";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderBottom = "2px solid transparent";
            }}
          >
            View on Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
