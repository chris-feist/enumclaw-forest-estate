import { property } from "@/lib/property";

type SocialLinksProps = {
  variant?: "header" | "footer" | "buttons";
};

export function SocialLinks({ variant = "buttons" }: SocialLinksProps) {
  const links = [
    {
      label: "Instagram",
      href: property.socialLinks.instagram,
      icon: "◎",
    },
    {
      label: "Facebook",
      href: property.socialLinks.facebook,
      icon: "f",
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
            <span aria-hidden="true">{link.icon}</span>
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
          <span aria-hidden="true">{link.icon}</span>
          <span>Follow on {link.label}</span>
        </a>
      ))}
    </div>
  );
}
