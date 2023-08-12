import { CodeBlock } from "@phosphor-icons/react";
import { Section } from "../../../components/Section";
import type { SectionItemProps } from "../../../components/SectionItem";
import { SectionItem } from "../../../components/SectionItem";

const sectionItems: SectionItemProps[] = [
  {
    title: "velolib.github.io",
    tagline: "My personal website.",
    href: "https://github.com/velolib/velolib.github.io",
    src: "/images/sections/personal_website.webp",
    flair: "new",
  },
  {
    title: "steam-dl",
    tagline: "A Python GUI app for downloading Steam Workshop items.",
    href: "https://github.com/velolib/steam-dl",
    src: "/images/sections/steam-dl.webp",
    flair: "comingSoon",
  },
  {
    title: "astrocreator",
    tagline: "React web application for designing and sharing Stellaris empires.",
    href: "https://github.com/velolib/astrocreator",
    src: "/images/sections/astrocreator.webp",
    flair: "comingSoon",
  },
  {
    title: "gregtech-flow",
    tagline: "YAML Driven Flowcharts for Gregtech: New Horizons.",
    href: "https://github.com/velolib/gregtech-flow",
    src: "/images/sections/gregtech-flow.webp",
    flair: "archived",
  },
  {
    title: "No More Games",
    tagline: "Minecraft Minigames Map & Datapack",
    href: "https://github.com/velolib/No-More-Games",
    src: "/images/sections/nmg.webp",
    flair: "archived",
  }
];


export const Projects = () => (
  <Section
    title="Projects"
    icon={<CodeBlock weight="regular" className="fill-white" />}
  >
    {sectionItems.map((value) => (
      <SectionItem key={value.title} {...value}/>
    ))}
  </Section>
);
