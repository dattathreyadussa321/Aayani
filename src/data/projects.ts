export type ProjectCategory =
  | "Living Room"
  | "Kitchen"
  | "Bedroom"
  | "Wardrobe"
  | "Office"
  | "Architecture"
  | "3D Renders";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  scope: string;
  style: string;
  year: string;
  cover: string; // primary image
  gallery: string[];
  designerNote: string; // 1-2 sentence story
  materials: string[];
};

export const PROJECT_CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Wardrobe",
  "Office",
  "Architecture",
  "3D Renders",
];

export const PROJECTS: Project[] = [
  {
    slug: "warm-3bhk-family-home",
    title: "Warm 3BHK Family Home",
    location: "Kondapur, Hyderabad",
    category: "Living Room",
    scope: "Full Home Interiors",
    style: "Warm Contemporary",
    year: "2024",
    cover: "/images/projects/g1.jpg",
    gallery: ["/images/projects/g1.jpg", "/images/projects/g4.jpg", "/images/projects/g9.jpg"],
    designerNote:
      "We softened the TV wall with warm veneer and hidden storage so the room feels calm, not crowded. The dining nook borrows light from the balcony — a small move that changed the whole flat.",
    materials: ["Warm Veneer", "Matte Laminate", "Fluted Glass", "Brushed Brass"],
  },
  {
    slug: "compact-kitchen-with-better-storage",
    title: "Compact Kitchen with Better Storage",
    location: "Manikonda, Hyderabad",
    category: "Kitchen",
    scope: "Modular Kitchen",
    style: "Quiet Functional",
    year: "2024",
    cover: "/images/projects/g42.jpg",
    gallery: ["/images/projects/g42.jpg", "/images/projects/g21.jpg"],
    designerNote:
      "The owners cook every day, twice a day. We built tall pull-outs near the hob, lighter wall units, and a small breakfast slab that doubles as prep space.",
    materials: ["Acrylic Shutters", "Quartz Counter", "Tandem Drawers"],
  },
  {
    slug: "calm-bedroom-with-soft-lighting",
    title: "Calm Bedroom with Soft Lighting",
    location: "Gachibowli, Hyderabad",
    category: "Bedroom",
    scope: "Bedroom + Wardrobe",
    style: "Soft Minimal",
    year: "2024",
    cover: "/images/projects/g27.jpg",
    gallery: ["/images/projects/g27.jpg", "/images/projects/g11.jpg"],
    designerNote:
      "Layered lighting at three levels — overhead, cove, and bedside — so the room reads completely different at midnight than it does at noon.",
    materials: ["Linen Upholstery", "Walnut Veneer", "Warm LED Cove"],
  },
  {
    slug: "modern-office-designed-for-focus",
    title: "Modern Office Designed for Focus",
    location: "HITEC City, Hyderabad",
    category: "Office",
    scope: "Office Interiors",
    style: "Clean Professional",
    year: "2023",
    cover: "/images/projects/g16.jpg",
    gallery: ["/images/projects/g16.jpg", "/images/projects/g17.jpg"],
    designerNote:
      "Acoustic ceiling, planted partitions, and a soft palette — small details that quietly cut down meeting fatigue.",
    materials: ["Acoustic Panels", "Engineered Wood", "Matte Metal"],
  },
  {
    slug: "sliding-wardrobe-master-suite",
    title: "Sliding Wardrobe in a Master Suite",
    location: "Banjara Hills, Hyderabad",
    category: "Wardrobe",
    scope: "Wardrobe Design",
    style: "Soft Luxe",
    year: "2024",
    cover: "/images/projects/g13.jpg",
    gallery: ["/images/projects/g13.jpg", "/images/projects/g14.jpg"],
    designerNote:
      "Floor-to-ceiling sliding wardrobe with a soft fluted-glass panel — feels like a calm wall by day, opens to organised storage by night.",
    materials: ["Fluted Glass", "PU Finish", "Soft-Close Sliders"],
  },
  {
    slug: "warangal-residence-elevation",
    title: "Warangal Residence — Plan & Elevation",
    location: "Warangal",
    category: "Architecture",
    scope: "Architectural Plans",
    style: "Climate-Aware Modern",
    year: "2023",
    cover: "/images/projects/g36.jpg",
    gallery: ["/images/projects/g36.jpg", "/images/projects/g37.jpg"],
    designerNote:
      "Deep verandahs and louvered openings keep the harsh afternoon sun out — practical comfort dressed up as a clean facade.",
    materials: ["Local Stone", "Wood Louvers", "Kota Flooring"],
  },
  {
    slug: "evening-living-room-render",
    title: "Evening Living Room — 3D Visualization",
    location: "Studio Render",
    category: "3D Renders",
    scope: "Photoreal Render",
    style: "Warm Editorial",
    year: "2024",
    cover: "/images/projects/g30.jpg",
    gallery: ["/images/projects/g30.jpg", "/images/projects/g31.jpg"],
    designerNote:
      "We render rooms the way they will actually look at 7pm with the lights on — including the warmth in the wood and the softness in the rug.",
    materials: ["PBR Textures", "Studio Lighting"],
  },
  {
    slug: "open-living-dining-2bhk",
    title: "Open Living & Dining — 2BHK",
    location: "Madhapur, Hyderabad",
    category: "Living Room",
    scope: "Living & Dining",
    style: "Warm Contemporary",
    year: "2024",
    cover: "/images/projects/g7.jpg",
    gallery: ["/images/projects/g7.jpg", "/images/projects/g8.jpg"],
    designerNote:
      "Removed a half-wall to merge the living and dining into one breathing space, then anchored it with a warm rug and a single statement light.",
    materials: ["Hand-Tufted Rug", "Brass Pendant", "Walnut Veneer"],
  },
  {
    slug: "kids-bedroom-storage-play",
    title: "Kids Bedroom — Storage + Play",
    location: "Miyapur, Hyderabad",
    category: "Bedroom",
    scope: "Kids Room",
    style: "Soft Playful",
    year: "2024",
    cover: "/images/projects/g20.jpg",
    gallery: ["/images/projects/g20.jpg", "/images/projects/g23.jpg"],
    designerNote:
      "A bunk that hides storage under the steps, a study by the window, and a pinboard wall — designed to grow with the child for the next eight years.",
    materials: ["Eco-Plywood", "Soft Paint", "Cork Pinboard"],
  },
  {
    slug: "boutique-office-reception",
    title: "Boutique Office Reception",
    location: "Jubilee Hills, Hyderabad",
    category: "Office",
    scope: "Reception Design",
    style: "Quiet Premium",
    year: "2023",
    cover: "/images/projects/g25.jpg",
    gallery: ["/images/projects/g25.jpg", "/images/projects/g26.jpg"],
    designerNote:
      "A reception is the brand's first sentence. We kept it warm, low-lit, and uncluttered — confident without trying too hard.",
    materials: ["Travertine Look", "Warm Veneer", "Brass Inlay"],
  },
  {
    slug: "compact-3bhk-render-set",
    title: "Compact 3BHK — Render Set",
    location: "Studio Render",
    category: "3D Renders",
    scope: "Full Home Renders",
    style: "Warm Minimal",
    year: "2024",
    cover: "/images/projects/g33.jpg",
    gallery: ["/images/projects/g33.jpg", "/images/projects/g34.jpg"],
    designerNote:
      "An entire 3BHK rendered before site work began — every change happened on screen, not on the wall.",
    materials: ["PBR Textures", "Studio Lighting"],
  },
  {
    slug: "walk-in-wardrobe-niche",
    title: "Walk-in Wardrobe Niche",
    location: "Kompally, Hyderabad",
    category: "Wardrobe",
    scope: "Walk-in Closet",
    style: "Quiet Luxe",
    year: "2024",
    cover: "/images/projects/g19.jpg",
    gallery: ["/images/projects/g19.jpg"],
    designerNote:
      "Hidden under-shelf lighting and a soft mirror finish make this small walk-in feel twice its size.",
    materials: ["PU Finish", "Antique Brass", "LED Strip"],
  },
];
