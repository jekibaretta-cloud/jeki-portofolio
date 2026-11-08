import Reveal from "./Reveal";
export default function SectionHeading({ eyebrow, title, accent, text }: { eyebrow: string; title: string; accent?: string; text: string }) {
  return <Reveal className="mb-10 md:mb-14">
    <div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-blue/70"/><span className="eyebrow">{eyebrow}</span></div>
    <h2 className="heading-lg">{title} {accent && <em>{accent}</em>}</h2>
    <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 md:text-base">{text}</p>
  </Reveal>;
}