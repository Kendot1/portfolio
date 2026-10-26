import type { FeaturedProject } from "@/data/portfolio";
import Image from "next/image";

export default function ProjectArtwork({ project }: { project: FeaturedProject }) {
  if (project.id === "foodcast") {
    return (
      <div className="project-art project-art-foodcast">
        <Image
          className="project-cover-image"
          src="/foodcast-cover.webp"
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 760px) 48vw, 480px"
        />
        <div className="project-cover-caption">
          <span>Foodcast</span>
          <span>Food-price forecasting · Thesis project</span>
        </div>
        <span className="project-art-caption">Repository artwork</span>
      </div>
    );
  }

  return (
    <div className="project-art project-art-diagram">
      <div className="project-art-top"><span>{project.title}</span><span className="project-art-symbol">System flow</span></div>
      <svg className="project-art-visual" viewBox="0 0 340 100" focusable="false" aria-hidden="true">
        <rect x="10" y="18" width="80" height="44" />
        <rect x="130" y="18" width="80" height="44" />
        <rect x="250" y="18" width="80" height="44" />
        <path d="M90 40H130 M210 40H250 M170 62V85H50V62 M170 85H290V62" />
        <text x="25" y="44">Customer</text>
        <text x="146" y="44">Booking</text>
        <text x="267" y="44">Barber</text>
      </svg>
      <span className="project-art-caption">Role workspaces · booking rules · database</span>
    </div>
  );
}
