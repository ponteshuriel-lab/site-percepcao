export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-mid/30 py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/assets/logo-p.svg" alt="Percepção MD" className="h-8 w-auto" width="32" height="32" />
            <span className="text-lg font-display tracking-[0.08em] text-brand-light/60">PERCEPÇÃO MD</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/percepcaomd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] font-mono text-brand-light/50 hover:text-brand-light transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              INSTAGRAM
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] font-mono text-brand-light/50 hover:text-brand-light transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              WHATSAPP
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[10px] font-mono text-brand-light/25 tracking-wider">
            © {new Date().getFullYear()} PERCEPÇÃO MD. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  )
}