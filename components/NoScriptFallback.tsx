import { property } from "@/lib/property";

export function NoScriptFallback() {
  return (
    <noscript>
      <div className="noscript-fallback">
        JavaScript is disabled. You can still contact the listing broker:{" "}
        <a href={`tel:+1${property.realtor.phone.replaceAll("-", "")}`}>
          {property.realtor.phone}
        </a>{" "}
        or{" "}
        <a href={`mailto:${property.realtor.email}`}>
          {property.realtor.email}
        </a>
        .
      </div>
    </noscript>
  );
}
