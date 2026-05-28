import { motion } from 'motion/react';

export default function Marquee() {
  const items = [
    "VIDEO EDITOR", "PHOTOGRAPHER", "COLOR GRADING", 
    "MOTION VFX", "REELS", "CINEMATIC", "AESTHETIC"
  ];

  return (
    <div className="py-8 border-y border-accent/20 bg-bg/50 backdrop-blur-sm relative overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-heading text-4xl md:text-5xl tracking-[0.1em] text-muted/30">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
