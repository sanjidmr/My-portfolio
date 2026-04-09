import { useState } from 'react';
import { motion } from 'framer-motion';
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
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#60a5fa', '#a78bfa']
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const socials = [
    { icon: <Github size={22} />, url: "#", color: "hover:text-white" },
    { icon: <Linkedin size={22} />, url: "#", color: "hover:text-blue-400" },
    { icon: <Twitter size={22} />, url: "#", color: "hover:text-sky-400" },
    { icon: <Instagram size={22} />, url: "#", color: "hover:text-pink-500" },
    { icon: <Facebook size={22} />, url: "#", color: "hover:text-blue-600" },
  ];

  return (
    <section id="contact" className="py-12 md:py-24 px-6 relative bg-slate-950 overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

     <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-500/20"
          >
            <Sparkles size={12} /> Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-serif font-black mb-4 tracking-tight text-white leading-tight"
          >
            Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-lg font-light px-2">
            Have a project in mind? I&apos;m always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Minimal Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                required
                type="text" 
                placeholder="Name"
                className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
              />
              <input 
                required
                type="email" 
                placeholder="Email"
                className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
              />
            </div>
            <input 
              required
              type="text" 
              placeholder="Subject"
              className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
            />
            <textarea 
              required
              rows={3}
              placeholder="Message"
              className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-blue-500 outline-none transition-all text-white resize-none placeholder:text-slate-600"
            />

            <div className="pt-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="group flex items-center gap-3 text-white font-medium tracking-widest uppercase text-xs"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSuccess ? (
                  <span className="text-blue-400">Message Received.</span>
                ) : (
                  <>
                    Send Message 
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-blue-500" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Simple Contact Footer */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            {[
              { icon: <Mail size={16} />, value: 'mrsanjid2007@gmail.com' },
              { icon: <Phone size={16} />, value: '+880 16458 32896' },
              { icon: <MapPin size={16} />, value: 'Mymensingh, BD' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-900/30 border border-slate-800/40 flex items-center gap-4 md:flex-col md:text-center md:gap-2"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/5 text-blue-500 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-[11px] md:text-sm font-medium text-slate-300 truncate">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Minimal Social Links */}
          <div className="mt-12 flex flex-col items-center gap-5">
            <span className="h-[1px] w-12 bg-slate-800"></span>
            <div className="flex items-center gap-6 md:gap-10">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`text-slate-500 transition-colors duration-300 ${social.color}`}
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