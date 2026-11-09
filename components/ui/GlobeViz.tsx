"use client";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const DUBAI = { lat: 25.2, lng: 55.3 };

const arcs = [
  { startLat: DUBAI.lat, startLng: DUBAI.lng, endLat: 51.5,  endLng: -0.1,   label: "Europe" },
  { startLat: DUBAI.lat, startLng: DUBAI.lng, endLat: 40.7,  endLng: -74.0,  label: "N. America" },
  { startLat: DUBAI.lat, startLng: DUBAI.lng, endLat: 1.35,  endLng: 103.8,  label: "Asia-Pacific" },
  { startLat: DUBAI.lat, startLng: DUBAI.lng, endLat: -1.3,  endLng: 36.8,   label: "Africa" },
  { startLat: DUBAI.lat, startLng: DUBAI.lng, endLat: -33.9, endLng: 151.2,  label: "Australia" },
];

const points = [
  { lat: DUBAI.lat, lng: DUBAI.lng, label: "Dubai", size: 0.5, color: "#c9a84c" },
  { lat: 51.5,  lng: -0.1,   label: "Europe",      size: 0.3, color: "#e8d4a0" },
  { lat: 40.7,  lng: -74.0,  label: "N. America",  size: 0.3, color: "#e8d4a0" },
  { lat: 1.35,  lng: 103.8,  label: "Asia-Pacific",size: 0.3, color: "#e8d4a0" },
  { lat: -1.3,  lng: 36.8,   label: "Africa",      size: 0.3, color: "#e8d4a0" },
  { lat: -33.9, lng: 151.2,  label: "Australia",   size: 0.3, color: "#e8d4a0" },
];

export default function GlobeViz() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;
    // Point of view centered on Dubai
    globeRef.current.pointOfView({ lat: DUBAI.lat, lng: DUBAI.lng, altitude: 2.0 }, 1000);
    // Auto-rotate
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = false;
  }, []);

  return (
    <div className="w-full aspect-square rounded-3xl overflow-hidden bg-[#070d1f] relative">
      <Globe
        ref={globeRef}
        width={500}
        height={500}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        arcsData={arcs}
        arcColor={() => ["rgba(201,168,76,0.9)", "rgba(201,168,76,0.05)"]}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        pointsData={points}
        pointColor="color"
        pointAltitude="size"
        pointRadius={0.4}
        pointLabel="label"
      />
      {/* Dubai label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
        <span className="text-[10px] font-mono tracking-widest text-[#e8d4a0] uppercase">Dubai Hub</span>
      </div>
    </div>
  );
}
