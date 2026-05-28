import { motion } from 'motion/react';
import { fadeUp } from '../../lib/animations';

const steps = [
  { num: "01", title: "BRIEF", desc: "Kita diskusikan visi, tujuan, dan kebutuhan proyekmu untuk menentukan arah yang tepat." },
  { num: "02", title: "SHOOT", desc: "Eksekusi dengan perlengkapan profesional, fokus pada visual sinematik berkualitas tinggi." },
  { num: "03", title: "EDIT", desc: "Keajaiban pasca-produksi: color grading, desain suara, dan grafik gerak." },
  { num: "04", title: "DELIVER", desc: "Peninjauan dan pengiriman akhir dalam semua format yang diperlukan, siap untuk dipublikasi." }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
           <div>
             <span className="section-label">Cara Saya Bekerja</span>
             <h2 className="text-5xl md:text-7xl font-heading">Proses<br /><span className="text-accent display-heading italic">Kreatif.</span></h2>
           </div>
           <p className="text-muted max-w-sm text-sm">Setiap proyek mengikuti jalur yang terukur untuk memastikan kualitas visual tertinggi dan resonansi emosional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[45px] left-0 w-full h-[1px] bg-gradient-to-r from-accent/40 via-accent/20 to-transparent hidden lg:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-bg border border-accent/20 flex items-center justify-center mb-8 group overflow-hidden">
                <span className="font-heading text-3xl transition-transform duration-500 group-hover:scale-110">{step.num}</span>
                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              
              <h3 className="font-heading text-2xl mb-4 tracking-wider">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
