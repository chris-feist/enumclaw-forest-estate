"use client";

export function PortfolioPrintButton() {
  return (
    <button
      className="portfolio-print-button"
      type="button"
      onClick={() => window.print()}
    >
      Print / Save PDF
    </button>
  );
}
