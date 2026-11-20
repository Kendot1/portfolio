export default function ForecastCompanion() {
  return (
    <a className="forecast-companion" href="#foodcast-lab">
      <svg viewBox="0 0 160 160" aria-hidden="true" focusable="false">
        <path className="companion-trace" d="M18 119 L43 99 L65 108 L88 69 L110 79 L142 39" />
        <g className="companion-body">
          <rect x="47" y="45" width="68" height="66" rx="22" />
          <circle cx="70" cy="74" r="3" /><circle cx="93" cy="74" r="3" />
          <path d="M75 87 Q81 93 87 87" />
          <path d="M65 110 L60 119 M98 110 L103 119" />
        </g>
      </svg>
      <span>Meet the feature lab</span>
    </a>
  );
}
