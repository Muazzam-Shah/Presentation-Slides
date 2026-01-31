import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

// --- Types for TypeScript Safety ---
type Executive = {
  name: string;
  role: string;
  image?: string; // Optional: falls back to icon if missing
  rank?: string;  // e.g., "Maj Gen (Retd)"
  highlight?: boolean; // True for the Department Head
};

type DepartmentProps = {
  title: string;
  subtitle: string;
  head: Executive;
  team: Executive[];
};

// --- The Reusable Component ---
export const DepartmentSlide = ({ title, subtitle, head, team }: DepartmentProps) => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      
      {/* 1. Header Section */}
      <div className="px-16 pt-12 pb-8 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Organizational Leadership
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          {title}
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. Content Container */}
      <div className="flex-1 px-16 pb-12 flex gap-16 items-center">
        
        {/* --- Left Column: The Department Head (Hero Card) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/3 flex flex-col items-center justify-center"
        >
          <div className="relative group">
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[#8B1538] scale-110 opacity-20 group-hover:scale-115 transition-transform duration-500" />
            
            {/* Image Container */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-gray-100">
              {head.image ? (
                <img 
                  src={head.image} 
                  alt={head.name} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <User size={80} />
                </div>
              )}
            </div>

            {/* Rank Badge */}
            {head.rank && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#8B1538] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg whitespace-nowrap">
                {head.rank}
              </div>
            )}
          </div>

          <div className="mt-10 text-center">
            <h2 className="font-playfair text-4xl font-bold text-[#0F172A] leading-tight mb-2">
              {head.name}
            </h2>
            <div className="w-16 h-1 bg-gray-200 mx-auto my-4" />
            <p className="text-[#8B1538] font-bold tracking-widest uppercase text-lg">
              {head.role}
            </p>
          </div>
        </motion.div>

        {/* --- Right Column: The Team Grid --- */}
        <div className="w-2/3">
          <div className="grid grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#8B1538]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                {/* Team Member Layout */}
                <div className="flex flex-col items-center text-center gap-4">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-gray-200 overflow-hidden group-hover:border-[#8B1538] transition-colors">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <User size={32} />
                      </div>
                    )}
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-[#0F172A] leading-tight mb-1">
                      {member.name || "Vacant / TBD"}
                    </h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Background Watermark (Optional) */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path d="M100 0 L200 100 L100 200 L0 100 Z" fill="#0F172A"/>
        </svg>
      </div>
    </div>
  );
};
