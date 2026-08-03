"use client";

import { usePathname } from "next/navigation";
import SlideLink from "@/components/common/SlideLink";
import { menuItems } from "@/data/menu";

// Header - main navigation menu (with dropdowns).
export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item) => {
        const isActive = item.href === pathname;

        return (
          <li
            key={item.id}
            className={`${item.subMenuItems?.length ? "has-sub" : ""} ${isActive ? "active" : ""}`}
          >
            <SlideLink href={item.href ?? "/"}>
              <div className="btn-reveal">
                <span>{item.label}</span>
                <span className="reveal">{item.label}</span>
              </div>
              <span className="line" />
            </SlideLink>

            {/* level 2 submenu */}
            {!!item.subMenuItems?.length && (
              <ul>
                {item.subMenuItems.map((subItem) => (
                  <li
                    key={subItem.id}
                    className={subItem.subMenuItems ? "has-sub" : ""}
                  >
                    <SlideLink href={subItem.href ?? "/"}>
                      <div className="btn-reveal">
                        <span>{subItem.label}</span>
                        <span className="reveal">{subItem.label}</span>
                      </div>
                    </SlideLink>

                    {/* level 3 submenu */}
                    {!!subItem.subMenuItems?.length && (
                      <ul>
                        {subItem.subMenuItems.map((thirdItem) => (
                          <li key={thirdItem.id}>
                            <SlideLink href={thirdItem.href ?? "/"}>
                              <div className="btn-reveal">
                                <span>{thirdItem.label}</span>
                                <span className="reveal">{thirdItem.label}</span>
                              </div>
                            </SlideLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}
