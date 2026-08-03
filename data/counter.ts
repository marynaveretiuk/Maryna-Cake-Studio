// Animated stat counters (number + label) shown in the About "experience" band.
// Edit the values/labels below to change what's counted.
export interface Counter {
  id: number;
  icon: string;
  label: string;
  value: number;
}

export const counter = [
  {
    id: 1,
    icon: "fa-regular fa-briefcase",
    label: "Projects",
    value: 58,
  },
  {
    id: 2,
    icon: "fa-regular fa-coffee",
    label: "Coffees",
    value: 260,
  },
  {
    id: 3,
    icon: "fa-regular fa-smile",
    label: "Clients",
    value: 420,
  },
  {
    id: 4,
    icon: "fa-regular fa-trophy",
    label: "Contests won",
    value: 32,
  },
] satisfies Counter[];