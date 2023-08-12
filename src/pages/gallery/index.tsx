import { Section } from "@/components/Section";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { galleryItemCount } from "@/utils/static";
import { SectionItem } from "@/components/SectionItem";

export const Gallery = () => {
  const navigate = useNavigate();
  document.title = "velo - gallery";
  return (
    <Section
      title="Gallery"
      icon={
        <button onClick={() => navigate("/")}>
          <ArrowLeft weight="regular" />
        </button>
      }
    >
      <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {Array.from({ length: galleryItemCount }).map((_, i) => (
          <div className="" key={i}>
            <Zoom>
              <img
                className="aspect-square object-cover rounded-md select"
                src={`/images/gallery/${i + 1}.webp`}
                alt={`Gallery Item Number ${i + 1} ${_}`}
              />
            </Zoom>
          </div>
        ))}
      </li>
    </Section>
  );
};

export const GallerySection = () => (
  <SectionItem
    title="Gallery"
    tagline="All the media I've shared."
    href="/gallery"
    src={`/images/gallery/${
      Math.floor(Math.random() * galleryItemCount) + 1
    }.webp`}
  />
);
