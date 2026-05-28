import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'KARYA', href: '#work' },
    { name: 'TENTANG', href: '#about' },
    { name: 'LAYANAN', href: '#services' },
    { name: 'KONTAK', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between",
        isScrolled ? "bg-bg/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <a href="#hero" className="font-heading text-2xl tracking-wider select-none">
        REZA<span className="text-accent">·</span>FHLV
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative font-mono text-[10px] tracking-[0.2em] text-muted hover:text-accent transition-colors"
          >
            {link.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      <a href="#contact" className="font-mono text-[10px] tracking-[0.2em] text-accent border border-accent/20 px-4 py-2 hover:bg-accent hover:text-bg transition-all">
        HUBUNGI SAYA
      </a>
    </motion.nav>
  );
}
