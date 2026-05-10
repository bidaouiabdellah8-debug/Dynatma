import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Bot, MessageSquare, Zap, Target, ArrowRight, Layers, Workflow, CheckCircle2, ChevronRight, X, Send } from 'lucide-react';
import { useState } from 'react';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center border border-brand/20">
            <Zap className="w-5 h-5 text-brand fill-current" />
          </div>
          <div className="text-xl font-display tracking-[0.2em] font-bold text-brand italic">DYNATMA</div>
        </div>
        <div className="hidden md:flex gap-10">
          {['Results', 'Solutions', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] uppercase tracking-[0.2em] text-slate-muted hover:text-brand transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="text-[11px] uppercase tracking-[0.2em] bg-brand/10 text-brand border border-brand/20 px-6 py-2 rounded-full hover:bg-brand hover:text-midnight transition-all duration-300 font-bold"
        >
          Consultation
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15)_0%,rgba(139,92,246,0.05)_50%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        style={{ y }}
        className="text-center z-10 max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[11px] uppercase tracking-[0.5em] text-brand mb-8 block font-black">Next-Gen AI Systems</span>
        <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] mb-8 tracking-[-0.04em]">
          Automating High <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-secondary">Lead Velocity.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-muted font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          We engineer hyper-efficient automation architectures to ignite high-velocity pipelines for rapidly scaling companies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:Abdellah@dynatma.com"
            className="flex items-center gap-3 bg-brand text-midnight px-10 py-5 font-black rounded-lg group overflow-hidden relative shadow-[0_10px_40px_rgba(6,182,212,0.3)] transition-all"
          >
            <span className="relative z-10 tracking-wider">IGNITE GROWTH</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <a href="#results" className="text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-brand transition-colors flex items-center gap-2 group font-bold">
            Live Metrics <ChevronRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
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
    <section id="solutions" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand uppercase tracking-[0.4em] text-[10px] font-black mb-4 block underline decoration-secondary decoration-2 underline-offset-4">Our Technology</span>
          <h2 className="text-5xl font-display font-extrabold pb-2">Future-Proof Architecture.</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            <div key={idx} className="p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-brand/30 transition-all rounded-2xl flex flex-col items-center text-center group">
              <div className="p-4 bg-brand/5 rounded-xl mb-6 group-hover:bg-brand/20 transition-colors">
                <item.icon className="w-8 h-8 text-brand stroke-2" />
              </div>
              <h3 className="text-lg font-display font-bold mb-4 tracking-wide">{item.title}</h3>
              <p className="text-slate-muted text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

export default function App() {
  return (
    <div className="min-h-screen bg-midnight selection:bg-brand selection:text-midnight">
      <Nav />
      <Hero />
      <Results />
      <Solutions />
      <Contact />
      
      <footer className="py-20 px-6 bg-midnight border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-display text-brand tracking-widest font-black italic">DYNATMA</div>
          <div className="text-slate-muted text-[10px] tracking-[0.2em] font-bold">
            © 2026 DYNATMA SOLUTIONS — NEXT-GEN AI AUTOMATION
          </div>
          <div className="flex gap-8">
            <a href="mailto:Abdellah@dynatma.com" className="text-slate-muted hover:text-brand transition-colors text-[10px] uppercase tracking-[0.2em] font-bold">Contact</a>
            <a href="#" className="text-slate-muted hover:text-brand transition-colors text-[10px] uppercase tracking-[0.2em] font-bold">LinkedIn</a>
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
