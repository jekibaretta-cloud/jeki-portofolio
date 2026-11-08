import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Award } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { certificates } from "../data/content";

export function CertificateList() {
  return <main className="page-top section-wrap">
    <Reveal><p className="eyebrow mb-5">CREDENTIALS / 03</p><h1 className="page-title">Proof of <em>progress.</em></h1><p className="mt-7 max-w-xl text-sm leading-8 text-white/45">Sertifikat, pelatihan, dan pencapaian yang menjadi bagian dari proses belajar saya.</p></Reveal>
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{certificates.map((c,i)=><Reveal key={c.slug} delay={i*.07}><Link to={`/certificates/${c.slug}`} className="certificate-card group">
      <div className="certificate-art">{c.image ? <img src={c.image} alt={`Sertifikat ${c.title}`} className="h-full w-full object-cover"/> : <div className="flex h-full flex-col items-center justify-center gap-4"><Award size={36} className="text-blue/80"/><span className="eyebrow">CERTIFICATE IMAGE</span><span className="text-xs text-white/30">Tambahkan gambar asli</span></div>}</div>
      <div className="p-5"><p className="eyebrow">{c.issuer} · {c.date}</p><h2 className="mt-3 font-display text-2xl italic text-white">{c.title}</h2><p className="mt-3 line-clamp-2 text-xs leading-6 text-white/40">{c.description}</p><span className="text-link mt-5">View credential <ArrowUpRight size={14}/></span></div>
    </Link></Reveal>)}</div>
  </main>;
}

export function CertificateDetail() {
  const { slug } = useParams();
  const c = certificates.find(item=>item.slug===slug);
  if (!c) return <main className="page-top section-wrap"><h1 className="page-title">Certificate not found.</h1><Link to="/certificates" className="text-link mt-6">Back to certificates</Link></main>;
  return <main className="page-top section-wrap max-w-5xl"><Link to="/certificates" className="text-link mb-10"><ArrowLeft size={15}/> All certificates</Link><Reveal><p className="eyebrow mb-5">CERTIFICATE DETAIL</p><h1 className="page-title">{c.title}</h1><p className="mt-4 text-sm text-white/45">{c.issuer} · {c.date}</p></Reveal><Reveal delay={.1}><div className="certificate-detail-art mt-10">{c.image ? <img src={c.image} alt={c.title} className="max-h-full max-w-full object-contain"/> : <div className="text-center"><Award size={45} className="mx-auto mb-4 text-blue"/><p className="eyebrow">UPLOAD YOUR CERTIFICATE IMAGE</p></div>}</div></Reveal><Reveal><h2 className="mt-10 font-display text-3xl italic text-white">What I learned</h2><p className="mt-4 max-w-2xl text-sm leading-8 text-white/50">{c.description}</p></Reveal></main>;
}