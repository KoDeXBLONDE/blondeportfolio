import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden border-t border-slate-800/50">
      {/* Background Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
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
          className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto"
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
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-primary text-white font-bold text-lg rounded-full hover:bg-brand-primary-hover hover:scale-105 transition-all shadow-xl hover:shadow-brand-primary/25"
          >
            <MessageCircle size={24} />
            Discuter sur WhatsApp
          </a>
          <p className="mt-6 text-slate-500 text-sm">
            Réponse rapide garantie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
