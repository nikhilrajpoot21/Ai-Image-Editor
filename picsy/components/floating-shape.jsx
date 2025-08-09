"use client";

import React from 'react';
import {useParallax} from '@/hooks/parallax'

const FloatingShapes = () => {
    const scroll = useParallax()
  const shapes = [
{
    id: 1,
    size: 'w-24 h-24',
    position: 'top-[10%] left-[5%]',
    gradient: 'from-purple-400 to-blue-500',
  },
  {
    id: 2,
    size: 'w-32 h-32',
    position: 'top-[20%] left-[80%]',
    gradient: 'from-cyan-400 to-purple-500',
  },
  {
    id: 3,
    size: 'w-16 h-16',
    position: 'top-[60%] left-[10%]',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    size: 'w-40 h-40',
    position: 'top-[70%] left-[70%]',
    gradient: 'from-green-400 to-cyan-500',
  },
  {
    id: 5,
    size: 'w-20 h-20',
    position: 'top-[40%] left-[45%]',
    gradient: 'from-yellow-400 to-red-500',
  },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.gradient} rounded-full blur-3xl opacity-10 animate-pulse`}
          style={{
            transform:`translateY(${scroll * 0.5}px) rotate(${scroll * 0.1}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
