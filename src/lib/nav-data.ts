/** Content model for the Services + About mega menus and primary nav. */

export type MenuLink = {
  label: string;
  href: string;
  note?: string; // italic gray helper text shown after the label
};

export type MenuColumn = {
  title: string;
  subtitle: string;
  links: MenuLink[];
  cta?: MenuLink; // "See all ..." style link at the column footer
};

export const servicesMenu = {
  alert: {
    label: "In pain?",
    text: "Same-day care for pain, trauma, and infection.",
  },
  columns: [
    {
      title: "Preventive & Family Care",
      subtitle: "Routine wellness & everyday care",
      links: [
        { label: "Cleanings & Hygiene", href: "/services/cleanings-hygiene" },
        { label: "New Patient Exam", href: "/services/new-patient-exam" },
        {
          label: "Gum Disease Treatment",
          href: "/services/gum-disease",
          note: "Deep Cleaning",
        },
        {
          label: "Children's Dentistry",
          href: "/services/childrens-dentistry",
        },
      ],
      cta: {
        label: "See all preventive & family services",
        href: "/services/preventive",
      },
    },
    {
      title: "Restorative Dentistry",
      subtitle: "Repair, replace & rebuild",
      links: [
        { label: "Fillings", href: "/services/fillings" },
        { label: "Crowns & Bridges", href: "/services/crowns-bridges" },
        {
          label: "Root Canals",
          href: "/services/root-canals",
          note: "Save an infected tooth",
        },
        { label: "Dental Implants", href: "/services/dental-implants" },
        {
          label: "Dentures",
          href: "/services/dentures",
          note: "Partial & Full",
        },
      ],
      cta: {
        label: "See all restorative services",
        href: "/services/restorative",
      },
    },
    {
      title: "Cosmetic & Orthodontics",
      subtitle: "Aesthetics & smile alignment",
      links: [
        { label: "Veneers", href: "/services/veneers" },
        { label: "Teeth Whitening", href: "/services/teeth-whitening" },
        {
          label: "Invisalign",
          href: "/services/invisalign",
          note: "Dr. Chung",
        },
        { label: "Traditional Braces", href: "/services/braces" },
        { label: "Smile Makeovers", href: "/services/smile-makeovers" },
      ],
      cta: {
        label: "See all cosmetic services",
        href: "/services/cosmetic",
      },
    },
    {
      title: "Specialty & Advanced",
      subtitle: "Complex care & oral surgery",
      links: [
        {
          label: "Wisdom Teeth & Extractions",
          href: "/services/wisdom-teeth",
        },
        {
          label: "TMJ & Night Guards",
          href: "/services/tmj",
          note: "Jaw Pain & Grinding",
        },
        {
          label: "Sleep Apnea",
          href: "/services/sleep-apnea",
          note: "Oral Appliance",
        },
        {
          label: "Full-Mouth Reconstruction",
          href: "/services/full-mouth-reconstruction",
        },
      ],
      cta: {
        label: "See all specialty services",
        href: "/services/specialty",
      },
    },
  ] satisfies MenuColumn[],
  footerLinks: [
    { label: "Emergency Care", href: "/emergency-care" },
    { label: "Our Technology", href: "/technology" },
    { label: "Financing & Cherry", href: "/financing" },
    { label: "Insurance & Payment", href: "/insurance" },
    { label: "New Patient Forms", href: "/new-patients/forms" },
  ] satisfies MenuLink[],
  helpCta: { label: "Not sure where to start? Let us help", href: "/contact" },
};

export const aboutMenu = {
  columns: [
    {
      title: "Our Practice",
      subtitle: "Family-owned \u00b7 Edison since 2002",
      links: [
        { label: "Our Story", href: "/about/story" },
        { label: "Community in Edison", href: "/about/community" },
      ],
      cta: { label: "About Edison Dental", href: "/about" },
    },
    {
      title: "Meet Our Team",
      subtitle: "Four dentists, one philosophy",
      links: [
        { label: "Dr. Yan Ma", href: "/team/yan-ma", note: "Founder" },
        {
          label: "Dr. Michael Chung",
          href: "/team/michael-chung",
          note: "Orthodontics",
        },
        { label: "Our Associate Dentists", href: "/team/associates" },
        { label: "Our Hygienists", href: "/team/hygienists" },
      ],
      cta: { label: "See the full team", href: "/team" },
    },
    {
      title: "Our Office",
      subtitle: "Modern care, warm rooms",
      links: [
        { label: "Office Tour", href: "/office/tour" },
        { label: "Technology", href: "/technology" },
        { label: "In-House Dental Lab", href: "/office/lab" },
      ],
      cta: { label: "Take the tour", href: "/office/tour" },
    },
  ] satisfies MenuColumn[],
  feature: {
    eyebrow: "Edison Dental",
    title: "Twenty years caring for Edison families.",
    text: "Hover any item to meet the people and places behind it.",
  },
  footerLinks: [
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Accessibility", href: "/accessibility" },
  ] satisfies MenuLink[],
  helpCta: {
    label: "Want to meet us first? Schedule a 15-minute tour",
    href: "/contact",
  },
};

export const primaryNav = [
  { label: "Services", href: "/services", menu: "services" as const },
  { label: "About Us", href: "/about", menu: "about" as const },
  { label: "Our Work", href: "/our-work" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contact", href: "/contact" },
];
