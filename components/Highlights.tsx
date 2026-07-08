import { Home, Mountain, ShieldCheck, Trees } from "lucide-react";

const items = [
  { icon: Trees, title: "Private Forest", body: "Nearly twenty acres, including approximately 17.5 acres in PBRS with private trails for hiking and motorized recreation." },
  { icon: Home, title: "Built in 2019", body: "A 3,820-square-foot craftsman residence with premium finishes, generous living spaces, and a 1,000-square-foot garage." },
  { icon: ShieldCheck, title: "Ready for Any Season", body: "A whole-home generator with automatic transfer switch, high-efficiency heating, central air, and enhanced insulation." },
  { icon: Mountain, title: "Mountain Views", body: "Enjoy a direct Mount Rainier view while remaining close to downtown Enumclaw, schools, and everyday conveniences." },
];

export function Highlights() {
  return (
    <section id="property" className="bg-forest py-24 text-cream md:py-32">
      <div className="container-page">
        <div className="section-eyebrow mb-6 text-sage">Property Highlights</div>
        <h2 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">A property defined by privacy, craftsmanship, and possibility.</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border border-cream/15 bg-cream/[0.04] p-8">
              <Icon className="mb-8 h-8 w-8 text-bronze" />
              <h3 className="font-serif text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-cream/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
