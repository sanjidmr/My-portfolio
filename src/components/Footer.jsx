import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <a href="#home" className="text-3xl font-serif font-bold text-gradient">
            Sanjid.
          </a>
          <p className="text-slate-500 max-w-md mx-auto font-outfit">
            Building digital products, brands, and experiences with a focus on modern design and performance.
          </p>
        </motion.div>

        <div className="h-px w-24 bg-slate-200 dark:bg-slate-800" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm font-outfit opacity-60">
            © {new Date().getFullYear()} Sanjid. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-outfit font-bold uppercase tracking-widest opacity-40">Back to top</span>
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-primary hover:text-white transition-all shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
