import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Target, 
  Heart, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  MapPin,
  Building,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Rocket,
  Volume2,
  VolumeX
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// New Component for Animated Background Texture
// Changed opacity to 0.3 for better visibility
const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-curve-pattern opacity-[0.3]"></div>
  </div>
);

const StatCounter = ({ label, value, subLabel, icon: Icon, colorClass, dark = false }) => (
  <div className={`flex flex-col items-center p-6 ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border h-full justify-center text-center group relative z-10`}>
    
    <div className={`p-4 rounded-full ${colorClass} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform relative z-10`}>
      <Icon className={`w-8 h-8 ${colorClass.replace('bg-', 'text-')}`} />
    </div>
    <h3 className={`text-4xl font-bold ${dark ? 'text-white' : 'text-slate-800'} mb-1 font-heading relative z-10`}>{value}</h3>
    <p className={`text-sm font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'} relative z-10`}>{label}</p>
    {subLabel && <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'} mt-2 relative z-10`}>{subLabel}</p>}
  </div>
);

const SectionHeading = ({ title, subtitle, align = "center", dark = false }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"} relative z-10`}>
    <h2 className={`text-3xl md:text-5xl font-bold mb-4 font-heading ${dark ? "text-white" : "text-slate-800"}`}>
      {title}
    </h2>
    <div className={`h-1.5 w-24 rounded-full ${align === "center" ? "mx-auto" : ""} bg-emerald-500 mb-6`}></div>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-3xl ${align === "center" ? "mx-auto" : ""} ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const SponsorshipTables = () => (
  <div className="space-y-12 relative z-10 max-w-5xl mx-auto">
    
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header - Reddish Orange Gradient */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 border-b border-orange-600 flex justify-between items-center">
        <div>
            <h3 className="text-2xl font-bold text-white font-heading">Sponsorship Opportunities</h3>
            <p className="text-orange-100 text-sm font-medium tracking-wide mt-1">Invest in a brighter future</p>
        </div>
        <div className="flex gap-2">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
                <GraduationCap className="w-6 h-6" />
            </div>
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
                <Building className="w-6 h-6" />
            </div>
        </div>
      </div>
      
      <div className="p-6 bg-slate-50/50">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr>
              <th className="pb-4 pl-6 font-bold text-slate-500 text-lg tracking-wide w-[20%]">Duration</th>
              <th className="pb-4 text-right w-[25%] px-2">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-sm">
                  1 Student (HEP)
                </span>
              </th>
              <th className="pb-4 text-right w-[25%] px-2">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-sm">
                  1 Student (CLC)
                </span>
              </th>
              <th className="pb-4 pr-6 text-right w-[30%]">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-sm">
                  1 CLC Centre
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 1 Month Row */}
            <tr className="group bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300">
              <td className="py-5 pl-6 rounded-l-2xl text-slate-600 font-bold border-y border-l border-slate-100 group-hover:border-slate-200">1 Month</td>
              <td className="py-5 px-4 border-y border-slate-100 group-hover:border-slate-200 text-orange-600 font-bold text-right text-lg">₹ 890</td>
              <td className="py-5 px-4 border-y border-slate-100 group-hover:border-slate-200 text-orange-600 font-bold text-right text-lg">₹ 565</td>
              <td className="py-5 pr-6 rounded-r-2xl border-y border-r border-slate-100 group-hover:border-slate-200 text-orange-600 font-bold text-right text-lg">₹ 22,600</td>
            </tr>

            {/* 6 Months Row */}
            <tr className="group bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300">
              <td className="py-5 pl-6 rounded-l-2xl text-slate-600 font-bold border-y border-l border-slate-100 group-hover:border-slate-200">6 Months</td>
              <td className="py-5 px-4 border-y border-slate-100 group-hover:border-slate-200 text-orange-600 font-bold text-right text-lg">₹ 5,340</td>
              <td className="py-5 px-4 border-y border-slate-100 group-hover:border-slate-200 text-orange-600 font-bold text-right text-lg">₹ 3,390</td>
              <td className="py-5 pr-6 rounded-r-2xl border-y border-r border-slate-100 group-hover:border-slate-200 text-orange-600 font-bold text-right text-lg">₹ 1,35,500</td>
            </tr>

            {/* 1 Year Row - Highlighted */}
            <tr className="group relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-lg shadow-slate-200 transform hover:-translate-y-1 transition-all duration-300 z-10">
              <td className="py-6 pl-6 rounded-l-2xl text-white font-bold border-y border-l border-transparent relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  1 Year
                </span>
              </td>
              <td className="py-6 px-4 border-y border-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-extrabold text-right text-2xl">₹ 10,680</td>
              <td className="py-6 px-4 border-y border-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-extrabold text-right text-2xl">₹ 6,780</td>
              <td className="py-6 pr-6 rounded-r-2xl border-y border-r border-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-extrabold text-right text-2xl">₹ 2,71,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
);

const ComparativeProjectCard = ({ title, description, currentStats, visionStats, image, theme, features }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-12 relative z-10">
    <div className="grid lg:grid-cols-12 gap-0">
      {/* Image Section */}
      <div className="lg:col-span-5 relative min-h-[300px] lg:h-auto">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-${theme}-900/20 mix-blend-multiply`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-3xl font-bold text-white font-heading mb-2">{title}</h3>
          <div className={`h-1 w-20 bg-${theme}-500 rounded-full`}></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-white/80 backdrop-blur-sm">
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Status Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Current Status</h4>
             </div>
             <ul className="space-y-3">
                {currentStats.map((stat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{stat}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* Vision 2035 Box */}
          <div className={`bg-${theme}-50 rounded-2xl p-6 border border-${theme}-100 relative overflow-hidden`}>
             <div className={`absolute top-0 right-0 p-2 opacity-10`}>
                <Rocket className={`w-24 h-24 text-${theme}-600`} />
             </div>
             <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className={`w-2 h-2 rounded-full bg-${theme}-500 animate-ping`}></div>
                <h4 className={`text-xs font-bold uppercase tracking-widest text-${theme}-600`}>Vision 2035 Goal</h4>
             </div>
             <ul className="space-y-3 relative z-10">
                {visionStats.map((stat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Target className={`w-5 h-5 text-${theme}-500 flex-shrink-0 mt-0.5`} />
                    <span className={`text-${theme}-900 font-bold`}>{stat}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {features && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className={`text-sm font-bold uppercase tracking-widest text-${theme}-600 mb-4`}>Core Focus</h4>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, i) => (
                <span key={i} className={`bg-${theme}-50 text-${theme}-800 px-3 py-1.5 rounded-lg text-sm font-medium border border-${theme}-100`}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  
  // Audio State & Ref
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Attempt autoplay on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set initial volume to 50%
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started!
            setIsPlaying(true);
          })
          .catch((error) => {
            // Autoplay was prevented. User interaction required.
            console.log("Audio autoplay blocked by browser policy:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  // Keyboard Event Listener for "M" key to toggle audio
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the pressed key is 'm' or 'M'
      if (event.key.toLowerCase() === 'm') {
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
          } else {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
      }
    };

    // Attach listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* --- AUDIO COMPONENT --- */}
      <audio ref={audioRef} src="/audio.mp3" loop />
      
      {/* Removed Audio Button - Use 'M' key to toggle */}

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-12 pb-12 px-4 overflow-hidden bg-white">
        
        {/* Animated Background */}
        <BackgroundPattern />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo Placement - INCREASED SIZE, REDUCED GAP */}
          <FadeIn>
            <div className="mb-0 relative">
               <div className="w-40 h-40 md:w-60 md:h-60 mx-auto">
                 <img src="/logo.png" alt="NEM Logo" className="object-contain w-full h-full drop-shadow-xl" />
               </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            {/* Title with minimal top margin - Pulled up significantly */}
            <h2 className="text-emerald-600 font-bold text-lg md:text-xl mb-1 -mt-8 md:-mt-16 relative z-20">National Empowerment Mission</h2>
            
            {/* MAIN TYPOGRAPHY IMAGE - TAHREEKE.PNG */}
            <div className="-mt-12 mb-8 w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-700 relative z-20">
              <img src="/tahreeke.png" alt="Tahreeke Typography" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>
          </FadeIn>

          <FadeIn delay={400}>
             <p className="text-2xl md:text-3xl font-light text-slate-600 mb-8 -mt-8 max-w-4xl mx-auto leading-snug relative z-20">
               Join our <span className="text-emerald-600 font-semibold relative inline-block">
                 Fund Collection Drive
                 <svg className="absolute w-full h-2 bottom-0 left-0 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
               </span><br/> to reshape the future of North India.
             </p>
          </FadeIn>
        </div>
      </section>

      {/* --- CURRENT IMPACT (Running Stats) --- */}
      <section className="py-12 bg-white relative z-20 border-b border-slate-100 overflow-hidden">
        <BackgroundPattern />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400">Current Status</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <FadeIn delay={100} className="h-full"><StatCounter label="Active Projects" value="02" subLabel="HEP & CLC" icon={Building} colorClass="bg-blue-500" /></FadeIn>
             <FadeIn delay={200} className="h-full"><StatCounter label="Students Supported" value="2,200+" subLabel="Direct Beneficiaries" icon={Users} colorClass="bg-emerald-500" /></FadeIn>
             <FadeIn delay={300} className="h-full"><StatCounter label="States Covered" value="02" subLabel="Delhi & Rajasthan" icon={MapPin} colorClass="bg-amber-500" /></FadeIn>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Removed BackgroundPattern from here */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <Heart className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed font-heading">
              "The Wafy Alumni Association believes that education is the most powerful instrument for social transformation."
            </h3>
            <div className="prose prose-lg mx-auto text-slate-600 text-justify md:text-center">
              <p className="mb-6">
                Guided by this belief, the <strong className="text-slate-900">National Empowerment Mission (NEM)</strong> works to uplift marginalized communities across India by addressing the root causes of poverty, illiteracy, and inequality.
              </p>
              <p>
                Rooted in the educational vision of the Wafy and Wafiyya programs of the Coordination of Islamic Colleges (CIC), NEM is driven by socially committed alumni trained in both Islamic values and modern education. 
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- VISION 2035 & PROJECTS (Comparative View) --- */}
      <section id="vision2035" className="py-24 bg-white relative overflow-hidden">
        <BackgroundPattern />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading 
            title={<span>Vision <span className="text-emerald-500">2035</span></span>}
            subtitle="A long-term roadmap to scale our impact from hundreds to thousands." 
            align="center"
          />

          <div className="mt-16">
            
            {/* Project 1: HEP */}
            <FadeIn>
              <ComparativeProjectCard 
                title="Higher Education Program"
                image="/HEP.jpg"
                theme="blue"
                description="The Higher Education Program supports students from marginalized backgrounds who are unable to access or complete formal college education, providing them with housing, mentorship, and career guidance."
                currentStats={[
                  "2 Centres in South Delhi",
                  "1 Centre in Rajasthan",
                  "Supporting 200+ Students"
                ]}
                visionStats={[
                  "50 Centres across India",
                  "Reach 5,000 Students by 2035",
                  "Enable access to quality higher education and career pathways"
                ]}
              />
            </FadeIn>

            {/* Project 2: CLC (Community School Program) */}
            <FadeIn delay={200}>
              <ComparativeProjectCard 
                title="Community School Program"
                image="/CLC.jpg"
                theme="emerald"
                description="Community Learning Centres (CLCs) serve as the foundation of our grassroots efforts, bringing basic education, literacy, and moral values to remote villages where schools are inaccessible or inadequate."
                currentStats={[
                  "Pilot phase in Phalodi, Rajasthan",
                  "Establishing 50 CLC Centres",
                  "Supporting 2000+ Students"
                ]}
                visionStats={[
                  "Providing Basic Education",
                  "Establish 100 CLC Centres across India",
                  "Reaching 10,000 Beneficiaries"
                ]}
                features={[
                  "Focus on literacy, numeracy & life skills",
                  "Blending secular and traditional learning",
                  "Serving children 6–14 years, dropouts & first-generation learners from remote villages"
                ]}
              />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- VISION 2035 TARGET COUNTS --- */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-emerald-400 font-bold text-lg uppercase tracking-widest mb-2">The Goal Post</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Expected Impact by 2035</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <FadeIn delay={100}>
               <StatCounter 
                 label="Higher Education Centres" 
                 value="50" 
                 subLabel="Career Hubs" 
                 icon={Briefcase} 
                 colorClass="bg-blue-500" 
                 dark={true}
               />
             </FadeIn>
             <FadeIn delay={200}>
               <StatCounter 
                 label="Community Learning Centres" 
                 value="100" 
                 subLabel="Village Schools" 
                 icon={Building} 
                 colorClass="bg-emerald-500" 
                 dark={true}
               />
             </FadeIn>
             <FadeIn delay={300}>
               <StatCounter 
                 label="Total Students" 
                 value="15,000+" 
                 subLabel="Lives Transformed" 
                 icon={Users} 
                 colorClass="bg-amber-500" 
                 dark={true}
               />
             </FadeIn>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="py-24 bg-slate-800 relative border-t border-slate-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <FadeIn>
             <h2 className="text-3xl font-bold text-white mb-12">Witness The Mission</h2>
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-900">
               <iframe 
                 className="absolute inset-0 w-full h-full"
                 src="https://www.youtube.com/embed/gvwpwyaghr8?si=3tCOdJlw0CwaX5z2" 
                 title="National Empowerment Mission"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
             </div>
           </FadeIn>
        </div>
      </section>

      {/* --- FINANCIAL NEED --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <BackgroundPattern />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeading 
            title={<span>Investment in <span className="text-emerald-500">Future</span></span>}
            subtitle="Your support can change a life forever. Choose a sponsorship tier and become a partner in progress." 
            align="center"
          />

          <FadeIn>
            <SponsorshipTables />
          </FadeIn>
        </div>
      </section>

      {/* --- FUND COLLECTION (DONATE) --- */}
      <section id="donate" className="py-24 bg-emerald-600 relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight">
                Together, small contributions can build big futures.
              </h2>
              <p className="text-emerald-100 text-xl mb-8 leading-relaxed">
                Join the Micro Fund Collection Campaign. Your support directly fuels the education of a child who dreams of a better tomorrow.
              </p>
              
               <div className="bg-emerald-700 bg-opacity-50 p-6 rounded-2xl border border-emerald-500 backdrop-blur-sm">
                 <h4 className="text-sm uppercase tracking-widest text-emerald-200 mb-4">Bank Transfer Details</h4>
                 {/* Normal Professional Font (Sans-serif) */}
                 <div className="space-y-3 text-lg font-sans">
                   <div className="flex justify-between border-b border-emerald-600 pb-2">
                     <span className="opacity-70">Account Name</span>
                     <span className="font-bold text-right">WAFY ALUMNI ASSOCIATION</span>
                   </div>
                   <div className="flex justify-between border-b border-emerald-600 pb-2 pt-2">
                     <span className="opacity-70">Account No</span>
                     <span className="font-bold text-right">112802 000 12453</span>
                   </div>
                   <div className="flex justify-between pt-2">
                     <span className="opacity-70">IFSC Code</span>
                     <span className="font-bold text-right">FDRL0001128</span>
                   </div>
                 </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="flex flex-col items-center justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* QR Code Placeholder */}
                <div className="w-64 h-64 bg-slate-100 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group">
                  <img src="/QR.jpg" alt="Payment QR Code" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-slate-900 font-bold bg-white px-3 py-1 rounded-full shadow-sm text-sm">Scan to Pay</span>
                  </div>
                </div>
                <p className="text-slate-900 font-bold text-center text-lg">Scan to Donate</p>
                <p className="text-slate-500 text-center text-sm">Accepts UPI, GPay, PhonePe</p>
              </div>
              <p className="mt-8 text-emerald-100 italic text-sm text-center max-w-xs opacity-80">
                * All donations are utilized strictly for the educational empowerment of marginalized students.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- QUOTE / FOOTER --- */}
      <section className="py-20 bg-slate-950 text-slate-400 text-center">
        <div className="max-w-3xl mx-auto px-6">
           <FadeIn>
             {/* Arabic Quote */}
             <div className="mb-8">
               <p className="font-arabic text-2xl md:text-3xl text-emerald-400 mb-2 leading-relaxed">
                 هل جزاء الإحسان إلا الإحسان
               </p>
               <p className="font-arabic text-lg text-slate-600">
                 سورة الرحمن (الآية 60)
               </p>
             </div>
             <div className="w-16 h-1 bg-slate-800 mx-auto rounded-full mb-6"></div>
             <p className="uppercase tracking-widest text-xs font-bold text-slate-600">National Empowerment Mission &copy; 2035</p>
           </FadeIn>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap');
        
        .font-heading {
          font-family: 'Manrope', sans-serif;
        }
        body {
          font-family: 'Manrope', sans-serif;
        }
        .font-arabic {
          font-family: 'Amiri', serif;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* --- ANIMATED CURVED LINES TEXTURE --- */
        .bg-curve-pattern {
          /* Using an SVG data URI for a repeating curved line (wave) pattern */
          /* Pattern is 20px wide, 6px high - "very close" lines */
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 Q 5 6 10 3 T 20 3' stroke='%2394a3b8' fill='none' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: 20px 6px;
          animation: pattern-move 180s linear infinite;
        }

        @keyframes pattern-move {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
      `}</style>
    </div>
  );
}
