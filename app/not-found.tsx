import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="eyebrow">Page not found</p>
        <h1>Return to the estate.</h1>
        <p>
          The page you requested could not be found. Explore the property
          website, view the portfolio, or download the property book.
        </p>
        <div className="not-found-actions">
          <Link className="button button-dark" href="/">
            Property Website
          </Link>
          <Link className="button button-plain" href="/portfolio">
            View Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
