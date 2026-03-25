import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FaGithub, FaLinkedin ,FaTwitter  } from "react-icons/fa";


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
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

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Let's <span className="text-gradient">work together</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to 
            new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {[
                { icon: <Mail />, title: 'Email', value: 'mrsanjid2007@gmail.com', color: 'bg-blue-500/10 text-blue-500' },
                { icon: <Phone />, title: 'Phone', value: '+880 16458 32896', color: 'bg-purple-500/10 text-purple-500' },
                { icon: <MapPin />, title: 'Location', value: 'Mymensingh, Bangladesh', color: 'bg-pink-500/10 text-pink-500' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-3xl glass group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{item.title}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass flex flex-col items-center gap-6"
            >
              <p className="text-sm font-bold uppercase tracking-widest opacity-40">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub size={20} />, href: '#' },
                  { icon: <FaLinkedin size={20} />, href: '#' },
                  { icon: <FaTwitter size={20} />, href: '#' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 md:p-12 rounded-[40px] glass relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your email@gmail.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-2">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Message Sent Successfully!"
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
            
            {/* Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;