import { useMotionValue } from 'motion/react';
import { useEffect, useState } from 'react';

export function useMousePosition() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!hasMoved) setHasMoved(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, hasMoved]);

  return { x, y, hasMoved };
}
