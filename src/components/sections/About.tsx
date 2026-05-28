import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { fadeUp, slideFromLeft } from '../../lib/animations';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 md:px-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        <div className="lg:w-1/2 relative group">
          <motion.div 
             initial={{ opacity: 0, x: -60 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative z-10 overflow-hidden ring-1 ring-accent/20"
          >
            <motion.img 
              style={{ y: imgY }}
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80" 
              alt="Reza fhlv"
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"
            />
          </motion.div>
          {/* Decorative frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-accent/30 -z-0 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
          
          <div className="absolute bottom-10 -right-10 bg-accent p-6 z-20 hidden md:block">
            <p className="font-mono text-[10px] text-bg font-bold tracking-[0.2em]">AVAILABLE FOR PROJECTS</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-label"
          >
            About Me
          </motion.span>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeUp}
            className="text-5xl md:text-6xl font-heading mb-8 leading-tight"
          >
            A Visual Artist with <br /><span className="text-accent display-heading italic">Cinematic Eye.</span>
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={fadeUp}
            className="text-muted text-lg mb-12 leading-relaxed"
          >
            Based in Indonesia, I specialize in turning raw footage and moments into compelling stories. With years of experience in color grading and high-end editing, I help brands and individuals create an aesthetic that truly resonates.
          </motion.p>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             variants={fadeUp}
             className="grid grid-cols-2 gap-8 mb-12"
          >
            <div>
              <h4 className="font-mono text-accent text-xs tracking-widest mb-4">SKILLS</h4>
              <ul className="text-muted text-sm space-y-2">
                <li>• Cinematic Editing</li>
                <li>• Color Grading</li>
                <li>• Motion VFX</li>
                <li>• Editorial Photo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-accent text-xs tracking-widest mb-4">GEAR</h4>
              <ul className="text-muted text-sm space-y-2">
                <li>• Sony A7S III</li>
                <li>• DJI Ronin S</li>
                <li>• Premiere / Resolve</li>
                <li>• Lightroom CC</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            variants={fadeUp}
          >
            <div className="w-32 h-[1px] bg-accent/40 mb-4" />
            <span className="font-display italic text-2xl text-accent">Reza</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
