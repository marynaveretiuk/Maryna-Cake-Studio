"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { faqItems } from "@/data/faq";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    gsap.to(content, {
      maxHeight: isOpen ? content.scrollHeight : 0,
      opacity: isOpen ? 1 : 0,
      duration: isOpen ? 0.4 : 0.3,
      ease: "power2.inOut",
    });
    gsap.to(icon, {
      rotation: isOpen ? 135 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isOpen]);

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <button onClick={onToggle} aria-expanded={isOpen}>
        {question}
        <span ref={iconRef} className="accordion__icon" />
      </button>
      <div ref={contentRef} className="accordion__body">
        <div className="accordion__item-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

// FAQ accordion - expand / collapse questions.
export default function Faq() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const handleToggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="faq-section space">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 d-md-flex flex-column align-items-center">
            <h2 className="title-section-small mb-3">Frequently Asked Questions</h2>
            <p className="mb-5">Answers to all of your frequently asked pricing questions.</p>
          </div>
          <div className="col-md-6">
            {faqItems.slice(0, 3).map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIds.has(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
          <div className="col-md-6">
            {faqItems.slice(3, 6).map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIds.has(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
