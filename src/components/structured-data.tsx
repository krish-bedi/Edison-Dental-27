import { site } from "@/lib/site";
import { servicesMenu } from "@/lib/nav-data";

/**
 * JSON-LD structured data. Helps Google rich results and gives AI crawlers
 * an explicit, machine-readable description of the practice, services, and
 * contact details. Verify address/phone/geo against the real business.
 */
export function StructuredData() {
  const services = servicesMenu.columns.flatMap((c) =>
    c.links.map((l) => l.label),
  );

  const dentist = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.url}/#dentist`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    priceRange: "$$",
    image: `${site.url}/og.svg`,
    logo: `${site.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Edison",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: "Dentistry",
    availableService: services.map((name) => ({
      "@type": "MedicalProcedure",
      name,
    })),
    founder: {
      "@type": "Person",
      name: "Dr. Yan Ma",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#dentist` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentist) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
