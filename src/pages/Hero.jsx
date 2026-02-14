import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Download, Code, Trophy, Star, Zap } from "lucide-react";
import FloatingCard from "../components/FloatingCard";

const roles = [
  "Machine Learning Enthusiast",
  "Full Stack Developer",
  "React Developer",
  "Data Science ",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typing = setTimeout(() => {
      if (charIndex < currentRole.length) {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 60);
    return () => clearTimeout(typing);
  }, [charIndex, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-cream-50 dark:bg-dark-900 transition-colors duration-300">
      
      {/* Background blobs matching Fresh Nature theme */}
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-secondary-200/40 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-12">

        {/* 5) Mobile responsive: Profile image at top center (order-first on mobile) */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative">
          
          {/* RIGHT SIDE (Visual Area) */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
             {/* Spinning rings with Theme Colors */}
             <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 dark:border-primary-400/20 animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-4 rounded-full border-2 border-secondary-500/30 dark:border-secondary-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
             
             {/* Main Image */}
             <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl shadow-primary-900/10 z-10 bg-cream-100 dark:bg-dark-800">
               <img 
                 src="/images/Ganesh.jpeg"
                 alt="Ganesh Beldar" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>

             {/* Floating Cards (Desktop) */}
             <div className="hidden lg:block">
                <FloatingCard 
                   icon={<Trophy size={18} />} 
                   title="Hackathons" 
                   subtitle="5+ Final" 
                   className="-top-4 left-0 z-20"
                   delay={0}
                />
                <FloatingCard 
                   icon={<Star size={18} />} 
                   title="CGPA" 
                   subtitle="8.75" 
                   className="top-10 -right-8 z-20"
                   delay={1}
                />
                <FloatingCard 
                   icon={<Code size={18} />} 
                   title="Projects" 
                   subtitle="10+ Live" 
                   className="bottom-10 -left-6 z-20"
                   delay={2}
                />
                <FloatingCard 
                   icon={<Zap size={18} />} 
                   title="Skills" 
                   subtitle="Full Stack" 
                   className="-bottom-6 right-0 z-20"
                   delay={1.5}
                />
             </div>
          </div>

          {/* Mobile Grid Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden w-full max-w-md">
             {[
               { icon: Trophy, label: "Hackathons", val: "5+ Wins" },
               { icon: Star, label: "GPA", val: "9.18" },
               { icon: Code, label: "Projects", val: "10+ Live" },
               { icon: Zap, label: "Skills", val: "Full Stack" }
             ].map(({ icon: Icon, label, val }, i) => (
               <div key={i} className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-primary-100 dark:border-primary-900/30 flex items-center gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400"><Icon size={16}/></div>
                  <div><div className="text-xs font-bold text-accent-500 dark:text-accent-400">{label}</div><div className="text-sm font-bold text-accent-900 dark:text-cream-50">{val}</div></div>
               </div>
             ))}
          </div>

        </div>

        {/* LEFT SIDE (Main Content Area) */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-2 tracking-wide uppercase text-sm">Hello, I'm</span>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-4 text-accent-900 dark:text-cream-50 leading-tight">
            Ganesh <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">Beldar</span>
          </h1>

          {/* Animated role text */}
          <div className="h-8 mb-6">
             <span className="text-xl md:text-2xl font-mono text-accent-600 dark:text-accent-300">
               <span className="font-semibold">{text}</span>
               <span className="animate-pulse text-primary-500 ml-1">|</span>
             </span>
          </div>

          <p className="text-accent-700 dark:text-cream-200 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-medium">
            A passionate <span className="text-primary-700 dark:text-primary-300">Artificial Intelligence & Data Science student</span> and AI enthusiast. 
            As the President of the AI Club, I conduct workshops and guide students in learning AI and development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full bg-accent-900 hover:bg-accent-800 text-white font-bold shadow-lg shadow-accent-900/20 hover:scale-105 hover:shadow-accent-900/30 transition-all flex items-center gap-2"
            >
              Contact Me <Mail size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1vzDpiHd9q-NBuNZfyayamt91ej4CMCAq/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-transparent border-2 border-primary-200 dark:border-primary-800 hover:border-primary-500 dark:hover:border-primary-400 text-accent-800 dark:text-cream-100 font-bold hover:scale-105 transition-all flex items-center gap-2 group"
            >
              Resume <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

{/* Social icons */}
          <div className="flex gap-4">
             {[
               { Icon: Github, href: "https://github.com/Ganeshbeldar015" },
               { Icon: Linkedin, href: "https://www.linkedin.com/in/ganesh-bhaktaraj-beldar-00589335b/" },
               { Icon: Instagram, href: "https://www.instagram.com/mr_ganu_kumavat_07/" },
               { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=ganeshbeldar.ug@gmail.com" }
             ].map(({ Icon, href }, i) => (
               <a 
                 key={i} 
                 href={href}
                 target={href.startsWith("http") ? "_blank" : "_self"}
                 rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                 className="p-3 bg-white dark:bg-dark-800 rounded-full border border-primary-100 dark:border-dark-700 text-accent-500 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md hover:scale-110 active:scale-95 transition-all"
               >
                 <Icon size={20} />
               </a>
             ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
