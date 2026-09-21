import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactiveEl = target.closest('button, a, input, textarea, select, [role="button"]');
      const cardEl = target.closest('.portfolio-card, .service-card');

      if (interactiveEl) {
        setCursorType('pointer');
      } else if (cardEl) {
        setCursorType('view');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Small dot follower */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out will-change-transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 flex items-center justify-center ${
            cursorType === 'pointer'
              ? 'w-10 h-10 bg-orange-500/20 border border-orange-400 scale-125'
              : cursorType === 'view'
              ? 'w-12 h-12 bg-orange-500/90 text-white font-bold text-[10px] tracking-wider uppercase scale-110 shadow-lg shadow-orange-500/40'
              : 'w-3 h-3 bg-orange-500/80'
          }`}
        >
          {cursorType === 'view' && <span>VIEW</span>}
        </div>
      </div>
    </>
  );
}
