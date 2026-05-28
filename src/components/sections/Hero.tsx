import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import MagneticButton from '../ui/MagneticButton';
import { ChevronDown } from 'lucide-react';
import { clipReveal, fadeIn } from '../../lib/animations';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="h-screen relative overflow-hidden flex items-center px-6 md:px-12"
    >
      {/* Background Video with Parallax */}
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-filmmaker-working-with-a-camera-and-monitor-42861-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-5xl"
      >
        <motion.span 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-label"
        >
          Visual Storyteller · Since 2020
        </motion.span>

        <h1 className="text-[12vw] md:text-[8vw] font-heading leading-[0.9] flex flex-col mb-8 overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            TURNING
          </motion.span>
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            MOMENTS
          </motion.span>
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
            className="text-accent display-heading"
          >
            INTO ART.
          </motion.span>
        </h1>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          variants={fadeIn}
          className="text-muted text-lg md:text-xl max-w-xl mb-12"
        >
          Premium video editing & photography that transforms every frame into a cinematic experience.
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <MagneticButton onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </MagneticButton>
          <button className="font-mono text-[11px] tracking-[0.2em] group flex items-center gap-2 hover:text-accent transition-colors">
            GET IN TOUCH 
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <div className="flex flex-col gap-4 items-end text-right">
          <div>
            <p className="font-heading text-2xl">50+</p>
            <p className="font-mono text-[9px] text-muted tracking-widest">PROJECTS</p>
          </div>
          <div>
            <p className="font-heading text-2xl">04</p>
            <p className="font-mono text-[9px] text-muted tracking-widest">YEARS EXP</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
