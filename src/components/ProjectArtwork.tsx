import type { FeaturedProject } from "@/data/portfolio";

export default function ProjectArtwork({ project }: { project: FeaturedProject }) {
  return (
    <div className="project-art">
      <div className="project-art-top"><span>{project.title}</span><span className="project-art-symbol">{project.index} / system sketch</span></div>
      <svg className="project-art-visual" viewBox="0 0 340 100" focusable="false" aria-hidden="true">
        {project.id === "foodcast" ? <>
          <path d="M12 78H328 M12 18V78 M12 62L47 56L82 64L117 38L152 46L187 25" />
          <path d="M187 25L222 36L257 17L292 23L328 9" strokeDasharray="4 4" />
          <path d="M187 12L222 18L257 5L292 8L328 1 M187 39L222 53L257 31L292 41L328 27" opacity=".25" />
          <circle className="art-core" cx="187" cy="25" r="3" />
          <text x="12" y="96">Historical data</text><text x="235" y="96">Forecasting</text>
        </> : project.id === "supremo-barber" ? <>
          <rect x="10" y="18" width="80" height="44" rx="5" /><rect x="130" y="18" width="80" height="44" rx="5" /><rect x="250" y="18" width="80" height="44" rx="5" />
          <path d="M90 40H130 M210 40H250 M170 62V85H50V62 M170 85H290V62" />
          <text x="25" y="44">Customer</text><text x="146" y="44">Booking</text><text x="267" y="44">Barber</text>
          <circle className="art-core" cx="170" cy="85" r="3" />
        </> : project.id === "daddy-bons-kitchen" ? <>
          <path d="M20 50H320 M90 50V28H160 M90 50V76H160" />
          <circle cx="20" cy="50" r="5" /><rect x="160" y="14" width="110" height="28" rx="4" /><rect x="160" y="62" width="110" height="28" rx="4" /><circle className="art-core" cx="320" cy="50" r="5" />
          <text x="177" y="32">Food orders</text><text x="169" y="80">Reservations</text>
        </> : <>
          <rect x="12" y="15" width="78" height="60" rx="4" /><path d="M26 32H74 M26 45H64 M26 58H69 M90 45H140 M140 45L171 22H220 M140 45L171 70H220 M235 18V78H326 M245 63L266 49L283 56L305 28L326 35" />
          <circle className="art-core" cx="140" cy="45" r="3" /><text x="16" y="94">Record</text><text x="158" y="94">Context</text><text x="269" y="94">Review</text>
        </>}
      </svg>
      <span className="project-art-caption">Concept illustration · not a product screenshot</span>
    </div>
  );
}
