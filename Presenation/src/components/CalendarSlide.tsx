import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';

// --- 1. Data Structure ---
type EventType = 'hypr' | 'apr' | 'audit' | 'holiday' | 'budget';

interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  type: EventType;
  month: number;
}

const calendarData: CalendarEvent[] = [
  // January
  { id: '1', date: 'Jan 26', title: 'Askari Charted Svc', type: 'apr', month: 0 },
  { id: '2', date: 'Jan 27', title: 'AWT HO Review', type: 'apr', month: 0 },
  // February
  { id: '3', date: 'Feb 05', title: 'Kashmir Day', type: 'holiday', month: 1 },
  { id: '4', date: 'Feb 12', title: 'MALP Review', type: 'apr', month: 1 },
  { id: '5', date: 'Feb 17', title: 'AGL Review', type: 'hypr', month: 1 },
  // March
  { id: '6', date: 'Mar 23', title: 'Pakistan Day', type: 'holiday', month: 2 },
  { id: '7', date: 'Mar 28', title: 'AGICO AGM', type: 'budget', month: 2 },
  { id: '8', date: 'Mar 29', title: 'ALACO AGM', type: 'budget', month: 2 },
  // April
  { id: '9', date: 'Apr 02', title: 'FSS Review', type: 'apr', month: 3 },
  // May
  { id: '10', date: 'May 01', title: 'Labour Day', type: 'holiday', month: 4 },
  { id: '11', date: 'May 11', title: 'Askari Travels', type: 'hypr', month: 4 },
  { id: '12', date: 'May 12', title: 'Askari Aviation', type: 'hypr', month: 4 },
  // June
  { id: '13', date: 'Jun 02', title: 'Blue Lagoon', type: 'hypr', month: 5 },
  { id: '14', date: 'Jun 25', title: 'Ashura', type: 'holiday', month: 5 },
  // July
  { id: '15', date: 'Jul 06', title: 'Askari Woolen', type: 'audit', month: 6 },
  // August
  { id: '16', date: 'Aug 14', title: 'Independence Day', type: 'holiday', month: 7 },
  { id: '17', date: 'Aug 18', title: 'Askari Life', type: 'hypr', month: 7 },
  // September
  { id: '18', date: 'Sep 10', title: 'AGL Audit', type: 'audit', month: 8 },
  { id: '19', date: 'Sep 17', title: 'AWT Investments', type: 'audit', month: 8 },
  // October
  { id: '20', date: 'Oct 27', title: 'ALACO (3rd Qtr)', type: 'budget', month: 9 },
  // November
  { id: '21', date: 'Nov 09', title: 'Iqbal Day', type: 'holiday', month: 10 },
  { id: '22', date: 'Nov 23', title: 'Blue Lagoon Audit', type: 'audit', month: 10 },
  // December
  { id: '23', date: 'Dec 17', title: 'ALACO Budget', type: 'budget', month: 11 },
  { id: '24', date: 'Dec 25', title: 'Quaid Day', type: 'holiday', month: 11 },
  { id: '25', date: 'Dec 29', title: 'AGICO Budget', type: 'budget', month: 11 },
];

// --- 2. Helper Components ---
const LegendItem = ({ color, label }: { color: string, label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">{label}</span>
  </div>
);

const EventDot = ({ event }: { event: CalendarEvent }) => {
  const colors = {
    hypr: "bg-blue-500",
    apr: "bg-emerald-500",
    audit: "bg-yellow-500",
    budget: "bg-orange-500",
    holiday: "bg-rose-400",
  };

  return (
    <div className="group relative">
      <div className={`w-2 h-2 rounded-full ${colors[event.type]} group-hover:scale-150 transition-transform`} />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
        <div className="bg-[#0F172A] text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl">
          <div className="font-bold">{event.title}</div>
          <div className="text-gray-300 mt-1">{event.date}</div>
        </div>
      </div>
    </div>
  );
};

export const CalendarSlide = () => {
  const months = Array.from({ length: 12 }, (_, i) => 
    new Date(2026, i).toLocaleString('default', { month: 'long' })
  );

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      
      {/* Header */}
      <div className="px-16 pt-12 pb-6 border-b border-gray-100 bg-white z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Governance Calendar</span>
        </div>
        <div className="flex items-end justify-between">
          <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
            Board Meetings Schedule 2026
          </h1>
          
          {/* Legend */}
          <div className="flex gap-6 pb-2">
            <LegendItem color="bg-blue-500" label="HYPR" />
            <LegendItem color="bg-emerald-500" label="APR" />
            <LegendItem color="bg-yellow-500" label="Audit" />
            <LegendItem color="bg-orange-500" label="Budget" />
            <LegendItem color="bg-rose-400" label="Holiday" />
          </div>
        </div>
      </div>

      {/* Calendar Grid - 12 Months */}
      <div className="flex-1 px-16 py-8 overflow-y-auto">
        <div className="grid grid-cols-4 gap-6">
          {months.map((month, monthIdx) => {
            const events = calendarData.filter(e => e.month === monthIdx);
            
            return (
              <motion.div
                key={monthIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: monthIdx * 0.05, duration: 0.4 }}
                className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden hover:border-[#8B1538]/30 hover:shadow-lg transition-all"
              >
                {/* Month Header */}
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-playfair text-xl font-bold">{month}</h3>
                    <Calendar size={18} className="opacity-60" />
                  </div>
                </div>

                {/* Events */}
                <div className="p-4 min-h-[160px]">
                  {events.length > 0 ? (
                    <div className="space-y-2">
                      {events.map(event => (
                        <div key={event.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white transition-all">
                          <EventDot event={event} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-gray-400">
                                {event.date.split(' ')[1]}
                              </span>
                              {event.type === 'holiday' && (
                                <Star size={10} className="text-rose-400 fill-rose-400" />
                              )}
                            </div>
                            <p className="text-sm text-gray-700 font-medium leading-tight truncate">
                              {event.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-300">
                      <Calendar size={24} className="opacity-30" />
                      <p className="text-xs mt-2">No events</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};
