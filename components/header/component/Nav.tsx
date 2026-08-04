"use client";

import { usePathname } from "next/navigation";
import SlideLink from "@/components/common/SlideLink";
import { menuItems } from "@/data/menu";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item) => {
        const isActive = item.href === pathname;

        return (
          <li key={item.id} className={isActive ? "active" : ""}>
            <SlideLink href={item.href}>
              <div className="btn-reveal">
                <span>{item.label}</span>
                <span className="reveal">{item.label}</span>
              </div>

              <span className="line" />
            </SlideLink>
          </li>
        );
      })}
    </>
  );
}
