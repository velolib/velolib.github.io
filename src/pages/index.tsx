import type { Icon } from "@phosphor-icons/react";
import {
  DiscordLogo,
  Envelope,
  GithubLogo,
  InstagramLogo,
  SpotifyLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { interpolateBrand } from "@/utils/colors";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./landing";
import { Gallery } from "./gallery";
import { TypeAnimation } from "react-type-animation";
import { Branding } from "./branding";
import { NotFound } from "./404";
import { Tools } from "./tools";

const socials: Array<{
  link: string;
  icon: Icon;
  alt: string;
}> = [
  {
    link: "https://discord.com/users/689289283286466573",
    icon: DiscordLogo,
    alt: "Discord",
  },
  {
    link: "https://twitter.com/vlocitize",
    icon: TwitterLogo,
    alt: "Twitter",
  },
  {
    link: "https://github.com/velolib",
    icon: GithubLogo,
    alt: "Github",
  },
  {
    link: "https://www.instagram.com/vlocitize/",
    icon: InstagramLogo,
    alt: "Instagram",
  },
  {
    link: "mailto:vlocitize@gmail.com",
    icon: Envelope,
    alt: "Email",
  },
  {
    link: "https://open.spotify.com/user/le2sdqta7f8158vtb62wc1nve?si=e38cdc4e68474d3b",
    icon: SpotifyLogo,
    alt: "Spotify",
  },
];

// const techStack = [
//   {
//     link: "https://reactjs.org/",
//     alt: "React",
//     icon: "/images/stack/react.svg",
//   },
//   {
//     link: "https://www.typescriptlang.org/",
//     alt: "Typescript",
//     icon: "/images/stack/typescript.svg",
//   },
//   {
//     link: "https://tailwindcss.com/",
//     alt: "TailwindCSS",
//     icon: "/images/stack/tailwind.svg",
//   },
// ];

export const Root = () => (
  <div className="overflow-x-hidden overflow-y-auto flex flex-col lg:flex-row h-screen">
    <aside className="flex h-auto items-center justify-center flex-col sticky top-0 bg-zinc-950 border-r border-zinc-900 lg:flex-[.6] p-4">
      <span className="text-sm text-zinc-500">Hi, I&apos;m</span>
      <TypeAnimation
        sequence={["velo", 2500, "veloLib", 2500, "vlocitize", 2500]}
        repeat={Infinity}
        wrapper="h1"
        cursor={false}
        preRenderFirstString
        className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400 animate-gradient text-center"
      />
      <span className="text-xl text-zinc-200 mt-4">
        An aspiring software developer
      </span>
      <span className="text-center w-3/4 mt-4 text-zinc-300">
        I&apos;m Malik, and I&apos;m from Jakarta. This is the website where I
        showcase every significant thing I&apos;ve made online. I like to
        challenge myself by designing software for niche purposes.
      </span>
      <div className="mt-4 lg:m-0 lg:absolute lg:bottom-4 w-full flex justify-center gap-4">
        {socials.map((social, idx) => (
          <a
            href={social.link}
            key={social.alt}
            target="_blank"
            rel="noreferrer"
          >
            <social.icon
              alt={social.alt}
              color={interpolateBrand(idx, socials.length)}
              className="transition-all duration-200 hover:brightness-125"
            />
          </a>
        ))}
      </div>
    </aside>
    <main className="border-zinc-900 bg-zinc-950 border-t flex-1 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </div>
);
