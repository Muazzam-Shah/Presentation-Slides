import React, { type ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Info, User, TrendingUp, TrendingDown, Minus, Shield, Briefcase, DollarSign, Settings, Crown, Target, Truck, Users, FileText, UserCheck, FileSignature, RefreshCw, CheckCircle2 } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine,
  ReferenceDot
} from 'recharts';

/**
 * EXECUTIVE SAFE SLIDE SYSTEM
 * - 2 Fonts Only: Playfair (Headlines) + Manrope (Everything Else)
 * - 80% Light Backgrounds: White/Cream for readability
 * - 20% Dark: Only for Title & Section dividers
 * - No Noise. No Vignette. Pristine.
 * - 0.3-0.5s animations (not 0.8s)
 * - High Contrast: WCAG AA+ compliant
 */

// ========================================
// BASE SLIDE COMPONENT
// ========================================

interface SlideProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
}

export const ExecutiveSlide: React.FC<SlideProps> = ({ 
  children, 
  variant = 'light',
  title,
  subtitle 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`relative w-full h-screen overflow-hidden ${
      isDark ? 'bg-exec-bg-dark' : 'bg-exec-bg-primary'
    } font-manrope selection:bg-exec-brand selection:text-white`}>
      
      {/* Brand Anchor (The ONLY decorative element) */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-exec-brand z-50" />
      
      {/* Content Grid - 12 columns, safe margins */}
      <div className="grid grid-cols-12 gap-8 px-24 py-16 h-full w-full safe-area">
        
        {/* Header Section */}
        {title && (
          <div className={`col-span-12 mb-8 border-b pb-6 ${
            isDark ? 'border-white/10' : 'border-gray-200'
          }`}>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`font-playfair text-exec-h1 font-bold tracking-tight ${
                isDark ? 'text-exec-text-inverse' : 'text-exec-text-primary'
              }`}
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className={`mt-3 text-2xl font-light ${
                  isDark ? 'text-white/70' : 'text-exec-text-secondary'
                }`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Body Content */}
        <div className="col-span-12 h-full">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className={`absolute bottom-8 right-12 text-xs font-medium tracking-wider opacity-40 ${
        isDark ? 'text-exec-text-inverse' : 'text-exec-text-primary'
      }`}>
        CONFIDENTIAL
      </div>
    </div>
  );
};

// ========================================
// TITLE SLIDE (Dark - 20% usage)
// ========================================

interface TitleSlideProps {
  companyName: string;
  tagline?: string;
  presentedBy?: string;
  date?: string;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ 
  companyName, 
  tagline, 
  presentedBy,
  date 
}) => {
  return (
    <ExecutiveSlide variant="dark">
      <div className="flex flex-col justify-center h-full">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="font-playfair text-exec-hero font-bold text-exec-text-inverse tracking-tight mb-6">
            {companyName}
          </h1>
          
          {tagline && (
            <div className="flex items-center gap-4">
              <div className="w-20 h-0.5 bg-exec-highlight" />
              <p className="text-2xl text-white/70 font-light tracking-wide">
                {tagline}
              </p>
            </div>
          )}
        </motion.div>

        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-white/50 text-lg space-y-2"
        >
          {presentedBy && <p>{presentedBy}</p>}
          {date && <p>{date}</p>}
        </motion.div>
      </div>
    </ExecutiveSlide>
  );
};

// ========================================
// SECTION DIVIDER (Dark - 20% usage)
// ========================================

interface SectionSlideProps {
  sectionNumber: number;
  title: string;
  subtitle?: string;
}

export const SectionSlide: React.FC<SectionSlideProps> = ({ 
  sectionNumber, 
  title, 
  subtitle 
}) => {
  return (
    <ExecutiveSlide variant="dark">
      <div className="flex flex-col justify-center h-full">
        
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-[180px] font-playfair font-bold text-white/5 leading-none mb-8"
        >
          {String(sectionNumber).padStart(2, '0')}
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-playfair text-exec-h1 font-bold text-exec-text-inverse mb-6"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="text-2xl text-white/60 font-light max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </ExecutiveSlide>
  );
};

// ========================================
// CONTENT SLIDE (Light - 80% usage)
// ========================================

interface ContentSlideProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({ 
  title, 
  subtitle, 
  children 
}) => {
  return (
    <ExecutiveSlide variant="light" title={title} subtitle={subtitle}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-exec-body text-exec-text-primary leading-relaxed"
      >
        {children}
      </motion.div>
    </ExecutiveSlide>
  );
};

// ========================================
// BULLET LIST COMPONENT (Functional)
// ========================================

interface BulletListProps {
  items: string[];
  numbered?: boolean;
}

export const BulletList: React.FC<BulletListProps> = ({ items, numbered = false }) => {
  return (
    <ul className="space-y-6">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.4 + (index * 0.08), // Stagger by 80ms (not 200ms)
            duration: 0.3 
          }}
          className="flex items-start gap-6"
        >
          {/* Bullet/Number */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-exec-brand text-white flex items-center justify-center font-semibold text-sm">
            {numbered ? index + 1 : '•'}
          </div>
          
          {/* Content */}
          <p className="text-exec-body text-exec-text-primary leading-relaxed pt-1.5">
            {item}
          </p>
        </motion.li>
      ))}
    </ul>
  );
};

// ========================================
// DATA CARD COMPONENT (Functional Color)
// ========================================

interface DataCardProps {
  label: string;
  value: string | number;
  trend?: 'positive' | 'negative' | 'neutral';
  subtitle?: string;
}

