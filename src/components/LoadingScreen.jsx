import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
          return 100;
        }
        return prev + 25;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04060d] text-white transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-xs text-center px-4">
        {/* Sleek brand badge */}
        <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
            <path d="M15 2v19" />
            <path d="M5 2v4a3 3 0 0 0 3 3v12" />
          </svg>
        </div>

        <div className="space-y-1 tracking-widest text-xs font-semibold text-orange-400/90 uppercase">
          Digital Agency
        </div>

        <h1 className="text-xl md:text-2xl font-black tracking-wider text-white font-heading mt-1">
          RESTRO<span className="text-orange-500">.</span>GROWTH
        </h1>

        <p className="text-xs text-slate-400 mt-1 mb-6 font-light">
          Your Restaurant. Digitally Ready.
        </p>

        {/* Thin progress line */}
        <div className="w-48 h-1 bg-slate-800/80 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-2 text-[11px] text-slate-500 font-mono">
          {progress}%
        </div>
      </div>
    </div>
  );
}
