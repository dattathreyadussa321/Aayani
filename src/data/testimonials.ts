export type Testimonial = {
  name: string;
  label: string;
  quote: string;
  project: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mama",
    label: "Homeowner, Hyderabad",
    quote:
      "Working with Aayani was an unhurried, careful experience. They listened first, drew later, and the home now feels like ours — not like a showroom. Even small things like switch positions and storage heights were thought through.",
    project: "Full Home Interiors · 3BHK",
    initials: "MR",
  },
  {
    name: "Sai",
    label: "Working Professional, Hyderabad",
    quote:
      "I had no time to sit through a hundred decisions. Aayani made sense of my brief, gave me three clear direction options, and quietly executed the rest. The 3D renders meant I knew exactly what I was getting.",
    project: "Compact 2BHK · Renovation",
    initials: "S",
  },
  {
    name: "Rakesh",
    label: "Family Home, Telangana",
    quote:
      "What I appreciated most was honesty about budget. They told us what to spend on, and where to save without losing quality. The wardrobes still look new two years in.",
    project: "Modular + Interiors",
    initials: "R",
  },
  {
    name: "Homeowner",
    label: "3BHK Apartment, Gachibowli",
    quote:
      "Calm, warm, and clearly thought-out. The team handled vendors, deliveries, even the curtain styling on the last day. We just walked in.",
    project: "Full Home + Styling",
    initials: "GH",
  },
];
