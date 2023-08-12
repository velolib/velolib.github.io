import { useState } from "react";
import { Section } from "@/components/Section";
import { SectionItem } from "@/components/SectionItem";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { GroupGenerator } from "./components/GroupGenerator";
import { ListboxComponent } from '../branding/components/ListBox';
import { FindAndReplace } from './components/FindAndReplace';

const tools = [
  { name: "Group Generator", id: 1, element: <GroupGenerator /> },
  { name: "Find & Replace", id: 2, element: <FindAndReplace/> }
];

const Tools = () => {
  const navigate = useNavigate();
  const [currentTool, setCurrentTool] = useState(tools[0].name);

  document.title = "velo - tools";

  return (
    <Section
      title="Tools"
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
          options={tools.map((value) => value.name)}
          onChange={(value) => setCurrentTool(value)}
          classname='border-b border-zinc-900'
          />
        {tools.find((value) => value.name === currentTool)?.element}
      </li>
    </Section>
  );
};

const ToolsSection = () => (
  <SectionItem title="Tools" tagline="Some tools I made." href="/tools" src='/images/sections/tools.webp'/>
);

export { Tools, ToolsSection };
