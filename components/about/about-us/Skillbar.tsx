"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLoaderContext } from "@/context/LoaderContext";
import { skills } from "@/data/skillbar";

// About Us page - animated skill progress bars.
export default function Skillbar() {
  const container = useRef<HTMLDivElement>(null);
  const { isHiding } = useLoaderContext();

  useGSAP(
    () => {
      if (!isHiding) return;

      gsap.fromTo(
        ".skillbar-bar",
        { width: "0%" },
        {
          width: (_, el) => el.getAttribute("data-percent"),
          duration: 2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.utils.toArray<Element>(".skillbar-percent").forEach((el, i) => {
        const target = Number(el.getAttribute("data-value"));
        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 2,
          delay: i * 0.2,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.value)}%`;
          },
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            once: true,
          },
        });
      });
    },
    { scope: container, dependencies: [isHiding], revertOnUpdate: true }
  );

  return (
    <div className="skills mt-4" ref={container}>
      {skills.slice(0, 4).map((skill) => (
        <div key={skill.id} className="skillbar">
          <div className="skillbar-title">
            <h5>{skill.name}</h5>
          </div>

          <div className="skillbar-bar" data-percent={`${skill.level}%`} />

          <div className="skillbar-percent" data-value={skill.level}>
            0%
          </div>
        </div>
      ))}
    </div>
  );
}
