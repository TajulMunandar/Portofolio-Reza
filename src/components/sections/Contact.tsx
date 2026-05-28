import { motion } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { fadeUp } from '../../lib/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-bg relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[30vw] text-accent/5 pointer-events-none select-none">
        REZA
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-label mx-auto"
          >
            Ayo bekerja sama
          </motion.span>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeUp}
            className="text-6xl md:text-[8vw] font-heading leading-none mb-8"
          >
             AYO BUAT<br /><span className="text-accent display-heading italic capitalize">Sesuatu yang Hebat.</span>
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={fadeUp}
            className="text-muted text-lg max-w-2xl mx-auto mb-12"
          >
            Saya saat ini tersedia untuk proyek freelance, kolaborasi, dan kemitraan konten. Mari ceritakan kisahmu bersama.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6"
          >
            <MagneticButton className="flex items-center gap-3">
              <MessageCircle size={18} />
              HUBUNGI WHATSAPP
            </MagneticButton>
            
            <a href="mailto:reza@email.com" className="flex items-center gap-3 border border-white/10 px-8 py-3.5 font-mono text-[11px] tracking-[0.2em] hover:bg-white/5 transition-all">
              <Mail size={16} />
              KIRIM EMAIL
            </a>
          </motion.div>
        </div>

        <div className="gold-divider mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div>
             <p className="font-mono text-[10px] text-muted tracking-widest mb-2 uppercase">SOSIAL MEDIA</p>
             <div className="flex gap-8">
                <a href="#" className="flex items-center gap-2 text-xs hover:text-accent transition-colors font-mono tracking-widest">
                  <Instagram size={14} /> INSTAGRAM
                </a>
                <a href="#" className="flex items-center gap-2 text-xs hover:text-accent transition-colors font-mono tracking-widest">
                  TIKTOK
                </a>
             </div>
           </div>
           
           <p className="font-mono text-[10px] text-muted tracking-widest uppercase">
             JAKARTA, INDONESIA · UTC+7
           </p>
        </div>
      </div>
    </section>
  );
}
