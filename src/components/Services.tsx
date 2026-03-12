import { motion } from 'motion/react';
import { Globe, Cpu, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: "Sites Web Professionnels",
    desc: "Vitrines élégantes et performantes pour asseoir votre crédibilité et attirer vos clients idéaux."
  },
  {
    icon: <Cpu size={32} />,
    title: "Automatisation d'Entreprise",
    desc: "Gagnez du temps en automatisant vos tâches répétitives et vos processus métiers."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Dashboards & Outils",
    desc: "Outils de gestion sur mesure pour piloter votre activité avec des données claires."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Intégration IA",
    desc: "Boostez votre productivité avec des solutions basées sur l'intelligence artificielle."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Optimisation & Visibilité",
    desc: "Design marketing, pages de vente et SEO pour maximiser votre impact en ligne."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-900/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Des solutions conçues pour la <span className="text-brand-red">croissance</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Je transforme vos défis complexes en systèmes digitaux simples, élégants et performants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-brand-red/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-brand-red group-hover:bg-brand-red/10 transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
