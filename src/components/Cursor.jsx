import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      );
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`
          rounded-full bg-black border-2 border-white
          transition-all duration-100 ease-out
          ${isPointer ? 'w-6 h-6 bg-neo-primary' : 'w-4 h-4'}
        `} />
      </div>
      
      {/* Trailing Cursor */}
      <div
        className="fixed pointer-events-none z-[9998]"  
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`
          rounded-full border-2 border-black
          transition-all duration-200 ease-out
          ${isPointer ? 'w-12 h-12 opacity-50 bg-neo-accent' : 'w-8 h-8 opacity-30'}  
        `} />
      </div>
    </>
  );
};

export default CustomCursor;