"use client";
import dynamic from "next/dynamic";

// Load MapComponent only on the client side
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <main className="p-6">
      <MapComponent />
    </main>
  );
}
