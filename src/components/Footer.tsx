export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-mid/30 py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/assets/logo-p.svg" alt="" className="h-8 w-auto" />
            <span className="text-lg font-display tracking-[0.08em] text-brand-light/60">ERCEPÇÃO MD</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/percepcaomd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] font-mono text-brand-light/40 hover:text-brand-light transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] font-mono text-brand-light/40 hover:text-brand-light transition-colors"
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