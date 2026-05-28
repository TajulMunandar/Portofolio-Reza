import { motion } from 'motion/react';
import { Video, Camera, Sparkles } from 'lucide-react';
import { fadeUp } from '../../lib/animations';

interface Service {
  title: string;
  desc: string;
  price: string;
  icon: any;
  popular?: boolean;
}

const services: Service[] = [
  {
    icon: Video,
    title: "VIDEO EDITING",
    desc: "Cinematic cuts, professional color grading, sound design, and motion VFX for high-impact content.",
    price: "From Rp 250k"
  },
  {
    icon: Camera,
    title: "PHOTOGRAPHY",
    desc: "Editorial, lifestyle, event, and product photography with a unique aesthetic and professional retouching.",
    price: "From Rp 500k"
  },
  {
    icon: Sparkles,
    title: "FULL PACKAGE",
    desc: "A complete visual solution: we handle the shooting, editing, and final delivery ready for any platform.",
    price: "From Rp 1.2M",
    popular: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="section-label mx-auto">What I Offer</span>
          <h2 className="text-5xl md:text-7xl font-heading mb-6 uppercase">Elevate your <br /><span className="text-accent display-heading italic capitalize">Stories.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-12 bg-surface-2 border transition-colors duration-500 group ${
                service.popular ? 'border-accent/40 bg-accent/5' : 'border-white/5'
              } hover:border-accent/60`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-accent text-bg font-mono text-[9px] font-bold px-4 py-1 tracking-widest">
                  POPULAR
                </div>
              )}

              <service.icon className="text-accent w-10 h-10 mb-8 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
              
              <h3 className="font-heading text-3xl mb-4 tracking-wide">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-12 min-h-[80px]">
                {service.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                 <span className="font-mono text-[10px] tracking-widest text-accent/60">STARTING PRICE</span>
                 <span className="font-heading text-xl text-accent">{service.price}</span>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute -inset-1 bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
