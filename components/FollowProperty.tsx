import { SocialLinks } from "./SocialLinks";

export function FollowProperty() {
  return (
    <section className="section follow-property" id="follow">
      <div className="section-kicker">Follow the Property</div>
      <h2>Stay connected with Enumclaw Forest Estate.</h2>
      <p>
        Follow along for open house reminders, new photos, video highlights,
        feature spotlights, and property updates.
      </p>
      <SocialLinks />
    </section>
  );
}
