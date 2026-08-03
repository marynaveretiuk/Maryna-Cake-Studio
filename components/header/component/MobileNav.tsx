"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SlideLink from "@/components/common/SlideLink";
import { menuItems, type MenuItem } from "@/data/menu";

// Slide a collapsible element open/closed with GSAP (slideDown/slideUp).
function useSlide(open: boolean, ref: React.RefObject<HTMLElement | null>) {
  const mounted = useRef(false);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (!mounted.current) {
        mounted.current = true;
        return;
      }

      gsap.to(el, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: 0.4,
        ease: open ? "power2.out" : "power2.inOut",
        overwrite: true,
      });
    },
    { dependencies: [open] }
  );
}

// One menu item: the row itself toggles the submenu.
function MobileNavItem({ item, onNavigate }: { item: MenuItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.subMenuItems?.length;
  const toggle = () => setOpen((prev) => !prev);

  const submenuRef = useRef<HTMLUListElement>(null);
  useSlide(open, submenuRef);

  return (
    <li className="mobile-nav__item">
      <div
        className="mobile-nav__row"
        {...(hasChildren && {
          role: "button",
          tabIndex: 0,
          "aria-expanded": open,
          onClick: toggle,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          },
        })}
      >
        {item.href ? (
          <SlideLink
            href={item.href}
            className="mobile-nav__link"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate();
            }}
          >
            <span>{item.label}</span>
          </SlideLink>
        ) : (
          <span className="mobile-nav__link mobile-nav__link--static">
            <span>{item.label}</span>
          </span>
        )}

        {hasChildren && (
          <span className={`mobile-nav__arrow${open ? " is-open" : ""}`} aria-hidden="true">
            ►
          </span>
        )}
      </div>

      {hasChildren && (
        <ul ref={submenuRef} className="mobile-nav__submenu" aria-hidden={!open}>
          {item.subMenuItems!.map((sub) => (
            <MobileNavItem key={sub.id} item={sub} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

// Header - responsive mobile menu (shown below the desktop nav breakpoint).
export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const navRef = useRef<HTMLElement>(null);
  useSlide(menuOpen, navRef);

  return (
    <div className="mobile-nav-wrap">
      <button
        type="button"
        className={`mobile-nav__toggle${menuOpen ? " is-open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="mobile-nav__toggle-text">Menu</span>
        <span className="mobile-nav__toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav id="mobile-nav" className="mobile-nav" ref={navRef} aria-hidden={!menuOpen}>
        <ul className="mobile-nav__list">
          {menuItems.map((item) => (
            <MobileNavItem key={item.id} item={item} onNavigate={close} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
