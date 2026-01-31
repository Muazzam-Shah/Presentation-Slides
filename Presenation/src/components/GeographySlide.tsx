import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

// --- 1. Locations Data (Unchanged) ---
const locations = [
  {
    id: "isb",
    name: "Islamabad & Rawalpindi",
    region: "Strategic HQ",
    coordinates: [73.0479, 33.6844] as [number, number],
    type: "hq",
    units: ["AWT Headquarters", "AWT Plaza", "Askari Bank Corp", "Blue Lagoon"]
  },
  {
    id: "punjab",
    name: "Punjab Hub",
    region: "Industrial Core",
    coordinates: [74.3587, 31.5204] as [number, number],
    type: "hub",
    units: ["Askari Woolen Mills", "Askari Shoes", "Mobil Askari", "Askari Seeds"]
  },
  {
    id: "kpk",
    name: "Khyber Pakhtunkhwa",
    region: "Production & Mining",
    coordinates: [71.5249, 34.0151] as [number, number],
    type: "hub",
    units: ["Askari Cement (Nizampur)", "Askari Cement (Wah)", "Mining Ops"]
  },
  {
    id: "sindh",
    name: "Sindh & Karachi",
    region: "Trade & Logistics",
    coordinates: [67.0011, 24.8607] as [number, number],
    type: "hub",
    units: ["Askari Sugar Mills", "Askari Fuels", "Intl Logistics"]
  },
  {
    id: "baloch",
    name: "Balochistan",
    region: "Security & Development",
    coordinates: [66.9750, 30.1798] as [number, number],
    type: "hub",
    units: ["Askari Guards (Regional)", "Development Projects"]
  },
  {
    id: "north",
    name: "Gilgit-Baltistan",
    region: "Tourism & Energy",
    coordinates: [74.3535, 35.9208] as [number, number],
    type: "hub",
    units: ["Attabad Lake Resort", "Jolidays Tourism", "Hydropower"]
  }
];

// --- 2. RELIABLE MAP SOURCE (Highcharts) ---
const geoUrl = "https://code.highcharts.com/mapdata/countries/pk/pk-all.topo.json";

export const GeographySlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeLoc = locations[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % locations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex">
      
      {/* --- Left Column: Map Area --- */}
      <div className="w-[50%] h-full relative bg-[#F8FAFC] flex items-center justify-center">
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: 'radial-gradient(#0F172A 2px, transparent 2px)', backgroundSize: '40px 40px' }} 
        />

        <div className="w-full h-full p-8">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 2200, // Zoomed out to show full Pakistan
              center: [70, 30] // Centered on Pakistan
            }}
            className="w-full h-full"
          >
            {/* Map Layer */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    // --- CRITICAL VISIBILITY FIX ---
                    style={{
                      default: { 
                        fill: "#E2E8F0",  // Visible Grey (Not White)
                        stroke: "#94A3B8", // Visible Border
                        strokeWidth: 0.5, 
                        outline: "none" 
                      },
                      hover: { 
                        fill: "#CBD5E1", 
                        stroke: "#64748B", 
                        strokeWidth: 0.5, 
                        outline: "none" 
                      },
                      pressed: { 
                        fill: "#94A3B8", 
                        outline: "none" 
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Markers Layer */}
            {locations.map((loc, idx) => {
              const isActive = activeLoc.id === loc.id;
              return (
                <Marker key={loc.id} coordinates={loc.coordinates}>
                  <g
                    className="cursor-pointer"
                    onClick={() => setCurrentIndex(idx)}
                    onMouseEnter={() => setCurrentIndex(idx)}
                  >
                    {/* Pulse Animation */}
                    {isActive && (
                      <circle r={24} fill="#8B1538" opacity={0.2} className="animate-ping" />
                    )}
                    
                    {/* The Dot */}
                    <circle
                      r={isActive ? 8 : 5}
                      fill={isActive ? "#8B1538" : "#64748B"}
                      stroke="white"
                      strokeWidth={2}
                      className="transition-all duration-300"
                    />
                    
                    {/* Label */}
                    {isActive && (
                      <text
                        textAnchor="middle"
                        y={-20}
                        style={{ fontFamily: "Manrope", fontSize: "12px", fontWeight: "bold", fill: "#0F172A" }}
                      >
                        {loc.name.split(" ")[0]}
                      </text>
                    )}
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
      </div>

      {/* --- Right Column: Data Panel --- */}
      <div className="w-[50%] h-full bg-white border-l border-gray-100 p-12 flex flex-col justify-center relative z-10 shadow-xl">
        
        {/* Header */}
        <div className="mb-10">
           <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-[#8B1538]" />
            <span className="text-[#8B1538] font-bold tracking-widest text-xs uppercase">National Footprint</span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-[#0F172A] leading-tight">
            Operational Landscape
          </h1>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            Strategically positioned assets across all major economic zones.
          </p>
        </div>

        {/* Dynamic Card */}
        <div className="flex-1 min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLoc.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-[#0F172A]">{activeLoc.name}</h2>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{activeLoc.region}</p>
                </div>
                <MapPin className="text-[#8B1538] mt-1" size={24} />
              </div>

              <div className="space-y-3">
                {activeLoc.units.map((unit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-white border border-gray-100 shadow-sm"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold
                      ${idx === 0 && activeLoc.type === 'hq' ? 'bg-[#0F172A] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {idx + 1}
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{unit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Location {currentIndex + 1} of {locations.length}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex-1 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center gap-2 hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] transition-all group"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wide">Previous</span>
            </button>
            <button
              onClick={handleNext}
              className="flex-1 h-12 rounded-lg bg-[#8B1538] text-white flex items-center justify-center gap-2 hover:bg-[#6B0F28] transition-all group shadow-lg"
            >
              <span className="text-sm font-bold uppercase tracking-wide">Next</span>
              <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};