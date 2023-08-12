import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";
import type React from "react";
import { Link } from 'react-router-dom';

export const SectionItemFlairs = {
  archived: (
    <span className="text-orange-400 px-2 py-1 border border-orange-400 rounded-full text-[10px] leading-none font-normal ml-4">
      Archived
    </span>
  ),
  new: (
    <span className="text-green-400 px-2 py-1 border border-green-400 rounded-full text-[10px] leading-none font-normal ml-4">
      New
    </span>
  ),
  comingSoon: (
    <span className="text-yellow-400 px-2 py-1 border border-yellow-400 rounded-full text-[10px] leading-none font-normal ml-4">
      Coming Soon
    </span>
  ),
};

export type SectionItemProps = {
  href?: string;
  title: string;
  tagline: string;
  src?: string;
  flair?: keyof typeof SectionItemFlairs;
};

export const SectionItem: React.FC<SectionItemProps> = (props) => (
  <li className="border-b border-zinc-900">
    <Link
      to={props.href || "/"}
      className="text-left px-6 py-8 w-full flex relative overflow-hidden items-center group"
    >
      {!!props.src && (
        <img
          src={props.src}
          alt="Theme preview"
          className="absolute top-1/2 bottom-0 left-0 w-full -translate-y-1/2 opacity-20 transition-transform group-hover:scale-105"
          style={{
            mask: "linear-gradient(90deg, black, transparent)",
          }}
        />
      )}
      <div className="relative flex-1">
        <h4 className="w-min whitespace-nowrap text-2xl font-bold transition-colors duration-200 ease-in-out text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-primary-500 group-hover:to-secondary-400 items-center flex">
          {props.title}
          {props.flair && SectionItemFlairs[props.flair]}
        </h4>
        <p className="text-zinc-300">{props.tagline}</p>
      </div>
      {props.href && props.href[0] === "/" ? (
        <ArrowRight className="transition-colors duration-200 fill-zinc-400 group-hover:fill-zinc-50" />
      ) : (
        <ArrowSquareOut className="transition-colors duration-200 fill-zinc-400 group-hover:fill-zinc-50" />
      )}
    </Link>
  </li>
);
