"use client";

import { type HTMLAttributes, type ReactNode, useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics";

type TrackedSectionProps = HTMLAttributes<HTMLElement> & {
  eventName: string;
  eventParams?: Record<string, unknown>;
  children: ReactNode;
};

export function TrackedSection({
  eventName,
  eventParams,
  children,
  ...props
}: TrackedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasTracked.current) return;

        hasTracked.current = true;
        trackEvent(eventName, eventParams);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eventName, eventParams]);

  return (
    <section ref={ref} {...props}>
      {children}
    </section>
  );
}
