import React from 'react';
import { Slide } from './Slides';
import { DepartmentSlide } from './DepartmentSlide';
import { motion } from 'framer-motion';
import { Shield, Users, FileText, Building2, ChevronRight, CheckCircle2, Info, TrendingUp, Factory, PiggyBank, Home, Handshake } from 'lucide-react';

interface ProblemSlideProps {
  title: string;
  problems: string[];
}

export const ProblemSlide: React.FC<ProblemSlideProps> = ({ title, problems }) => {
  return (
    <Slide background="dark" className="animate-slide-in">
      <div className="grid grid-cols-12 gap-16 h-full">
        {/* Left side - Large title */}
        <div className="col-span-4 flex items-center">
          <div>
            <div className="w-2 h-32 bg-deck-accent mb-8" />
            <h2 className="font-display text-7xl font-bold leading-none text-white">
              {title}
            </h2>
          </div>
        </div>
        
        {/* Right side - Problems list */}
        <div className="col-span-8 flex flex-col justify-center space-y-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group relative pl-12 py-6 border-l-2 border-white/20 hover:border-deck-accent transition-all duration-300"
            >
              <div className="absolute left-[-10px] top-8 w-4 h-4 bg-deck-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-sm text-deck-accent mb-2">0{index + 1}</div>
              <p className="text-2xl font-medium text-white/90 leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

interface SolutionSlideProps {
  title: string;
  description: string;
  features: Array<{ icon: string; title: string; description: string }>;
}

export const SolutionSlide: React.FC<SolutionSlideProps> = ({ title, description, features }) => {
  return (
    <Slide background="accent" className="animate-fade-in">
      <div className="mb-12">
        <h2 className="font-display text-7xl font-bold text-white mb-6">{title}</h2>
        <p className="text-2xl text-white/70 max-w-3xl leading-relaxed">{description}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative p-8 bg-deck-dark/50 border border-white/10 hover:border-deck-secondary/50 transition-all duration-300"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-base text-white/60 leading-relaxed">{feature.description}</p>
            
            {/* Animated corner */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-deck-secondary group-hover:w-full transition-all duration-300" />
          </div>
        ))}
      </div>
    </Slide>
  );
};

interface TimelineSlideProps {
  title: string;
  events: Array<{ period: string; title: string; description: string }>;
}

