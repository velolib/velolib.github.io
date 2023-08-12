import type React from "react";
import { useState } from "react";
import type { ChangeEvent, FC } from "react";

export type NumberInputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "type"
>;

export const NumberInput: FC<NumberInputProps> = (props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue);

    if (inputValue === "" || (!isNaN(numericValue) && numericValue > 0)) {
      setValue(inputValue);
    }
  };

  return <input type="text" value={value} onChange={handleChange} {...props} />;
};
