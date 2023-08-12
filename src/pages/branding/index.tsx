import { Section } from "@/components/Section";
import { SectionItem } from "@/components/SectionItem";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { ColorSwatch } from "./components/ColorSwatch";

export const Branding = () => {
  const navigate = useNavigate();
  document.title = "velo - branding";
  return (
    <Section
      title="Branding"
      icon={
        <button onClick={() => navigate("/")}>
          <ArrowLeft weight="regular" />
        </button>
      }
      className="h-full"
    >
      <li className="grid grid-cols-2 grid-rows-1 gap-2 p-2 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="flex flex-col items-center gap-2 rounded-md border-zinc-900 border p-2">
            <h3 className="font-bold text-lg">Singular</h3>
            <img src="/images/brand/singular.webp" alt="Singular Velo Logo" />
          </div>
          <div className="flex flex-col items-center gap-2 rounded-md border-zinc-900 border p-2">
            <h3 className="font-bold text-lg">Fill</h3>
            <img src="/images/brand/fill.webp" alt="Square Fill Velo Logo" />
          </div>
          <div className="flex flex-col items-center gap-2 rounded-md border-zinc-900 border p-2">
            <h3 className="font-bold text-lg">Fill</h3>
            <img
              src="/images/brand/fill.webp"
              className="rounded-full"
              alt="Circle Fill Velo Logo"
            />
          </div>
          <div className="flex flex-col items-center gap-2 rounded-md border-zinc-900 border p-2">
            <h3 className="font-bold text-lg">Fill</h3>
            <img
              src="/images/brand/fill.webp"
              className="rounded-3xl"
              alt="Rounded Fill Velo Logo"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-md border-zinc-900 border p-2">
          <h3 className="font-bold text-lg">Colors</h3>
          <div className="grid grid-cols-2 w-full grow">
            <ColorSwatch
              colors={[
                "#E6F8FE",
                "#CEF1FD",
                "#97E1FB",
                "#66D2FA",
                "#30C3F8",
                "#08AEEA",
                "#068BBB",
                "#056A8F",
                "#03465E",
                "#022531",
                "#011219",
              ]}
              id="sky"
              className="w-full"
            />
            <ColorSwatch
              colors={[
                "#ECFDF5",
                "#D1FAE5",
                "#A7F3D0",
                "#6EE7B6",
                "#34D399",
                "#10B981",
                "#059668",
                "#047856",
                "#065F46",
                "#064E3B",
                "#022c22",
              ]}
              id="ocean"
              className="w-full"
            />
          </div>
        </div>
      </li>
    </Section>
  );
};

export const BrandingSection = () => (
  <SectionItem
    title="Branding"
    tagline="This is how I represent myself online."
    href="/branding"
    src="images/brand/fill.webp"
  />
);
