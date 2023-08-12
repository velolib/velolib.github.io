import { Textarea } from "@/pages/branding/components/Textarea";
import { ClipboardText, Copy } from "@phosphor-icons/react";
import type React from "react";
import { useState, useEffect } from "react";

export const FindAndReplace: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const maxLength = 10000;

  useEffect(() => {
    setOutputText(inputText.replace(new RegExp(findText, "g"), replaceText));
  }, [inputText, findText, replaceText]);

  return (
    <div className="grid p-2 flex-1 w-full gap-2 grid-cols-2">
      <div className="flex flex-col h-full text-center">
        <h4 className="font-semibold text-lg">Input</h4>
        <span className="mb-2">Enter your inputted text.</span>
        <div className="border border-b-0 border-zinc-900">
          <button
            onClick={() => {
              navigator.clipboard
                .readText()
                .then((value) => {
                  setInputText(value.substring(0, maxLength));
                })
                .catch(() => {});
            }}
            className="w-full h-12 group"
          >
            <ClipboardText
              className="inline-block md:mr-2 group-hover:fill-zinc-200 transition-colors group-active:fill-primary-500 duration-100"
              size={32}
            />
            <span className="bg-white hidden md:inline font-medium group-hover:bg-zinc-200 transition-colors duration-100 text-transparent bg-clip-text group-active:bg-gradient-to-r group-active:from-primary-500 group-active:to-secondary-400">
              Paste from clipboard
            </span>
          </button>
        </div>
        <div className="relative flex-1 w-full">
          <span className="absolute bottom-2 right-2 text-zinc-600 select-none">
            {inputText.length}/{maxLength}
          </span>
          <Textarea
            className="resize-none h-full w-full overflow-x-auto overflow-y-hidden"
            onChange={(e) => setInputText(e.target.value)}
            wrap="off"
            value={inputText}
            maxLength={maxLength}
            placeholder="Love with your heart, use your head for everything else."
          />
        </div>
      </div>
      <div className="flex flex-col h-full text-center">
        <h4 className="font-semibold text-lg">Output</h4>
        <span className="mb-2">Your outputted text.</span>
        <div className="border border-b-0 border-zinc-900">
          <div className="grid grid-cols-3">
            <input
              className="bg-zinc-950 focus:outline-none p-2 border-r border-zinc-900"
              placeholder="Find..."
              onChange={(e) => {
                setFindText(e.target.value);
              }}
              value={findText}
              autoComplete="off"
            />
            <input
              className="bg-zinc-950 focus:outline-none p-2 border-r border-zinc-900"
              placeholder="Replace..."
              onChange={(e) => {
                setReplaceText(e.target.value);
              }}
              value={replaceText}
              autoComplete="off"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(outputText).catch(() => {});
              }}
              className="px-2 h-12 group"
            >
              <Copy className="inline-block group-hover:fill-zinc-200 transition-colors group-active:fill-primary-500 duration-100" />
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full overflow-auto border border-zinc-900 text-left p-2 whitespace-pre">
          <div>{outputText}</div>
        </div>
      </div>
    </div>
  );
};
