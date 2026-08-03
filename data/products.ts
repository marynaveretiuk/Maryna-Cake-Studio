// Shop products. Each entry in `productsData` (below) is one product: price,
// optional salePrice, images, categories, description, and reviews.
export interface ProductReview {
  author: string;
  date: string;
  text: string;
  avatar?: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  price: number;
  salePrice?: number; // set when the product is on sale
  rating: number; // average rating, 0 when no reviews
  images: string[]; // gallery images (first = main)
  categories: string[];
  shortDescription: string;
  description: string;
  reviews: ProductReview[];
}

// Whether a product is on sale is derived from salePrice being present.
export function isOnSale(product: Product): boolean {
  return typeof product.salePrice === "number" && product.salePrice < product.price;
}

export const productsData = [
  {
    id: 1,
    slug: "armchair",
    title: "Armchair",
    price: 35,
    rating: 4,
    images: ["/assets/img/shop/armchair-1.jpg", "/assets/img/shop/armchair-2.jpg"],
    categories: ["Clothing", "Hoodies"],
    shortDescription:
      "A relaxed, deep-seated armchair upholstered in soft woven fabric — built for slow mornings and long reads.",
    description:
      "The Armchair pairs a solid hardwood frame with generously padded cushions for support that lasts all evening. Its timeless silhouette settles into any corner, from a quiet reading nook to a busy living room, and the hard-wearing upholstery keeps its look for years.",
    reviews: [
      {
        author: "Magnus",
        date: "June 7, 2025",
        text: "I like the logo but not the color.",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "Three letters, one word: WOO!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 2,
    slug: "audio",
    title: "Audio",
    price: 9,
    rating: 5,
    images: ["/assets/img/shop/audio-1.jpg", "/assets/img/shop/audio-2.jpg"],
    categories: ["Albums", "Music"],
    shortDescription:
      "A genre-spanning album of warm, layered tracks made for headphones and late-night drives.",
    description:
      "Audio is a full-length record that moves from mellow grooves to soaring choruses without missing a beat. Mastered for crisp highs and deep, rounded lows, it rewards every repeat listen and sounds just as good on vinyl as it does streaming.",
    reviews: [
      {
        author: "James Koster",
        date: "June 7, 2025",
        text: "The most influential album of the last 25 years? This just might be it.",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Coen Jacobs",
        date: "June 7, 2025",
        text: "Some rad tunes on this album!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 3,
    slug: "black-armchair",
    title: "Black Armchair",
    price: 35,
    rating: 4,
    images: ["/assets/img/shop/black-armchair-1.jpg", "/assets/img/shop/black-armchair-2.jpg"],
    categories: ["Clothing", "Hoodies"],
    shortDescription:
      "The Armchair in a bold matte-black finish — a sculptural statement piece for modern spaces.",
    description:
      "Same deep comfort, darker mood: the Black Armchair wraps its padded frame in a rich charcoal upholstery that anchors a room. The low, clean lines work equally well beside a fireplace or under a reading lamp, and it’s the seat everyone quietly competes for.",
    reviews: [
      {
        author: "student",
        date: "June 7, 2025",
        text: "Perfect Hoodie for a Ninja!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Coen Jacobs",
        date: "June 7, 2025",
        text: "I have lots of hoodies, but none is as cool as this one!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Dan",
        date: "June 7, 2025",
        text: "I love hoodies, and ninjas, so what could be better than a ninja hoodie? Not much, if you ask me!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Ryan",
        date: "June 7, 2025",
        text: "This is the most bombastic hoodie in this shop, it’s soft and has the sly WooThemes ninja on it. Why wouldn’t you buy this?",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "This only gets 1 star because I don’t have this yet. I want it now!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 4,
    slug: "bottle",
    title: "Bottle",
    price: 3,
    salePrice: 2,
    rating: 4.5,
    images: [
      "/assets/img/shop/bottle-1.jpg",
      "/assets/img/shop/bottle-2.jpg",
      "/assets/img/shop/bottle-3.jpg",
    ],
    categories: ["Music", "Singles"],
    shortDescription:
      "A hand-finished decorative bottle with a smooth, tactile glaze.",
    description:
      "The Bottle works as a slim bud vase or a standalone accent, its tapered neck catching the light from every angle. The subtle glaze gives each piece a soft sheen, and a few grouped together make for an easy, gallery-style display.",
    reviews: [
      {
        author: "Cobus Bester",
        date: "June 7, 2025",
        text: "This album proves why The Woo are the best band ever. Best music ever!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 5,
    slug: "clock",
    title: "Clock",
    price: 9,
    rating: 3,
    images: ["/assets/img/shop/clock-1.jpg", "/assets/img/shop/clock-2.jpg"],
    categories: ["Albums", "Music"],
    shortDescription:
      "A clean-faced wall clock with bold markers and quiet, sweeping hands.",
    description:
      "The Clock keeps things simple — an unfussy dial, high-contrast numerals, and a silent movement that won’t tick through the night. It reads clearly across the whole room and slots neatly into a kitchen, office, or hallway.",
    reviews: [
      {
        author: "Coen Jacobs",
        date: "June 7, 2025",
        text: "This album gets a bit boring after you’ve listened to it more than once. Worth that first listen though.",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 6,
    slug: "coffee-pot",
    title: "Coffee Pot",
    price: 15,
    rating: 3,
    images: ["/assets/img/shop/coffee-pot-1.jpg", "/assets/img/shop/coffee-pot-2.jpg"],
    categories: ["Posters"],
    shortDescription:
      "A stovetop-style coffee pot that brews a strong, aromatic cup.",
    description:
      "The Coffee Pot combines a heat-even body with a drip-free spout for a smooth, controlled pour every time. The comfortable handle stays cool to the touch, and its retro shape looks just as good on the shelf as it does on the hob.",
    reviews: [
      {
        author: "mountainthemes",
        date: "March 15, 2025",
        text: "Good!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 7,
    slug: "iron-animals",
    title: "Iron Animals",
    price: 15,
    salePrice: 12,
    rating: 2,
    images: ["/assets/img/shop/iron-animals-1.jpg", "/assets/img/shop/iron-animals-2.jpg"],
    categories: ["Posters"],
    shortDescription:
      "A characterful art print of cast-iron creatures, ready to frame.",
    description:
      "Iron Animals is a high-resolution poster printed on heavyweight matte stock for rich, lasting color. The detailed line work makes a playful focal point for a hallway, studio, or kids’ room, and the standard size fits off-the-shelf frames.",
    reviews: [
      {
        author: "Dan",
        date: "June 7, 2025",
        text: "I thought I was buying a man holding a poster, but when it arrived it was just the poster. Cool poster though, so I’ll give it 3 stars!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "I didn’t expect this poster to arrive folded. Now there are lines on the poster and one sad Ninja.",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 8,
    slug: "lamp",
    title: "Lamp",
    price: 15,
    rating: 4,
    images: ["/assets/img/shop/lamp-1.jpg", "/assets/img/shop/lamp-2.jpg"],
    categories: ["Posters"],
    shortDescription:
      "A warm-toned art print of a classic table lamp.",
    description:
      "The Lamp print brings a soft, nostalgic glow to any wall, rendered in fine detail on archival paper that resists fading. Hang it on its own or pair it with the rest of the series for a cozy, considered gallery wall.",
    reviews: [
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "He really is the cutest little man. Swoooon!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 9,
    slug: "light",
    title: "Light",
    price: 35,
    rating: 3,
    images: ["/assets/img/shop/light-1.jpg", "/assets/img/shop/light-2.jpg"],
    categories: ["Clothing", "Hoodies"],
    shortDescription:
      "A lightweight everyday hoodie in a heathered grey marl.",
    description:
      "Light is a brushed-fleece hoodie cut for an easy, relaxed fit that layers well in any season. It’s soft on the inside, hard-wearing on the outside, with ribbed cuffs and a roomy front pocket that make it the one you reach for daily.",
    reviews: [
      {
        author: "Andrew",
        date: "June 7, 2025",
        text: "I bought this thinking it was a nice green colour, apparently it GREY! I’m colour blind so I don’t care but my girlfriend says grey makes me look fat",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "I love grey hoodies! This is perfect with my grey Ninja shirt, when I get cold I throw this on and I can still be a Ninja.",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 10,
    slug: "oak-tray",
    title: "Oak Tray",
    price: 35,
    rating: 4.5,
    images: ["/assets/img/shop/oak-tray-1.jpg", "/assets/img/shop/oak-tray-2.jpg"],
    categories: ["Clothing", "Hoodies"],
    shortDescription:
      "A solid oak serving tray with smooth, rounded handles.",
    description:
      "The Oak Tray is shaped from close-grained oak and finished with food-safe oil that deepens the natural figure of the wood. Sturdy enough for breakfast in bed and handsome enough to leave out on the counter between uses.",
    reviews: [
      {
        author: "Cobus Bester",
        date: "June 7, 2025",
        text: "This hoodie is great for those chilly winter days. I love the WooNinja!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "Perfect for the lady Ninja in your life!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 11,
    slug: "pillow",
    title: "Pillow",
    price: 35,
    rating: 4.67,
    images: ["/assets/img/shop/pillow-1.jpg", "/assets/img/shop/pillow-2.jpg"],
    categories: ["Clothing", "Hoodies"],
    shortDescription:
      "A plush throw pillow with a soft-touch, removable cover.",
    description:
      "The Pillow adds instant comfort to a sofa, bed, or armchair, with a generous fill that holds its shape through daily use. The zip-off cover is machine-washable, so it’s as practical as it is cozy.",
    reviews: [
      {
        author: "James Koster",
        date: "June 7, 2025",
        text: "Perfect when you’re sat at your computer, waiting for the next batch of Woo Goodies to be released. The Patient Ninja is Patient.",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Cobus Bester",
        date: "June 7, 2025",
        text: "The most comfortable hoodie I have ever owned!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Magnus",
        date: "June 7, 2025",
        text: "This is my favorite hoodie! If only it came in red as well!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 12,
    slug: "polygon",
    title: "Polygon",
    price: 15,
    rating: 4,
    images: ["/assets/img/shop/polygon-1.jpg", "/assets/img/shop/polygon-2.jpg"],
    categories: ["Posters"],
    shortDescription:
      "A bold geometric poster built from crisp, low-poly shapes.",
    description:
      "Polygon is a modern art print where angular facets fold into a striking abstract form. Printed on premium matte stock with sharp edges and saturated color, it adds graphic energy to a workspace or living room.",
    reviews: [
      {
        author: "mountainthemes",
        date: "March 15, 2025",
        text: "Wow!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 13,
    slug: "sofa",
    title: "Sofa",
    price: 15,
    salePrice: 12,
    rating: 4,
    images: ["/assets/img/shop/sofa-1.jpg", "/assets/img/shop/sofa-2.jpg"],
    categories: ["Posters"],
    shortDescription:
      "A stylish illustrated print of a mid-century sofa.",
    description:
      "The Sofa poster celebrates clean retro lines in a warm, muted palette. It’s a quality giclée print on thick archival paper that frames beautifully and brings a designer touch to living rooms and studios alike.",
    reviews: [
      {
        author: "Cobus Bester",
        date: "June 7, 2025",
        text: "Really happy with this print. The colors are great, and the paper quality is good too.",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Andrew",
        date: "June 7, 2025",
        text: "You only get the picture, not the person holding it, something they don’t mention in the description, now I’ve got to find my own person",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Coen Jacobs",
        date: "June 7, 2025",
        text: "This is my favorite poster. In fact, I’ve ordered 5 of them!",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Stuart",
        date: "June 7, 2025",
        text: "This is a fantastic quality print and is happily hanging framed on my wall now.",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 14,
    slug: "transform",
    title: "Transform",
    price: 30,
    rating: 4,
    images: ["/assets/img/shop/transform-1.jpg", "/assets/img/shop/transform-2.jpg"],
    categories: ["Clothing", "Hoodies"],
    shortDescription:
      "A statement hoodie with a bold front graphic and a brushed interior.",
    description:
      "Transform pairs a heavyweight cotton blend with a soft-brushed lining for warmth that never feels bulky. The eye-catching print is screen-pressed to hold its color wash after wash, and the relaxed cut layers over just about anything.",
    reviews: [
      {
        author: "Stuart",
        date: "June 7, 2025",
        text: "Another great quality product that anyone who see’s me wearing has asked where to purchase one of their own.",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Ryan",
        date: "June 7, 2025",
        text: "This hoodie gets me lots of looks while out in public, I got the blue one and it’s awesome. Not sure if people are looking at my hoodie only, or also at my rocking bod.",
        avatar: "/assets/img/shop/author.png",
      },
      {
        author: "Maria",
        date: "June 7, 2025",
        text: "Ship it!",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
  {
    id: 15,
    slug: "vases",
    title: "Vases",
    price: 3,
    rating: 4,
    images: [
      "/assets/img/shop/vases-1.jpg",
      "/assets/img/shop/vases-2.jpg",
      "/assets/img/shop/vases-3.jpg",
    ],
    categories: ["Music", "Singles"],
    shortDescription:
      "A set of slender ceramic vases in complementary tones.",
    description:
      "The Vases arrive as a trio of varying heights, ideal for single stems or dried arrangements. Their matte glaze and simple, modern forms let them stand together as a centerpiece or scatter across a shelf.",
    reviews: [
      {
        author: "mountainthemes",
        date: "March 15, 2025",
        text: "Clean",
        avatar: "/assets/img/shop/author.png",
      },
    ],
  },
] satisfies Product[];
