import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CaretDown, Check } from "@phosphor-icons/react";

export type ListboxComponentProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  classname?: string;
};

export const ListboxComponent: React.FC<ListboxComponentProps> = (props) => (
  <Listbox value={props.value} onChange={props.onChange}>
    <div className="relative w-full">
      <Listbox.Button
        className={`relative w-full cursor-default bg-zinc-950 py-2 pl-3 pr-10 text-left ${props.classname}`}
      >
        <span className="block truncate">{props.value}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <CaretDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute w-full">
          {props.options.map((option) => (
            <Listbox.Option
              key={option}
              value={option}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 border-b border-zinc-900 ${
                  active ? "bg-zinc-900" : "text-gray-900 bg-zinc-950"
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {option}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <Check
                        className="h-5 w-5"
                        aria-hidden="true"
                        weight="regular"
                      />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);
