import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center section-container relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="text-center z-10 py-20">
        {/* Profile Photo */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="mb-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
            <img src={profilePhoto} alt="Sthuthi Dolpady" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Sthuthi Dolpady</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
           Web Developer | AI & ML Enthusiast
        </motion.p>

        {/* Intro text */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Passionate about building intelligent, user-centric applications using modern web technologies and machine learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            <ExternalLink size={18} />
            View Projects
          </a>
          <a 
            href="https://sthuthi-dolpady-resume-2025dec.tiiny.site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563EB] transition-colors shadow-md hover:shadow-lg"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;