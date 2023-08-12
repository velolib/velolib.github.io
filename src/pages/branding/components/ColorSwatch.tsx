import type React from "react";

export type ColorSwatchProps = {
  colors: string[];
  id: string;
  className?: string;
};

export const ColorSwatch: React.FC<ColorSwatchProps> = (props) => (
  <div
    className={`grid grid-rows-[11] border-zinc-900 flex-1 ${props.className}`}
  >
    {props.colors.map((color, idx) => (
      <button
        className="grow h-full transition-transform transform-gpu hover:scale-110 hover:z-40 whitespace-nowrap"
        key={idx}
        style={{
          background: color,
          color:
            idx === 5 ? "#000000" : props.colors[props.colors.length - idx - 1],
        }}
        onClick={() => {
          navigator.clipboard.writeText(color).catch(() => {});
        }}
      >
        {idx === 0 ? "50" : idx === 10 ? 950 : idx * 100}
      </button>
    ))}
  </div>
);
