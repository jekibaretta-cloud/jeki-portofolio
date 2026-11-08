import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/content";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <Link to={`/projects/${project.slug}`} className={`project-card group ${index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}`}>
    <div className="project-image" style={{ backgroundImage: `url("${project.image}")` }} />
    <div className="project-shade"/>
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5 md:p-7">
      <div><p className="eyebrow mb-2">{project.category} · {project.year}</p><h3 className="font-display text-3xl italic text-white md:text-4xl">{project.title}</h3></div>
      <span className="icon-circle"><ArrowUpRight size={18}/></span>
    </div>
    <span className="absolute right-5 top-5 z-10 rounded-full border border-white/15 bg-black/25 px-3 py-1 font-mono text-[9px] tracking-widest text-white/65">{project.status}</span>
  </Link>;
}