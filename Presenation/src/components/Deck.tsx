import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, DollarSign, Settings } from 'lucide-react';
import { 
  TitleSlide, 
  SectionSlide, 
  ContentSlide, 
  BulletList, 
  DataCard, 
  TwoColumn,
  ExecutiveQuote,
  TimelineSlide,
  StatHighlight,
  OrgChartSlide,
  FinancialSlide,
  OrgStructureSlide,
  GovernanceStructureSlide,
  CommitteeSlide,
  AWTBoardSlide,
  TenurePolicySlide
} from './ExecutiveSlides';
import { ProfitabilitySlide } from './ProfitabilitySlide';
import { GeographySlide } from './GeographySlide';
import { CalendarSlide } from './CalendarSlide';

// Specialized slides for leadership, governance, and operational content
import { 
  ServicesSlide, 
  AviationSlide, 
  IndustriesSlide, 
  CooSlide, 
  FinanceSlide,
  AWTGroupStructureSlide,
  MailProcessingSlide,
  SecretaryRolesSlide,
  SecretaryDetailedRolesSlide,
  SecretaryOfficeTasksSlide,
  BODReviewsSlide,
  MDAppointmentSlide,
  GMAdminPlazaSlide,
  AWTRegulatorsSlide,
  WorkingRoutineSlide,
  DressCodeSlide,
  MilestoneAchievementsSlide,
  BusinessAgreementsSlide
} from './SpecializedSlides';

// Additional slides - continuation of presentation content
import {
  RecentMOUSigningsSlide,
  AWTOperationsGallerySlide,
  FutureCommitmentSlide,
  ThankYouSlide
} from './AdditionalSlides';

