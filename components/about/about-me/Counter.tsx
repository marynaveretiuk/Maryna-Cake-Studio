"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLoaderContext } from "@/context/LoaderContext";
import { counter } from "@/data/counter";

// Numbers that count up when scrolled into view.
export default function Counter() {
  const container = useRef<HTMLDivElement>(null);
  const { isHiding } = useLoaderContext();

  useGSAP(
    () => {
      if (!isHiding) return;

      gsap.utils.toArray<Element>(".counter-value").forEach((el) => {
        const target = Number(el.getAttribute("data-counter"));
        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 3,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.value)}`;
          },
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: container, dependencies: [isHiding], revertOnUpdate: true }
  );

  return (
    <div className="counter row gy-5" ref={container}>
      {counter.map((stat) => (
        <div key={stat.id} className="col-md-3">
          <div className="counter-icon">
            <i aria-hidden="true" className={stat.icon} />
          </div>

          <h4 className="counter-label">{stat.label}</h4>

          <div className="counter-display">
            <span className="counter-value" data-counter={stat.value}>
              0
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
