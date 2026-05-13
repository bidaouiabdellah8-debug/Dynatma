import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Bot, MessageSquare, Zap, Target, ArrowRight, Layers, Workflow, CheckCircle2, ChevronRight, X, Send, Linkedin, Search, Command } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 10V30" stroke="#C0C0C0" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 10H22C27 10 31 14 31 20C31 26 27 30 22 30H12" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 20L31 11M31 11H25M31 11V17" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="12" cy="10" r="1.5" fill="#C0C0C0" />
    <circle cx="12" cy="30" r="1.5" fill="#C0C0C0" />
    <circle cx="31" cy="20" r="1.5" fill="#2563EB" />
  </svg>
);

const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 opacity-[0.1]" 
      style={{ 
        backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} 
    />
    <motion.div 
      animate={{ 
        y: ['0%', '100%'],
        opacity: [0, 0.5, 0]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-brand/20 to-transparent z-10"
    />
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-midnight/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 group">
            <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:border-brand/40 transition-all duration-300 transform group-hover:rotate-12">
              <Logo className="w-7 h-7" />
            </div>
            <div className="text-xl font-display tracking-[0.25em] text-white italic group-hover:text-brand transition-colors uppercase">
              <span className="font-black">DYN</span>
              <span className="font-medium opacity-60">ATMA</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-8">
            {['Results', 'Solutions', 'Approach'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-muted hover:text-white transition-all relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-brand/40 transition-colors group cursor-pointer">
            <Search className="w-4 h-4 text-slate-muted group-hover:text-brand transition-colors" />
            <span className="text-[9px] uppercase tracking-[0.1em] text-slate-muted font-bold">Search Services</span>
            <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-[8px] text-white/40">
              <Command className="w-2.5 h-2.5" />
              <span>K</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/abdellah-bidaoui-5174a3286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-muted hover:text-brand transition-colors p-2 hidden xs:block"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="text-[10px] uppercase tracking-[0.2em] bg-white text-midnight px-6 py-2.5 rounded-full hover:bg-brand transition-colors font-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Consultation
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
      <GridBackground />
      
      {/* Dynamic Background Element - The "Bolt" path */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-100,500 L400,500 L450,400 L550,600 L600,500 L1100,500" 
            stroke="rgba(6, 182, 212, 0.4)" 
            strokeWidth="1" 
            fill="none" 
          />
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(6,182,212,0.1)_0%,rgba(13,14,18,0)_60%)] pointer-events-none" />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center z-10 max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex justify-center mb-10"
        >
          <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Systems Operational — 2026.4.1</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-7xl md:text-[9.5rem] font-display font-black leading-[0.85] mb-12 tracking-[-0.05em] uppercase text-white"
        >
          Hyper <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand via-white to-secondary">Velocity.</span>
        </motion.h1>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 mb-16 max-w-4xl mx-auto">
          <motion.p 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-lg md:text-xl text-slate-muted font-medium text-left md:max-w-[400px] leading-tight"
          >
            We engineer high-performance automation architectures that transform cold pipelines into high-velocity revenue engines.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex-col gap-6 w-full md:w-auto"
          >
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: '#06b6d4', color: '#020617' }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Abdellah@dynatma.com"
              className="flex items-center justify-between gap-12 bg-white text-midnight px-8 py-5 font-black rounded-sm group transition-all"
            >
              <span className="tracking-widest text-xs uppercase">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <div className="flex items-center justify-between text-[10px] text-white/40 font-black tracking-widest border-t border-white/5 pt-4 uppercase">
              <span>Strategy Led</span>
              <span className="text-brand">AI Powered</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-brand to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="py-32 px-6 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-brand uppercase tracking-[0.4em] text-[10px] font-black mb-4 block">Track Record</span>
            <h2 className="text-5xl font-display font-bold italic">Engineered Velocity.</h2>
          </div>
          <p className="text-slate-muted max-w-sm text-sm leading-relaxed font-medium">
            Tangible results reflecting our commitment to hyper-growth through high-performance automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              client: "Noubti",
              title: "Rapid Market Entry",
              result: "$10k Revenue / 60 Days",
              desc: "Deployed a high-frequency automation stack that captured 400+ qualified leads and converted $10k in sales within 8 weeks."
            },
            {
              client: "Enterprise Supply",
              title: "Global Scale Operation",
              result: "1000% Growth Surge",
              desc: "Architected a zero-manual-work sales engine, scaling periodic revenue from $100k to $1M with automated deal routing."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group p-10 bg-white/[0.03] border border-white/5 hover:border-brand/40 transition-all duration-500 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="text-brand w-12 h-12" />
              </div>
              <span className="text-brand text-[10px] uppercase tracking-[0.2em] font-black block mb-4">{item.client}</span>
              <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
              <div className="text-3xl font-display font-black text-white mb-6 group-hover:text-brand transition-colors">{item.result}</div>
              <p className="text-slate-muted text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl -z-10 opacity-20" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-brand uppercase tracking-[0.4em] text-[10px] font-black mb-4 block underline decoration-secondary decoration-2 underline-offset-4">Our Technology</span>
          <h2 className="text-5xl font-display font-extrabold pb-2">Future-Proof Architecture.</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Workflow, title: "Automation Hubs", desc: "Complex, logic-heavy automation controllers that unite your entire business ecosystem." },
            { icon: MessageSquare, title: "Smart Chat", desc: "Vibrant AI chatbots with personified logic designed to drive massive user engagement." },
            { icon: Target, title: "Velocity Funnels", desc: "High-conversion entry points that turn social traffic into sales ready leads instantly." },
            { icon: Zap, title: "Instant Flows", desc: "Sub-second automation triggers that respond to customer actions before they leave your site." },
            { icon: Layers, title: "Database Systems", desc: "Architecting custom relational databases that serve as the single source of truth for your data." },
            { icon: Workflow, title: "CRM Optimization", desc: "Elite CRM configuration and automated deal-tracking to ensure no revenue is left on the table." },
            { icon: Bot, title: "Cognitive AI", desc: "Leveraging state-of-the-art models to perform intelligent lead scoring and automated follow-ups." },
            { icon: Zap, title: "Integrated Stacks", desc: "Tailored integration of enterprise tools for a unified and seamless data source." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                translateY: -8, 
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
                borderColor: "rgba(6, 182, 212, 0.4)"
              }}
              className="p-8 bg-white/[0.02] border border-white/5 transition-all rounded-2xl flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-[0.02] transition-opacity" />
              <div className="p-4 bg-brand/5 rounded-xl mb-6 group-hover:bg-brand/20 transition-colors relative z-10">
                <item.icon className="w-8 h-8 text-brand stroke-2" />
              </div>
              <h3 className="text-lg font-display font-bold mb-4 tracking-wide relative z-10">{item.title}</h3>
              <p className="text-slate-muted text-xs leading-relaxed font-medium relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send data to a backend here
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-40 px-6 bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-brand/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] p-16 md:p-24 shadow-2xl relative overflow-hidden rounded-3xl border border-white/5"
        >
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <h2 className="text-4xl md:text-6xl font-display text-white mb-8 z-10 relative font-black">
            Ignite Your <span className="text-brand">Growth Engine</span> Today.
          </h2>
          <p className="text-slate-muted text-lg max-w-xl mx-auto mb-12 z-10 relative font-medium">
            Schedule your free high-velocity automation audit and stop leaking revenue.
          </p>
          
          <div className="flex flex-col items-center gap-10 z-10 relative w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {!showForm ? (
                <motion.div 
                  key="cta-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-10"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-brand/60 text-[10px] uppercase tracking-[0.4em] font-black">Direct Channel</span>
                    <div className="text-xl md:text-2xl font-display font-bold text-white hover:text-brand transition-colors cursor-default border-b border-white/10 pb-1">
                      Abdellah@dynatma.com
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02, translateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowForm(true)}
                    className="group relative inline-flex items-center gap-6 bg-brand text-midnight px-14 py-6 font-black tracking-[0.15em] text-sm rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Zap className="w-6 h-6 fill-current" />
                    <span>START YOUR AUDIT</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </motion.div>
              ) : submitted ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full bg-white/[0.03] border border-white/10 p-12 rounded-3xl backdrop-blur-xl flex flex-col items-center gap-6"
                >
                  <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-brand" />
                  </div>
                  <h3 className="text-3xl font-display font-black text-white px-5">TRANSMISSION RECEIVED</h3>
                  <p className="text-slate-muted font-medium px-5">Your request is being processed. Expect rapid response within 2 hours.</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="audit-form"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-xl relative"
                >
                  <button 
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <h3 className="text-2xl font-display font-black mb-8 text-white">IGNITE YOUR AUTO-GROWTH</h3>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] uppercase tracking-widest text-brand font-black ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand/50 transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] uppercase tracking-widest text-brand font-black ml-1">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand/50 transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] uppercase tracking-widest text-brand font-black ml-1">Main Challenge</label>
                      <textarea 
                        required
                        rows={3}
                        placeholder="What bottleneck can we shatter?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand/50 transition-colors resize-none"
                      />
                    </div>
                    
                    <button type="submit" className="w-full bg-brand text-midnight py-5 rounded-xl font-black tracking-widest text-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(6,182,212,0.2)] flex items-center justify-center gap-3">
                      <Send className="w-4 h-4" />
                      DEPLOY REQUEST
                    </button>
                    
                    <p className="text-center text-[10px] text-white/30 uppercase tracking-tighter">
                      Encrypting & transmitting via secure channel...
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-12 text-[10px] uppercase tracking-[0.3em] text-brand z-10 relative font-black">
            Fast Response Guarantee: &lt; 2 hours
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ToolsTicker = () => {
  const tools = [
    // APRÈS — SVG inline, couleurs vives, pas de dépendances externes
const tools = [
  {
    name: "AWS",
    svg: `<svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 35c-1 0-2-1-2-2V20c0-1 1-2 2-2h4c1 0 2 1 2 2v13c0 1-1 2-2 2h-4z" fill="#FF9900"/>
      <path d="M38 35c-1 0-2-1-2-2V15c0-1 1-2 2-2h4c1 0 2 1 2 2v18c0 1-1 2-2 2h-4z" fill="#FF9900"/>
      ...
    </svg>`
  },
  // ... 9 autres outils avec SVG inline colorés
];
  return (
    <div className="py-16 bg-[#0F172A] border-y border-white/5 overflow-hidden relative">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/80 to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex gap-20 whitespace-nowrap w-fit px-10 hover:[animation-play-state:paused]"
      >
       // APRÈS
{[...tools, ...tools].map((tool, idx) => (
  <div 
    key={idx} 
    className="flex items-center justify-center h-12 min-w-[100px] group cursor-pointer"
    title={tool.name}
  >
    <div 
      className="h-10 w-auto opacity-50 grayscale brightness-[1.3] group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-[1.1] group-hover:scale-110 transition-all duration-300"
      dangerouslySetInnerHTML={{ __html: tool.svg }}
    />
  </div>
))}
        <div className="text-center mb-8">
  <span className="text-[10px] uppercase tracking-[0.3em] text-[#6366F1] font-black">Our Automation Stack</span>
</div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-midnight selection:bg-brand selection:text-midnight">
      <Nav />
      <Hero />
      <ToolsTicker />
      <Results />
      <Solutions />
      <Contact />
      
      <footer className="py-20 px-6 bg-midnight border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4 group">
            <Logo className="w-10 h-10" />
            <div className="text-2xl font-display text-white tracking-widest italic uppercase">
              <span className="font-black">DYN</span>
              <span className="font-medium opacity-70">ATMA</span>
            </div>
          </div>
          <div className="text-slate-muted text-[10px] tracking-[0.2em] font-bold">
            © 2026 DYNATMA SOLUTIONS — NEXT-GEN AI AUTOMATION
          </div>
          <div className="flex items-center gap-8">
            <a href="mailto:Abdellah@dynatma.com" className="text-slate-muted hover:text-brand transition-colors text-[10px] uppercase tracking-[0.2em] font-bold">Contact</a>
            <a 
              href="https://www.linkedin.com/in/abdellah-bidaoui-5174a3286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-muted hover:text-brand transition-colors flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Global Scrollbar styling */}
      <style>{`
        html {
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 #020617;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #06b6d4;
          border-radius: 10px;
        }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        .animate-infinite-scroll-fast {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
