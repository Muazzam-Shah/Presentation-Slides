// ==================== ADDITIONAL SLIDES ====================
// Continuation of presentation slides - separated to maintain manageable file size
// This file contains extended content slides for the AWT executive presentation

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Building2, Users, Briefcase, Award, Target, TrendingUp, Heart } from 'lucide-react';

// ==================== RECENT MOU SIGNINGS SLIDE ====================
export const RecentMOUSigningsSlide = () => {
  const mouSignings = [
    {
      title: 'MOU signing ceremony between Askari Enterprises & Guozhong Chaungke New Energy Technology Tianjin',
      image: '/assets/agreements/askari-guozhong.jpg',
      date: '2025',
      description: 'Strategic partnership in new energy technology and sustainable solutions'
    },
    {
      title: 'MOU signing ceremony between Army Welfare Trust (AWT) & JazzCash held on 02 Jul 2025',
      image: '/assets/agreements/awt-jazzcash-2025.jpg',
      date: '02 Jul 2025',
      description: 'Digital financial services collaboration and fintech innovation'
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-8 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Strategic Partnerships 2025</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
              Recent MOU Signings
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Latest strategic agreements strengthening AWT's business ecosystem
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#8B1538]/10 flex items-center justify-center">
            <Handshake className="w-8 h-8 text-[#8B1538]" />
          </div>
        </div>
      </div>

      {/* Content - 2 Column Grid */}
      <div className="flex-1 px-16 py-12 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-10">
            {mouSignings.map((mou, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#8B1538]/30 transition-all group"
              >
                {/* Image Container */}
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={mou.image}
                    alt={mou.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
                    <Handshake className="w-20 h-20 mb-4 opacity-40" />
                    <p className="text-base font-medium opacity-60">MOU Signing Ceremony</p>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-[#8B1538] text-white px-5 py-3 rounded-xl shadow-lg">
                    <span className="text-sm font-bold uppercase tracking-wide">{mou.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-[#0F172A] mb-4 leading-tight">
                    {mou.title}
                  </h3>
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-1 h-16 bg-[#8B1538] rounded-full flex-shrink-0 mt-1" />
                    <p className="text-gray-600 text-base leading-relaxed">
                      {mou.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#8B1538]/5 border border-[#8B1538]/20 px-4 py-2 rounded-lg">
                    <Handshake className="w-4 h-4 text-[#8B1538]" />
                    <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wide">Strategic Partnership</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-10 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-playfair text-xl font-bold">Strategic Growth Partnerships</p>
                  <p className="text-gray-300 text-sm mt-1">Expanding AWT's global footprint through strategic collaborations</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#C9A961]">2025</p>
                <p className="text-sm text-gray-400">Active Expansion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ==================== AWT OPERATIONS GALLERY SLIDE ====================
export const AWTOperationsGallerySlide = () => {
  const operations = [
    {
      title: 'Executive Leadership',
      image: '/assets/operations/leadership.jpg',
      icon: Award,
      description: 'Strategic decision-making and corporate governance'
    },
    {
      title: 'Business Operations',
      image: '/assets/operations/business-ops.jpg',
      icon: Briefcase,
      description: 'Day-to-day operational excellence across all verticals'
    },
    {
      title: 'Team Collaboration',
      image: '/assets/operations/team-collab.jpg',
      icon: Users,
      description: 'Cross-functional teamwork driving organizational success'
    },
    {
      title: 'Corporate Facilities',
      image: '/assets/operations/facilities.jpg',
      icon: Building2,
      description: 'World-class infrastructure supporting AWT operations'
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Operational Excellence</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          AWT Operations
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          A glimpse into our professional work environment and operational standards
        </p>
      </div>

      {/* Content - 2x2 Grid */}
      <div className="flex-1 px-16 py-10 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-8">
            {operations.map((operation, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#8B1538]/30 transition-all group"
              >
                {/* Image Container */}
                <div className="relative h-72 bg-gray-100 overflow-hidden">
                  <img
                    src={operation.image}
                    alt={operation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
                    <operation.icon className="w-16 h-16 mb-4 opacity-40" />
                    <p className="text-sm font-medium opacity-60">{operation.title}</p>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                      <operation.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#0F172A]">
                      {operation.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {operation.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ==================== FUTURE COMMITMENT SLIDE ====================
export const FutureCommitmentSlide = () => {
  const commitments = [
    {
      icon: TrendingUp,
      title: 'Financial Excellence',
      description: 'Maximize net profit while building on our strong financial foundation'
    },
    {
      icon: Heart,
      title: 'Welfare Focus',
      description: 'Enhance contribution to the welfare of Army personnel and their families'
    },
    {
      icon: Users,
      title: 'Opportunity Creation',
      description: 'Create more opportunities for retired soldiers and officers'
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-8 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Our Vision Forward</span>
        </div>
        <h1 className="font-playfair text-6xl font-bold text-[#0F172A]">
          Future Commitment
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 py-12 flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 p-10 shadow-lg">
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                Building on the strong financial foundation established during the consolidation phase, AWT aims to{' '}
                <strong className="text-[#0F172A] font-bold">maximize net profit</strong> while{' '}
                <strong className="text-[#0F172A] font-bold">enhancing its contribution to the welfare of Army personnel</strong>. 
                Simultaneously, we are committed to creating more opportunities for retired soldiers and officers, fulfilling our mission with dedication and purpose.
              </p>
            </div>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {commitments.map((commitment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-[#8B1538] flex items-center justify-center mb-4">
                  <commitment.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-2">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* IN SHAA ALLAH Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B1538] opacity-10 rounded-full -mr-32 -mt-32" />
            <div className="relative flex items-center justify-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="font-playfair text-5xl font-bold text-[#C9A961] mb-2">
                  IN SHAA ALLAH
                </p>
                <p className="text-gray-300 text-lg">
                  With determination and faith, we move forward
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'radial-gradient(#8B1538 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>
    </div>
  );
};

// ==================== THANK YOU SLIDE ====================
export const ThankYouSlide = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden font-manrope flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#8B1538] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-16">
        {/* Logo/Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#8B1538] opacity-20 rounded-full animate-ping" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6B0F28] flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-bold text-white">AWT</span>
            </div>
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="font-playfair text-8xl font-bold text-white mb-6">
            Thank You
          </h1>
          <div className="h-1 w-32 bg-[#C9A961] mx-auto mb-8" />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-4xl text-gray-300 font-light mb-4">
            & Welcome
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Army Welfare Trust - Serving Those Who Served
          </p>
        </motion.div>

        {/* Footer Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#C9A961]" />
            <span className="text-gray-400 text-sm uppercase tracking-widest">Excellence</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#C9A961]" />
            <span className="text-gray-400 text-sm uppercase tracking-widest">Integrity</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#C9A961]" />
            <span className="text-gray-400 text-sm uppercase tracking-widest">Service</span>
          </div>
        </motion.div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};
