import { motion } from 'motion/react';

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950 pointer-events-none">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} 
      />

      {/* Animated Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-primary/10 blur-[120px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-secondary/10 blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-orange-500/10 blur-[100px] mix-blend-screen"
      />

      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      
      {/* Vignette effect to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80" />
    </div>
  );
}
