import type React from "react";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  className?: string; // Define className prop with PropTypes validation
};

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => (
  <textarea
    className={`bg-zinc-950 border border-zinc-900 placeholder-zinc-800 focus:outline-none p-2 ${className}`}
    {...props}
  />
);
