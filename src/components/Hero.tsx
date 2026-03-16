import { motion } from 'motion/react';
import { ArrowRight, Code2, BrainCircuit, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/ville-nuit.jpg')` }}
        />
        {/* Dark overlay to ensure text readability and blend with the rest of the site */}
        <div className="absolute inset-0 bg-slate-950/40 bg-gradient-to-b from-slate-950/10 via-slate-950/60 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-sm font-medium text-slate-300 mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Développeurs & Créateurs de Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance leading-[1.1] mb-6"
            >
              Nous créons des solutions digitales qui font <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-primary to-brand-secondary">grandir les entreprises.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 text-balance"
            >
              Sites web, automatisations et outils intelligents pour entrepreneurs ambitieux. Transformez votre vision en réalité digitale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-primary/25 transition-all w-full sm:w-auto group"
              >
                Voir nos projets
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-700 transition-all w-full sm:w-auto"
              >
                Discuter de votre projet
                <Code2 size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - ML Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block relative w-full aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-2xl border border-slate-800/50 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-brand-primary/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-800/50 flex items-center gap-3 bg-slate-900/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">model_training.py</div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col gap-6 relative">
                {/* Code snippet */}
                <div className="font-mono text-[10px] sm:text-xs text-slate-400 space-y-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="overflow-hidden whitespace-nowrap text-brand-primary"
                  >
                    import tensorflow as tf
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
                    model = tf.keras.Sequential([
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="pl-4">
                    tf.keras.layers.Dense(128, activation='relu'),
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} className="pl-4">
                    tf.keras.layers.Dropout(0.2),
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }} className="pl-4 text-brand-secondary">
                    tf.keras.layers.Dense(10, activation='softmax')
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 0.5 }}>
                    ])
                  </motion.div>
                </div>

                {/* Neural Network Animation */}
                <div className="flex-1 relative flex items-center justify-center mt-2 mb-20">
                  {/* Central Node */}
                  <motion.div
                    animate={{
                      boxShadow: ["0 0 20px rgba(249,115,22,0.2)", "0 0 60px rgba(249,115,22,0.6)", "0 0 20px rgba(249,115,22,0.2)"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-hover z-10 flex items-center justify-center relative"
                  >
                    <BrainCircuit className="text-white w-8 h-8" />
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-brand-primary"
                      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  </motion.div>

                  {/* Orbiting Nodes */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        className="rounded-full border border-slate-700/50 border-dashed absolute"
                        style={{ width: `${120 + i * 60}px`, height: `${120 + i * 60}px` }}
                      ></div>
                      <motion.div
                        className="w-3 h-3 rounded-full bg-brand-secondary absolute shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                        style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Text Content */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-xl">
                  <h3 className="text-sm text-white font-semibold mb-1.5 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                    Intelligence Artificielle
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Intégration de modèles prédictifs et d'automatisation intelligente pour transformer vos données en décisions stratégiques.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
