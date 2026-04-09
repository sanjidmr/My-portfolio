import { motion } from 'framer-motion'; // "motion/react" change to "framer-motion" if needed
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Download, Send, Github, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import img from "../assets/img/Sanjid.jpg"

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'UI/UX Designer', 'React Specialist'],
    loop: true,
    delaySpeed: 2000,
  });

  const socialLinks = [
    { icon: <Github size={25} />, url: "#", color: "hover:text-white" },
    { icon: <Linkedin size={25} />, url: "#", color: "hover:text-blue-400" },
    { icon: <Twitter size={25} />, url: "#", color: "hover:text-sky-400" },
    { icon: <Instagram size={25} />, url: "#", color: "hover:text-pink-500" },
    { icon: <Facebook size={25} />, url: "#", color: "hover:text-blue-600" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 px-6 relative overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left order-1"
          >
            {/* 1. Badge (Mobile: First) */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-500/20"
            >
              Available for Freelance
            </motion.span>

            {/* 2. Name (Mobile: Second) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-serif font-black mb-4 leading-[0.9] tracking-tight text-white">
              Hi, I&apos;m <span className="text-gradient">Sanjid</span>
            </h1>

            {/* 3. Job Title (Mobile: Third) */}
            <div className="text-2xl sm:text-3xl font-outfit font-light text-slate-400 mb-8 h-10 tracking-wide">
              <span>{text}</span>
              <Cursor cursorColor="#3b82f6" />
            </div>

            {/* 4. Image (Mobile Only - appears between Title and Description) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-[280px] aspect-square mb-10 lg:hidden"
            >
              <div className="w-full h-full rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img src={img} alt="Sanjid" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* 5. Description (Mobile: After Image) */}
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              Crafting digital experiences that merge aesthetic precision with functional excellence.
              I build high-performance web applications with a focus on user-centric design.
            </p>

            {/* 6. Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://wa.me/8801645832896?text=Hi, I'm interested in your services!", "_blank")}
                className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all"
              >
                Contact Me <Send size={20} />
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl px-8 py-4 rounded-2xl  bg-gradient-to-r from-slate-900 to-slate-800 
      text-white font-semibold flex items-center justify-center gap-3 shadow-xl transition-all flex items-center justify-center gap-3  transition-all"
              >
                Download CV
                <Download size={20} />
              </motion.a>
            </div>

            {/* 7. Social Media Icons (New Section) */}
            <div className="mt-8 flex items-center gap-6 text-slate-500">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`transition-colors duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* 8. Social Proof */}

          </motion.div>

          {/* Right Side: Profile Image (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative w-full max-w-[480px] aspect-square mx-auto order-2"
          >
            <div className="relative z-10 w-full h-full rounded-[5rem] overflow-hidden shadow-2xl border-4 border-slate-800 group transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={img} alt="Sanjid" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;