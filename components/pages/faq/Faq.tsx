"use client";

import { useState } from "react";
import SlideLink from "@/components/common/SlideLink";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "How far in advance should I place my order?",
    answer:
      "I recommend contacting me as early as possible, especially for weekends, weddings, and larger celebrations. Availability is limited, and your date is not reserved until the required deposit is received.",
  },
  {
    question: "What is your minimum order?",
    answer:
      "The minimum cake order is 2 kg. This allows enough flexibility for proper structure, filling, decoration, and the level of detail required for a custom design.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on cake size, number of servings, flavor, design complexity, decorative elements, and whether delivery is required. A final quote is provided after I review your event details and inspiration.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Yes. A deposit is required to reserve your date and confirm the order. Until the deposit is received, the order is not considered confirmed and the date remains available to other clients.",
  },
  {
    question: "Can I send inspiration photos?",
    answer:
      "Yes. You may upload an inspiration photo through the inquiry form or include a Pinterest or Instagram link in your message. Inspiration is used as a starting point, while the final design is customized for your celebration.",
  },
  {
    question: "Do you copy cake designs exactly?",
    answer:
      "Inspiration photos help me understand your preferred style, colors, and details, but the final design will be adapted and handcrafted specifically for your celebration.",
  },
  {
    question: "What flavors do you offer?",
    answer:
      "I offer a wide selection of sponge cakes, honey cakes, mousse cakes, desserts, and macarons. The complete menu will be available on the Flavors page.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Pickup and delivery may be available depending on the date, location, cake size, and design. Delivery pricing is calculated separately based on distance and setup requirements.",
  },
  {
    question: "Do you make 3D or sculpted cakes?",
    answer:
      "I do not make fully sculpted 3D cakes. I specialize in elegant round and tiered cakes with custom decorations, toppers, textures, flowers, and themed details.",
  },
  {
    question: "Do you work with buttercream?",
    answer:
      "I do not use buttercream as the final cake covering. My cakes are finished with chocolate ganache, which provides a smooth, stable, and refined finish.",
  },
  {
    question: "Do you offer tastings?",
    answer:
      "Tastings are not currently offered. Flavor descriptions and recommendations are available to help you choose the best option for your celebration.",
  },
  {
    question: "Can I change my order after it is confirmed?",
    answer:
      "Small changes may be possible depending on timing and availability. Major changes to size, flavor, design, or delivery should be requested as early as possible and may affect the final price.",
  },
  {
    question: "Do you accommodate food allergies?",
    answer:
      "Please let me know about any allergies when placing your inquiry. While I do my best to accommodate certain requests, my kitchen is not allergen-free and cross-contact cannot be guaranteed.",
  },
  {
    question: "When is my order officially confirmed?",
    answer:
      "Your order is officially confirmed only after availability has been verified and the required deposit has been received.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-page">
      <div className="container">
        <div className="faq-page__heading">
          <p>Everything You Need to Know</p>
          <span>
            Everything you need to know before placing a custom cake inquiry.
          </span>
        </div>

        <div className="faq-page__layout">
          <div className="faq-page__intro">
            <p className="faq-page__eyebrow">Before You Order</p>

            <h2>Thoughtful details make every celebration easier.</h2>

            <p>
              These answers cover the most common questions about booking,
              deposits, flavors, delivery, design, and custom cake orders.
            </p>

            <SlideLink href="/contact-v1" className="brand-button">
              Start Your Inquiry
            </SlideLink>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className={isOpen ? "faq-item is-open" : "faq-item"}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>

                    <span className="faq-item__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-item__answer">
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