const Deck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // AWT Heritage Timeline Data
  const awtTimelineData = [
    { year: "1971", title: "Inception", items: ["Army Welfare Trust Established"] },
    { year: "1972", title: "Agriculture", items: ["Army Stud Farm (Probynabad)"] },
    { year: "1982", title: "Travel", items: ["Askari Travels & Tours"] },
    { year: "1984", title: "Expansion", items: ["Army Stud Farm (Boylegunj)", "Army Welfare Sugar Mills"] },
    { year: "1990", title: "Diversification", items: ["Askari Woolen Mill", "Askari Real Estate", "Blue Lagoon & Mess", "Askari Shoes"] },
    { year: "1991", title: "Finance", items: ["Army Welfare Scheme", "Askari Bank"] },
    { year: "1992", title: "Industry", items: ["Askari Pharmaceuticals", "Askari Cement (Nizampur)"] },
    { year: "1995", title: "Services", items: ["Askari Aviation", "Askari General Insurance"] },
    { year: "1996", title: "Logistics", items: ["Askari Cement Ltd", "Askari Guards", "Mobil Askari Lubricants"] },
    { year: "2002-09", title: "Energy & Agri", items: ["Askari Fuels (2002)", "Askari Seeds (2004)", "Askari Enterprises (2009)"] },
    { year: "2014", title: "Security", items: ["Fauji Security Services", "Blue Lagoon Faisalabad"] },
    { year: "2017", title: "Investment", items: ["MEDASK", "AWT Investments"] },
    { year: "2018-20", title: "Corporate", items: ["Askari Life Assurance", "Askari Corporate Tower", "Jolidays Pvt Ltd"] },
    { year: "2024", title: "Future Horizons", items: ["Attabad Lake View Resort", "Riverview South AWT/DHA JV"] },
  ];

  // AWT Presentation Content - Executive Safe Implementation
  const slides = [
    // Slide 1: Title (Dark - 20% Rule)
    <TitleSlide
      key="title"
      companyName="Army Welfare Trust"
      tagline="Serving Those Who Served"
      presentedBy="Executive Presentation"
      date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
    />,

    // Slide 2: Section Divider (Dark - 20% Rule)
    <SectionSlide
      key="section-foundation"
      sectionNumber={1}
      title="Our Foundation"
      subtitle="Six decades of commitment to excellence and service"
    />,

    // Slide 3: Legacy (Light - 80% Rule)
    <ContentSlide
      key="legacy"
      title="A Legacy of Service"
      subtitle="Established 1971 | Six Decades of Excellence"
    >
      <BulletList
        numbered
        items={[
          "Founded to provide welfare and support to military personnel and their families",
          "Diversified into commercial ventures to generate sustainable revenue",
          "Created employment opportunities for veterans and their dependents",
          "Maintained unwavering commitment to quality and national development"
        ]}
      />
    </ContentSlide>,

    // Slide 4: Heritage Timeline (Light - 80% Rule) - NEW
    <TimelineSlide
      key="timeline"
      title="Our Journey of Excellence"
      subtitle="Five decades of strategic growth and national contribution (1971–2024)"
      data={awtTimelineData}
    />,

    // Slide 5: Business Portfolio (Light - 80% Rule)
    <ContentSlide
      key="portfolio"
      title="Integrated Business Portfolio"
      subtitle="Strategic Diversification Across Key Sectors"
    >
      <div className="grid grid-cols-3 gap-8">
        <DataCard
          label="Manufacturing"
          value="12+"
          subtitle="Industrial Units"
          trend="positive"
        />
        <DataCard
          label="Real Estate"
          value="8"
          subtitle="Major Projects"
          trend="positive"
        />
        <DataCard
          label="Services"
          value="20+"
          subtitle="Business Units"
          trend="positive"
        />
      </div>
      
      <div className="mt-12 space-y-4 text-exec-text-secondary">
        <p className="text-lg leading-relaxed">
          <strong className="text-exec-text-primary">Core Sectors:</strong> Security Services, Cement Manufacturing, Real Estate Development, 
          Pharmaceutical Production, Food & Beverages, Logistics & Transportation
        </p>
      </div>
    </ContentSlide>,

    // Slide 6: Core Values (Light - 80% Rule)
    <ContentSlide
      key="values"
      title="Core Values & Principles"
      subtitle="The Foundation of Our Success"
    >
      <TwoColumn
        left={
          <BulletList
            items={[
              "Integrity in all business dealings and operations",
              "Excellence as the standard for every endeavor",
              "Innovation to drive sustainable growth",
              "Social responsibility to our community"
            ]}
          />
        }
        right={
          <ExecutiveQuote
            text="Our commitment extends beyond profit to meaningful national contribution"
            author="AWT Leadership"
            role="Strategic Vision 2030"
          />
        }
        ratio="60-40"
      />
    </ContentSlide>,

    // Slide 7: Impact (Light - 80% Rule)
    <ContentSlide
      key="impact"
      title="Impact & Achievements"
      subtitle="Measurable Results, Lasting Contribution"
    >
      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-8">
          <DataCard
            label="Employment Generated"
            value="50,000+"
            subtitle="Direct & Indirect Jobs"
            trend="positive"
          />
          <DataCard
            label="Welfare Support"
            value="100,000+"
            subtitle="Families Supported"
            trend="positive"
          />
        </div>
        
        <BulletList
          items={[
            "Consistent revenue generation for welfare programs and pension support",
            "Infrastructure development contributing to national economic growth",
            "Technology transfer and skill development initiatives for veterans",
            "Sustainable business practices ensuring long-term organizational viability"
          ]}
        />
      </div>
    </ContentSlide>,

    // Slide 8: AWT AT A GLANCE (Light - 80% Rule) - NEW
    <ContentSlide
      key="awt-glance"
      title="AWT at a Glance"
      subtitle="Key Performance Indicators & Organizational Scale"
    >
      <div className="space-y-10">
        {/* Top Row Stats */}
        <div className="grid grid-cols-3 gap-6">
          <StatHighlight
            value="20+"
            label="Business Units"
            sublabel="& still growing"
          />
          <StatHighlight
            value="50+ Bn"
            label="Company Worth"
            sublabel="Pakistani Rupees"
          />
          <StatHighlight
            value="5+ Bn"
            label="Tax Contribution"
            sublabel="To National Exchequer"
          />
        </div>

        {/* Bottom Row Stats */}
        <div className="grid grid-cols-2 gap-6">
          <StatHighlight
            value="32,000+"
            label="Direct & Indirect Employees"
            sublabel="Including 15,986 ex-Army personnel"
          />
          <StatHighlight
            value="100 Bn"
            label="Market Value"
            sublabel="Asset Base (Book Value: 33.4 Bn)"
          />
        </div>

        {/* Footer Data */}
        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200">
          <div className="bg-exec-bg-secondary p-6 rounded-lg">
            <p className="text-sm text-exec-text-secondary uppercase tracking-wider mb-2">Welfare Contribution</p>
            <p className="font-playfair text-3xl font-bold text-exec-brand mb-1">Rs 2,080 Mn</p>
            <p className="text-sm text-exec-text-secondary">Last 5 years to GHQ W&R Fund</p>
            <p className="text-sm text-exec-success mt-2">Rs 640 Mn contributed in 2024-25</p>
          </div>
          
          <div className="bg-exec-bg-secondary p-6 rounded-lg">
            <p className="text-sm text-exec-text-secondary uppercase tracking-wider mb-2">Annual Tax</p>
            <p className="font-playfair text-3xl font-bold text-exec-brand mb-1">Rs 5.3 Bn</p>
            <p className="text-sm text-exec-text-secondary">Contribution to national exchequer</p>
          </div>
        </div>
      </div>
    </ContentSlide>,

    // Slide 9: Mandate Manifestation (Light - 80% Rule) - NEW
    <ContentSlide
      key="mandate"
      title="AWT Mandate Manifestation"
      subtitle="Our Core Purpose & Mission Impact"
    >
      <div className="px-16 py-4">
        {/* Mandate Quote - Compact */}
        <div className="mb-6">
          <div className="border-l-4 border-[#8B1538] pl-8 py-4">
            <p className="font-playfair text-2xl font-bold text-[#0F172A] leading-tight mb-3">
              "Undertake profitable business ventures for funding welfare and rehabilitation of Ex-Servicemen and wards of Shuhada"
            </p>
            <p className="text-gray-600 font-semibold">Mandate assigned to AWT</p>
          </div>
        </div>

        {/* Four Key Metrics - Compact Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Manpower */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#0F172A]">Manpower</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              AWT employs around <strong className="text-[#0F172A]">32,007 persons</strong> including ex-Army personnel: 
              <span className="block mt-1.5 text-sm">
                <strong className="text-[#8B1538]">150 Officers</strong> • <strong className="text-[#8B1538]">15,836 JCOs/Soldiers</strong>
              </span>
            </p>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#0F172A]">Infrastructure Setup</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Group of <strong className="text-[#0F172A]">Twenty Business Units</strong> with asset base:
              <span className="block mt-1.5 text-sm">
                <strong className="text-[#8B1538]">Book Value: Rs 33.4 Bn</strong><br />
                <strong className="text-[#8B1538]">Market Value: Rs 100 Bn (approx)</strong>
              </span>
            </p>
          </motion.div>

          {/* Welfare Contribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#0F172A]">Configuration Complete</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              AWT has contributed <strong className="text-[#0F172A]">Rs 2,080 Mn</strong> during the last 5 years:
              <span className="block mt-1.5 text-sm">
                <strong className="text-[#8B1538]">Rs 640 Mn</strong> contributed in year <strong className="text-[#8B1538]">2024-25</strong> towards GHQ W&R Fund
              </span>
            </p>
          </motion.div>

          {/* Taxation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#0F172A]">Taxation</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Annual tax contribution to national exchequer by AWT is around:
              <span className="block mt-1.5">
                <strong className="text-[#8B1538] text-xl">Rs 5.3 Bn</strong>
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </ContentSlide>,

    // Slide 10: Governance Structure (Light - 80% Rule) - NEW
    <GovernanceStructureSlide key="governance" />,

    // Slide 11: Committee of Administration - NEW
    <CommitteeSlide key="committee" />,

    // Slide 12: AWT Board of Directors - NEW
    <AWTBoardSlide key="awt-board" />,

    // Slide 13: Employment Tenure Policy - NEW
    <TenurePolicySlide key="tenure-policy" />,

    // Slide 14: Financial Performance (Light - 80% Rule) - NEW
    <FinancialSlide key="financial" />,

    // Slide 15: Profitability State - NEW
    <ProfitabilitySlide key="profitability" />,

    // Slide 16: Business Structure (Light - 80% Rule) - NEW
    <OrgStructureSlide key="org-structure" />,

    // Slide 13: Geographic Footprint (Light - 80% Rule) - NEW
    <GeographySlide key="geography" />,

    // Slide 14: AWT Group Structure - NEW
    <AWTGroupStructureSlide key="awt-structure" />,

    // Slide 15: Mail Processing Workflow - NEW
    <MailProcessingSlide key="mail-processing" />,

    // Slide 16: Secretary Roles Overview - NEW
    <SecretaryRolesSlide key="secretary-roles" />,

    // Slide 17: Secretary Detailed Roles - NEW
    <SecretaryDetailedRolesSlide key="secretary-detailed" />,

    // Slide 18: Secretary Office Tasks - NEW
    <SecretaryOfficeTasksSlide key="secretary-tasks" />,

    // Slide 19: Services Sector Leadership - NEW
    <ServicesSlide key="services" />,

    // Slide 20: Aviation & Finance Leadership - NEW
    <AviationSlide key="aviation" />,

    // Slide 21: Industries & Food Sector Leadership - NEW
    <IndustriesSlide key="industries" />,

    // Slide 22: COO & Secretariat - NEW
    <CooSlide key="coo" />,

    // Slide 23: Finance & Administration - NEW
    <FinanceSlide key="finance" />,

    // Slide 24: BOD Reviews/Meetings - NEW
    <BODReviewsSlide key="bod-reviews" />,

    // Slide 25: MD Appointment Procedures - NEW
    <MDAppointmentSlide key="md-appointment" />,

    // Slide 26: Board Meetings Schedule 2026 - NEW
    <CalendarSlide key="calendar" />,

    // Slide 27: GM Admin & Plaza Roles - NEW
    <GMAdminPlazaSlide key="gm-admin-plaza" />,

    // Slide 28: AWT Regulators
    <AWTRegulatorsSlide key="awt-regulators" />,

    // Slide 29: Working Routine AWT
    <WorkingRoutineSlide key="working-routine" />,

    // Slide 30: Dress Code
    <DressCodeSlide key="dress-code" />,

    // Slide 31: Milestone Achievements
    <MilestoneAchievementsSlide key="milestone-achievements" />,

    // Slide 32: Business Agreements
    <BusinessAgreementsSlide key="business-agreements" />,

    // Slide 33: Recent MOU Signings
    <RecentMOUSigningsSlide key="recent-mou-signings" />,

    // Slide 34: AWT Operations Gallery
    <AWTOperationsGallerySlide key="awt-operations-gallery" />,

    // Slide 35: Future Commitment
    <FutureCommitmentSlide key="future-commitment" />,

    // Slide 36: Thank You & Welcome
    <ThankYouSlide key="thank-you" />,
  ];

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-exec-bg-secondary overflow-hidden">
      
      {/* Current Slide */}
      <div key={currentSlide} className="w-full h-full">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls - Clean & Functional */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg">
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentSlide === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-exec-text-primary hover:bg-exec-brand hover:text-white'
          }`}
        >
          ← Previous
        </button>

        {/* Slide Indicator */}
        <div className="flex items-center gap-2 px-4">
          <span className="font-semibold text-exec-brand">{currentSlide + 1}</span>
          <span className="text-gray-400">/</span>
          <span className="text-exec-text-secondary">{slides.length}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentSlide === slides.length - 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-exec-text-primary hover:bg-exec-brand hover:text-white'
          }`}
        >
          Next →
        </button>
      </div>

      {/* Keyboard Shortcut Hint */}
      <div className="fixed top-8 right-8 text-xs text-gray-400 font-manrope tracking-wider">
        Use Arrow Keys to Navigate
      </div>
    </div>
  );
};

export default Deck;
