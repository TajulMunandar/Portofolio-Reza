/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/ui/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // GSAP initialization could go here for pinned sections if needed, 
  // but Framer Motion handles current requirements perfectly.

  return (
    <main className="relative min-h-screen bg-bg">
      <AnimatePresence>
        {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <div className="grain-overlay" />
      <FloatingWhatsApp />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className={loading ? 'hidden' : 'block'}>
        <Navbar />
        
        <Hero />
        <Marquee />
        
        <div id="work">
          <Work />
        </div>

        <div className="gold-divider" />

        <div id="about">
          <About />
        </div>

        <div className="gold-divider" />

        <div id="services">
          <Services />
        </div>

        <Stats />

        <div id="process">
          <Process />
        </div>

        <Testimonials />

        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />
      </div>
    </main>
  );
}
