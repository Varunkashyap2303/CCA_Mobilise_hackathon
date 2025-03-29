"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix broken Leaflet default icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
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

// 🛏️ Occupied Pod Icon (red)
const bedRedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9567/9567116.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapComponent({ showFilter = true }) {
  const [isClient, setIsClient] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [stories, setStories] = useState([]);
  const [pods, setPods] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const timeout = setTimeout(() => setShowMap(true), 0);
      return () => clearTimeout(timeout);
    }
  }, [isClient]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storiesRes, podsRes] = await Promise.all([
          fetch("https://67e5df4d18194932a5877bf0.mockapi.io/api/v1/stories"),
          fetch("https://67e5df4d18194932a5877bf0.mockapi.io/api/v1/pods"),
        ]);
        const storiesData = await storiesRes.json();
        const podsData = await podsRes.json();
        setStories(storiesData);
        setPods(podsData);
      } catch (err) {
        console.error("Error fetching data from MockAPI:", err);
      }
    };

    fetchData();
  }, []);

  if (!showMap) {
    return <div className="w-full h-screen bg-gray-100">Loading map...</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🌟 Floating Panel (Legend + Filter) */}
      {showFilter && (
        <div className="absolute top-4 right-4 z-[999] bg-white p-4 rounded-lg shadow-lg text-sm space-y-3 w-[240px] border border-gray-200">
          <h2 className="font-semibold text-gray-800">Map Info & Filters</h2>

          {/* 🧭 Legend */}
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2283/2283945.png"
                alt="Available Pod"
                className="w-5 h-5"
              />
              <span>Available Pod</span>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9567/9567116.png"
                alt="Occupied Pod"
                className="w-5 h-5"
              />
              <span>Occupied Pod</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">📍</span>
              <span>Homelessness Story</span>
            </div>
          </div>

          {/* 🎛️ Filter Dropdown */}
          <div>
            <label
              htmlFor="filter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Show:
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-sm border rounded px-2 py-1 w-full"
            >
              <option value="all">All</option>
              <option value="stories">Stories Only</option>
              <option value="available">Available Pods</option>
              <option value="occupied">Occupied Pods</option>
            </select>
          </div>
        </div>
      )}

      {/* 🗺️ Map */}
      <MapContainer
        center={[-28.5, 134.5]}
        zoom={4.5}
        className="h-full w-full z-0"
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 📍 Stories */}
        {(filter === "all" || filter === "stories") &&
          stories
            .filter((s) => s.lat && s.lng)
            .map((s, index) => (
              <Marker
                key={s.id || `story-${index}`}
                position={[parseFloat(s.lat), parseFloat(s.lng)]}
                icon={personIcon}
              >
                <Popup>
                  <strong>Story</strong>
                  <br />
                  {s.description}
                </Popup>
              </Marker>
            ))}

        {/* 🛏️ Pods */}
        {(filter === "all" ||
          filter === "available" ||
          filter === "occupied") &&
          pods
            .filter((p) => {
              if (filter === "available") return p.status === "Available";
              if (filter === "occupied") return p.status !== "Available";
              return true;
            })
            .filter((p) => p.lat && p.lng)
            .map((p, index) => (
              <Marker
                key={`pod-${p.id || index}`}
                position={[parseFloat(p.lat), parseFloat(p.lng)]}
                icon={p.status === "Available" ? bedGreenIcon : bedRedIcon}
              >
                <Popup>
                  <strong>{p.status}</strong>
                  <br />
                  {p.address}
                </Popup>
              </Marker>
            ))}
      </MapContainer>
    </div>
  );
}
