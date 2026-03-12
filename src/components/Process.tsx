import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket, Activity } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Search size={24} />,
    title: "Analyse du besoin",
    desc: "Compréhension de vos objectifs business, de votre cible et de vos contraintes pour définir la meilleure stratégie."
  },
  {
    number: "02",
    icon: <PenTool size={24} />,
    title: "Design & Prototype",
    desc: "Création de maquettes interactives et d'une identité visuelle moderne centrée sur l'expérience utilisateur."
  },
  {
    number: "03",
    icon: <Code size={24} />,
    title: "Développement",
    desc: "Intégration technique avec des technologies robustes, performantes et évolutives."
  },
  {
    number: "04",
    icon: <Rocket size={24} />,
    title: "Lancement",
    desc: "Tests rigoureux, optimisation SEO et mise en ligne de votre solution digitale."
  },
  {
    number: "05",
    icon: <Activity size={24} />,
    title: "Suivi & Optimisation",
    desc: "Analyse des performances, maintenance et évolutions pour garantir un ROI maximal."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-zinc-900/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Une méthode <span className="text-brand-red">éprouvée</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Un processus clair et transparent pour transformer votre idée en un produit fini d'excellence.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-950 border-2 border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:border-brand-red group-hover:text-brand-red transition-colors relative z-10">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 text-xs font-mono font-bold text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
