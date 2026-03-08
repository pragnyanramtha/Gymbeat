"use client";

import { useRef } from "react";
import { Dumbbell, Activity, ShieldPlus, ArrowRight, HeartPulse, Check, Mail, Phone, MapPin, Play } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const revealUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-body overflow-x-hidden noise-bg" ref={containerRef}>

      {/* Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="fixed top-6 left-6 right-6 z-50 border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl max-w-7xl mx-auto flex items-center justify-between px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
            <Image
              src="/image.png"
              alt="GYMBEAT Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-heading font-bold tracking-[0.2em] text-white hidden sm:block">GYMBEAT</span>
        </div>

        <div className="hidden lg:flex items-center space-x-10 text-xs font-bold tracking-[0.2em] uppercase">
          <a href="#features" className="text-neutral-400 hover:text-[#FF5500] transition-colors duration-300 relative group">
            Programs
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF5500] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#pricing" className="text-neutral-400 hover:text-[#FF5500] transition-colors duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF5500] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="text-neutral-400 hover:text-[#FF5500] transition-colors duration-300 relative group">
            Visit Us
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF5500] group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <motion.a
          whileHover={{ scale: 1.02, backgroundColor: "#FF5500", color: "#0a0a0a" }}
          whileTap={{ scale: 0.98 }}
          href="#pricing"
          className="bg-[#FF5500] text-[#0a0a0a] px-8 py-3.5 font-heading font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 transform -skew-x-12 shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:shadow-[0_0_50px_rgba(255,85,0,0.5)]"
        >
          <span className="block transform skew-x-12">Join Now</span>
        </motion.a>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY, scale: scaleImage }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
            alt="Gym Background"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
        </motion.div>

        {/* Dynamic Abstract Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] border border-[#FF5500]/20 rounded-full z-0 pointer-events-none border-dashed"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start text-left"
        >
          <motion.div variants={revealUp} className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-neutral-300">Elite Performance Center</span>
          </motion.div>

          <motion.h1
            variants={revealUp}
            className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8"
          >
            <span className="block text-white hover:text-[#00E5FF] transition-colors duration-300">FORGE.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FF8C00] pb-2">ELEVATE.</span>
            <span className="block text-white/40 hover:text-white transition-colors duration-500">DOMINATE.</span>
          </motion.h1>

          <motion.p
            variants={revealUp}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl font-body leading-relaxed"
          >
            Experience the ultimate fitness transformation. Elite coaching, state-of-the-art equipment, and a high-voltage community that pushes you beyond your limits.
          </motion.p>

          <motion.div variants={revealUp} className="flex flex-col sm:flex-row items-center gap-8 w-full md:w-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF5500] to-[#00E5FF] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
              <a
                href="#pricing"
                className="relative inline-flex items-center justify-center px-10 py-6 bg-[#FF5500] text-[#0a0a0a] font-heading font-black text-sm uppercase tracking-[0.2em] transform -skew-x-12 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span className="relative transform skew-x-12 flex items-center gap-3">
                  Unleash Elite Access <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
                </span>
              </a>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-1 sm:pl-8 sm:border-l-2 border-white/10 py-2">
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-[10px] font-bold tracking-[0.3em] text-[#00E5FF] uppercase">Gym Timings</span>
               </div>
               <span className="text-[15px] font-heading font-bold text-white uppercase tracking-widest mt-1">5 AM - 10 AM</span>
               <span className="text-[15px] font-heading font-bold text-white uppercase tracking-widest leading-none">&amp; 5 PM - 10 PM</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 right-10 flex flex-col items-center gap-2 z-10 opacity-50 hidden lg:flex"
        >
          <span className="text-[10px] uppercase tracking-widest transform -rotate-90 origin-bottom mb-8">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Dynamic Video / Action Banner */}
      <section className="py-24 relative overflow-hidden bg-[#FF5500]">
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex items-center gap-8 text-[8rem] font-heading font-bold uppercase leading-none opacity-20 text-black pointer-events-none"
        >
          <span>NO EXCUSES</span> <span>•</span> <span>PUSH LIMITS</span> <span>•</span> <span>GRIND DAILY</span> <span>•</span> <span>NO EXCUSES</span>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#0a0a0a] uppercase mb-6">
              Stop Wishing. Start Doing.
            </h2>
            <p className="text-[#0a0a0a]/80 text-xl font-bold max-w-2xl mx-auto">
              Our high-intensity sessions are designed to keep your metabolism elevated long after you leave the floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars (Features) */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}
              className="max-w-2xl"
            >
              <h2 className="text-sm text-[#FF5500] font-bold tracking-widest uppercase mb-4">The Methodology</h2>
              <h3 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9]">
                Master <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Your Body</span>
              </h3>
            </motion.div>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}
              className="text-neutral-400 max-w-md text-lg border-l-2 border-[#FF5500] pl-6"
            >
              We focus on real results through four essential pillars of physical excellence and longevity. No gimmicks.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Burn Fat", icon: Activity, desc: "High-intensity sessions to keep your metabolism elevated and shed fat fast.", img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1450&auto=format&fit=crop" },
              { title: "Build Muscle", icon: Dumbbell, desc: "Hypertrophy-focused training to add raw strength and sculpt your physique.", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" },
              { title: "Longevity", icon: HeartPulse, desc: "Improve cardiovascular endurance and enhance daily energy levels.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" },
              { title: "Bulletproof", icon: ShieldPlus, desc: "Protect against lifestyle diseases through consistent, brutal conditioning.", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] overflow-hidden bg-[#111] transform -skew-x-2 border border-white/5"
              >
                <div className="absolute inset-0 z-0">
                  <Image src={feature.img} alt={feature.title} fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-110 ease-out grayscale group-hover:grayscale-0 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end transform skew-x-2">
                  <div className="w-12 h-12 bg-[#FF5500] flex items-center justify-center mb-6 transform -skew-x-12 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,85,0,0.5)]">
                    <feature.icon className="w-6 h-6 text-[#0a0a0a]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 uppercase tracking-wide group-hover:text-[#00E5FF] transition-colors">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
                  <div className="h-[2px] w-0 bg-[#00E5FF] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative">
        {/* Background diagonal stripe */}
        <div className="absolute inset-0 bg-[#111] transform -skew-y-3 origin-top-right -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}
            className="text-center mb-24"
          >
            <h2 className="text-sm text-[#FF5500] font-bold tracking-widest uppercase mb-4">Invest In Yourself</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9]">
              Choose Your <span className="text-[#00E5FF]">Commitment</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { duration: "1 Month", price: "3.5k", period: "rs/month", pop: false, note: "Paid Monthly" },
              { duration: "3 Months", price: "2k", period: "rs/month", pop: false, note: "Billed as ₹6k total" },
              { duration: "6 Months", price: "1.5k", period: "rs/month", pop: false, note: "Billed as ₹9k total" },
              { duration: "1 Year", price: "1k", period: "rs/month", pop: true, note: "Billed as ₹12k total" },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-8 flex flex-col rounded-2xl border transition-all duration-300 ${plan.pop
                    ? "bg-[#FF5500] border-[#FF5500] text-[#0a0a0a] shadow-[0_0_40px_rgba(255,85,0,0.3)] z-10"
                    : "bg-[#0a0a0a] border-white/10 hover:border-[#00E5FF]/50 text-white"
                  }`}
              >
                <div className="h-full flex flex-col">
                  {plan.pop && (
                    <div className="absolute -top-4 -right-2 bg-[#00E5FF] text-[#0a0a0a] text-[10px] font-bold px-4 py-2 uppercase tracking-widest shadow-xl rounded-full border border-[#0a0a0a]">
                      Most Popular
                    </div>
                  )}
                  <h4 className="text-lg font-heading font-black uppercase mb-4 opacity-80">{plan.duration}</h4>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-6xl font-heading font-black leading-none">{plan.price}</span>
                    <span className={`text-xs font-bold uppercase tracking-widest pb-1 ${plan.pop ? "text-[#0a0a0a]/70" : "text-neutral-500"}`}>{plan.period}</span>
                  </div>

                  {plan.note && (
                    <div className={`text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full inline-block w-max mb-8 ${plan.pop ? "bg-[#0a0a0a]/10 text-[#0a0a0a]" : "bg-white/5 text-[#00E5FF]"}`}>
                      {plan.note}
                    </div>
                  )}

                  <ul className="space-y-4 mb-10 flex-1">
                    {['Full Gym Access', 'Strength Equipment', 'Cardio Zone', 'Locker Room'].map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.pop ? "text-[#0a0a0a]" : "text-[#FF5500]"}`} strokeWidth={3} />
                        <span className="font-bold tracking-wide opacity-90">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full py-5 text-center font-heading font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 ${plan.pop
                        ? "bg-[#0a0a0a] text-[#FF5500] hover:bg-black hover:scale-105"
                        : "bg-white/5 text-white hover:bg-[#00E5FF] hover:text-[#0a0a0a] hover:scale-105"
                      }`}
                  >
                    <span className="block">Select Plan</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Locations Section */}
      <section id="locations" className="py-32 px-6 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}
            className="text-center mb-20"
          >
            <h2 className="text-sm text-[#FF5500] font-bold tracking-widest uppercase mb-4">Our Network</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9]">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Studios</span>
            </h3>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Manikonda",
                address: "2nd Floor, Opp Pure O Natural, Road No 8, Alkapur Colony, Puppalaguda, Manikonda, Hyderabad-500089, Telangana"
              },
              {
                name: "Kukatpally",
                address: "Plot No. 59, L9, 1st Floor, Opposite HDFC Bank, 9th Phase Housing Board Colony, Kukatpally, Hyderabad - 500072"
              },
              {
                name: "Pragathi Nagar",
                address: "Second Floor, Mithila Square, 202, Mithila Nagar, Pragathi Nagar, Hyderabad, Telangana 500050"
              }
            ].map((branch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-[#111] p-10 border border-white/5 relative group hover:border-[#FF5500]/50 transition-colors duration-500 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 text-[#FF5500] flex items-center justify-center mb-6 rounded-full group-hover:bg-[#FF5500] group-hover:text-[#0a0a0a] transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-2xl font-bold uppercase mb-4 text-white group-hover:text-[#00E5FF] transition-colors">{branch.name}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{branch.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex-1 w-full"
          >
            <motion.h2 variants={revealUp} className="text-sm text-[#00E5FF] font-bold tracking-widest uppercase mb-4">No Excuses</motion.h2>
            <motion.h3 variants={revealUp} className="text-5xl md:text-7xl font-heading font-black uppercase mb-8 leading-[0.9]">
              Start Your <br /> <span className="text-[#FF5500]">Journey</span>
            </motion.h3>
            <motion.p variants={revealUp} className="text-neutral-400 mb-12 max-w-md text-lg leading-relaxed">
              Drop by our facility or request a callback to secure your membership and plan your first day of transformation.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-8">
              {[
                { icon: MapPin, label: "HQ Location", text: "Gymbeat Multi Fitness Studio" },
                { icon: Phone, label: "Direct Line", text: "+91 91330 26279" }
              ].map((item, i) => (
                <motion.div key={i} variants={revealUp} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg group-hover:bg-[#FF5500] group-hover:border-[#FF5500] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-white group-hover:text-[#0a0a0a]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="font-heading font-bold text-lg uppercase tracking-wide group-hover:text-[#00E5FF] transition-colors">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="bg-[#111] p-10 border border-white/10 relative transform -skew-x-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500] blur-[100px] opacity-20 pointer-events-none" />

              <div className="transform skew-x-2">
                <h3 className="text-3xl font-heading font-bold uppercase mb-8 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-[#00E5FF]" /> Request Callback
                </h3>
                <form className="space-y-6">
                  <div>
                    <input type="text" placeholder="YOUR NAME" className="w-full bg-[#050505] border border-white/10 px-5 py-4 focus:outline-none focus:border-[#FF5500] transition-colors text-white font-body text-sm uppercase tracking-widest" />
                  </div>
                  <div>
                    <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-[#050505] border border-white/10 px-5 py-4 focus:outline-none focus:border-[#FF5500] transition-colors text-white font-body text-sm uppercase tracking-widest" />
                  </div>
                  <button
                    type="button"
                    className="w-full group relative bg-[#FF5500] text-[#0a0a0a] font-heading font-bold py-5 hover:bg-[#00E5FF] transition-colors duration-300 text-sm uppercase tracking-widest mt-4 transform -skew-x-6"
                  >
                    <span className="block transform skew-x-6 flex items-center justify-center gap-2">
                      Send Request <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#FF5500]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#FF5500] flex items-center justify-center transform -skew-x-12">
              <Activity className="w-4 h-4 text-[#0a0a0a]" strokeWidth={3} />
            </div>
            <span className="text-lg font-heading font-bold tracking-widest text-white">GYMBEAT</span>
          </div>
          <p className="text-neutral-500 font-bold text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} GYMBEAT MULTI FITNESS STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
