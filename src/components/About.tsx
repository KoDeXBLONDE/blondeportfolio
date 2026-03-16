import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Lightbulb, Rocket, BrainCircuit, Code2, Database, Cpu } from 'lucide-react';
import { useRef } from 'react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-24 md:py-32 bg-transparent relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance">
              L'alliance de la <span className="text-brand-primary">technologie</span> et du business.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Nous sommes Blonde Codeur, une équipe de développeurs et créateurs de solutions digitales basée en Afrique. Notre mission est d'accompagner les entrepreneurs, startups et cabinets professionnels dans leur transformation digitale.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Nous ne codons pas juste pour coder. Nous concevons des outils qui résolvent de vrais problèmes, optimisent vos processus et génèrent de la croissance.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Target className="text-brand-primary" size={24} />,
                  title: "Vision Entrepreneuriale",
                  desc: "Nous comprenons vos enjeux business avant d'écrire la première ligne de code."
                },
                {
                  icon: <Lightbulb className="text-brand-primary" size={24} />,
                  title: "Passion pour l'Innovation",
                  desc: "Nous intégrons les dernières technologies (IA, automatisation) pour vous donner un avantage."
                },
                {
                  icon: <Rocket className="text-brand-primary" size={24} />,
                  title: "Orienté Résultats",
                  desc: "Chaque projet est pensé pour convertir, engager et performer."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
              <motion.img
                style={{ y, scale: 1.15 }}
                src="/exp.png"
                alt="Développeur Full Stack et IA"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl z-20 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-primary font-bold text-xl">5+</span>
                </div>
                <p className="text-white font-medium leading-tight">Années d'expertise digitale</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
