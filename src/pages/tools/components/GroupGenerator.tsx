import { Textarea } from "@/pages/branding/components/Textarea";
import { ClipboardText, Copy } from "@phosphor-icons/react";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

export const GroupGenerator = () => {
  const [inputText, setInputText] = useState<string>("");
  const [groupCount, setGroupCount] = useState<number>(3);
  const [groups, setGroups] = useState<string[][]>([]);
  const maxLength = 1000;

  const handleGroupCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue) || 0;

    if (
      inputValue === "" ||
      (!isNaN(numericValue) && numericValue > 0 && numericValue <= 100)
    ) {
      setGroupCount(numericValue);
    }
  };

  const splitIntoGroups = (data: string[], groups: number): string[][] => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]]; // Shuffle array in-place
    }

    const groupSize = Math.floor(data.length / groups);
    const leftOver = data.length % groups;

    const output: string[][] = Array(groups)
      .fill(null)
      .map(() => []);
    let counter = 0;

    for (let i = 0; i < groups; i++) {
      const size = groupSize + (i < leftOver ? 1 : 0);
      for (let j = 0; j < size; j++) {
        output[i].push(data[counter++]);
      }
    }

    // Find the index of the smallest group
    let smallestGroupIndex = 0;
    for (let i = 1; i < groups; i++) {
      if (output[i].length < output[smallestGroupIndex].length) {
        smallestGroupIndex = i;
      }
    }

    // Move the smallest group to the last
    if (smallestGroupIndex !== groups - 1) {
      const smallestGroup = output.splice(smallestGroupIndex, 1)[0];
      output.push(smallestGroup);
    }

    return output;
  };

  useEffect(() => {
    if (groupCount === 0) return;
    setGroups(splitIntoGroups(inputText.split("\n"), groupCount));
  }, [inputText, groupCount]);

  const getFormattedGroups = () => {
    const lines: string[] = [];

    groups.forEach((group, index) => {
      lines.push(`Group ${index + 1}:\n${group.join("\n")}`);
    });
    return lines.join("\n\n");
  };

  return (
    <div className="grid p-2 flex-1 w-full gap-2 grid-cols-2">
      <div className="flex flex-col h-full text-center">
        <h4 className="font-semibold text-lg">List Items</h4>
        <span className="mb-2">Enter your values each on a new line.</span>
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
            <ClipboardText className="inline-block md:mr-2 group-hover:fill-zinc-200 transition-colors group-active:fill-primary-500 duration-100" />
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
            className="resize-none h-full w-full overflow-x-auto"
            onChange={(e) => setInputText(e.target.value)}
            wrap="off"
            value={inputText}
            maxLength={maxLength}
            placeholder={'Paul McCartney\nJohn Lennon\nGeorge Harrison\nRingo Starr'}
          />
        </div>
      </div>
      <div className="flex flex-col h-full text-center">
        <h4 className="font-semibold text-lg">Groups</h4>
        <span className="mb-2">Enter your values each on a new line.</span>
        <div className="border border-b-0 border-zinc-900 grid grid-cols-2">
          <input
            className="bg-zinc-950 focus:outline-none p-2 border-r border-zinc-900"
            placeholder="Group size (1-&infin;)"
            onChange={handleGroupCountChange}
            value={groupCount.toString()}
            autoComplete="off"
          />
          <button
            className="w-full h-12 group"
            onClick={() => {
              navigator.clipboard
                .writeText(getFormattedGroups())
                .catch(() => {});
            }}
          >
            <Copy className="inline-block md:mr-2 group-hover:fill-zinc-200 transition-colors group-active:fill-primary-500 duration-100" />
            <span className="bg-white hidden md:inline font-medium group-hover:bg-zinc-200 transition-colors duration-100 text-transparent bg-clip-text group-active:bg-gradient-to-r group-active:from-primary-500 group-active:to-secondary-400">
              Copy to Clipboard
            </span>
          </button>
        </div>
        <div className="border border-zinc-900 flex-1 text-left whitespace-pre flex flex-col">
          {groups.map((group, idx) => (
            <div key={idx} className="w-full p-2 border-b border-zinc-900">
              <span className="font-semibold">Group {idx + 1}</span>
              <ul className="overflow-x-auto">
                {group.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
