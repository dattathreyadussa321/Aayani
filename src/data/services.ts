export type Service = {
  slug: string;
  name: string;
  shortName: string;
  emotional: string; // 1-line emotional benefit
  description: string;
  bullets: string[];
  bestFor: string;
  included: string[];
  timeline: string;
  benefit: string;
  image: string; // path under /public
  materials?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "full-home-interiors",
    name: "Full Home Interiors",
    shortName: "Home Interiors",
    emotional: "A home shaped around how your family actually lives.",
    description:
      "End-to-end interior design for 1, 2, and 3 BHK homes — from layout to lighting to the last cushion. We work room by room so the whole home feels like one continuous, calm space.",
    bullets: [
      "Personalised layout and storage planning",
      "Material and finish curation in our studio",
      "Site execution with clear weekly updates",
    ],
    bestFor: "Families moving into a new home or renovating an existing one.",
    included: [
      "2D layouts & space planning",
      "3D renders for every key room",
      "Modular kitchen, wardrobes, TV unit, study, pooja",
      "False ceiling, lighting, paint and wallpaper",
      "Loose furniture, curtains, and styling",
      "End-to-end execution and quality checks",
    ],
    timeline: "8 to 14 weeks, depending on scope and home size.",
    benefit:
      "One studio, one accountable team, one calm timeline — instead of juggling vendors.",
    image: "/images/services/home-interiors.jpg",
    materials: ["Matte Laminate", "Warm Veneer", "Soft-Close Hardware", "Brushed Brass"],
  },
  {
    slug: "modular-kitchens-wardrobes",
    name: "Modular Kitchens & Wardrobes",
    shortName: "Modular",
    emotional: "Storage that disappears into the design.",
    description:
      "Modular kitchens and wardrobes built around your real routines — your appliances, your jars, your saree count. We design the storage first, then make it beautiful.",
    bullets: [
      "Routine-first storage planning",
      "Quality boards, hardware, and finishes",
      "Site-measured and factory-finished",
    ],
    bestFor: "Owners who want long-lasting kitchens and wardrobes that actually fit their things.",
    included: [
      "Detailed shutter, drawer, and accessory layout",
      "Choice of laminate, acrylic, or veneer finishes",
      "Soft-close hinges and channels (Hettich/Hafele tier)",
      "Counter material guidance — quartz, granite, or solid surface",
      "Tall units, pull-outs, and corner solutions",
    ],
    timeline: "4 to 7 weeks from final design sign-off.",
    benefit: "Storage planned around your routine — not a generic catalogue.",
    image: "/images/services/modular.jpg",
    materials: ["Acrylic Shutters", "Quartz Top", "PVC-Edge Boards", "Tandem Drawers"],
  },
  {
    slug: "architectural-plans",
    name: "Architectural Plans & Elevations",
    shortName: "Architecture",
    emotional: "Plans that respect the plot, the breeze, and the budget.",
    description:
      "Site-aware architectural design — plans, elevations, working drawings, and structural coordination. For new builds and rebuilds where the plan itself decides how the home feels.",
    bullets: [
      "Vastu-aware, climate-aware planning",
      "Working drawings ready for site",
      "Coordination with structural engineer",
    ],
    bestFor: "Plot owners ready to build or rebuild their home or commercial space.",
    included: [
      "Site study and brief consultation",
      "Concept floor plans and revisions",
      "Front and side elevations",
      "Working drawings — flooring, electrical, plumbing",
      "Structural and MEP coordination",
    ],
    timeline: "3 to 6 weeks for design; longer for build coordination.",
    benefit: "A plan that feels right before a single brick is laid.",
    image: "/images/services/architecture.jpg",
    materials: ["Local Stone", "Exposed Brick", "Kota Flooring", "Wood Louvers"],
  },
  {
    slug: "3d-visualization",
    name: "3D Visualization & Renders",
    shortName: "3D Renders",
    emotional: "See your home before it exists.",
    description:
      "Photoreal 3D renders so you can walk through your home, change a wall colour, swap a sofa — all before site work begins. We render rooms the way they will actually look at 7pm with the lights on.",
    bullets: [
      "Photoreal interior and exterior views",
      "Material and lighting iterations",
      "Walkthrough videos on request",
    ],
    bestFor: "Clients who want to feel the design, not just read drawings.",
    included: [
      "Two to three view angles per room",
      "Two material/finish revision rounds",
      "Day and warm evening lighting options",
      "Final high-resolution images for your reference",
    ],
    timeline: "2 to 4 weeks once layouts are signed off.",
    benefit: "Fewer surprises on site, fewer regrets after move-in.",
    image: "/images/services/3d-renders.jpg",
    materials: ["Real Material Library", "PBR Textures", "Studio Lighting"],
  },
  {
    slug: "office-interiors",
    name: "Office Interiors",
    shortName: "Office",
    emotional: "Workspaces designed for focus, not for show.",
    description:
      "Office and commercial interiors that balance brand, comfort, and productivity. Whether it's a 600 sq ft startup or a 6000 sq ft headquarters, the goal is the same — a space that helps people do their best work.",
    bullets: [
      "Ergonomic, focus-friendly layouts",
      "Brand-led design language",
      "Acoustic, lighting, and air quality care",
    ],
    bestFor: "Startups, professional offices, and small commercial setups.",
    included: [
      "Workstation and meeting room planning",
      "Branded reception and visitor zones",
      "Acoustic ceiling and soft-finish guidance",
      "Lighting, AC, and AV coordination",
      "Modular furniture and storage",
    ],
    timeline: "6 to 10 weeks depending on size.",
    benefit: "An office your team is proud to walk into every morning.",
    image: "/images/services/office.jpg",
    materials: ["Acoustic Panels", "Engineered Wood", "Linen Upholstery", "Matte Metal"],
  },
  {
    slug: "renovations",
    name: "Renovations & Makeovers",
    shortName: "Renovations",
    emotional: "Older homes, gently brought into today.",
    description:
      "Renovations for homes that have good bones but tired surfaces. We respect what is already working and only change what truly needs to change — keeping cost, dust, and disruption in check.",
    bullets: [
      "Selective changes that maximise impact",
      "Minimum civil work where possible",
      "Phased timelines if you live on-site",
    ],
    bestFor: "Existing homes needing a refresh — not a teardown.",
    included: [
      "Walk-through and existing-condition study",
      "Priority list within your budget",
      "Selective civil, electrical, plumbing changes",
      "Paint, flooring, and finish upgrades",
      "Modular and loose furniture refresh",
    ],
    timeline: "Custom — typically 4 to 10 weeks per phase.",
    benefit: "A home that feels new without rebuilding it.",
    image: "/images/services/renovation.jpg",
    materials: ["Stain-Resistant Paint", "Engineered Wood Flooring", "Updated Hardware"],
  },
];
