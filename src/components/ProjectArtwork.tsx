import Image from "next/image";
import type { FeaturedProject } from "@/data/portfolio";



export default function ProjectArtwork({ project }: { project: FeaturedProject }) {
  if (project.id === "foodcast") return (
    <figure className="project-art foodcast-plate">
      <Image className="project-cover-image" src="/projects/foodcast-interface.webp" alt="FOODCAST homepage showing the forecast landing page and a market-price preview" width={1720} height={557} unoptimized />
      <figcaption>FOODCAST homepage · interface capture, not a model evaluation</figcaption>
    </figure>
  );

  if (project.id === "supremo-barber") return (
    <figure className="project-art booking-plate">
      <Image className="project-cover-image" src="/projects/supremo-landing.webp" alt="Supremo Barber Studio homepage with its Book appointment action and a photo of the shop" width={1280} height={702} unoptimized />
      <figcaption>Supremo Barbers · public booking entry point</figcaption>
    </figure>
  );

  return null;
}
