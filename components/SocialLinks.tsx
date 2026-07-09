import { property } from "@/lib/property";

type SocialLinksProps = {
  variant?: "header" | "footer" | "buttons";
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.5 8.25H17V4.4c-.43-.06-1.9-.2-3.62-.2-3.58 0-6.03 2.18-6.03 6.18v3.47H3.5v4.3h3.85V24h4.73v-5.85h3.7l.59-4.3h-4.29v-3.05c0-1.24.34-2.55 2.42-2.55Z" />
    </svg>
  );
}

export function SocialLinks({ variant = "buttons" }: SocialLinksProps) {
  const links = [
    {
      label: "Instagram",
      href: property.socialLinks.instagram,
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: property.socialLinks.facebook,
      icon: <FacebookIcon />,
    },
  ];

  if (variant === "header") {
    return (
      <div className="social-links social-links-header" aria-label="Social media links">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Follow Enumclaw Forest Estate on ${link.label}`}
          >
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="social-links social-links-buttons" aria-label="Social media links">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="social-button"
        >
          {link.icon}
          <span>Follow on {link.label}</span>
        </a>
      ))}
    </div>
  );
}
