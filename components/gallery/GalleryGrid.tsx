"use client";

import { useState } from "react";
import Image from "next/image";

type Category =
  | "All"
  | "Birthday"
  | "Kids"
  | "Wedding"
  | "Baptism"
  | "Mousse"
  | "Desserts";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
};

const categories: Category[] = [
  "All",
  "Birthday",
  "Kids",
  "Wedding",
  "Baptism",
  "Mousse",
  "Desserts",
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Elegant Birthday Cake",
    category: "Birthday",
    image: "/assets/gallery/birthday-01.jpeg",
  },
  {
    id: 2,
    title: "Floral Birthday Cake",
    category: "Birthday",
    image: "/assets/gallery/birthday-02.jpeg",
  },
  {
    id: 3,
    title: "Kids’ Celebration Cake",
    category: "Kids",
    image: "/assets/gallery/kids-01.jpeg",
  },
  {
    id: 4,
    title: "Wedding Cake",
    category: "Wedding",
    image: "/assets/gallery/wedding-01.jpeg",
  },
  {
    id: 5,
    title: "Baptism Cake",
    category: "Baptism",
    image: "/assets/gallery/baptism-01.jpeg",
  },
  {
    id: 6,
    title: "Mousse Cake",
    category: "Mousse",
    image: "/assets/gallery/mousse-01.jpeg",
  },
  {
    id: 7,
    title: "Dessert Collection",
    category: "Desserts",
    image: "/assets/gallery/desserts-01.jpeg",
  },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="gallery-page">
      <div className="container">
        <div className="gallery-filter" aria-label="Gallery categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter__button is-active"
                  : "gallery-filter__button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visibleItems.map((item) => (
            <article className="gallery-card" key={item.id}>
              <div className="gallery-card__image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                />
              </div>

              <div className="gallery-card__content">
                <h2>{item.title}</h2>
                <p>{item.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
