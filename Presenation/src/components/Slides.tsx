import React, { type ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: 'dark' | 'gradient' | 'mesh' | 'accent';
}

export const Slide: React.FC<SlideProps> = ({ 
  children, 
  className = '', 
  background = 'dark' 
}) => {
  const bgClasses = {
    dark: 'bg-deck-dark',
    gradient: 'bg-gradient-to-br from-deck-dark via-deck-bg to-deck-dark',
    mesh: 'bg-gradient-to-br from-purple-900/20 via-deck-dark to-cyan-900/20',
    accent: 'bg-gradient-to-br from-deck-accent/10 via-deck-dark to-deck-secondary/10'
  };

  return (
    <div className={`relative w-[1280px] h-[720px] ${bgClasses[background]} slide-noise overflow-hidden ${className}`}>
      {/* Decorative border frame */}
      <div className="absolute inset-4 border border-white/10 pointer-events-none" />
      
      {/* Content area */}
      <div className="relative h-full p-20 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  meta?: string;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ title, subtitle, meta }) => {
  return (
    <Slide background="mesh" className="animate-fade-in">
      <div className="absolute top-20 left-20">
        <div className="w-16 h-1 bg-deck-accent mb-6" />
      </div>
      
      <div className="max-w-4xl">
        <h1 className="font-display text-hero font-bold tracking-tight mb-8 leading-none">
          <span className="text-gradient-accent glow-accent">{title}</span>
        </h1>
        
        {subtitle && (
          <p className="text-3xl font-light text-white/80 mb-12 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {meta && (
          <div className="flex items-center gap-6 text-sm font-mono text-white/50 uppercase tracking-wider">
            <div className="w-12 h-px bg-white/30" />
            <span>{meta}</span>
          </div>
        )}
      </div>
      
      {/* Geometric accent */}
      <div className="absolute bottom-20 right-20 w-64 h-64 border border-deck-accent/30 rotate-45" />
      <div className="absolute bottom-32 right-32 w-48 h-48 border border-deck-secondary/20 rotate-45" />
    </Slide>
  );
};

interface ContentSlideProps {
  title: string;
  children: ReactNode;
  number?: string;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({ title, children, number }) => {
  return (
    <Slide background="dark" className="animate-slide-in">
      <div className="grid grid-cols-12 gap-8 h-full">
        {/* Left column - Title and number */}
        <div className="col-span-5 flex flex-col justify-center">
          {number && (
            <div className="font-mono text-6xl font-bold text-deck-accent/40 mb-4">
              {number}
            </div>
          )}
          <h2 className="font-display text-6xl font-bold leading-tight text-white">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-deck-accent to-deck-secondary mt-8" />
        </div>
        
        {/* Right column - Content */}
        <div className="col-span-7 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </Slide>
  );
};

interface DataSlideProps {
  title: string;
  stats: Array<{ value: string; label: string; change?: string }>;
}

export const DataSlide: React.FC<DataSlideProps> = ({ title, stats }) => {
  return (
    <Slide background="gradient" className="animate-fade-in">
      <div className="mb-16">
        <h2 className="font-display text-6xl font-bold text-white mb-4">{title}</h2>
        <div className="w-32 h-1 bg-deck-accent" />
      </div>
      
      <div className="grid grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="relative p-8 border border-white/10 hover:border-deck-accent/50 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="font-display text-7xl font-bold text-gradient-accent mb-4">
              {stat.value}
            </div>
            <div className="text-xl text-white/70 mb-2">{stat.label}</div>
            {stat.change && (
              <div className="text-sm font-mono text-deck-secondary">
                {stat.change}
              </div>
            )}
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-deck-accent" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-deck-accent" />
          </div>
        ))}
      </div>
    </Slide>
  );
};

interface SplitSlideProps {
  left: ReactNode;
  right: ReactNode;
  split?: '50-50' | '60-40' | '40-60';
}

export const SplitSlide: React.FC<SplitSlideProps> = ({ left, right, split = '50-50' }) => {
  const gridClasses = {
    '50-50': 'grid-cols-2',
    '60-40': 'grid-cols-[3fr_2fr]',
    '40-60': 'grid-cols-[2fr_3fr]'
  };

  return (
    <Slide background="dark" className="animate-fade-in">
      <div className={`grid ${gridClasses[split]} gap-0 h-full -m-20`}>
        <div className="flex items-center justify-center p-20 border-r border-white/10">
          {left}
        </div>
        <div className="flex items-center justify-center p-20">
          {right}
        </div>
      </div>
    </Slide>
  );
};

interface QuoteSlideProps {
  quote: string;
  author: string;
  role?: string;
}

export const QuoteSlide: React.FC<QuoteSlideProps> = ({ quote, author, role }) => {
  return (
    <Slide background="mesh" className="animate-scale-in">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-8xl text-deck-accent/30 mb-8 font-serif">"</div>
        <blockquote className="font-display text-5xl font-medium leading-tight text-white mb-12">
          {quote}
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-deck-accent" />
          <div className="text-right">
            <div className="text-2xl font-semibold text-white">{author}</div>
            {role && <div className="text-lg text-white/60 mt-1">{role}</div>}
          </div>
        </div>
      </div>
    </Slide>
  );
};

interface ClosingSlideProps {
  title: string;
  subtitle?: string;
  contact?: Array<{ label: string; value: string }>;
}

export const ClosingSlide: React.FC<ClosingSlideProps> = ({ title, subtitle, contact }) => {
  return (
    <Slide background="accent" className="animate-fade-in">
      <div className="flex flex-col justify-center items-start">
        <h2 className="font-display text-8xl font-bold text-white mb-8 leading-none">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-3xl text-white/80 mb-16 max-w-3xl">
            {subtitle}
          </p>
        )}
        
        {contact && (
          <div className="space-y-4">
            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-6 font-mono text-lg">
                <span className="text-white/50 uppercase tracking-wider w-32">{item.label}</span>
                <span className="text-deck-accent font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </Slide>
  );
};
