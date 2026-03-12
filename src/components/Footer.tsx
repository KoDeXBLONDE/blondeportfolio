export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
            B
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Blonde<span className="text-brand-primary">Codeur</span>
          </span>
        </div>
        
        <p className="text-slate-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Blonde Codeur. Tous droits réservés.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-primary transition-all">LinkedIn</a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-primary transition-all">Twitter</a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-primary transition-all">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
