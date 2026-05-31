interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export function getOrganizationSchema(siteURL: string, ogImage: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alta Maquina",
    "url": siteURL,
    "logo": `${siteURL}/favicon.svg`,
    "image": ogImage,
    "description": "Desarrollo web profesional y servicio técnico de PC en Argentina.",
    "sameAs": [
      "https://www.facebook.com/altamaquina.sb/",
      "https://www.instagram.com/altamaquinasb/",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "altamaquinassb@gmail.com",
      "availableLanguage": ["Spanish"],
    },
  };
}

export function getBreadcrumbSchema(siteURL: string, pageType: "web" | "pc" | "legal" | "faq", pageTitle?: string, pagePath?: string) {
  const itemListElement = [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": siteURL }
  ];

  if (pageType === "pc") {
    itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Servicio Técnico PC",
      "item": `${siteURL}/servicio-tecnico`
    });
  } else if (pageType === "legal" && pageTitle && pagePath) {
    itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle,
      "item": `${siteURL}${pagePath}`
    });
  } else if (pageType === "faq") {
    itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Preguntas Frecuentes",
      "item": `${siteURL}/preguntas-frecuentes`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
}

export function getServiceSchema(siteURL: string, ogImage: string, pageType: "web" | "pc" | "legal" | "faq", description: string) {
  if (pageType === "web") {
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Alta Maquina — Desarrollo Web",
      "url": siteURL,
      "image": ogImage,
      "description": description,
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "Argentina",
      },
      "serviceType": [
        "Desarrollo web",
        "Diseño web",
        "Tiendas online",
        "Sistemas de turnos",
        "Landing pages",
        "Catálogos online",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Planes de desarrollo web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Landing Page Básica" },
            "price": "80000",
            "priceCurrency": "ARS",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Web Institucional" },
            "price": "250000",
            "priceCurrency": "ARS",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Plan Turnos Online" },
            "price": "450000",
            "priceCurrency": "ARS",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Plan Catálogo Online" },
            "price": "350000",
            "priceCurrency": "ARS",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Plan Tienda Online" },
            "price": "700000",
            "priceCurrency": "ARS",
          },
        ],
      },
    };
  }

  if (pageType === "pc") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Alta Maquina — Servicio Técnico PC",
      "url": siteURL,
      "image": ogImage,
      "description": description,
      "priceRange": "$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Bernardo del Tuyú",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -36.6897,
        "longitude": -56.6915,
      },
      "sameAs": [
        "https://www.facebook.com/altamaquina.sb/",
        "https://www.instagram.com/altamaquinasb/",
      ],
      "serviceType": ["Limpieza de PC", "Diagnóstico", "Armado de PC"],
      "areaServed": [
        "San Bernardo del Tuyú",
        "Santa Teresita",
        "Mar del Tuyú",
        "Las Toninas",
        "Costa del Este",
        "Aguas Verdes",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios técnicos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Limpieza física completa" },
            "price": "14000",
            "priceCurrency": "ARS",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Diagnóstico y revisión" },
            "price": "5000",
            "priceCurrency": "ARS",
          },
        ],
      },
    };
  }

  return null;
}

export function getFAQSchema(faqs?: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respuesta,
      },
    })),
  };
}

export function getAllSchemas(
  siteURL: string,
  ogImage: string,
  pageType: "web" | "pc" | "legal" | "faq",
  description: string,
  faqs?: FAQItem[],
  pageTitle?: string,
  pagePath?: string
) {
  const schemas: any[] = [
    getOrganizationSchema(siteURL, ogImage),
    getBreadcrumbSchema(siteURL, pageType, pageTitle, pagePath)
  ];

  const serviceSchema = getServiceSchema(siteURL, ogImage, pageType, description);
  if (serviceSchema) {
    schemas.push(serviceSchema);
  }

  const faqSchema = getFAQSchema(faqs);
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return schemas;
}
