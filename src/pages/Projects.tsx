import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export function ProjectList() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(projects.map(p=>p.category)))];
  const visible = filter === "ALL" ? projects : projects.filter(p=>p.category === filter);
  return <main className="page-top section-wrap">
    <Reveal><p className="eyebrow mb-5">SELECTED WORK / 02</p><h1 className="page-title">Ideas into<br/><em>experiments.</em></h1><p className="mt-7 max-w-xl text-sm leading-8 text-white/45">Kumpulan proyek, eksperimen, dan proses belajar saya di bidang AI Engineering dan software development.</p></Reveal>
    <div className="my-10 flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`filter-chip ${filter===c ? "filter-active" : ""}`}>{c}</button>)}</div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">{visible.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div>
  </main>;
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p=>p.slug === slug);
  if (!project) return <main className="page-top section-wrap"><h1 className="page-title">Project not found.</h1><Link to="/projects" className="text-link mt-6">Back to projects</Link></main>;
  return <main className="page-top section-wrap max-w-5xl">
    <Link to="/projects" className="text-link mb-10"><ArrowLeft size={15}/> All projects</Link>
    <Reveal><p className="eyebrow mb-5">{project.category} · {project.year}</p><h1 className="page-title">{project.title.split(" ")[0]} <em>{project.title.split(" ").slice(1).join(" ")}</em></h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/50">{project.description}</p></Reveal>
    <Reveal delay={.1}><div className="detail-image mt-12" style={{backgroundImage:`url("${project.image}")`}}/></Reveal>
    <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_.7fr]"><Reveal><p className="eyebrow mb-4">OVERVIEW</p><h2 className="font-display text-3xl italic text-white">The process behind it.</h2><p className="mt-5 text-sm leading-8 text-white/50">{project.details}</p></Reveal><Reveal delay={.1}><p className="eyebrow mb-4">TECH STACK</p><div className="flex flex-wrap gap-2">{project.stack.map(s=><span className="filter-chip" key={s}>{s}</span>)}</div><p className="eyebrow mb-4 mt-10">PROJECT STATUS</p><span className="text-xs tracking-widest text-blue">{project.status}</span><a href="https://github.com/" target="_blank" rel="noreferrer" className="text-link mt-7"><Github size={15}/> Source code <ArrowUpRight size={14}/></a></Reveal></div>
  </main>;
}