// src/app/map/page.jsx
"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

export default function MapPage() {
  return (
    <main className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Full Map View</h1>
      <div className="w-full h-[600px] rounded-xl overflow-hidden">
        <MapComponent />
      </div>
    </main>
  );
}