import { useState } from "react";
import { Section } from "@/components/Section";
import { SectionItem } from "@/components/SectionItem";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { GroupGenerator } from "./components/GroupGenerator";
import { ListboxComponent } from "../branding/components/ListBox";
import { FindAndReplace } from "./components/FindAndReplace";

const utilities = [
  { name: "Group Generator", id: 1, element: <GroupGenerator /> },
  { name: "Find & Replace", id: 2, element: <FindAndReplace /> },
];

const Utilities = () => {
  const navigate = useNavigate();
  const [currentTool, setCurrentTool] = useState(utilities[0].name);

  document.title = "velo - utilities";

  return (
    <Section
      title="Utilities"
      icon={
        <button onClick={() => navigate("/")}>
          <ArrowLeft weight="regular" />
        </button>
      }
      className="h-full"
    >
      <li className="flex flex-col h-full items-center">
        <ListboxComponent
          value={currentTool}
          options={utilities.map((value) => value.name)}
          onChange={(value) => setCurrentTool(value)}
          classname="border-b border-zinc-900"
        />
        {utilities.find((value) => value.name === currentTool)?.element}
      </li>
    </Section>
  );
};

const UtilitiesSection = () => (
  <SectionItem
    title="Utilities"
    tagline="Some string manipulation utilities I made."
    href="/utilities"
    src="/images/sections/utilities.webp"
  />
);

export { Utilities, UtilitiesSection };
