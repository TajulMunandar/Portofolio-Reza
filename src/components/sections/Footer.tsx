export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-bg border-t border-white/5">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
             <span className="font-heading text-2xl tracking-widest">REZA</span>
             <div className="w-[1px] h-6 bg-accent/20" />
             <p className="font-mono text-[9px] tracking-widest text-muted">© 2025 · ALL RIGHTS RESERVED</p>
          </div>

          <div className="flex items-center gap-12">
             <a href="#hero" className="font-mono text-[9px] tracking-widest hover:text-accent transition-colors">TOP</a>
             <a href="#work" className="font-mono text-[9px] tracking-widest hover:text-accent transition-colors">WORK</a>
             <a href="#about" className="font-mono text-[9px] tracking-widest hover:text-accent transition-colors">ABOUT</a>
             <a href="#contact" className="font-mono text-[9px] tracking-widest hover:text-accent transition-colors">CONTACT</a>
          </div>

          <p className="font-mono text-[9px] tracking-widest text-muted/50 hidden lg:block">
            DESIGNED WITH PURPOSE. BUILT TO IMPRESS.
          </p>
       </div>
    </footer>
  );
}
