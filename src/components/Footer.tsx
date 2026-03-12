export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
            B
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Blonde<span className="text-brand-red">Codeur</span>
          </span>
        </div>
        
        <p className="text-zinc-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Blonde Codeur. Tous droits réservés.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
