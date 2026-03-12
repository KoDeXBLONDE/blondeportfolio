import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Restaurant Asiatique Moderne",
    category: "Site Web & Réservation",
    image: "https://picsum.photos/seed/restaurant-modern/800/600",
    desc: "Refonte complète avec système de réservation en ligne et menu interactif."
  },
  {
    title: "Dashboard KPI Flotte",
    category: "Outil de Gestion",
    image: "https://picsum.photos/seed/dashboard-analytics/800/600",
    desc: "Interface de suivi en temps réel pour une entreprise de logistique."
  },
  {
    title: "Solutions Digitales PME",
    category: "Automatisation",
    image: "https://picsum.photos/seed/business-tech/800/600",
    desc: "Digitalisation des processus internes et CRM sur mesure pour un cabinet d'avocats."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Mes réalisations <span className="text-brand-red">récentes</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg"
            >
              Découvrez comment j'ai aidé d'autres entreprises à se transformer et à atteindre leurs objectifs grâce au digital.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-red transition-colors whitespace-nowrap"
          >
            Voir tous les projets <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-900">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div>
                <p className="text-brand-red font-medium text-sm mb-2 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-zinc-300 transition-colors">{project.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
