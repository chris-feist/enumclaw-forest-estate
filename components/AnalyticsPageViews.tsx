"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

import { trackPageView } from "@/lib/analytics";

function PageViewListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (lastTrackedUrl.current === url) return;

    lastTrackedUrl.current = url;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsPageViews() {
  return (
    <Suspense fallback={null}>
      <PageViewListener />
    </Suspense>
  );
}
