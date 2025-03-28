"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix broken Leaflet default icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 📍 Custom icon for stories
const personIcon = new L.DivIcon({
  html: `<div style="font-size: 20px;">📍</div>`,
  className: "",
  iconSize: [30, 30],
});

// 🛏️ Available Pod Icon (green)
const bedGreenIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2283/2283945.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// 🛏️ Occupied Pod Icon (sleeping icon)
const bedRedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9567/9567116.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapComponent() {
  const [stories, setStories] = useState([]);
  const [pods, setPods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storiesRes = await fetch("https://67e5df4d18194932a5877bf0.mockapi.io/api/v1/stories");
        const podsRes = await fetch("https://67e5df4d18194932a5877bf0.mockapi.io/api/v1/pods");

        const storiesData = await storiesRes.json();
        const podsData = await podsRes.json();

        console.log("Fetched stories:", storiesData);

        setStories(storiesData);
        setPods(podsData);
      } catch (err) {
        console.error("Error fetching data from MockAPI:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🌟 Floating Legend (Bottom-Left, Clean & Readable) */}
      <div className="absolute top-4 right-4 z-[999] bg-white p-4 rounded-lg shadow-lg text-sm space-y-2 w-[220px] border border-gray-200">
        <h2 className="font-semibold text-gray-800 mb-2">Legend</h2>
        <div className="flex items-center space-x-3 text-gray-700">
          <img src="https://cdn-icons-png.flaticon.com/512/2283/2283945.png" alt="Available Pod" className="w-6 h-6" />
          <span>Available Pod</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <img src="https://cdn-icons-png.flaticon.com/512/9567/9567116.png" alt="Occupied Pod" className="w-6 h-6" />
          <span>Occupied Pod</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <span className="text-lg">📍</span>
          <span>Homelessness Story</span>
        </div>
      </div>


      {/* 🗺️ Map */}
      <MapContainer center={[-28.5, 134.5]} zoom={4.5} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {stories
          .filter((s) => s.lat && s.lng)
          .map((s, index) => (
            <Marker
              key={s.id || `story-${index}`}
              position={[parseFloat(s.lat), parseFloat(s.lng)]}
              icon={personIcon}
            >
              <Popup>{s.description}</Popup>
            </Marker>
        ))}
        {pods.map((p) => (
          <Marker
            key={`pod-${p.id || `${p.lat}-${p.lng}`}`}
            position={[p.lat, p.lng]}
            icon={p.status === "Available" ? bedGreenIcon : bedRedIcon}
          >
            <Popup>Sleeping Pod - {p.status}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
