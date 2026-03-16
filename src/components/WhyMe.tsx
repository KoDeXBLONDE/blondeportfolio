import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

const reasons = [
  {
    title: "Solutions Sur Mesure",
    desc: "Pas de templates génériques. Chaque projet est unique et conçu pour répondre à vos besoins spécifiques."
  },
  {
    title: "Approche Business",
    desc: "Nous ne sommes pas que des développeurs. Nous pensons conversion, ROI et croissance avant d'écrire du code."
  },
  {
    title: "Design Moderne",
    desc: "Des interfaces esthétiques, épurées et inspirées des standards mondiaux pour valoriser votre image."
  },
  {
    title: "Technologies Innovantes",
    desc: "Nous utilisons les outils les plus performants (React, Tailwind, IA) pour des solutions rapides et sécurisées."
  },
  {
    title: "Accompagnement Stratégique",
    desc: "Un suivi de bout en bout, de la conception à l'évolution de votre produit digital."
  },
  {
    title: "Communication Transparente",
    desc: "Des échanges clairs, réguliers et sans jargon technique pour avancer en toute confiance."
  }
];

export function WhyMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="why-me" className="py-24 md:py-32 bg-transparent relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance">
              Pourquoi <span className="text-brand-primary">travailler</span> avec nous ?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Faire appel à Blonde Codeur, c'est choisir un partenaire impliqué dans la réussite de votre entreprise. Nous combinons expertise technique et vision stratégique pour créer des outils qui font la différence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 text-brand-primary shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
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
            <div className="aspect-square rounded-full overflow-hidden relative border-8 border-slate-900">
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10" />
              <motion.img
                style={{ y, scale: 1.15 }}
                src="https://picsum.photos/seed/developer-focus/800/800"
                alt="Développeur concentré"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-brand-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
