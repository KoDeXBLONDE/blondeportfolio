import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-8 text-balance"
        >
          Vous avez un projet digital ? Transformons votre idée en une solution puissante.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-xl mb-12 max-w-2xl mx-auto"
        >
          Discutons de vos objectifs et voyons comment je peux vous aider à les atteindre. Consultation gratuite et sans engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-red font-bold text-lg rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            <MessageCircle size={24} />
            Discuter sur WhatsApp
          </a>
          <p className="mt-6 text-white/60 text-sm">
            Réponse rapide garantie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
