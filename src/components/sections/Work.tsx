import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { fadeUp, scaleIn } from '../../lib/animations';

const categories = ["All", "Video", "Photo", "Reels"];

const projects = [
  { id: 1, title: "Modern Editorial", category: "Photo", img: "https://images.unsplash.com/photo-1536240478700-b869ad10a2eb?w=800&q=80", size: "tall" },
  { id: 2, title: "Cinematic Journey", category: "Video", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", size: "wide" },
  { id: 3, title: "Urban lifestyle", category: "Reels", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80", size: "square" },
  { id: 4, title: "Golden Hour", category: "Photo", img: "https://images.unsplash.com/photo-1598387993441-a364f854cbb5?w=800&q=80", size: "tall" },
  { id: 5, title: "Brand Identity", category: "Video", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80", size: "square" },
  { id: 6, title: "Event Aftermovie", category: "Reels", img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=800&q=80", size: "wide" },
];

export default function Work() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="text-5xl md:text-7xl font-heading uppercase">Capturing <br /><span className="text-accent display-heading italic capitalize">Vision.</span></h2>
          </div>

          <div className="flex items-center gap-4 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-1 transition-all",
                  filter === cat ? "text-accent" : "text-muted hover:text-text"
                )}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="underline" className="h-[1px] bg-accent mt-1" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "portfolio-item group relative overflow-hidden rounded-md",
                  project.size === "tall" ? "row-span-2" : "",
                  project.size === "wide" ? "md:col-span-2" : ""
                )}
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="font-mono text-[9px] tracking-widest text-accent mb-2">{project.category.toUpperCase()}</span>
                  <h3 className="font-heading text-3xl tracking-wide">{project.title.toUpperCase()}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
