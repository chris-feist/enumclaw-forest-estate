export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many acres does Enumclaw Forest Estate include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Enumclaw Forest Estate includes 19.55 private acres in Enumclaw, Washington.",
        },
      },
      {
        "@type": "Question",
        name: "Does the property have a private trail network?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The property includes private forest trails, along with mature trees and natural surroundings.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a downloadable property portfolio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Buyers can view the online property portfolio or download the PDF property book from the website.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the listing broker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The property is presented by Todd Huizenga with KW Mountains to Sound Realty.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