export const DataCard: React.FC<DataCardProps> = ({ 
  label, 
  value, 
  trend = 'neutral',
  subtitle 
}) => {
  const trendColors = {
    positive: 'text-exec-success',
    negative: 'text-exec-brand',
    neutral: 'text-exec-text-primary',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-exec-bg-secondary p-8 rounded-lg border border-gray-200"
    >
      {/* Label */}
      <p className="text-exec-caption text-exec-text-secondary uppercase tracking-wider mb-3">
        {label}
      </p>
      
      {/* Value */}
      <p className={`font-playfair text-6xl font-bold ${trendColors[trend]} mb-2`}>
        {value}
      </p>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-exec-text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

// ========================================
// TWO COLUMN LAYOUT (Functional)
// ========================================

interface TwoColumnProps {
  left: ReactNode;
  right: ReactNode;
  ratio?: '50-50' | '60-40' | '40-60';
}

export const TwoColumn: React.FC<TwoColumnProps> = ({ 
  left, 
  right, 
  ratio = '50-50' 
}) => {
  const gridCols = {
    '50-50': 'grid-cols-2',
    '60-40': 'grid-cols-[1.5fr_1fr]',
    '40-60': 'grid-cols-[1fr_1.5fr]',
  };

  return (
    <div className={`grid ${gridCols[ratio]} gap-12 h-full items-center`}>
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {left}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {right}
      </motion.div>
    </div>
  );
};

// ========================================
// TABLE COMPONENT (High Legibility)
// ========================================

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
}

export const DataTable: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-lg border border-gray-200"
    >
      <table className="w-full">
        {/* Header */}
        <thead className="bg-exec-bg-dark text-exec-text-inverse">
          <tr>
            {headers.map((header, i) => (
              <th 
                key={i}
                className="px-6 py-4 text-left font-manrope font-semibold text-sm tracking-wider uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        
        {/* Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-exec-bg-secondary transition-colors duration-150">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex}
                  className="px-6 py-4 text-exec-text-primary font-manrope text-base"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

// ========================================
// QUOTE/CALLOUT (Executive Authority)
// ========================================

interface QuoteProps {
  text: string;
  author?: string;
  role?: string;
}

export const ExecutiveQuote: React.FC<QuoteProps> = ({ text, author, role }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-l-4 border-exec-brand pl-12 py-8"
    >
      {/* Quote Text */}
      <p className="font-playfair text-exec-h2 font-bold text-exec-text-primary leading-tight mb-6">
        "{text}"
      </p>
      
      {/* Attribution */}
      {author && (
        <div className="text-exec-text-secondary">
          <p className="font-semibold text-lg">{author}</p>
          {role && <p className="text-base">{role}</p>}
        </div>
      )}
    </motion.div>
  );
};

// ========================================
// TIMELINE COMPONENT (Corporate Heritage)
// ========================================

interface TimelineEra {
  year: string;
  title: string;
  items: string[];
}

interface TimelineSlideProps {
  title?: string;
  subtitle?: string;
  data: TimelineEra[];
}

export const TimelineSlide: React.FC<TimelineSlideProps> = ({ 
  title = "Our Journey of Excellence",
  subtitle = "Five decades of strategic growth and national contribution",
  data 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col font-manrope">
      
      {/* --- Header Section --- */}
      <div className="px-16 pt-16 pb-8 border-b border-gray-100 z-10 bg-white">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-12 bg-[#8B1538]" /> {/* Brand Accent */}
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Heritage</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          {title}
        </h1>
        <p className="mt-2 text-xl text-gray-500 font-light">
          {subtitle}
        </p>
      </div>

      {/* --- Timeline Container --- */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-x-auto flex items-center px-16 gap-0 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {/* Horizontal Line Background */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -z-0" />

        {data.map((era, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex-shrink-0 w-80 h-96 group" // Fixed width per item
          >
            {/* The Dot on the Line */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 w-4 h-4 bg-white border-4 border-[#0F172A] rounded-full z-10 group-hover:border-[#8B1538] group-hover:scale-125 transition-all duration-300" />

            {/* Content: Alternating Top/Bottom for readability */}
            <div className={`flex flex-col h-full ${index % 2 === 0 ? 'justify-start pb-12' : 'justify-end pt-12'}`}>
              
              {/* Connector Line */}
              <div className={`absolute left-10 w-[1px] bg-gray-300 h-1/2 -z-0 
                ${index % 2 === 0 ? 'top-[50%]' : 'bottom-[50%]'}`} 
              />

              {/* Card */}
              <div className={`ml-8 p-6 bg-gray-50 border-l-4 border-[#0F172A] hover:bg-[#F8F9FA] hover:border-[#8B1538] transition-colors duration-300 shadow-sm
                ${index % 2 === 0 ? 'mt-4' : 'mb-4'}`}>
                
                <h3 className="font-playfair text-4xl font-bold text-[#0F172A] mb-1">
                  {era.year}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B1538] mb-3 block">
                  {era.title}
                </span>
                
                <ul className="space-y-2">
                  {era.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* End Padding */}
        <div className="w-24 flex-shrink-0" />
      </div>

      {/* --- Footer Hint --- */}
      <div className="absolute bottom-8 right-12 flex items-center gap-2 text-gray-400 animate-pulse">
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronRight size={16} />
      </div>

      {/* --- Brand Anchor --- */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ========================================
// STAT HIGHLIGHT COMPONENT (Large Numbers)
// ========================================

interface StatHighlightProps {
  value: string;
  label: string;
  sublabel?: string;
}

export const StatHighlight: React.FC<StatHighlightProps> = ({ value, label, sublabel }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center p-6 bg-white border-2 border-gray-100 rounded-lg hover:border-exec-brand/30 transition-all duration-300"
    >
      <p className="font-playfair text-5xl font-bold text-exec-brand mb-3">
        {value}
      </p>
      <p className="text-exec-text-primary font-semibold text-lg mb-1">
        {label}
      </p>
      {sublabel && (
        <p className="text-exec-text-secondary text-sm">
          {sublabel}
        </p>
      )}
    </motion.div>
  );
};

// ========================================
// ORG CHART COMPONENT (Governance Structure)
// ========================================

interface OrgNode {
  title: string;
  name?: string;
  level: number;
  children?: OrgNode[];
}

interface OrgChartSlideProps {
  title: string;
  subtitle?: string;
  topLevel: OrgNode;
  secondLevel?: OrgNode[];
  thirdLevel?: OrgNode[];
}

export const OrgChartSlide: React.FC<OrgChartSlideProps> = ({ 
  title, 
  subtitle, 
  topLevel,
  secondLevel = [],
  thirdLevel = []
}) => {
  return (
    <ExecutiveSlide variant="light" title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center gap-8 pt-8">
        
        {/* Top Level - Chairman */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="bg-exec-bg-dark text-white px-10 py-6 rounded-lg border-4 border-exec-brand min-w-[280px] text-center">
            <p className="font-playfair text-2xl font-bold mb-1">{topLevel.title}</p>
            {topLevel.name && <p className="text-sm opacity-70">{topLevel.name}</p>}
          </div>
        </motion.div>

        {/* Connector Line */}
        {secondLevel.length > 0 && (
          <div className="w-[2px] h-8 bg-gray-300" />
        )}

        {/* Second Level - Committee */}
        {secondLevel.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-wrap justify-center gap-6 max-w-5xl"
          >
            {secondLevel.map((node, index) => (
              <div key={index} className="relative">
                {/* Connector to top */}
                {index === Math.floor(secondLevel.length / 2) && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gray-300" />
                )}
                
                <div className="bg-white px-6 py-4 rounded-lg border-2 border-exec-brand/40 min-w-[200px] text-center hover:shadow-lg transition-shadow duration-300">
                  <p className="font-semibold text-exec-text-primary text-base leading-tight">
                    {node.title}
                  </p>
                  {node.name && <p className="text-xs text-exec-text-secondary mt-1">{node.name}</p>}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Connector Line */}
        {thirdLevel.length > 0 && (
          <div className="w-[2px] h-8 bg-gray-300" />
        )}

        {/* Third Level - Management */}
        {thirdLevel.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 max-w-6xl"
          >
            {thirdLevel.map((node, index) => (
              <div key={index} className="bg-exec-bg-secondary px-5 py-3 rounded border border-gray-200 min-w-[160px] text-center">
                <p className="font-medium text-exec-text-primary text-sm">
                  {node.title}
                </p>
                {node.name && <p className="text-xs text-exec-text-secondary mt-0.5">{node.name}</p>}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </ExecutiveSlide>
  );
};

// ========================================
// FINANCIAL PERFORMANCE CHART
// ========================================

// Financial Data (Sanitized)
const financialData = [
  { year: '1991', value: 110, event: "AWS Formed" },
  { year: '1995', value: 118, event: "New Projects" },
  { year: '1998', value: -2123, event: "Crisis Period" },
  { year: '2000', value: -2657, event: "Financial Restructuring (Equity Injection)" },
  { year: '2004', value: 194, event: "Break Even Reached" },
  { year: '2006', value: 691, event: null },
  { year: '2009', value: -496, event: "Interest Rate Revision" },
  { year: '2011', value: -1481, event: "Low Point" },
  { year: '2013', value: 1818, event: "Strategic Asset Sale (Bank/Cement)" },
  { year: '2015', value: 1290, event: null },
  { year: '2018', value: 1253, event: null },
  { year: '2020', value: 814, event: "Market Dip" },
  { year: '2023', value: 2231, event: "Post-COVID Surge" },
  { year: '2024', value: 2246, event: "MedAsk JV" },
  { year: '2025', value: 3027, event: "Historical High (Projected)" },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isPositive = data.value >= 0;
    
    return (
      <div className="bg-white p-5 shadow-2xl border-2 border-[#0F172A] rounded-lg">
        <p className="font-playfair text-xl font-bold text-[#0F172A] mb-2">{data.year}</p>
        <p className={`text-3xl font-manrope font-bold mb-2 ${isPositive ? 'text-[#10B981]' : 'text-[#8B1538]'}`}>
          {data.value > 0 ? '+' : ''}{data.value.toLocaleString()} M
        </p>
        {data.event && (
          <div className="mt-3 pt-3 border-t border-gray-200 flex items-start gap-2 max-w-[250px]">
            <Info size={16} className="text-[#8B1538] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 leading-snug font-medium">{data.event}</p>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export const FinancialSlide: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden font-manrope">
      
      {/* --- Header Section --- */}
      <div className="px-16 pt-10 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-1 w-20 bg-[#8B1538]" />
              <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Financial Trajectory</span>
            </div>
            <h1 className="font-playfair text-6xl font-bold text-[#0F172A] mb-3 leading-tight">
              34 Years of Excellence
            </h1>
            <p className="text-xl text-gray-600 font-light">
              From restructuring to record-breaking performance (1991-2025)
            </p>
          </div>

          {/* Key Metric Callout */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white p-8 rounded-2xl shadow-2xl min-w-[320px] border-4 border-[#C9A961]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">2025 Projection</p>
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl font-playfair font-bold text-[#C9A961]">3,027M</span>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
              <span className="text-sm text-emerald-400 font-bold">+34.8% YoY</span>
              <span className="text-gray-500">•</span>
              <span className="text-xs text-gray-400">Historical High</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- Timeline Context Cards --- */}
      <div className="px-16 py-4 grid grid-cols-3 gap-4">
        
        {/* Crisis Era */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="relative bg-white p-5 rounded-xl border-2 border-red-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B1538] to-red-300 rounded-t-xl" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wider">1998-2011</span>
          </div>
          <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-2">Crisis & Restructuring</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Strategic equity injection and financial reorganization
          </p>
          <p className="text-2xl font-playfair font-bold text-[#8B1538]">-2,657M</p>
          <p className="text-xs text-gray-500">Lowest point (2000)</p>
        </motion.div>

        {/* Recovery Era */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="relative bg-white p-5 rounded-xl border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t-xl" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">2013-2020</span>
          </div>
          <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-2">Strategic Turnaround</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Asset optimization and operational excellence
          </p>
          <p className="text-2xl font-playfair font-bold text-blue-600">+1,818M</p>
          <p className="text-xs text-gray-500">Recovery milestone (2013)</p>
        </motion.div>

        {/* Growth Era */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="relative bg-gradient-to-br from-emerald-50 to-white p-5 rounded-xl border-2 border-emerald-200 shadow-lg"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] to-emerald-300 rounded-t-xl" />
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">2023-2025</span>
          </div>
          <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-2">Exponential Growth</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Post-COVID surge and strategic joint ventures
          </p>
          <p className="text-2xl font-playfair font-bold text-[#10B981]">+3,027M</p>
          <p className="text-xs text-emerald-600 font-semibold">Record high (2025 proj.)</p>
        </motion.div>
      </div>

      {/* --- Chart Area --- */}
      <div className="px-16 pt-4 pb-20 flex-1">
        <div className="w-full h-[380px] relative bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-xl">
          
          {/* Gradient Definitions */}
          <svg style={{ height: 0, position: 'absolute' }}>
            <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.02}/>
              </linearGradient>
            </defs>
          </svg>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={financialData} margin={{ top: 20, right: 50, left: 10, bottom: 20 }}>
              
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0.05}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E7EB" opacity={0.6} />
              
              <XAxis 
                dataKey="year" 
                axisLine={{ stroke: '#D1D5DB', strokeWidth: 2 }}
                tickLine={false} 
                tick={{ fill: '#4B5563', fontSize: 13, fontWeight: 600 }} 
                dy={12}
              />
              
              <YAxis 
                axisLine={{ stroke: '#D1D5DB', strokeWidth: 2 }}
                tickLine={false} 
                tick={{ fill: '#4B5563', fontSize: 13, fontWeight: 600 }}
                tickFormatter={(value) => `${value >= 0 ? '+' : ''}${value}`}
                label={{ 
                  value: 'Net Value (Million PKR)', 
                  angle: -90, 
                  position: 'insideLeft', 
                  style: { fill: '#6B7280', fontSize: 13, fontWeight: 600 }
                }}
              />
              
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#8B1538', strokeWidth: 2, strokeDasharray: '6 6' }} />
              
              {/* Zero Reference Line */}
              <ReferenceLine 
                y={0} 
                stroke="#0F172A" 
                strokeWidth={3} 
                strokeDasharray="8 4"
                label={{ value: 'Break-Even', position: 'insideTopLeft', fill: '#6B7280', fontSize: 11, fontWeight: 600 }}
              />

              {/* Main Area */}
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#0F172A" 
                strokeWidth={4}
                fill="url(#splitColor)" 
                dot={false}
                activeDot={{ r: 8, fill: '#8B1538', stroke: '#fff', strokeWidth: 3 }}
              />
              
              {/* Critical Milestone Markers with Labels */}
              <ReferenceDot 
                x="2000" 
                y={-2657} 
                r={10} 
                fill="#8B1538" 
                stroke="#fff" 
                strokeWidth={4}
                label={{ 
                  value: '-2,657M', 
                  position: 'top',
                  fill: '#8B1538',
                  fontSize: 14,
                  fontWeight: 'bold',
                  offset: 15
                }}
              />
              
              <ReferenceDot 
                x="2013" 
                y={1818} 
                r={10} 
                fill="#3B82F6" 
                stroke="#fff" 
                strokeWidth={4}
                label={{ 
                  value: '+1,818M', 
                  position: 'top',
                  fill: '#3B82F6',
                  fontSize: 14,
                  fontWeight: 'bold',
                  offset: 15
                }}
              />
              
              <ReferenceDot 
                x="2025" 
                y={3027} 
                r={12} 
                fill="#10B981" 
                stroke="#fff" 
                strokeWidth={4}
                label={{ 
                  value: '+3,027M', 
                  position: 'top',
                  fill: '#10B981',
                  fontSize: 16,
                  fontWeight: 'bold',
                  offset: 15
                }}
              />

            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- Bottom Summary Banner --- */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white px-16 py-6 border-t-4 border-[#C9A961]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-1.5 h-16 bg-[#C9A961] rounded-full" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Key Achievement</p>
              <p className="text-2xl font-light leading-tight">
                <span className="font-bold text-[#C9A961]">3,650%</span> recovery from 2000 crisis to 2025 projection
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="text-center px-6 border-l border-gray-700">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Growth Streak</p>
              <p className="text-4xl font-playfair font-bold text-[#10B981]">12+</p>
              <p className="text-xs text-gray-500 mt-1">Consecutive years</p>
            </div>
            
            <div className="text-center px-6 border-l border-gray-700">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">YoY Growth</p>
              <p className="text-4xl font-playfair font-bold text-emerald-400">34.8%</p>
              <p className="text-xs text-gray-500 mt-1">2024 → 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Brand Anchor --- */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ========================================
// ORGANIZATIONAL STRUCTURE SLIDE
// ========================================

// Organizational Data Structure
const orgStructure = {
  leadership: [
    {
      role: "MD AWT",
      name: "Lt Gen Nauman Mahmood (R)",
      tenure: "Jan 26 – Jan 28",
      type: "primary"
    },
    {
      role: "Secretary AWT",
      name: "Brig Salman Nazar (R)",
      tenure: "Jan 25 – Dec 27",
      type: "secondary"
    }
  ],
  departments: [
    {
      title: "Services Division",
      head: "ED (Services) - Maj Gen Anis Akbar (R)",
      color: "blue",
      units: [
        { name: "Askari Guards Ltd", status: "profit" },
        { name: "Fauji Security Services", status: "profit" },
        { name: "Real Estate", status: "profit" },
        { name: "Askari Enterprises", status: "neutral" },
        { name: "Blue Lagoon (Rwp & Fsd)", status: "loss" },
      ]
    },
    {
      title: "Industry, Food & Tourism",
      head: "ED (IF&T) - Maj Gen Abid Latif (R)",
      color: "green",
      units: [
        { name: "MAL Pakistan", status: "profit" },
        { name: "Army Welfare Sugar Mills", status: "profit" },
        { name: "Askari Shoes", status: "profit" },
        { name: "Askari Seeds", status: "profit" },
        { name: "Askari Fuels", status: "profit" },
        { name: "Jolidays/Attabad Resort", status: "neutral" },
        { name: "Askari Woolen Mills", status: "loss" },
      ]
    },
    {
      title: "Aviation & Financial Services",
      head: "ED (A&FS) - Maj Gen Kamran Ali (R)",
      color: "purple",
      units: [
        { name: "Askari Aviation Ltd", status: "profit" },
        { name: "Askari Travel Wing", status: "profit" },
        { name: "Askari General Insurance", status: "profit" },
        { name: "AWT Investments", status: "profit" },
        { name: "Askari Life Assurance", status: "profit" },
      ]
    },
  ],
  support: [
    { title: "Finance", head: "ED (Finance) - Mr. Malik Riffat Mahmood" },
    { title: "Operations", head: "COO - Mr. Rizwan Ullah Khan" },
  ]
};

// Status Indicator Component
const StatusIndicator = ({ status }: { status: string }) => {
  const config = {
    profit: { color: "bg-emerald-500" },
    loss: { color: "bg-rose-500" },
    neutral: { color: "bg-gray-400" }
  };

  // @ts-ignore
  const { color } = config[status] || config.neutral;

  return (
    <div className={`w-3 h-3 rounded-full ${color}`} />
  );
};

export const OrgStructureSlide: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden font-manrope">
      
      {/* --- Header --- */}
      <div className="px-16 pt-8 pb-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-1 w-20 bg-[#8B1538]" />
              <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Organization</span>
            </div>
            <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2 leading-tight">
              Business Structure
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Leadership & Operational Units
            </p>
          </div>
          
          {/* Performance Summary */}
          <div className="bg-white p-5 rounded-xl border-2 border-gray-200 shadow-lg">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-bold">Portfolio Status</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-2xl font-playfair font-bold text-emerald-600">13</p>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Profit</p>
                </div>
              </div>
              <div className="w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                <div>
                  <p className="text-2xl font-playfair font-bold text-gray-600">03</p>
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Neutral</p>
                </div>
              </div>
              <div className="w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div>
                  <p className="text-2xl font-playfair font-bold text-rose-600">02</p>
                  <p className="text-xs font-bold text-rose-700 uppercase tracking-wider">Loss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Leadership --- */}
      <div className="px-16 py-6">
        <div className="flex justify-center gap-6 mb-8">
          {orgStructure.leadership.map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className={`relative p-6 rounded-2xl shadow-xl border-4 min-w-[400px]
                ${leader.type === 'primary' 
                  ? 'bg-gradient-to-br from-[#0F172A] to-[#1e293b] border-[#C9A961] text-white' 
                  : 'bg-white border-[#8B1538] text-[#0F172A]'}`}
            >
              <div className={`absolute -top-3 left-8 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg
                ${leader.type === 'primary' ? 'bg-[#C9A961] text-[#0F172A]' : 'bg-[#8B1538] text-white'}`}>
                {leader.role}
              </div>
              <h3 className="mt-2 font-playfair text-xl font-bold mb-1">{leader.name}</h3>
              <p className={`text-sm font-medium ${leader.type === 'primary' ? 'text-gray-400' : 'text-gray-600'}`}>
                Tenure: {leader.tenure}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Departments Grid --- */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {orgStructure.departments.map((dept, idx) => {
            const colors = {
              blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-600' },
              green: { border: 'border-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-700', badge: 'bg-emerald-600' },
              purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-600' }
            };
            // @ts-ignore
            const colorScheme = colors[dept.color];

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1), duration: 0.4 }}
                className={`bg-white rounded-xl border-2 ${colorScheme.border} shadow-lg overflow-hidden`}
              >
                {/* Department Header */}
                <div className={`${colorScheme.bg} p-4 border-b-2 ${colorScheme.border}`}>
                  <div className={`inline-block px-3 py-1 ${colorScheme.badge} text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2`}>
                    {dept.title}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {dept.head}
                  </p>
                </div>

                {/* Units List */}
                <div className="p-3 space-y-1.5">
                  {dept.units.map((unit, uIdx) => (
                    <div 
                      key={uIdx}
                      className={`p-2.5 rounded-lg border transition-all duration-200
                        ${unit.status === 'profit' ? 'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-50' : ''}
                        ${unit.status === 'loss' ? 'bg-rose-50/50 border-rose-200 hover:bg-rose-50' : ''}
                        ${unit.status === 'neutral' ? 'bg-gray-50 border-gray-200 hover:bg-gray-100' : ''}
                      `}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-gray-800 leading-tight flex-1">
                          {unit.name}
                        </span>
                        <StatusIndicator status={unit.status} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Support Functions --- */}
        <div className="flex justify-center gap-6">
          {orgStructure.support.map((func, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (idx * 0.1), duration: 0.3 }}
              className="bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-4 rounded-xl border-2 border-gray-300 shadow-md min-w-[360px]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0F172A] rounded-lg">
                  <Settings size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{func.title}</p>
                  <p className="text-sm font-semibold text-gray-800">{func.head}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Brand Anchor --- */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ========================================
// GOVERNANCE STRUCTURE SLIDE - Corporate Hierarchy Tree
// ========================================

// --- Reusable Node Component ---
interface NodeProps {
  role: string;
  title: string;
  variant?: 'chairman' | 'vice' | 'staff' | 'standard';
  delay?: number;
}

const GovNode = ({ role, title, variant = 'standard', delay = 0 }: NodeProps) => {
  
  const styles = {
    chairman: "bg-[#0F172A] text-white border-[#0F172A] shadow-2xl",
    vice: "bg-emerald-700 text-white border-emerald-700 shadow-xl",
    staff: "bg-gray-50 text-gray-700 border-gray-300 border-2",
    standard: "bg-white text-[#0F172A] border-gray-300 hover:border-[#8B1538] hover:shadow-lg"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative flex flex-col items-center justify-center px-6 py-4 rounded-xl border-2 transition-all duration-300 min-w-[160px] z-20 ${styles[variant]}`}
    >
      <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${variant === 'standard' || variant === 'staff' ? 'text-gray-500' : 'text-white/70'}`}>
        {role}
      </span>
      <h3 className="font-playfair font-bold text-lg leading-tight text-center">
        {title}
      </h3>
    </motion.div>
  );
};

export const GovernanceStructureSlide = () => {
  
  const operationalHeads = [
    { title: "DG W&R", role: "Director General" },
    { title: "COO", role: "Chief Operations" },
    { title: "ED (S)", role: "Services" },
    { title: "ED (A/FS)", role: "Aviation & Fin" },
    { title: "ED (IFT)", role: "Industry & Farm" },
    { title: "ED (F)", role: "Finance" },
    { title: "DHR", role: "Human Resources" },
    { title: "DMA", role: "Audit" },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      
      {/* --- Header --- */}
      <div className="px-16 pt-10 pb-6 border-b border-gray-100 bg-white relative z-30">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Oversight</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          Governance Structure
        </h1>
        <p className="text-lg text-gray-500 font-light mt-2">
          Board of Directors hierarchy and reporting lines
        </p>
      </div>

      {/* --- Main Chart Area --- */}
      <div className="flex-1 w-full flex flex-col items-center justify-center px-8 py-6 relative z-10">
        
        {/* LEVEL 1: Chairman & Secretary */}
        <div className="flex items-center gap-16 relative mb-12">
          
          {/* Chairman Node */}
          <div className="relative">
             <GovNode role="Chairman BOD" title="Adjutant General" variant="chairman" delay={0.1} />
             {/* Line Down */}
             <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-[3px] bg-gray-400" />
          </div>

          {/* Secretary Node (Staff Connection) */}
          <div className="relative">
             {/* Horizontal Staff Connector */}
             <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-[3px] bg-gray-400" />
             <GovNode role="Secretary AWT" title="Secy – COA & BOD" variant="staff" delay={0.2} />
          </div>
        </div>

        {/* LEVEL 2: MD AWT */}
        <div className="relative mb-12">
          <GovNode role="Vice Chairman BOD" title="Managing Director AWT" variant="vice" delay={0.3} />
          {/* Line Down to Splitter */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-[3px] bg-gray-400" />
        </div>

        {/* LEVEL 3: Operational Heads */}
        <div className="relative w-full px-4">
          
          {/* The Horizontal Spine */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -top-6 left-12 right-12 h-[3px] bg-gray-400 origin-center"
          />

          <div className="grid grid-cols-8 gap-3">
            {operationalHeads.map((node, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Vertical Drop Line */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: 24 }}
                  transition={{ delay: 0.6 + (idx * 0.05), duration: 0.3 }}
                  className="absolute -top-6 w-[3px] bg-gray-400"
                />
                
                <GovNode 
                  role={node.role} 
                  title={node.title} 
                  variant="standard" 
                  delay={0.7 + (idx * 0.08)} 
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- Background Elements --- */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538] z-30" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

    </div>
  );
};

// ========================================
// COMMITTEE OF ADMINISTRATION SLIDE - High Command Council
// ========================================

// --- Reusable Card Component ---
const CommitteeCard = ({ title, subtitle, icon: Icon, variant = 'standard', delay = 0 }: any) => {
  const styles = {
    head: "bg-[#0F172A] text-white border-[#0F172A] shadow-2xl scale-110", // The COAS
    pso: "bg-white text-[#0F172A] border-gray-200 hover:border-[#8B1538] hover:shadow-lg", // The Generals
    mgmt: "bg-gray-50 text-gray-700 border-gray-200 border-dashed" // MD & Secy
  };

  // @ts-ignore
  const style = styles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 min-w-[200px] z-10 ${style}`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 
        ${variant === 'head' ? 'bg-[#8B1538] text-white' : 'bg-gray-100 text-[#0F172A]'}`}>
        <Icon size={24} />
      </div>
      
      <h3 className="font-playfair font-bold text-lg leading-tight text-center">
        {title}
      </h3>
      {subtitle && (
        <p className={`text-xs font-bold uppercase tracking-wider mt-2 text-center 
          ${variant === 'head' ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export const CommitteeSlide = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      
      {/* --- Header --- */}
      <div className="px-16 pt-12 pb-8 border-b border-gray-100 bg-white relative z-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Governance</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          Committee of Administration
        </h1>
        <p className="text-xl text-gray-500 font-light mt-2">
          The supreme governing body overseeing strategic direction and policy.
        </p>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex-1 w-full flex flex-col items-center justify-center p-8 relative z-10">
        
        {/* BACKGROUND CONNECTION LINES (SVG) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            {/* Center Line Down */}
            <line x1="50%" y1="20%" x2="50%" y2="45%" stroke="#E2E8F0" strokeWidth="2" />
            
            {/* Horizontal Spine for PSOs */}
            <line x1="20%" y1="45%" x2="80%" y2="45%" stroke="#E2E8F0" strokeWidth="2" />
            
            {/* Vertical Drops for PSOs */}
            <line x1="20%" y1="45%" x2="20%" y2="52%" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="40%" y1="45%" x2="40%" y2="52%" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="60%" y1="45%" x2="60%" y2="52%" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="80%" y1="45%" x2="80%" y2="52%" stroke="#E2E8F0" strokeWidth="2" />

            {/* Bottom Connections */}
            <line x1="30%" y1="65%" x2="30%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="70%" y1="65%" x2="70%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* TIER 1: The Head (COAS) */}
        <div className="mb-12">
          <CommitteeCard 
            title="Chief of Army Staff"
            subtitle="& Chief of Defence Forces"
            icon={Crown}
            variant="head"
            delay={0.1}
          />
        </div>

        {/* TIER 2: The Principal Staff Officers (PSOs) */}
        <div className="flex gap-8 mb-16 w-full max-w-6xl justify-between px-12">
          <CommitteeCard 
            title="Adjutant General"
            subtitle="(AG)"
            icon={Shield}
            variant="pso"
            delay={0.2}
          />
          <CommitteeCard 
            title="Quarter Master General"
            subtitle="(QMG)"
            icon={Target}
            variant="pso"
            delay={0.3}
          />
          <CommitteeCard 
            title="Chief of General Staff"
            subtitle="(CGS)"
            icon={Users}
            variant="pso"
            delay={0.4}
          />
          <CommitteeCard 
            title="Chief of Logistics Staff"
            subtitle="(CLS)"
            icon={Truck}
            variant="pso"
            delay={0.5}
          />
        </div>

        {/* TIER 3: AWT Executive Management */}
        <div className="flex gap-24">
          <CommitteeCard 
            title="Managing Director"
            subtitle="AWT"
            icon={Briefcase}
            variant="mgmt"
            delay={0.6}
          />
          <CommitteeCard 
            title="Secretary"
            subtitle="AWT"
            icon={FileText}
            variant="mgmt"
            delay={0.7}
          />
        </div>

      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538] z-30" />
      
      {/* Decorative Watermark */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#0F172A" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#0F172A" strokeWidth="1" fill="none" />
        </svg>
      </div>

    </div>
  );
};

// ========================================
// AWT BOARD OF DIRECTORS SLIDE
// ========================================

interface BoardMemberProps {
  name: string;
  title: string;
  imagePath: string;
  isChairman?: boolean;
  delay?: number;
}

const BoardMemberCard = ({ name, title, imagePath, isChairman = false, delay = 0 }: BoardMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`relative bg-white rounded-lg border-2 ${isChairman ? 'border-[#8B1538] shadow-lg' : 'border-gray-200'} p-2.5 hover:shadow-lg transition-all group`}
    >
      {isChairman && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#8B1538] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          Chairman
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative w-full aspect-square mb-2 rounded-md overflow-hidden bg-gray-100">
        <img 
          src={imagePath} 
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image doesn't exist
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f3f4f6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="14" font-family="Arial"%3ENo Image%3C/text%3E%3C/svg%3E';
          }}
        />
        {isChairman && (
          <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-[#8B1538] flex items-center justify-center">
            <Crown size={12} className="text-white" />
          </div>
        )}
      </div>

      {/* Name & Title */}
      <div className="text-center">
        <h3 className="font-playfair text-xs font-bold text-[#0F172A] leading-tight mb-0.5">
          {name}
        </h3>
        <p className="text-[10px] text-gray-600 leading-tight">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export const AWTBoardSlide = () => {
  const boardMembers = [
    {
      name: "Lt Gen Azhar Waqas, HI(M)",
      title: "Chairman Adjutant General, Pakistan Army",
      imagePath: "/assets/people/azhar-waqas.jpg",
      isChairman: true
    },
    {
      name: "Lt Gen Nauman Mahmood, HI(M) (Retd)",
      title: "Managing Director AWT",
      imagePath: "/assets/people/nauman-mahmood.jpg"
    },
    {
      name: "Brig Salman Nazar, SI(M) (Retd)",
      title: "Secretary AWT",
      imagePath: "/assets/people/salman-nazar.jpg"
    },
    {
      name: "Maj Gen Dilawar Khan, HI(M)",
      title: "Director General Welfare & Rehabilitation",
      imagePath: "/assets/people/dilawar-khan.jpg"
    },
    {
      name: "Rizwan Ullah Khan",
      title: "Chief Operating Officer",
      imagePath: "/assets/people/rizwan-ullah.jpg"
    },
    {
      name: "Maj Gen Kamran Ali, HI(M) (Retd)",
      title: "Executive Director (A/FS)",
      imagePath: "/assets/people/kamran-ali.jpg"
    },
    {
      name: "Maj Gen Abid Latif, HI(M) (Retd)",
      title: "Executive Director (IFT)",
      imagePath: "/assets/people/abid-latif.jpg"
    },
    {
      name: "Maj Gen Syed Anis Akbar, HI(M) (Retd)",
      title: "Executive Director (S)",
      imagePath: "/assets/people/anis-akbar.jpg"
    },
    {
      name: "Malik Riffat Mahmood",
      title: "Executive Director Finance",
      imagePath: "/assets/people/riffat-mahmood.jpg"
    },
    {
      name: "Syed Faisal Karim",
      title: "Director HR",
      imagePath: "/assets/people/faisal-karim.jpg"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      
      {/* Header */}
      <div className="px-16 pt-8 pb-5 border-b border-gray-100 bg-white relative z-20">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Leadership</span>
        </div>
        <h1 className="font-playfair text-4xl font-bold text-[#0F172A]">
          AWT Board of Directors
        </h1>
        <p className="text-base text-gray-500 font-light mt-1">
          Executive leadership team guiding AWT's strategic vision
        </p>
      </div>

      {/* Board Members Grid */}
      <div className="flex-1 px-16 py-6">
        <div className="grid grid-cols-5 gap-4 h-full">
          {boardMembers.map((member, idx) => (
            <BoardMemberCard
              key={idx}
              name={member.name}
              title={member.title}
              imagePath={member.imagePath}
              isChairman={member.isChairman}
              delay={0.1 + idx * 0.05}
            />
          ))}
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>
    </div>
  );
};

// ========================================
// EMPLOYMENT TENURE POLICY SLIDE
// ========================================

export const TenurePolicySlide = () => {
  
  const policies = [
    {
      role: "Senior Leadership",
      ranks: "MD & Executive Directors",
      rankDetail: "Maj Gen (Retd)",
      tenure: "2 Years",
      icon: UserCheck,
      color: "border-l-[#8B1538]", // Brand Burgundy
      bgColor: "bg-[#8B1538]/5"
    },
    {
      role: "Management",
      ranks: "Secretary & Directors",
      rankDetail: "Brigadier & Below",
      tenure: "3 Years",
      icon: Users,
      color: "border-l-[#0F172A]", // Navy
      bgColor: "bg-[#0F172A]/5"
    },
    {
      role: "Support Staff",
      ranks: "JCOs / NCOs / OR",
      rankDetail: "Technical & Support",
      tenure: "4 - 5 Years",
      icon: Shield,
      color: "border-l-emerald-600", // Green
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden font-manrope flex flex-col">
      
      {/* --- Header --- */}
      <div className="px-16 pt-10 pb-6 border-b-2 border-gray-200 bg-white relative z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1.5 w-16 bg-[#8B1538] rounded-full" />
          <span className="text-[#8B1538] font-bold tracking-widest text-base uppercase">HR Governance</span>
        </div>
        <h1 className="font-playfair text-6xl font-bold text-[#0F172A] mb-3">
          Employment Tenure Policy
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl">
          Standardized engagement terms ensuring continuity and performance-based progression across all organizational tiers.
        </p>
      </div>

      {/* --- Main Content --- */}
      <div className="flex-1 px-16 py-10 flex flex-col justify-center">
        
        {/* 1. Contract Context Box - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 flex items-center gap-6 shadow-lg"
        >
          <div className="p-4 bg-white rounded-xl shadow-md text-[#0F172A]">
            <FileSignature size={32} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#0F172A] text-2xl mb-2 font-playfair">Contract Modalities</h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              All employees are engaged under strictly defined contracts, categorized as either <span className="font-bold text-[#0F172A] bg-white px-2 py-0.5 rounded">Fixed / Regular Term</span> or <span className="font-bold text-[#0F172A] bg-white px-2 py-0.5 rounded">Fixed / Consolidated Term</span>, ensuring legal compliance and operational clarity.
            </p>
          </div>
        </motion.div>

        {/* 2. Tenure Tiers (The Cards) - Enhanced */}
        <div className="grid grid-cols-3 gap-8 mb-12 relative">
          
          {/* Decorative connector */}
          <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-[#8B1538] via-[#0F172A] to-emerald-600 opacity-20 -z-10 rounded-full" />

          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
              className={`${policy.bgColor} p-8 rounded-2xl shadow-xl border-l-8 ${policy.color} group hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <policy.icon size={128} className="text-gray-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">{policy.role}</h3>
                    <h2 className="font-playfair text-3xl font-bold text-[#0F172A] leading-tight mb-2">{policy.ranks}</h2>
                    <span className="text-base font-medium text-gray-600 block">{policy.rankDetail}</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#0F172A]">
                    <policy.icon size={24} />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#0F172A] font-playfair">{policy.tenure}</span>
                    <span className="text-xl text-gray-500 font-medium">Contract Period</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. The Performance Gate (Bottom Flow) - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-8 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-5 flex-1">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <RefreshCw size={28} className="text-[#C9A961]" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-2 font-playfair">Performance Review Cycle</h4>
                <p className="text-gray-300 text-base">Extensions are strictly merit-based, subject to GHQ Confirmation.</p>
              </div>
            </div>

            <div className="h-16 w-px bg-gray-600" />

            <div className="flex items-center gap-8 px-6">
               <div className="flex flex-col items-center gap-2">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  <span className="font-bold text-sm text-center">Evaluation</span>
               </div>
               <div className="text-gray-500 text-2xl">→</div>
               <div className="flex flex-col items-center gap-2">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  <span className="font-bold text-sm text-center">GHQ Approval</span>
               </div>
               <div className="text-gray-500 text-2xl">→</div>
               <div className="flex flex-col items-center gap-2">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  <span className="font-bold text-sm text-center">Extension Granted</span>
               </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#8B1538] opacity-5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
