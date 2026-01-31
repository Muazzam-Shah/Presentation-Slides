import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, AlertCircle } from 'lucide-react';

// --- 1. Data Structure ---
const profitData = [
  { year: '2017', value: 1046, note: 'ADHL Plaza' },
  { year: '2018', value: 1253, note: null },
  { year: '2019', value: 1110, note: 'Loss of UN Flights' },
  { year: '2020', value: 814, note: 'COVID Impact' },
  { year: '2021', value: 1025, note: null },
  { year: '2022', value: 1130, note: null },
  { year: '2023', value: 2231, note: null }, // Big Jump
  { year: '2024', value: 2246, note: 'MedAsk Transfer' },
  { year: '2025', value: 3027, note: null },
  { year: '2026 (F)', value: 3234, note: 'Forecast', isForecast: true },
  { year: '2027 (F)', value: 4045, note: 'DHA JV Cashflow', isForecast: true },
];

// --- 2. Custom Tooltip ---
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#0F172A] text-white p-6 rounded-xl shadow-2xl border border-gray-700">
        <p className="font-bold text-2xl mb-2 font-manrope">{data.year}</p>
        <p className="text-4xl font-playfair text-[#10B981]">Rs {data.value} M</p>
        {data.note && (
          <div className="mt-3 pt-3 border-t border-gray-600 flex items-center gap-2">
            <AlertCircle size={18} className="text-yellow-500" />
            <span className="text-sm text-gray-300 uppercase tracking-wide">{data.note}</span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

// --- 3. Custom Bar Component (for Annotations) ---
const CustomizedLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  const data = profitData[index];

  return (
    <>
      {/* Value Label */}
      <text x={x + width / 2} y={y - 10} fill="#0F172A" textAnchor="middle" dy={-6} fontSize={14} fontWeight="bold">
        {value}
      </text>
      {/* Event Note Label */}
      {data.note && (
        <g>
          <rect 
            x={x + width / 2 - 60} 
            y={y - 55} 
            width={120} 
            height={28} 
            fill="#FEF3C7" 
            stroke="#F59E0B" 
            strokeWidth={1.5}
            rx={6}
            opacity={0.95}
          />
          <text 
            x={x + width / 2} 
            y={y - 35} 
            fill="#92400E" 
            textAnchor="middle" 
            fontSize={11} 
            fontWeight="600"
          >
            {data.note}
          </text>
        </g>
      )}
    </>
  );
};

export const ProfitabilitySlide = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      
      {/* --- Header --- */}
      <div className="px-16 pt-5 pb-6 border-b-2 border-gray-200 bg-white z-10">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-1.5 w-16 bg-[#8B1538]" />
              <span className="text-[#8B1538] font-bold tracking-widest text-base uppercase">Financial Health</span>
            </div>
            <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
              Profitability State
            </h1>
            <p className="text-2xl text-gray-600 font-light mt-3">
              Net Profit Growth (Rs in Millions) — Actuals vs. Strategic Forecast
            </p>
          </div>

          {/* Key Stat Block */}
          <div className="bg-[#0F172A] text-white p-8 rounded-tl-3xl shadow-2xl min-w-[280px]">
             <div className="flex items-center gap-2 mb-2 opacity-70">
               <TrendingUp size={20} />
               <span className="text-sm font-bold uppercase tracking-widest">2027 Target</span>
             </div>
             <div className="text-5xl font-bold font-playfair flex items-baseline gap-2">
               4,045 <span className="text-lg font-sans font-normal text-gray-400">Mn</span>
             </div>
          </div>
        </div>
      </div>

      {/* --- Main Chart --- */}
      <div className="flex-1 px-16 py-10 w-full min-h-0 relative z-0">
        
        {/* Background Annotation for "Growth Era" */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute right-16 top-32 bottom-24 w-[35%] bg-emerald-50/50 -z-10 rounded-xl border border-emerald-100/50"
        />
        <div className="absolute right-24 top-40 text-right pointer-events-none">
           <h4 className="text-emerald-800 font-bold text-xl">Strategic Growth Phase</h4>
           <p className="text-emerald-600 text-base max-w-[220px] ml-auto mt-2">
             Driven by DHA JV inflows and operational restructuring post-2023.
           </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={profitData} margin={{ top: 80, right: 40, left: 20, bottom: 30 }} barCategoryGap="15%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#0F172A', fontSize: 16, fontWeight: 600 }} 
              dy={12}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 16, fontWeight: 500 }} 
              tickFormatter={(value) => `${value}M`}
              domain={[0, 4500]}
              ticks={[0, 1000, 2000, 3000, 4000]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F1F5F9' }} />
            
            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={70} label={<CustomizedLabel />}>
              {profitData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.isForecast ? '#10B981' : (entry.year === '2027 (F)' ? '#0F172A' : '#10B981')} 
                  opacity={entry.isForecast ? 0.6 : 1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Define Pattern for Forecast Bars */}
        <svg width="0" height="0">
          <defs>
            <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#10B981" strokeWidth="1" />
            </pattern>
          </defs>
        </svg>

      </div>

      {/* Legend */}
      <div className="absolute bottom-8 left-16 flex gap-10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#10B981] rounded-sm shadow-md" />
          <span className="text-base font-bold text-gray-700">Actualized Profit</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#10B981] opacity-60 rounded-sm shadow-md" />
          <span className="text-base font-bold text-gray-700">Projected Forecast</span>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};
