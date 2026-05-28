import { motion, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y, hasMoved } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.closest('button');
      const isImage = target.closest('.portfolio-item');
      
      setIsHovering(!!isLink);
      if (isImage) {
        setCursorText('LIHAT');
        setIsHovering(true);
      } else {
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: hasMoved ? 1 : 0 }}
      className="pointer-events-none"
    >
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full z-[10001] pointer-events-none"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-accent rounded-full z-[10000] pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: '-50%', 
          translateY: '-50%' 
        }}
        animate={{
          width: isHovering ? (cursorText ? 80 : 50) : 32,
          height: isHovering ? (cursorText ? 80 : 50) : 32,
          backgroundColor: cursorText ? '#c9a84c' : 'rgba(201, 168, 76, 0)',
          borderColor: cursorText ? '#c9a84c' : '#c9a84c',
          scale: isClicking ? 0.8 : 1
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold text-bg tracking-widest">{cursorText}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
