import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="border-t border-white/[.07] px-6 py-8 md:px-10">
    <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div><p className="text-sm font-semibold tracking-[.15em] text-white">JEKI BARETTA</p><p className="mt-1 text-xs text-white/35">Building thoughtful technology, one experiment at a time.</p></div>
      <div className="flex items-center gap-4 text-white/45">
        <a aria-label="Email" href="mailto:hello@jekibaretta.dev" className="social-link"><Mail size={16}/></a>
        <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="social-link"><Github size={16}/></a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={16}/></a>
        <span className="ml-2 text-[10px] uppercase tracking-[.15em]">© 2026</span><ArrowUpRight size={13}/>
      </div>
    </div>
  </footer>;
}