import { useEffect } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-title", { opacity: 0, y: 38, filter: "blur(8px)" }, {
        opacity: 1, y: 0, filter: "blur(0px)", duration: 1.15, ease: "power3.out", delay: .12
      });
    });
    return () => ctx.revert();
  }, []);
  return <>
    <section className="hero relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 md:px-10">
      <div className="hero-grid absolute inset-0"/>
      <div className="hero-orb"/>
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Reveal><div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/[.07] px-3 py-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue"/><span className="eyebrow !text-blue/90">AI ENGINEERING · SOFTWARE · RESEARCH</span></div></Reveal>
          <Reveal delay={.08}><h1 className="hero-title">Building the <em>intelligent</em><br/> side of technology.</h1></Reveal>
          <Reveal delay={.16}><p className="mt-7 max-w-xl text-sm leading-8 text-white/50 md:text-base">Saya Jeki Baretta, pelajar dan AI engineering enthusiast yang tertarik membangun solusi melalui artificial intelligence, software, dan eksplorasi teknologi.</p></Reveal>
          <Reveal delay={.24}><div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="button-primary">Explore projects <ArrowUpRight size={16}/></Link>
            <a href="/CV-Jeki-Baretta.pdf" download className="button-outline"><Download size={15}/> Download CV</a>
          </div></Reveal>
          <Reveal delay={.3}><div className="mt-12 flex items-center gap-5 text-white/35"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link"><Github size={17}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link"><Linkedin size={17}/></a><span className="h-px w-12 bg-white/15"/><span className="eyebrow">BASED IN INDONESIA</span></div></Reveal>
        </div>
        <Reveal delay={.2} className="relative mx-auto w-full max-w-[390px]">
          <div className="portrait-frame">
            <img src="/profile.jpeg" alt="Profile" className="h-full w-full object-cover grayscale"/>
            <div className="portrait-caption"><span className="eyebrow">THE PERSON BEHIND THE CODE</span><span className="font-display text-2xl italic text-white">Jeki Baretta.</span></div>
          </div>
          <div className="float-chip"><Sparkles size={15} className="text-blue"/><span>Curiosity → Creation</span></div>
        </Reveal>
      </div>
      <a href="#about-preview" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/30"><span className="eyebrow">SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
    </section>

    <section id="about-preview" className="section-wrap grid gap-8 border-b border-white/[.06] py-20 md:grid-cols-[.6fr_1.4fr] md:py-28">
      <Reveal><p className="eyebrow">01 / ABOUT</p></Reveal>
      <Reveal delay={.1}><div><h2 className="heading-lg">Curiosity is my <em>starting point.</em></h2><p className="mt-6 max-w-2xl text-sm leading-8 text-white/50 md:text-base">Saya sedang membangun fondasi di bidang AI Engineering, mulai dari pemrograman, machine learning, hingga pengembangan aplikasi. Saya percaya teknologi yang baik bukan sekadar terlihat canggih, tetapi mampu menyelesaikan masalah nyata.</p><Link to="/about" className="text-link mt-7">More about me <ArrowUpRight size={15}/></Link></div></Reveal>
    </section>

    <section className="section-wrap py-20 md:py-28">
      <div className="flex items-end justify-between gap-5"><SectionHeading eyebrow="02 / SELECTED WORK" title="A few things I've" accent="built." text="Eksperimen dan proyek pilihan dalam perjalanan saya mempelajari AI, software, dan data."/><Link to="/projects" className="text-link mb-14 hidden shrink-0 md:flex">All projects <ArrowUpRight size={15}/></Link></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">{projects.slice(0,3).map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div>
      <Link to="/projects" className="button-outline mt-7 w-full md:hidden">Explore all projects <ArrowUpRight size={15}/></Link>
    </section>

    <section className="section-wrap pb-24 md:pb-32"><div className="contact-panel"><div className="eyebrow mb-5">HAVE AN IDEA IN MIND?</div><h2 className="heading-lg max-w-2xl">Let&apos;s make something <em>meaningful.</em></h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/45">Terbuka untuk belajar, kolaborasi, dan diskusi seputar AI serta teknologi.</p><a href="mailto:hello@jekibaretta.dev" className="button-primary mt-8">Get in touch <ArrowUpRight size={16}/></a></div></section>
  </>;
}