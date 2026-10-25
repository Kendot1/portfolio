import type { ReactNode } from "react";

interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  aside?: string;
  children?: ReactNode;
}

export default function SectionHeader({ id, number, title, aside, children }: SectionHeaderProps) {
  return (
    <>
      <div className="section-header">
        <h2 id={id} className="section-heading"><span>{number}</span> — {title}</h2>
        {aside && <span className="section-aside">{aside}</span>}
      </div>
      {children && <p className="section-description">{children}</p>}
    </>
  );
}
