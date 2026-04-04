import { useState } from 'react';
import { motion } from 'framer-motion'; // "motion/react" change to "framer-motion" if needed
import { Mail, Phone, MapPin, Send, Sparkles, Github, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#8b5cf6', '#f43f5e']
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const socials = [
    { icon: <Github size={30} />, url: "#", color: "hover:text-white" },
    { icon: <Linkedin size={30} />, url: "#", color: "hover:text-blue-400" },
    { icon: <Twitter size={30} />, url: "#", color: "hover:text-sky-400" },
    { icon: <Instagram size={30} />, url: "#", color: "hover:text-pink-500" },
    { icon: <Facebook size={30} />, url: "#", color: "hover:text-blue-600" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:bottom-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20"
          >
            <Sparkles size={14} /> Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif font-black mb-6 tracking-tight text-white"
          >
            Let&apos;s <span className="text-gradient">Connect</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-outfit px-4">
            Have a project in mind or just want to say hi? I&apos;m always open to 
            new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] bg-slate-900/40 border border-slate-800/50 shadow-2xl overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] md:text-sm font-bold ml-4 text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-slate-900/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder:text-slate-500/50 shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-sm font-bold ml-4 text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Email@gmail.com"
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-slate-900/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder:text-slate-500/50 shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-sm font-bold ml-4 text-slate-400 uppercase tracking-widest">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-slate-900/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder:text-slate-500/50 shadow-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-sm font-bold ml-4 text-slate-400 uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-slate-900/50 border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white resize-none placeholder:text-slate-500/50 shadow-sm"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-4 shadow-2xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? "Message Sent!" : (<>Send Message <Send size={20} /></>)}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info - Mobile: 3 columns (grid-cols-3) */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 mt-12">
            {[
              { icon: <Mail size={16} />, title: 'Email', value: 'mrsanjid2007@gmail.com' },
              { icon: <Phone size={16} />, title: 'Phone', value: '+880 16458 32896' },
              { icon: <MapPin size={16} />, title: 'Location', value: 'Mymensingh, BD' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-3 md:p-6 rounded-xl md:rounded-3xl bg-slate-900/40 border border-slate-800/50 flex flex-col items-center text-center gap-1"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-50 hidden md:block">{item.title}</p>
                <p className="text-[9px] md:text-sm font-bold text-white break-words w-full truncate md:whitespace-normal">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Follow Me On</p>
            <div className="flex items-center gap-15 ">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`text-slate-500 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;