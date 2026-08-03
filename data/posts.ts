// Blog posts. Each entry in `postsData` (bottom of file) is one article:
// title, excerpt, content, images, format, and comments. Add posts here.
export type PostFormat =
  | "standard"
  | "image"
  | "quote"
  | "link"
  | "gallery"
  | "slider"
  | "video"
  | "audio";

export type VideoType = "local" | "youtube" | "vimeo";

export interface SliderImage {
  image: string;
  caption?: string;
}

export interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  body: string;
  children?: Comment[]; // nested replies
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  publishedDate: string;
  author: string;
  postFormat: PostFormat;
  imageSrc: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  content: string;
  // Quote format
  quote?: string;
  quoteAuthor?: string;
  // Link format
  link?: string;
  // Gallery format
  galleryImages?: string[];
  // Slider format
  sliderImages?: SliderImage[];
  // Video format
  videoType?: VideoType;
  video?: string;
  videoId?: string;
  // Audio format
  audio?: string;
  audioCaption?: string;
  // Comments (with nested replies)
  comments?: Comment[];
}

export const postsData = [
  {
    id: 1,
    slug: "called-i-that-waters-dry-one",
    title: "Called i that waters dry one",
    publishedDate: "August 25, 2025",
    author: "Mountain-Themes",
    postFormat: "image",
    imageSrc: "/assets/img/blog/blog-1.jpg",
    categories: ["Development"],
    tags: ["Website", "Next.js"],
    excerpt:
      "Literature admiration frequently indulgence announcing are who you her. Was least quick after six. So it yourself repeated together cheerful. Neither it cordial so painful picture studied if. Sex him position doubtful resolved boy expenses. Her engrossed deficient northward and neglected favourite newspaper. But use peculiar …",
    content: `<p>Literature admiration frequently indulgence announcing are who you her. Was least quick after six. So it yourself repeated together cheerful. Neither it cordial so painful picture studied if. Sex him position doubtful resolved boy expenses. Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.</p>

<p>Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted.</p>

<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>`,
    comments: [
      {
        id: 74,
        author: "mountainthemes.dev",
        avatar: "/assets/img/blog/author.png",
        date: "February 20, 2025",
        body: "Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.",
        children: [
          {
            id: 75,
            author: "mountainthemes.dev",
            avatar: "/assets/img/blog/author.png",
            date: "February 20, 2025",
            body: "Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.",
          },
        ],
      },
      {
        id: 76,
        author: "Michael",
        avatar: "/assets/img/blog/author.png",
        date: "February 20, 2025",
        body: "Hello guys!",
      },
    ],
  },
  {
    id: 2,
    slug: "fruit-so-open",
    title: "Fruit so open",
    publishedDate: "August 24, 2025",
    author: "Mountain-Themes",
    postFormat: "image",
    imageSrc: "/assets/img/blog/blog-2.jpg",
    categories: ["Development", "Creative"],
    tags: ["Website", "GSAP"],
    excerpt:
      "Sea seasons she’d after stars first beast set Heaven wherein morning years. Them fowl bearing living their together yielding itself so she’d gathering that one. Over And moved our multiply living dominion dominion whales Subdue was. Rule void female moving itself their, shall. Moved doesn’t divided. Face, unto …",
    content: `<p>Sea seasons she’d after stars first beast set Heaven wherein morning years. Them fowl bearing living their together yielding itself so she’d gathering that one. Over And moved our multiply living dominion dominion whales Subdue was. Rule void female moving itself their, shall. Moved doesn’t divided.</p>

<p>Face, unto our gathered appear don’t whales land air kind made were signs void moved spirit without without fruit they’re third. First.</p>

<p>Creature. Won’t i whose gathering kind and seasons good lesser his fill days. Fourth every herb morning heaven void seas. Grass first god. Wherein after after second to third hath first dry.</p>`,
  },
  {
    id: 3,
    slug: "darkness-made-great",
    title: "Darkness made great",
    publishedDate: "August 23, 2025",
    author: "Mountain-Themes",
    postFormat: "image",
    imageSrc: "/assets/img/blog/blog-3.jpg",
    categories: ["Development", "Creative"],
    tags: ["Website", "Transitions"],
    excerpt:
      "Sea seasons she’d after stars first beast set Heaven wherein morning years. Them fowl bearing living their together yielding itself so she’d gathering that one. Over And moved our multiply living dominion dominion whales Subdue was. Rule void female moving itself their, shall. Moved doesn’t divided. At as in …",
    content: `<p>Sea seasons she’d after stars first beast set Heaven wherein morning years. Them fowl bearing living their together yielding itself so she’d gathering that one. Over And moved our multiply living dominion dominion whales Subdue was. Rule void female moving itself their, shall. Moved doesn’t divided.</p>

<p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his.</p>`,
  },
  {
    id: 4,
    slug: "together-had-said-given-day-spirit",
    title: "Together had said given day spirit",
    publishedDate: "August 22, 2025",
    author: "Mountain-Themes",
    postFormat: "image",
    imageSrc: "/assets/img/blog/blog-4.jpg",
    categories: ["Development"],
    tags: ["Next.js"],
    excerpt:
      "Do to be agreeable conveying oh assurance. Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do. Years use place decay sex worth drift age. Men lasting out end …",
    content: `<p>Do to be agreeable conveying oh assurance. Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do. Years use place decay sex worth drift age. Men lasting out end article express fortune demands own charmed. About are are money ask how seven.</p>

<p>Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners.</p>

<p>Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye.</p>`,
  },
  {
    id: 5,
    slug: "spirit-subdue-two-dont",
    title: "Spirit subdue two don’t",
    publishedDate: "August 21, 2025",
    author: "Mountain-Themes",
    postFormat: "image",
    imageSrc: "/assets/img/blog/blog-5.jpg",
    categories: ["Development"],
    tags: ["React"],
    excerpt:
      "Bring thing his green said brought creepeth after. Divided given two seas. Saw thing the great moved. Winged rule the you in forth good blessed be female In. Made grass. Greater. Can’t darkness heaven our. Evening. Divide subdue life moved …",
    content: `<p>Bring thing his green said brought creepeth after. Divided given two seas. Saw thing the great moved. Winged rule the you in forth good blessed be female In. Made grass. Greater. Can’t darkness heaven our. Evening. Divide subdue life moved.</p>

<p>Sixth image whose divided subdue one under in every. Saying third us rule meat also man whales a days blessed day fill. It, great second. Make divided thing together you’ll upon under. Given isn’t dominion. Form sixth won’t man man moveth beast stars them wherein day fly divided heaven won’t said appear hath together multiply air gathering. To doesn’t to.</p>

<p>Spirit life sixth, two void tree. They’re was Said moveth you’re there second set. Called spirit of made given land after multiply saw days likeness. Had yielding every dominion bring brought living is hath. Very his multiply third the, two. Their all all all said first man, place the doesn’t good Creepeth.</p>

<p>Midst good. Years whales yielding make light all his over for you’ll, days Were, sixth There together moveth you’re. Man. Itself beginning don’t meat earth void. Darkness fill given. Signs saw open. Appear itself were fowl bearing our divide so. Midst divided darkness first shall you’re to. And.</p>

<p>Have moveth over give light the seed under bring. Whose wherein. Two in all of had yielding, abundantly tree. Hath unto itself beginning gathered made seed you third the Called they’re. Creepeth. Above seasons may whose. Under give.</p>

<p>Brought every bring cattle saw upon first very morning. Cattle. Saying light all. Unto second beginning may without day very seas. Them saw moved gathering day moveth above fish be rule they’re, created dominion blessed said stars tree them subdue it saw may moving place earth beginning had i the gathering male days. All life above void have together moving had evening.</p>`,
  },
  {
    id: 6,
    slug: "post-format-standard",
    title: "[Post Format] Standard",
    publishedDate: "August 20, 2025",
    author: "Mountain-Themes",
    postFormat: "standard",
    imageSrc: "/assets/img/blog/blog-10.jpg",
    categories: ["Development", "Creative", "Post Format"],
    tags: ["Next.js", "Programming"],
    excerpt:
      "Sixth given night great dominion moveth creature don’t yielding Itself. Which divide divide days, she’d fly fowl shall multiply saying above he after made fruit brought, called forth seas first waters earth, first Lights greater whose stars from and man sea fish God fowl image creature. Gathered have. Given in second …",
    content: `<p>Sixth given night great dominion moveth creature don’t yielding Itself. Which divide divide days, she’d fly fowl shall multiply saying above he after made fruit brought, called forth seas first waters earth, first Lights greater whose stars from and man sea fish God fowl image creature. Gathered have. Given in second cattle kind, made replenish the image dominion grass you’re also, gathering also, fowl whales. Years have his seed upon she’d he spirit i she’d whales replenish forth which fourth gathering fifth all make years. Signs under be.</p>

<p>Set behold make seed. Void night firmament fruitful given. Second. In god after second. They’re of blessed set you his bring multiply very spirit fourth brought that male spirit whose. And which creeping very yielding brought let. Behold, likeness. Night heaven. Were itself gathering.</p>

<p>Called a can’t brought. Deep fruit meat gathering winged female heaven. Was one night itself. Made sixth meat fruit Were whales female it, form seas. Don’t grass seasons him whales shall called herb grass so it light earth beginning life.</p>

<p>Called called fish you’ll every waters every green of dry air made, there abundantly moved likeness it let appear forth. Dry is creepeth created shall great after wherein. Years cattle unto face he, female you’ll. Sea had female to seasons blessed place their unto them fruit that face she’d signs had was. Make greater made, fish wherein. Our air you’re moveth every make without appear said signs don’t fill under.</p>`,
  },
  {
    id: 7,
    slug: "post-format-quote",
    title: "[Post Format] Quote",
    publishedDate: "August 18, 2025",
    author: "Mountain-Themes",
    postFormat: "quote",
    imageSrc: "/assets/img/blog/blog-6.jpg",
    categories: ["Development", "Post Format"],
    tags: ["Website", "Programming"],
    quote: "Stay Hungry, Stay Foolish!",
    quoteAuthor: "Steve Jobs",
    excerpt:
      "There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he …",
    content: `<p>There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he air fill without all set his. The shall divide thing night you’ll isn’t. Void yielding. Stars itself was fruitful set above him heaven whose fruit There them Spirit. In void said itself behold, said, sea sea isn’t a upon gathered. Lesser together there without beast, brought. Be divide one open man set their.</p>

<p>Made creature you’ll were moveth seas waters waters said god Said kind let he, made had. Female firmament together doesn’t whales rule creeping, beginning tree is tree you he signs god years whose very winged said living which, be. Fruit. Fruit. Brought man saying green gathering grass it dominion fruitful. Moved Subdue without day so bring saying, cattle fowl creature isn’t. Earth creeping fly they’re you. It green itself itself sea, of Fish. Won’t.</p>

<p>Sixth divide and our gathering greater living. Is heaven was it open. Waters, can’t female light. Him grass deep fish fly gathering herb every. Days land and gathered firmament fish over over years darkness fly tree fifth waters dominion his brought thing seasons. Give creeping made that grass make midst beginning his one fourth saying bearing appear. After which male greater greater. In. Shall shall wherein day subdue. Waters upon and fruitful multiply herb so deep won’t had female night Fourth beginning green were. Very. Two their divided herb you’re grass to beast whose set rule they’re you life thing sea he lights every morning. Itself darkness grass signs creeping the creature created years so Two dominion greater fill.</p>`,
  },
  {
    id: 8,
    slug: "post-format-link",
    title: "[Post Format] Link",
    publishedDate: "August 17, 2025",
    author: "Mountain-Themes",
    postFormat: "link",
    imageSrc: "/assets/img/blog/blog-7.jpg",
    categories: ["Creative", "Post Format"],
    tags: ["Website", "Next.js", "Programming"],
    link: "https://themeforest.net/user/mountain-themes",
    excerpt:
      "Every had living morning firmament firmament fruitful. Night. All whales isn’t great and all good sixth. Is won’t subdue after moving also moving. Upon forth day midst saw the fruitful…",
    content: `<p>Every had living morning firmament firmament fruitful. Night. All whales isn’t great and all good sixth. Is won’t subdue after moving also moving. Upon forth day midst saw the fruitful. Herb i.</p>

<p>Doesn’t yielding fourth years. One sea seas. Yielding blessed let. Without gathering. Midst land light shall god they’re third waters isn’t earth Unto be so said hath good.</p>

<p>Were. A given lesser female. Shall grass own form behold fourth wherein grass made fowl. Bearing fly above morning Bring. A own own and meat after, above First moveth, itself fruit be. Yielding land made let their creepeth it Multiply.</p>`,
  },
  {
    id: 9,
    slug: "post-format-image",
    title: "[Post Format] Image",
    publishedDate: "August 16, 2025",
    author: "Mountain-Themes",
    postFormat: "image",
    imageSrc: "/assets/img/blog/blog-8.jpg",
    categories: ["Development", "Creative", "Post Format"],
    tags: ["Next.js", "Programming"],
    excerpt:
      "Sixth given night great dominion moveth creature don’t yielding Itself. Which divide divide days, she’d fly fowl shall multiply saying above he after made fruit brought, called forth seas first waters earth, first Lights greater whose stars from and man sea fish God fowl image creature. Gathered have…",
    content: `<p>Sixth given night great dominion moveth creature don’t yielding Itself. Which divide divide days, she’d fly fowl shall multiply saying above he after made fruit brought, called forth seas first waters earth, first Lights greater whose stars from and man sea fish God fowl image creature. Gathered have.</p>

<p>Given in second cattle kind, made replenish the image dominion grass you’re also, gathering also, fowl whales. Years have his seed upon she’d he spirit i she’d whales replenish forth which fourth gathering fifth all make years. Signs under be.</p>

<p>Set behold make seed. Void night firmament fruitful given. Second. In god after second. They’re of blessed set you his bring multiply very spirit fourth brought that male spirit whose. And which creeping very yielding brought let. Behold, likeness. Night heaven. Were itself gathering.</p>

<p>Called a can’t brought. Deep fruit meat gathering winged female heaven. Was one night itself. Made sixth meat fruit Were whales female it, form seas. Don’t grass seasons him whales shall called herb grass so it light earth beginning life.</p>

<p>Called called fish you’ll every waters every green of dry air made, there abundantly moved likeness it let appear forth. Dry is creepeth created shall great after wherein. Years cattle unto face he, female you’ll. Sea had female to seasons blessed place their unto them fruit that face she’d signs had was. Make greater made, fish wherein. Our air you’re moveth every make without appear said signs don’t fill under.</p>`,
  },
  {
    id: 10,
    slug: "post-format-slider",
    title: "[Post Format] Slider",
    publishedDate: "August 15, 2025",
    author: "Mountain-Themes",
    postFormat: "slider",
    imageSrc: "/assets/img/blog/blog-9.jpg",
    categories: ["Post Format"],
    tags: ["Programming"],
    sliderImages: [
      { image: "/assets/img/blog/blog-9.jpg", caption: "Glacier" },
      { image: "/assets/img/blog/blog-10.jpg", caption: "This is a Image Caption" },
      { image: "/assets/img/blog/blog-3.jpg" },
    ],
    excerpt:
      "Every had living morning firmament firmament fruitful. Night. All whales isn’t great and all good sixth. Is won’t subdue after moving also moving. Upon forth day midst saw the fruitful. Herb i…",
    content: `<p>Every had living morning firmament firmament fruitful. Night. All whales isn’t great and all good sixth. Is won’t subdue after moving also moving. Upon forth day midst saw the fruitful. Herb i.</p>

<p>Doesn’t yielding fourth years. One sea seas. Yielding blessed let. Without gathering. Midst land light shall god they’re third waters isn’t earth Unto be so said hath good.</p>

<p>Were. A given lesser female. Shall grass own form behold fourth wherein grass made fowl. Bearing fly above morning Bring. A own own and meat after, above First moveth, itself fruit be. Yielding land made let their creepeth it Multiply.</p>`,
  },
  {
    id: 11,
    slug: "post-format-gallery",
    title: "[Post Format] Gallery",
    publishedDate: "August 14, 2025",
    author: "Mountain-Themes",
    postFormat: "gallery",
    imageSrc: "/assets/img/blog/blog-15.jpg",
    categories: ["Post Format"],
    tags: ["Programming", "Next.js"],
    galleryImages: [
      "/assets/img/blog/blog-11.jpg",
      "/assets/img/blog/blog-12.jpg",
      "/assets/img/blog/blog-13.jpg",
    ],
    excerpt:
      "There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he …",
    content: `<p>There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he air fill without all set his. The shall divide thing night you’ll isn’t. Void yielding. Stars itself was fruitful set above him heaven whose fruit There them Spirit. In void said itself behold, said, sea sea isn’t a upon gathered. Lesser together there without beast, brought. Be divide one open man set their.</p>

<p>Made creature you’ll were moveth seas waters waters said god Said kind let he, made had. Female firmament together doesn’t whales rule creeping, beginning tree is tree you he signs god years whose very winged said living which, be. Fruit. Fruit. Brought man saying green gathering grass it dominion fruitful. Moved Subdue without day so bring saying, cattle fowl creature isn’t. Earth creeping fly they’re you. It green itself itself sea, of Fish. Won’t.</p>

<p>Sixth divide and our gathering greater living. Is heaven was it open. Waters, can’t female light. Him grass deep fish fly gathering herb every. Days land and gathered firmament fish over over years darkness fly tree fifth waters dominion his brought thing seasons. Give creeping made that grass make midst beginning his one fourth saying bearing appear. After which male greater greater. In. Shall shall wherein day subdue. Waters upon and fruitful multiply herb so deep won’t had female night Fourth beginning green were. Very. Two their divided herb you’re grass to beast whose set rule they’re you life thing sea he lights every morning. Itself darkness grass signs creeping the creature created years so Two dominion greater fill.</p>`,
  },
  {
    id: 12,
    slug: "post-format-video-local",
    title: "[Post Format] Video Local",
    publishedDate: "August 13, 2025",
    author: "Mountain-Themes",
    postFormat: "video",
    imageSrc: "/assets/img/blog/blog-16.jpg",
    categories: ["Creative", "Post Format"],
    tags: ["Website", "Next.js", "Programming"],
    videoType: "local",
    video: "/assets/video/big_buck_bunny.mp4",
    excerpt:
      "Every had living morning firmament firmament fruitful. Night. All whales isn’t great and all good sixth. Is won’t subdue after moving also moving. Upon forth day midst saw the fruitful. Herb i…",
    content: `<p>Every had living morning firmament firmament fruitful. Night. All whales isn’t great and all good sixth. Is won’t subdue after moving also moving. Upon forth day midst saw the fruitful. Herb i.</p>

<p>Doesn’t yielding fourth years. One sea seas. Yielding blessed let. Without gathering. Midst land light shall god they’re third waters isn’t earth Unto be so said hath good.</p>

<p>Were. A given lesser female. Shall grass own form behold fourth wherein grass made fowl. Bearing fly above morning Bring. A own own and meat after, above First moveth, itself fruit be. Yielding land made let their creepeth it Multiply.</p>`,
  },
  {
    id: 13,
    slug: "post-format-video-vimeo",
    title: "[Post Format] Video Vimeo",
    publishedDate: "August 12, 2025",
    author: "Mountain-Themes",
    postFormat: "video",
    imageSrc: "/assets/img/blog/blog-17.jpg",
    categories: ["Development", "Post Format"],
    tags: ["Website", "Programming"],
    videoType: "vimeo",
    videoId: "50522981",
    excerpt:
      "There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he …",
    content: `<p>There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he air fill without all set his. The shall divide thing night you’ll isn’t. Void yielding. Stars itself was fruitful set above him heaven whose fruit There them Spirit. In void said itself behold, said, sea sea isn’t a upon gathered. Lesser together there without beast, brought. Be divide one open man set their.</p>

<p>Made creature you’ll were moveth seas waters waters said god Said kind let he, made had. Female firmament together doesn’t whales rule creeping, beginning tree is tree you he signs god years whose very winged said living which, be. Fruit. Fruit. Brought man saying green gathering grass it dominion fruitful. Moved Subdue without day so bring saying, cattle fowl creature isn’t. Earth creeping fly they’re you. It green itself itself sea, of Fish. Won’t.</p>

<p>Sixth divide and our gathering greater living. Is heaven was it open. Waters, can’t female light. Him grass deep fish fly gathering herb every. Days land and gathered firmament fish over over years darkness fly tree fifth waters dominion his brought thing seasons. Give creeping made that grass make midst beginning his one fourth saying bearing appear. After which male greater greater. In. Shall shall wherein day subdue. Waters upon and fruitful multiply herb so deep won’t had female night Fourth beginning green were. Very. Two their divided herb you’re grass to beast whose set rule they’re you life thing sea he lights every morning. Itself darkness grass signs creeping the creature created years so Two dominion greater fill.</p>`,
  },
  {
    id: 14,
    slug: "post-format-video-youtube",
    title: "[Post Format] Video YouTube",
    publishedDate: "August 12, 2025",
    author: "Mountain-Themes",
    postFormat: "video",
    imageSrc: "/assets/img/blog/blog-18.jpg",
    categories: ["Post Format"],
    tags: ["Programming", "Next.js"],
    videoType: "youtube",
    videoId: "mRvqcvqB4EI",
    excerpt:
      "There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he …",
    content: `<p>There dry sea brought. Bring face moveth won’t divided day have were hath fowl beast signs evening to them and itself over him you’ll together hath. Blessed one divided two cattle living grass rule. Itself one, bearing subdue male, from behold there created there days. Divided was. Man image given moved bring open he air fill without all set his. The shall divide thing night you’ll isn’t. Void yielding. Stars itself was fruitful set above him heaven whose fruit There them Spirit. In void said itself behold, said, sea sea isn’t a upon gathered. Lesser together there without beast, brought. Be divide one open man set their.</p>

<p>Made creature you’ll were moveth seas waters waters said god Said kind let he, made had. Female firmament together doesn’t whales rule creeping, beginning tree is tree you he signs god years whose very winged said living which, be. Fruit. Fruit. Brought man saying green gathering grass it dominion fruitful. Moved Subdue without day so bring saying, cattle fowl creature isn’t. Earth creeping fly they’re you. It green itself itself sea, of Fish. Won’t.</p>

<p>Sixth divide and our gathering greater living. Is heaven was it open. Waters, can’t female light. Him grass deep fish fly gathering herb every. Days land and gathered firmament fish over over years darkness fly tree fifth waters dominion his brought thing seasons. Give creeping made that grass make midst beginning his one fourth saying bearing appear. After which male greater greater. In. Shall shall wherein day subdue. Waters upon and fruitful multiply herb so deep won’t had female night Fourth beginning green were. Very. Two their divided herb you’re grass to beast whose set rule they’re you life thing sea he lights every morning. Itself darkness grass signs creeping the creature created years so Two dominion greater fill.</p>`,
  },
  {
    id: 15,
    slug: "post-format-audio",
    title: "[Post Format] Audio Local",
    publishedDate: "August 11, 2025",
    author: "Mountain-Themes",
    postFormat: "audio",
    imageSrc: "/assets/img/blog/blog-14.jpg",
    categories: ["Post Format"],
    tags: ["Programming"],
    audio: "/assets/audio/louis.mp3",
    audioCaption: "St. Louis Blues (1921)",
    excerpt:
      "Sixth divide and our gathering greater living. Is heaven was it open. Waters, can’t female light. Him grass deep fish fly gathering herb every. Days land and gathered firmament fish over over years darkness fly tree fifth waters dominion his brought thing seasons. Give creeping made that grass make midst beginning his one …",
    content: `<p>Sixth divide and our gathering greater living. Is heaven was it open. Waters, can’t female light. Him grass deep fish fly gathering herb every. Days land and gathered firmament fish over over years darkness fly tree fifth waters dominion his brought thing seasons. Give creeping made that grass make midst beginning his one fourth saying bearing appear. After which male greater greater. In. Shall shall wherein day subdue. Waters upon and fruitful multiply herb so deep won’t had female night Fourth beginning green were. Very. Two their divided herb you’re grass to beast whose set rule they’re you life thing sea he lights every morning. Itself darkness grass signs creeping the creature created years so Two dominion greater fill.</p>`,
  },
] satisfies Post[];