export const TimelineSlide: React.FC<TimelineSlideProps> = ({ title, events }) => {
  return (
    <Slide background="gradient" className="animate-fade-in">
      <div className="mb-16">
        <h2 className="font-display text-6xl font-bold text-white mb-4">{title}</h2>
        <div className="w-32 h-1 bg-deck-accent" />
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-deck-accent via-deck-secondary to-deck-accent/20" />
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative pl-16 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 bg-deck-accent rounded-full border-4 border-deck-dark group-hover:scale-150 transition-transform duration-300" />
              
              <div className="font-mono text-sm text-deck-secondary mb-2 uppercase tracking-wider">
                {event.period}
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

interface TechStackSlideProps {
  title: string;
  stacks: Array<{ category: string; technologies: string[] }>;
}

export const TechStackSlide: React.FC<TechStackSlideProps> = ({ title, stacks }) => {
  return (
    <Slide background="dark" className="animate-slide-in">
      <div className="mb-12">
        <h2 className="font-display text-6xl font-bold text-white mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-deck-accent to-deck-secondary" />
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {stacks.map((stack, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-mono text-sm text-deck-accent uppercase tracking-wider mb-4">
              {stack.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {stack.technologies.map((tech, techIndex) => (
                <div 
                  key={techIndex}
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:border-deck-secondary hover:bg-deck-secondary/10 transition-all duration-300 font-medium text-white"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
};

interface TeamSlideProps {
  title: string;
  members: Array<{ name: string; role: string; bio?: string }>;
}

export const TeamSlide: React.FC<TeamSlideProps> = ({ title, members }) => {
  return (
    <Slide background="mesh" className="animate-fade-in">
      <div className="mb-12">
        <h2 className="font-display text-6xl font-bold text-white mb-4">{title}</h2>
        <div className="w-32 h-1 bg-deck-accent" />
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {members.map((member, index) => (
          <div 
            key={index}
            className="group relative p-8 border border-white/10 hover:border-deck-accent/50 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-deck-accent to-deck-secondary flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                {member.name.charAt(0)}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <div className="text-sm font-mono text-deck-secondary uppercase tracking-wider mb-3">
                  {member.role}
                </div>
                {member.bio && (
                  <p className="text-sm text-white/60 leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
};

interface AgendaSlideProps {
  title: string;
  items: string[];
}

export const AgendaSlide: React.FC<AgendaSlideProps> = ({ title, items }) => {
  return (
    <Slide background="gradient" className="animate-fade-in">
      <div className="grid grid-cols-12 gap-16 h-full">
        <div className="col-span-5 flex items-center">
          <div>
            <h2 className="font-display text-7xl font-bold text-white leading-none mb-8">
              {title}
            </h2>
            <div className="w-32 h-1 bg-deck-accent" />
          </div>
        </div>
        
        <div className="col-span-7 flex items-center">
          <div className="space-y-6 w-full">
            {items.map((item, index) => (
              <div 
                key={index}
                className="group flex items-center gap-8 p-6 hover:bg-white/5 transition-all duration-300"
              >
                <div className="font-display text-5xl font-bold text-deck-accent/40 group-hover:text-deck-accent transition-colors w-20">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-2xl font-medium text-white/90 group-hover:text-white transition-colors">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

// --- Services Sector Slide ---
export const ServicesSlide = () => {
  return (
    <DepartmentSlide 
      title="Services Sector"
      subtitle="Security, Real Estate, and Corporate Services Portfolio"
      head={{
        name: "Syed Anis Akbar",
        rank: "Maj Gen (Retd), HI(M)",
        role: "Executive Director (Services)",
        image: "/assets/people/anis-akbar.jpg" 
      }}
      team={[
        { name: "CEO AGL", role: "Askari Guards Ltd", image: "/assets/people/ceo-agl.jpg" },
        { name: "CEO FSS", role: "Fauji Security Svcs", image: "/assets/people/ceo-fss.jpg" },
        { name: "CEO RE", role: "Real Estate", image: "/assets/people/ceo-re.jpg" },
        { name: "CEO AE", role: "Askari Enterprises", image: "/assets/people/ceo-ae.jpg" },
        { name: "CEO BL", role: "Blue Lagoon", image: "/assets/people/ceo-bl.jpg" },
      ]}
    />
  );
};

// --- Aviation & Finance Slide ---
export const AviationSlide = () => {
  return (
    <DepartmentSlide 
      title="Aviation & Finance"
      subtitle="Strategic Investments and Financial Services Portfolio"
      head={{
        name: "Kamran Ali",
        rank: "Maj Gen (Retd), HI(M)",
        role: "Executive Director (A&FS)",
        image: "/assets/people/kamran-ali.jpg"
      }}
      team={[
        { name: "CEO AGICO", role: "Askari General Insurance", image: "/assets/people/ceo-agico.jpg" },
        { name: "CEO AWTIL", role: "AWT Investments Ltd", image: "/assets/people/ceo-awtil.jpg" },
        { name: "CEO ALACO", role: "Askari Life Assurance", image: "/assets/people/ceo-alaco.jpg" },
        { name: "CEO ATW", role: "Askari Travel Wing", image: "/assets/people/ceo-atw.jpg" },
        { name: "CEO AAS", role: "Askari Aviation Svcs", image: "/assets/people/ceo-aas.jpg" },
      ]}
    />
  );
};

// --- Industries & Food Sector Slide ---
export const IndustriesSlide = () => {
  return (
    <DepartmentSlide 
      title="Industries & Food Sector"
      subtitle="Manufacturing, Agriculture, and Consumer Goods Portfolio"
      head={{
        name: "Muhammad Aslam",
        rank: "Maj Gen (Retd), HI(M)",
        role: "Executive Director (I&FS)",
        image: "/assets/people/muhammad-aslam.jpg"
      }}
      team={[
        { name: "CEO AWM", role: "Askari Woolen Mills", image: "/assets/people/ceo-awm.jpg" },
        { name: "CEO ASM", role: "Askari Sugar Mills", image: "/assets/people/ceo-asm.jpg" },
        { name: "CEO AS", role: "Askari Seeds", image: "/assets/people/ceo-as.jpg" },
        { name: "CEO AMHL", role: "Askari Meat & Halal", image: "/assets/people/ceo-amhl.jpg" },
        { name: "CEO ACL", role: "Askari Cement Ltd", image: "/assets/people/ceo-acl.jpg" },
      ]}
    />
  );
};

// --- COO & Secretariat Slide ---
export const CooSlide = () => {
  return (
    <DepartmentSlide 
      title="Chief Operating Office"
      subtitle="Operational Oversight and Legal Affairs"
      head={{
        name: "Rizwan Ullah Khan",
        role: "Chief Operating Officer",
        image: "/assets/people/rizwan-khan.jpg"
      }}
      team={[
        { name: "CEO ADHL", role: "Askari Development", image: "/assets/people/ceo-adhl.jpg" },
        { name: "GM RMD", role: "Risk Management", image: "/assets/people/gm-rmd.jpg" },
        { name: "GM Legal", role: "Legal Department", image: "/assets/people/gm-legal.jpg" },
      ]}
    />
  );
};

// --- Finance & Administration Slide ---
export const FinanceSlide = () => {
  return (
    <DepartmentSlide 
      title="Finance & Administration"
      subtitle="Financial Management and Corporate Governance"
      head={{
        name: "Chief Financial Officer",
        role: "CFO - AWT",
        image: "/assets/people/cfo.jpg"
      }}
      team={[
        { name: "GM Finance", role: "Financial Planning", image: "/assets/people/gm-finance.jpg" },
        { name: "GM Accounts", role: "Accounting Operations", image: "/assets/people/gm-accounts.jpg" },
        { name: "GM Audit", role: "Internal Audit", image: "/assets/people/gm-audit.jpg" },
        { name: "GM HR", role: "Human Resources", image: "/assets/people/gm-hr.jpg" },
        { name: "GM IT", role: "Information Technology", image: "/assets/people/gm-it.jpg" },
      ]}
    />
  );
};

// --- AWT Group Organizational Structure Slide ---
export const AWTGroupStructureSlide = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Governance Framework
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          AWT Group Structure
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Leadership hierarchy and organizational oversight
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex gap-12">
        {/* Left Column - Chairman & BOD */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Chairman BOD Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1538] opacity-10 rounded-full -mr-16 -mt-16" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-[#C9A961]" size={32} />
                <h2 className="font-playfair text-3xl font-bold">Chairman BOD</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Chairman of the Board of Directors for all major business units of Army Welfare Trust
              </p>
            </div>
          </motion.div>

          {/* Board Structure Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#8B1538]/30 hover:shadow-lg transition-all group"
            >
              <Users className="text-[#8B1538] mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-2">
                Board of Directors
              </h3>
              <p className="text-sm text-gray-600">AWT Corporate Governance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#8B1538]/30 hover:shadow-lg transition-all group"
            >
              <Building2 className="text-[#8B1538] mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-2">
                Committee of Administration
              </h3>
              <p className="text-sm text-gray-600">Executive Oversight</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Managing Director Positions */}
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-br from-[#8B1538] to-[#6B0F28] rounded-xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mb-32" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h2 className="font-playfair text-4xl font-bold mb-3">Managing Director</h2>
                <div className="h-1 w-20 bg-[#C9A961]" />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-4">
                <p className="text-xl font-light text-white/90 mb-6">
                  Key positions held by MD AWT:
                </p>

                {[
                  { title: "Chairman", desc: "Board of Directors - Major Business Units" },
                  { title: "Vice Chairman", desc: "Strategic Oversight Committees" },
                  { title: "Member", desc: "Committee of Administration AWT" }
                ].map((position, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 font-bold text-[#0F172A]">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{position.title}</h4>
                      <p className="text-sm text-white/80">{position.desc}</p>
                    </div>
                  </motion.div>
                ))}
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

// --- Mail Processing Workflow Slide ---
export const MailProcessingSlide = () => {
  const mailRoutes = [
    {
      title: "Business Correspondence",
      desc: "All business-related mail processed through Secretary AWT to MD",
      icon: FileText
    },
    {
      title: "OAS Official Mail",
      desc: "Official correspondence on OAS marked to MD through BoD/HoDs",
      icon: Building2
    },
    {
      title: "A&FS Portfolio",
      desc: "Mail of AGICO, AWTIL and ALACO processed to MD through ED (A/FS)",
      icon: Shield
    },
    {
      title: "Private Office Mail",
      desc: "All mail less private put up to MD through Secretary Office",
      icon: Users
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Administrative Protocol
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Processing of Mail to MD
        </h1>
        <p className="text-xl text-gray-500 font-light">
          All official business correspondence is routed to the MD through the Secretary AWT or respective EDs, ensuring proper review and submission
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex items-center">
        <div className="w-full grid grid-cols-2 gap-8">
          {/* Mail Routes Grid */}
          {mailRoutes.map((route, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#8B1538] transition-all hover:shadow-xl">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#8B1538] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-end">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-[#8B1538] transition-all">
                    <route.icon className="text-[#8B1538]" size={28} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-bold text-[#0F172A] mb-3">
                  {route.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {route.desc}
                </p>

                {/* Arrow Indicator */}
                <div className="mt-6 flex items-center gap-2 text-[#8B1538] font-bold text-sm">
                  <span className="uppercase tracking-wide">Route to MD</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="px-16 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-[#0F172A] rounded-lg p-6 text-white"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="text-[#C9A961] flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-bold mb-2">Secretary AWT Coordination</p>
              <p className="text-sm text-gray-300">
                Resolutions and NFCs on numerous important subjects and cases are drafted/processed by the Secretary AWT for the approval of CoA and BoD
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// --- Secretary AWT Major Roles Slide ---
export const SecretaryRolesSlide = () => {
  const roles = [
    "PSO to MD AWT",
    "Secretary CoA & BoD",
    "Head of Department (Admin Deptt)",
    "Head of Department AWT Plaza",
    "Implementation of CoA & BoD decisions",
    "Drafting, numbering & record of CoA/BoD resolutions",
    "Renewal of AWT registrations (SECP/FBR)",
    "Custodian of key documents",
    "BOD meetings: convening & minutes",
    "MD/BOD engagements coordination",
    "Official correspondence with GHQ & sister concerns"
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Executive Administration
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Major Roles of Secretary AWT
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Strategic coordination and administrative oversight
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex gap-12">
        {/* Left Column - Role Icon */}
        <div className="w-2/5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Circles */}
            <div className="absolute inset-0 rounded-full border-4 border-[#8B1538] opacity-20 scale-110 animate-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-[#C9A961] opacity-30 scale-125" />
            
            {/* Center Badge */}
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <FileText className="text-[#C9A961] mx-auto mb-4" size={80} />
                <h2 className="font-playfair text-3xl font-bold text-white mb-2">Secretary</h2>
                <p className="text-[#C9A961] font-bold tracking-widest text-sm">AWT</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Roles List */}
        <div className="w-3/5 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-3">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#8B1538]/50 hover:bg-white hover:shadow-md transition-all group"
              >
                {/* Bullet */}
                <div className="w-2 h-2 rounded-full bg-[#8B1538] flex-shrink-0 group-hover:scale-150 transition-transform" />
                
                {/* Role Text */}
                <p className="text-gray-700 font-medium group-hover:text-[#0F172A] transition-colors">
                  {role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#0F172A"/>
          <circle cx="100" cy="100" r="50" fill="none" stroke="#8B1538" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

// --- Secretary AWT Detailed Roles Slide ---
export const SecretaryDetailedRolesSlide = () => {
  const roles = [
    {
      number: "1",
      title: "Board Secretariat",
      desc: "Assists the Chairman/MD AWT in management of the Board's administrative activities such as meetings, schedules, agendas, communications and documentation",
      color: "from-[#8B1538] to-[#6B0F28]"
    },
    {
      number: "2",
      title: "Board Facilitation",
      desc: "Ensuring that all relevant information, details and documents are made available to the Board and Senior Management for effective decision-making at the meetings",
      color: "from-[#0F172A] to-[#1E293B]"
    },
    {
      number: "3",
      title: "Corporate Compliance",
      desc: "Overseeing the Corporate Compliance of all AWT Business Units",
      color: "from-[#8B1538] to-[#6B0F28]"
    },
    {
      number: "4",
      title: "Briefing",
      desc: "Facilitate decision-making process at Board and Committee meetings in an informed and efficient manner",
      color: "from-[#0F172A] to-[#1E293B]"
    },
    {
      number: "5",
      title: "Regulatory Liaison",
      desc: "Interfaces between the management and regulatory authorities for governance matters",
      color: "from-[#8B1538] to-[#6B0F28]"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Group Secretary Office
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Major Roles of Secretary AWT
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-4xl">
          Group Secretary Office assists and advises the CoA and Board in the conduct of Trust affairs and ensures compliance with applicable statutory requirements
        </p>
      </div>

      {/* Content - 5 Role Cards */}
      <div className="flex-1 px-16 pb-12 flex items-center">
        <div className="w-full grid grid-cols-3 gap-6">
          {/* First Row - 3 cards */}
          {roles.slice(0, 3).map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className={`h-full bg-gradient-to-br ${role.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1`}>
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#C9A961] text-[#0F172A] flex items-center justify-center font-bold text-2xl shadow-lg">
                  {role.number}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-playfair text-2xl font-bold mb-4 leading-tight">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    {role.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Second Row - 2 cards centered */}
          <div className="col-span-3 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {roles.slice(3, 5).map((role, idx) => (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 3) * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className={`h-full bg-gradient-to-br ${role.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1`}>
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#C9A961] text-[#0F172A] flex items-center justify-center font-bold text-2xl shadow-lg">
                    {role.number}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="font-playfair text-2xl font-bold mb-4 leading-tight">
                      {role.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      {role.desc}
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
    </div>
  );
};

// --- Secretary Office Tasks Slide ---
export const SecretaryOfficeTasksSlide = () => {
  const tasks = [
    {
      title: "Directory Roles",
      desc: "Serving on Directory roles in public listed companies and subsequent committees",
      icon: Building2
    },
    {
      title: "Regulatory Representation",
      desc: "Represent AWT with Civil Departments and Regulatory authorities (e.g. SECP), ensuring a compliant approach",
      example: "Liaison with V Corps & DG KDA on Strategic lands in Karachi",
      icon: Shield
    },
    {
      title: "Administration Department",
      desc: "Head of Department for overall Administration/Transport Department of AWT HQ",
      icon: Users
    },
    {
      title: "HR Duties",
      desc: "Performs additional duty of A/DHR in absence of DHR",
      icon: Users
    },
    {
      title: "Strategic Projects",
      desc: "Focal person in AWT's Strategic Projects/Land",
      example: "Adyala Land Project, Makro, ASDC",
      icon: FileText
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Executive Functions
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Secretary Office Tasks
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Key responsibilities carried out by the Secretary Office
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex gap-12">
        {/* Left Column - Icon Display */}
        <div className="w-2/5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Hexagon Pattern Background */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
                <pattern id="hexagons" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="#8B1538" strokeWidth="2"/>
                </pattern>
                <rect width="400" height="400" fill="url(#hexagons)"/>
              </svg>
            </div>

            {/* Center Badge */}
            <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center shadow-2xl border-4 border-[#8B1538]/20">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#8B1538] flex items-center justify-center">
                    <FileText className="text-white" size={48} />
                  </div>
                </div>
                <h2 className="font-playfair text-3xl font-bold text-white mb-2">Secretary</h2>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Office</h3>
                <div className="w-16 h-1 bg-[#C9A961] mx-auto" />
                <p className="text-[#C9A961] font-bold tracking-widest text-xs mt-3">AWT</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Tasks List */}
        <div className="w-3/5 flex flex-col justify-center">
          <div className="space-y-4">
            {tasks.map((task, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200 hover:border-[#8B1538]/40 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#8B1538] group-hover:bg-[#8B1538] transition-all">
                    <task.icon className="text-[#8B1538] group-hover:text-white transition-colors" size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-playfair text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#8B1538] transition-colors">
                      {task.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {task.desc}
                    </p>
                    {task.example && (
                      <div className="flex items-start gap-2 mt-2 pt-2 border-t border-gray-200">
                        <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wide flex-shrink-0">Example:</span>
                        <span className="text-xs text-gray-500 italic">{task.example}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>
    </div>
  );
};

// --- BOD Reviews/Meetings Slide ---
export const BODReviewsSlide = () => {
  const reviews = [
    {
      number: "01",
      title: "Annual Performance Reviews & Budget",
      color: "from-[#8B1538] to-[#6B0F28]"
    },
    {
      number: "02",
      title: "Half Yearly Performance Reviews",
      color: "from-[#0F172A] to-[#1E293B]"
    },
    {
      number: "03",
      title: "Annual Audit Report Presentations",
      color: "from-[#8B1538] to-[#6B0F28]"
    },
    {
      number: "04",
      title: "Quarterly Performance Reviews",
      color: "from-[#0F172A] to-[#1E293B]"
    },
    {
      number: "05",
      title: "Monthly General Meeting",
      color: "from-[#8B1538] to-[#6B0F28]"
    },
    {
      number: "06",
      title: "Any special project require BOD approval",
      color: "from-[#0F172A] to-[#1E293B]"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Board Governance
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Details of BOD Reviews/Meeting
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Comprehensive oversight and performance monitoring framework
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex items-center">
        <div className="w-full grid grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className={`h-full bg-gradient-to-br ${review.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}>
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#C9A961] text-[#0F172A] flex items-center justify-center font-bold text-2xl shadow-lg">
                  {review.number}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <CheckCircle2 className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-bold leading-tight min-h-[4rem] flex items-center">
                  {review.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
      
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <rect x="50" y="50" width="100" height="100" fill="none" stroke="#8B1538" strokeWidth="2"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="#0F172A" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

// --- Corporate Actions on MD Appointment Slide ---
export const MDAppointmentSlide = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Executive Transition Protocol
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Corporate Actions on Appointment of MD
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Comprehensive appointment and notification procedures
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex gap-12">
        
        {/* Left Column - Main Appointments */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* COA & AWT Board Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1538] opacity-10 rounded-full -mr-16 -mt-16" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#8B1538] flex items-center justify-center mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h2 className="font-playfair text-3xl font-bold mb-2">COA & AWT Board</h2>
                <div className="h-1 w-16 bg-[#C9A961]" />
              </div>
              
              <p className="text-lg leading-relaxed text-white/90">
                Appointment of new MD on the Committee of Administration (CoA) and Board of Directors of AWT
              </p>
            </div>
          </motion.div>

          {/* Subsidiary Boards Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 bg-gradient-to-br from-[#8B1538] to-[#6B0F28] rounded-xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                  <Building2 className="text-white" size={28} />
                </div>
                <h2 className="font-playfair text-3xl font-bold mb-2">Subsidiary Boards</h2>
                <div className="h-1 w-16 bg-[#C9A961]" />
              </div>
              
              <p className="text-lg leading-relaxed text-white/90">
                Appointment of new MD on the Board of Directors of AGICO, ALACO & AWTIL
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Regulatory Actions */}
        <div className="w-1/2 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-gray-50 rounded-xl p-10 border-2 border-gray-200 hover:border-[#8B1538]/30 transition-all">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-full bg-[#8B1538] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="text-white" size={40} />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-[#0F172A] mb-3">
                  Regulatory Compliance
                </h2>
                <div className="h-1 w-20 bg-[#8B1538] mx-auto" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-[#8B1538]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F172A] mb-2">PSX Notification</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Intimation to the Pakistan Stock Exchange regarding appointment of new MD
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-[#8B1538]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F172A] mb-2">SECP Notification</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Intimation to the Securities and Exchange Commission of Pakistan regarding appointment of new MD
                    </p>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center italic">
                    All regulatory notifications completed within statutory timelines
                  </p>
                </div>
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

// --- GM Admin & Plaza Roles Slide ---
export const GMAdminPlazaSlide = () => {
  const roles = [
    {
      number: "01",
      title: "Managing Fleet",
      desc: "Managing a fleet of 31 Pool / Protocol vehicles",
      icon: Building2
    },
    {
      number: "02",
      title: "Corp Gifting",
      desc: "Managing corporate gifting/ MD Souvenirs",
      icon: Shield
    },
    {
      number: "03",
      title: "Support",
      desc: "Up-keeping of Executive Floor/Conference Room / Media Gallery etc.",
      icon: Users
    },
    {
      number: "04",
      title: "Security",
      desc: "Security of premises and surroundings",
      icon: Shield
    },
    {
      number: "05",
      title: "AWT Plaza",
      desc: "Maintenance / Renovation / Up-gradation of AWT Plaza Building",
      icon: Building2
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Administration & Facilities
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-2">
          Roles of GM Admin & Plaza
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Executive administration and facilities management
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12 flex gap-12">
        {/* Left Column - Profile */}
        <div className="w-2/5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#8B1538] opacity-20 scale-110 animate-pulse" />
            
            {/* Profile Card */}
            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                {/* Image Container */}
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#C9A961] shadow-xl mb-6 mx-auto bg-gray-100">
                  <img 
                    src="/assets/people/syed-ihteram-ali.jpg" 
                    alt="Lt Col Syed Ihteram Ali Naqvi" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Info */}
                <h2 className="font-playfair text-3xl font-bold text-white mb-2">
                  Lt Col Syed Ihteram Ali Naqvi
                </h2>
                <p className="text-[#C9A961] font-bold text-sm mb-4">(Retd)</p>
                
                <div className="w-20 h-1 bg-[#8B1538] mx-auto mb-4" />
                
                <p className="text-white/90 text-lg font-bold mb-2">
                  GM Admin & Plaza
                </p>
                <p className="text-gray-400 text-sm">
                  89 L/C – 56 C
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Roles */}
        <div className="w-3/5 flex flex-col justify-center">
          <div className="space-y-4">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#8B1538]/50 hover:bg-white hover:shadow-lg transition-all">
                  {/* Number Badge */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#8B1538] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {role.number}
                  </div>

                  <div className="flex items-start gap-6 pl-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#8B1538] group-hover:bg-[#8B1538] transition-all">
                      <role.icon className="text-[#8B1538] group-hover:text-white transition-colors" size={28} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#8B1538] transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {role.desc}
                      </p>
                    </div>
                  </div>
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

// --- AWT Regulators Slide ---
export const AWTRegulatorsSlide = () => {
  const regulators = [
    {
      name: "Securities and Exchange Commission of Pakistan",
      abbr: "SECP",
      logo: "/assets/regulators/secp-logo.png"
    },
    {
      name: "Pakistan Stock Exchange Limited",
      abbr: "PSX",
      logo: "/assets/regulators/psx-logo.png"
    },
    {
      name: "Ministry of Interior",
      abbr: "MOI",
      logo: "/assets/regulators/moi-logo.png"
    },
    {
      name: "Civil Aviation Authority",
      abbr: "CAA",
      logo: "/assets/regulators/caa-logo.png"
    },
    {
      name: "Drug Regulatory Authority of Pakistan",
      abbr: "DRAP",
      logo: "/assets/regulators/drap-logo.png"
    },
    {
      name: "Societies Registrar",
      abbr: "SR",
      logo: "/assets/regulators/sr-logo.png"
    },
    {
      name: "Ministry of Law and Justice",
      abbr: "MOLJ",
      logo: "/assets/regulators/molj-logo.png"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-8 z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">
            Regulatory Framework
          </span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A] mb-4">
          AWT Regulators
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-3xl">
          Key regulatory and oversight authorities governing AWT operations and compliance
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12">
        <div className="grid grid-cols-4 gap-6 h-full">
          {/* First Row - 4 cards */}
          {regulators.slice(0, 4).map((regulator, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/40 hover:shadow-xl transition-all group flex flex-col"
            >
              {/* Logo Container */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <div className="w-32 h-32 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#8B1538] transition-all shadow-sm">
                  <img 
                    src={regulator.logo} 
                    alt={regulator.abbr}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to text if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-4xl font-bold text-gray-300">
                    {regulator.abbr}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-playfair text-lg font-bold text-[#0F172A] leading-tight mb-2 min-h-[3.5rem] flex items-center justify-center">
                  {regulator.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-[#8B1538]/10 rounded-full">
                  <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wide">
                    {regulator.abbr}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Second Row - 3 cards centered */}
          <div className="col-span-4 grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {regulators.slice(4, 7).map((regulator, idx) => (
              <motion.div
                key={idx + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 4) * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 hover:border-[#8B1538]/40 hover:shadow-xl transition-all group flex flex-col"
              >
                {/* Logo Container */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="w-32 h-32 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#8B1538] transition-all shadow-sm">
                    <img 
                      src={regulator.logo} 
                      alt={regulator.abbr}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden text-4xl font-bold text-gray-300">
                      {regulator.abbr}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-playfair text-lg font-bold text-[#0F172A] leading-tight mb-2 min-h-[3.5rem] flex items-center justify-center">
                    {regulator.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-[#8B1538]/10 rounded-full">
                    <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wide">
                      {regulator.abbr}
                    </span>
                  </div>
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

// ==================== WORKING ROUTINE SLIDE ====================
export const WorkingRoutineSlide = () => {
  const schedule = [
    { day: 'Monday – Friday', activity: 'Office hours: 0900 hrs – 1600 hrs' },
    { day: '1300 hrs – 1400 hrs', activity: 'Prayers / Break Time' },
    { day: 'Gazetted Holidays', activity: 'Observed as announced by the Government; optional for Business Units (BUs)' },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-8 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Organizational Policy</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          Working Routine AWT
        </h1>
        <p className="text-gray-500 mt-2 text-lg max-w-4xl">
          The following working routine outlines official office hours, prayer/break time, and observance of gazetted holidays for all AWT officers and staff
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 py-12 flex items-center">
        <div className="w-full max-w-5xl mx-auto">
          {/* Schedule Table */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
              <div className="px-8 py-6 border-r border-white/10">
                <h3 className="font-playfair text-2xl font-bold">Day / Timing</h3>
              </div>
              <div className="px-8 py-6">
                <h3 className="font-playfair text-2xl font-bold">Activity</h3>
              </div>
            </div>

            {/* Table Rows */}
            {schedule.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                className="grid grid-cols-2 border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-all"
              >
                <div className="px-8 py-8 border-r border-gray-200 flex items-center gap-4">
                  <div className="w-1 h-12 bg-[#8B1538] rounded-full" />
                  <div className="font-bold text-[#0F172A] text-lg">
                    {item.day}
                  </div>
                </div>
                <div className="px-8 py-8 flex items-center">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.activity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-8 flex items-center gap-4 bg-[#8B1538]/5 border-l-4 border-[#8B1538] p-6 rounded-r-xl"
          >
            <div className="w-12 h-12 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              All AWT personnel are expected to maintain punctuality and observe the prescribed working hours to ensure operational efficiency
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ==================== DRESS CODE SLIDE ====================
export const DressCodeSlide = () => {
  const dressCode = [
    { 
      day: 'Monday', 
      dress: 'Smart Casual / Open Collar',
      applies: 'All Personnel',
      color: 'from-gray-50 to-gray-100/50',
      accent: 'border-gray-300'
    },
    { 
      day: 'Tuesday – Thursday', 
      dress: 'Officers: Lounge Suit / Combination / Safari (Close Collar preferred)\n\nStaff (Grades 6–7): Pant & Shirt\n\nStaff (Grades 1–5): Officially provided Shalwar Qameez',
      applies: 'Category-Specific',
      color: 'from-gray-50 to-gray-100/50',
      accent: 'border-gray-300'
    },
    { 
      day: 'Friday', 
      dress: 'Smart Casual / Shalwar Qameez with Coat/Waist Coat',
      applies: 'All Personnel',
      color: 'from-gray-50 to-gray-100/50',
      accent: 'border-gray-300'
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-8 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Professional Standards</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          Dress Code
        </h1>
        <p className="text-gray-500 mt-2 text-lg max-w-4xl">
          To uphold the professional and disciplined standards of Army Welfare Trust (AWT), all officers and staff are required to adhere to the prescribed dress code on official working days, reflecting organizational decorum and professionalism
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 py-12 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-8">
            {dressCode.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl border-2 ${item.accent} p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all`}
              >
                {/* Day Badge */}
                <div className="mb-6">
                  <div className="inline-block bg-[#0F172A] text-white px-6 py-3 rounded-xl">
                    <h3 className="font-playfair text-2xl font-bold">{item.day}</h3>
                  </div>
                </div>

                {/* Dress Details */}
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#8B1538]" />
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Required Attire</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed whitespace-pre-line text-base">
                      {item.dress}
                    </p>
                  </div>

                  {/* Applies To */}
                  <div className="flex items-center gap-3 px-4">
                    <div className="w-2 h-2 rounded-full bg-[#8B1538]" />
                    <span className="text-sm font-medium text-gray-600">
                      Applies to: <strong className="text-[#0F172A]">{item.applies}</strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-8 flex items-center justify-center gap-4 bg-[#8B1538]/5 border-2 border-[#8B1538]/20 p-6 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="w-14 h-14 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              <strong className="text-[#0F172A]">Compliance is Mandatory:</strong> The dress code reflects AWT's commitment to professionalism and organizational discipline. All personnel must adhere strictly to these standards.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Anchor */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8B1538]" />
    </div>
  );
};

// ==================== MILESTONE ACHIEVEMENTS SLIDE ====================
export const MilestoneAchievementsSlide = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: 'Revenue & Profitability',
      description: 'Significant growth in revenue over last 3 yrs with highest ever net profit of Rs 3.03 Bn in FY 2025',
      color: 'from-emerald-50 to-emerald-100/50',
      iconBg: 'bg-emerald-500',
      iconColor: 'text-emerald-500'
    },
    {
      icon: Factory,
      title: 'Industrial Expansion',
      description: 'Kickstarting const of new Lube Blending Plant and Chemical storage Tank facility at Korangi (Kci) besides venturing into a JV in Mine Lubes and Chemicals for landmark mining projects of Reko Diq',
      color: 'from-blue-50 to-blue-100/50',
      iconBg: 'bg-blue-500',
      iconColor: 'text-blue-500'
    },
    {
      icon: PiggyBank,
      title: 'Investment Growth',
      description: 'Exponential AUM growth (YoY) of Rs 72.5 Bn by AWT Investments Ltd with improved credit rating of AM2+',
      color: 'from-amber-50 to-amber-100/50',
      iconBg: 'bg-amber-500',
      iconColor: 'text-amber-500'
    },
    {
      icon: Home,
      title: 'Real Estate Development',
      description: 'Successful launch of DHA-AWT real estate JV project, River View South (RVS) with development work in full swing',
      color: 'from-purple-50 to-purple-100/50',
      iconBg: 'bg-purple-500',
      iconColor: 'text-purple-500'
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-8 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Strategic Progress</span>
        </div>
        <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
          Milestone Achievements
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Key accomplishments driving AWT's strategic growth and market leadership
        </p>
      </div>

      {/* Content - 2x2 Grid */}
      <div className="flex-1 px-16 py-12 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className={`bg-gradient-to-br ${achievement.color} rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl ${achievement.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-2xl font-bold text-[#0F172A] mb-4">
                  {achievement.title}
                </h3>

                {/* Description */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {achievement.description}
                  </p>
                </div>

                {/* Accent Line */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 w-12 bg-[#8B1538] rounded-full" />
                  <CheckCircle2 className={`w-5 h-5 ${achievement.iconColor}`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-8 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-playfair text-xl font-bold">Sustained Excellence</p>
                  <p className="text-gray-300 text-sm mt-1">Driving growth across all business verticals</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#C9A961]">FY 2025</p>
                <p className="text-sm text-gray-400">Record Performance Year</p>
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
// ==================== BUSINESS AGREEMENTS SLIDE ====================
export const BusinessAgreementsSlide = () => {
  const agreements = [
    {
      title: 'MOU signing ceremony between Army Welfare Trust (AWT) & JazzCash',
      image: '/assets/agreements/awt-jazzcash.jpg',
      description: 'Strategic partnership for digital financial services'
    },
    {
      title: 'MOU signing ceremony between AWT and GCI',
      image: '/assets/agreements/awt-gci.jpg',
      description: 'Growth and collaboration initiative'
    },
    {
      title: 'Joint Venture between MAL Pakistan, Juniper Capital and Minpro Synergies',
      image: '/assets/agreements/mal-juniper-minpro.jpg',
      description: 'Mining and industrial development partnership'
    },
    {
      title: 'Askari Aviation & Markhor Aviation Agreement Signing Ceremony',
      image: '/assets/agreements/aviation-agreement.jpg',
      description: 'Aviation sector collaboration and expansion'
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-manrope flex flex-col">
      {/* Header */}
      <div className="px-16 pt-12 pb-6 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-12 bg-[#8B1538]" />
          <span className="text-[#8B1538] font-bold tracking-widest text-sm uppercase">Strategic Partnerships</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-playfair text-5xl font-bold text-[#0F172A]">
              Signatory of Business Agreements
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              External Business MoUs, DoUs & Agreements
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#8B1538]/10 flex items-center justify-center">
            <Handshake className="w-8 h-8 text-[#8B1538]" />
          </div>
        </div>
      </div>

      {/* Content - 2x2 Grid */}
      <div className="flex-1 px-16 py-8 flex items-center overflow-y-auto">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-6">
            {agreements.map((agreement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#8B1538]/30 transition-all group"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={agreement.image}
                    alt={agreement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
                    <Handshake className="w-16 h-16 mb-4 opacity-40" />
                    <p className="text-sm font-medium opacity-60">Agreement Signing Ceremony</p>
                  </div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-[#8B1538] text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-xs font-bold uppercase tracking-wide">MOU/Agreement</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#0F172A] mb-3 leading-tight">
                    {agreement.title}
                  </h3>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-[#8B1538] rounded-full flex-shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {agreement.description}
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
    </div>
  );
};
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
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-8">
                    <Handshake className="w-20 h-20 mb-6 opacity-40" />
                    <p className="text-lg font-bold text-center mb-2">MOU Signing Ceremony</p>
                    <p className="text-sm text-gray-300 text-center">{mou.date}</p>
                  </div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6 bg-[#8B1538] text-white px-5 py-3 rounded-xl shadow-lg">
                    <span className="text-sm font-bold uppercase tracking-wide">{mou.date}</span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-[#0F172A] mb-4 leading-tight">
                    {mou.title}
                  </h3>
                  
                  <div className="flex items-start gap-4 bg-[#8B1538]/5 rounded-xl p-4 border-l-4 border-[#8B1538]">
                    <CheckCircle2 className="w-6 h-6 text-[#8B1538] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      {mou.description}
                    </p>
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
                  <p className="font-playfair text-xl font-bold">Strategic Growth Initiatives</p>
                  <p className="text-gray-300 text-sm mt-1">Expanding partnerships across technology and financial sectors</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#C9A961]">2025</p>
                <p className="text-sm text-gray-400">Partnership Year</p>
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
