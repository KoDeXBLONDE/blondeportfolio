import { motion } from 'motion/react';
import { ArrowRight, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-brand-secondary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
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
            Développeur & Créateur de Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-balance leading-[1.1] mb-8"
          >
            Je crée des solutions digitales qui font <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-primary to-brand-secondary">grandir les entreprises.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 text-balance"
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
              Voir mes projets
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
      </div>
    </section>
  );
}
