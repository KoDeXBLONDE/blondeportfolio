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
    <section id="services" className="py-24 md:py-32 relative border-t border-slate-800/50 overflow-hidden">
      {/* Background Image for Innovation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/20 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Des solutions conçues pour la <span className="text-brand-primary">croissance</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Nous transformons vos défis complexes en systèmes digitaux simples, élégants et performants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-brand-primary/30 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-brand-primary mb-6 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
