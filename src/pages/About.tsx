import { ArrowUpRight, BrainCircuit, Code2, GraduationCap, Lightbulb } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const focus = [
  { icon: BrainCircuit, title: "Artificial Intelligence", text: "Mempelajari machine learning, deep learning, LLM, dan bagaimana AI dapat diterapkan untuk menyelesaikan masalah." },
  { icon: Code2, title: "Software Development", text: "Membangun aplikasi dan memahami bagaimana sistem digital dirancang, dikembangkan, dan dipelihara." },
  { icon: Lightbulb, title: "Research & Experiment", text: "Bereksperimen, membaca dokumentasi, menguji ide, dan belajar dari proses yang tidak selalu berhasil." }
];

export default function About() {
  return <main className="page-top section-wrap">
    <Reveal><p className="eyebrow mb-5">A LITTLE INTRODUCTION / 01</p><h1 className="page-title">The mind behind<br/><em>the machine.</em></h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/50">Saya Jeki Baretta Silitonga, seorang pelajar yang sedang menekuni dunia teknologi dengan fokus pada AI Engineering dan pengembangan software.</p></Reveal>
    <div className="my-16 grid gap-10 border-y border-white/[.08] py-10 md:grid-cols-[1fr_1.4fr] md:py-14">
      <Reveal><p className="eyebrow">INTRODUCTION</p><h2 className="mt-4 font-display text-4xl italic text-white">Learning today.<br/>Building tomorrow.</h2></Reveal>
      <Reveal delay={.1}><div className="space-y-5 text-sm leading-8 text-white/50"><p>Saya memiliki ketertarikan besar terhadap cara teknologi bekerja, terutama bagaimana kecerdasan buatan dapat membantu manusia mengambil keputusan, mengolah informasi, dan menciptakan pengalaman digital yang lebih baik.</p><p>Saat ini saya berfokus memperkuat dasar pemrograman, matematika, logika, dan pemahaman sistem. Saya juga terus mengembangkan proyek mandiri sebagai ruang untuk menerapkan teori menjadi sesuatu yang bisa digunakan.</p><p>Perjalanan ini masih panjang. Karena itu, saya mengutamakan rasa ingin tahu, konsistensi, dokumentasi yang jelas, dan kemauan untuk terus memperbaiki hasil kerja.</p></div></Reveal>
    </div>
    <SectionHeading eyebrow="WHAT I EXPLORE" title="Areas of" accent="interest." text="Bidang yang sedang saya pelajari dan kembangkan secara bertahap."/>
    <div className="grid gap-4 md:grid-cols-3">{focus.map((item,i)=><Reveal key={item.title} delay={i*.08}><article className="info-card h-full"><item.icon className="mb-8 text-blue" size={22}/><h3 className="mb-3 text-lg font-medium text-white">{item.title}</h3><p className="text-sm leading-7 text-white/45">{item.text}</p></article></Reveal>)}</div>
    <Reveal className="mt-16"><div className="rounded-2xl border border-white/[.08] bg-white/[.02] p-6 md:p-9"><div className="flex items-center gap-3"><GraduationCap className="text-blue" size={20}/><p className="eyebrow">EDUCATION & BACKGROUND</p></div><h3 className="mt-5 text-xl text-white">Student · Independent Learner</h3><p className="mt-2 text-sm leading-7 text-white/45">Isi dengan nama sekolah, tahun pendidikan, program, atau kegiatan relevan. Hindari mencantumkan gelar profesional yang belum diperoleh.</p><a href="mailto:hello@jekibaretta.dev" className="text-link mt-5">Connect with me <ArrowUpRight size={15}/></a></div></Reveal>
  </main>;
}