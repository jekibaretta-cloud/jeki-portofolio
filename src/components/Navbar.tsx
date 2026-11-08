import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 md:pt-6">
      <nav className="nav-shell mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#101114]/80 px-3 py-2 backdrop-blur-xl">
        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 pl-1">
          <span className="logo-ring"><span>JB</span></span>
          <span className="hidden text-xs font-semibold tracking-[.16em] text-white sm:block">JEKI BARETTA</span>
        </NavLink>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({isActive}) => `nav-link ${isActive ? "nav-active" : ""}`}>{link.label}</NavLink>)}
        </div>
        <a href="mailto:hello@jekibaretta.dev" className="button-outline hidden items-center gap-2 px-4 py-2 text-xs sm:inline-flex">Let&apos;s talk <ArrowUpRight size={14}/></a>
        <button aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen(!open)} className="rounded-full p-2 text-white md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </nav>
      {open && <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#101114]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)} className={({isActive}) => `block rounded-xl px-4 py-3 text-sm ${isActive ? "bg-white/10 text-white" : "text-white/55"}`}>{link.label}</NavLink>)}
        <a href="mailto:hello@jekibaretta.dev" className="mt-2 block rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">Contact ↗</a>
      </div>}
    </header>
  );
}