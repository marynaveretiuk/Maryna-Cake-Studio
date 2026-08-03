// Client testimonials (quote + name + role) shown in the testimonial slider.
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    quote: "“They completely transformed how we present our brand. The results were immediate and measurable. Highly recommend working with them.”",
    avatar: "/assets/img/team/team-6.jpg",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Founder & CEO",
    quote: "“Professional, fast, and incredibly detail-oriented. They understood our vision better than we did and delivered beyond expectations.”",
    avatar: "/assets/img/team/team-5.jpg",
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "E-commerce Owner",
    quote: "“Sales increased within weeks after launch. Their work speaks for itself. I’ll definitely work with them again.”",
    avatar: "/assets/img/team/team-4.jpg",
  },
] satisfies Testimonial[];