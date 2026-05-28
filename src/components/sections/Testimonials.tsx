import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Brand Manager, StartupXYZ",
    quote: "Reza transformed our raw footage into something we couldn't have imagined. The edit felt like a short film.",
  },
  {
    name: "Sarah Wijaya",
    role: "Content Creator",
    quote: "My reels went viral after Reza edited them. The color grading is unmatched and truly cinematic.",
  },
  {
    name: "Kevin Halim",
    role: "Studio Director",
    quote: "Every project Reza touches gets a premium feel. His eyes for light and composition are impeccable.",
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 bg-surface overflow-hidden relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mx-auto">Kata Mereka</span>
          <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-wide">TESTIMONI</h2>
        </div>

        <div className="relative min-h-[300px]">
          <Quote className="absolute -top-10 -left-10 text-accent/10 w-24 h-24" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-display italic leading-relaxed mb-10">
                "{testimonials[index].quote}"
              </p>
              
              <div>
                <h4 className="font-heading text-2xl text-accent tracking-wider uppercase">{testimonials[index].name}</h4>
                <p className="font-mono text-[10px] text-muted tracking-widest mt-1 uppercase">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-300 ${
                i === index ? 'w-8 bg-accent' : 'w-2 bg-accent/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
