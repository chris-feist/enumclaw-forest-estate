export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand-mark ${light ? "brand-mark-light" : ""}`}>
      <svg viewBox="0 0 120 72" aria-hidden="true">
        <path className="roof" d="M8 55h20L60 31l32 24h20" />
        <path className="tree" d="M31 44l11-19 11 19h-7l10 15H27l10-15z" />
        <path className="tree" d="M52 35L66 9l14 26h-8l12 20H48l12-20z" />
        <path className="tree" d="M78 44l10-18 11 18h-6l9 14H75l9-14z" />
      </svg>
      <span><strong>ENUMCLAW</strong><em>FOREST ESTATE</em></span>
    </div>
  );
}
