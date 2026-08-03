// Services list (icon + title + text) shown on the services page/section.
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const services = [
  {
    id: 1,
    icon: "fa-regular fa-newspaper",
    title: "Social Media Optimization",
    description: "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
  },
  {
    id: 2,
    icon: "fa-regular fa-chart-line-up",
    title: "Market Analysis",
    description: "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
  },
  {
    id: 3,
    icon: "fa-regular fa-desktop-code",
    title: "Web Development",
    description: "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
  },
  {
    id: 4,
    icon: "fa-regular fa-pencil-alt",
    title: "Content Creation",
    description: "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
  },
  {
    id: 5,
    icon: "fa-regular fa-camera",
    title: "Photography",
    description: "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
  },
  {
    id: 6,
    icon: "fa-regular fa-globe",
    title: "Business Solution",
    description: "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
  },
] satisfies Service[];