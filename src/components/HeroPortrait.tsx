import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

export default function HeroPortrait() {
  const hasPortrait = existsSync(path.join(process.cwd(), "public", "portrait.jpg"));

  return (
    <figure className="portrait-figure">
      <div className="portrait-frame">
        {!hasPortrait && <div className="portrait-placeholder" role="img" aria-label="Kenneth Bitun monogram">
          <span>KB</span>
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </div>}
        {hasPortrait && <Image
          className="portrait-image"
          src="/portrait.jpg"
          alt="Portrait of Kenneth Bitun"
          fill
          priority
          sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 760px) 40vw, 320px"
        />}
        <span className="portrait-index" aria-hidden="true">KB / profile</span>
      </div>
      <figcaption>Full-stack development · AI engineering</figcaption>
    </figure>
  );
}
