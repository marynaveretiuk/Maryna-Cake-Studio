// Skill bars (name + level %) shown on the About pages. Level is 0–100.
export interface Skill {
  id: number;
  name: string;
  level: number;
}

export const skills = [
  {
    id: 1,
    name: "UI/UX Design",
    level: 95,
  },
  {
    id: 2,
    name: "Development",
    level: 85,
  },
  {
    id: 3,
    name: "React",
    level: 65,
  },
  {
    id: 4,
    name: "Next.js",
    level: 70,
  },
  {
    id: 5,
    name: "TypeScript",
    level: 60,
  },
  {
    id: 6,
    name: "Python",
    level: 45,
  },
] satisfies Skill[];