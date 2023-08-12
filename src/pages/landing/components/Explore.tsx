import { BrandingSection } from "@/pages/branding";
import { Section } from "../../../components/Section";
import { GallerySection } from "@/pages/gallery";
import { ToolsSection } from "@/pages/tools";

export const AboutMe = () => (
  <Section
    title="Explore"
    icon={
      <img
        src="/images/brand/singular.webp"
        className="w-8 brightness-0 invert grayscale select-none"
        alt="Singular Velo Logo"
      />
    }
  >
    <GallerySection />
    <BrandingSection />
    <ToolsSection />
  </Section>
);
