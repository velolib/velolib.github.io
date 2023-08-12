import type React from "react";

export type SectionProps = {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<SectionProps> = (props: SectionProps) => (
  <section className={`flex flex-col ${props.className}`}>
    <h3 className="font-display text-xl font-bold px-6 py-8 border-b border-zinc-900 flex items-center gap-4 sticky top-0 bg-zinc-950 z-10 text-white">
      {props.icon}
      {props.title}
    </h3>
    <ul className="flex-1">{props.children}</ul>
  </section>
);
