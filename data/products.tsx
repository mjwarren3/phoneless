import { Product } from '../interfaces/Product';

export const products: Product[] = [
    // CAMERAS
    {
        name: "Papershoot Camera",
        category: "camera",
        price: "$139",
        image_url: "https://papershootcamera.com/cdn/shop/files/23-NOV_Paper-Shoot-Camera-Old-Classic-Black-Front_12ff38f0-95e5-49b6-ba9a-f93af6e708a1_720x.jpg?v=1699682588",
        link: "https://papershootcamera.com/collections/camera-bundles/products/18mp-paper-camera",
        link_text: "Buy on Papershoot",
        description: 'Beautiful paper-thin camera built by a company whose mission is "Point & Shoot, Less is More"',
        tags: ["Eco", "Small Business", "Female CEO"]
    },
    {
        name: "FUJI Instax Mini Evo",
        category: "camera",
        price: "$199",
        image_url: "https://www.adorama.com/images/XLarge/FJIMNEVOBR.jpg",
        link: "https://www.adorama.com/fjimnevob.html?nrtv_cid=91655f7defdab7736278b20aecec1de43e6b54cc90b332ce54b0bceee331cffd&utm_source=Howl&nrtv_as_src=1",
        link_text: "Buy on Adorama",
        description: 'Instantly print credit card sized photos with this sleek instant camera that includes a screen display',
        tags: []
    },
    // NOTES
    {
        name: "Shinola Hard Linen Journal",
        category: "notes",
        price: "$30",
        image_url: "https://shinola-m2.imgix.net/images/Products/10010921-sdt-012693920/Journal_HardLinen_7x9_Gray_MAIN_01.png?h=1200&w=1200&bg=f7f7f7&q=100&auto=format,compress&fit=fillmax",
        link: "https://www.shinola.com/home/journals/large-hard-linen-lined-paper.html#sku=10010921-sdt-010046123",
        link_text: "Buy on Shinola",
        description: "American-made journals with all US-sourced components and acid-free paper from sustainable managed American forests",
        tags: ["Made in the USA", "Small Business"]
    },
    {
        name: "agood company Stone Paper Notebook",
        category: "notes",
        price: "$30",
        image_url: "https://www.agood.com/cdn/shop/files/agood-hardcover-notebook-snow-white-01_a7ad08cc-6f9f-4339-ba46-15d2a3df4aff.webp?v=1704698747&width=990",
        link: "https://www.agood.com/products/stone-paper-notebook-a5-hardcover-snow-white",
        link_text: "Buy on Papershoot",
        description: "Climate-positive notebook made from stone - no deforestation, no wasted water, no harmful chemicals. Just smooth, waterproof pages",
        tags: ["Eco", "Small Business"]
    },
    {
        name: "Midori MD Notebook",
        category: "notes",
        price: "$14",
        image_url: "https://shopnoteworthy.com/cdn/shop/products/15269006_900x.jpg?v=1666134694",
        link: "https://shopnoteworthy.com/products/midori-md-notebook-journal-a5-grid-block?_pos=3&_sid=ab89bf2a7&_ss=r",
        link_text: "Buy on Noteworthy",
        description: "Beautiful, minimalistic notebook designed for comfort and made in Japan",
        tags: []
    },
    {
        name: "The Light Phone II",
        category: "phone",
        price: "$299",
        image_url: "https://cdn.shopify.com/s/files/1/0746/7391/4132/files/Night2_1600x.png?v=1684185150",
        link: "https://www.thelightphone.com/",
        link_text: "Buy on The Light Phone",
        description: '"Go light" with this e-ink minimal phone built to be used as little as possible. It includes basic apps like an alarm, calculator, directions, music, notes, a calendar, and a podcasts tool.',
        tags: ["Small Business"]
    },
    {
        name: "The Wise Phone II",
        category: "phone",
        price: "$349",
        image_url: "https://techless.com/cdn/shop/files/WisephoneIIa-Silver_angle1_Music_f05bb672-d5b9-46ff-bf9d-ea3ca03b48d0.jpg?v=1684420461&width=1500",
        link: "https://techless.com/products/wisephone-ii",
        link_text: "Buy on Techless",
        description: 'The Wisephone is designed for you to be present, engage with your community, and get life hours back. Oh and it comes with triple cameras including a 64MP primary for high-quality photos.',
        tags: ["Small Business"]
    },
    // MUSIC
    {
        name: "Crosley Cruiser Plus Turntable",
        category: "music",
        price: "$70",
        image_url: "https://www.crosleyradio.com/cdn/shop/files/CR8005F-TU_hero_2400x.jpg?v=1688746267",
        link: "https://www.crosleyradio.com/products/cruiser-plus-turntable",
        link_text: "Buy on Crosley",
        description: "Portable suitcase turntable with built-in Bluetooth and stereo speakers. Take your vinyl collection anywhere without needing a phone.",
        tags: ["Small Business"]
    },
    {
        name: "Audio-Technica AT-LP60X",
        category: "music",
        price: "$149",
        image_url: "https://www.audio-technica.com/media/catalog/product/a/t/at-lp60x-bk_01.png",
        link: "https://www.audio-technica.com/en-us/at-lp60x",
        link_text: "Buy on Audio-Technica",
        description: "Fully automatic belt-drive turntable with a built-in phono preamp. The gold standard entry-level turntable for rediscovering music on vinyl.",
        tags: []
    },
    {
        name: "Gecko Kalimba 17-Key",
        category: "music",
        price: "$36",
        image_url: "https://m.media-amazon.com/images/I/71VAb0sRJBL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/GECKO-Kalimba-Thumbnail-Instruction-Tune-Hammer/dp/B07KLC2BMQ",
        link_text: "Buy on Amazon",
        description: "Beautiful mahogany thumb piano that produces soothing, melodic tones. A meditative, screen-free way to make music anywhere.",
        tags: ["Small Business"]
    },
    // MAPS
    {
        name: "Rand McNally 2025 Road Atlas",
        category: "maps",
        price: "$15",
        image_url: "https://m.media-amazon.com/images/I/81CqGMOgQYL._SL1500_.jpg",
        link: "https://www.amazon.com/Rand-McNally-2025-Road-Atlas/dp/0528027433",
        link_text: "Buy on Amazon",
        description: "The classic American road atlas with detailed maps of every state and major city. Navigate your next road trip without GPS or cell service.",
        tags: ["Made in the USA"]
    },
    {
        name: "Suunto MC-2 Mirror Compass",
        category: "maps",
        price: "$50",
        image_url: "https://www.suunto.com/globalassets/productimages/ss004252010_suunto_mc-2_nh_mirror_compass.png",
        link: "https://www.suunto.com/en-us/Products/Compasses/Suunto-MC-2/Suunto-MC-2-NH-Mirror-Compass/",
        link_text: "Buy on Suunto",
        description: "Professional-grade sighting compass with a mirror, clinometer, and luminescent bezel. Navigate the backcountry with precision, no batteries required.",
        tags: []
    },
    // ALARM
    {
        name: "Loftie Alarm Clock",
        category: "alarm",
        price: "$149",
        image_url: "https://byloftie.com/cdn/shop/files/Loftie_PDP_White_Hero_v2_1800x.jpg?v=1689097459",
        link: "https://byloftie.com/products/loftie-clock",
        link_text: "Buy on Loftie",
        description: "Designed specifically to replace the phone on your nightstand. Features two-phase alarm, white noise, breathwork exercises, and a nightlight.",
        tags: ["Small Business"]
    },
    {
        name: "Braun Classic Analogue Alarm Clock",
        category: "alarm",
        price: "$35",
        image_url: "https://m.media-amazon.com/images/I/61Y4zHFJiRL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/Braun-Classic-Analogue-Alarm-Clock/dp/B00GPMBLGY",
        link_text: "Buy on Amazon",
        description: "Iconic Braun design with a crescendo alarm, snooze button, and luminous hands. Quiet quartz movement won't disturb your sleep.",
        tags: []
    },
    // BOOKS
    {
        name: "Book of the Month",
        category: "books",
        price: "$17/mo",
        image_url: "https://images.ctfassets.net/c9whya09gvq0/3cxRfUMlOzlSHqIfDFhBab/b0ee8568f9f10b0ea7cc66b51d7e3e78/HP_Hero_Desktop.jpg",
        link: "https://www.bookofthemonth.com/",
        link_text: "Buy on Book of the Month",
        description: "Curated monthly book subscription where you choose from five expert-picked titles. Real books delivered to your door, no screen required.",
        tags: ["Female CEO", "Small Business"]
    },
    {
        name: "Leuchtturm1917 Reading Journal",
        category: "books",
        price: "$28",
        image_url: "https://cdn.shopify.com/s/files/1/0516/1514/5790/files/reading-journal-azure-front.jpg?v=1686743159",
        link: "https://www.leuchtturm1917.us/reading-journal.html",
        link_text: "Buy on Leuchtturm1917",
        description: "Track up to 52 books with guided prompts, personal ratings, and a reading timeline. A beautiful analog companion for avid readers.",
        tags: ["Small Business"]
    },
    // GAMES
    {
        name: "CATAN Board Game",
        category: "games",
        price: "$35",
        image_url: "https://m.media-amazon.com/images/I/81+NjMyjvzL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/Catan-Studio-cantan2017/dp/B00U26V4VQ",
        link_text: "Buy on Amazon",
        description: "The iconic strategy board game where you trade, build, and settle the island of Catan. Perfect for game nights without any screens.",
        tags: []
    },
    {
        name: "Bicycle Standard Playing Cards",
        category: "games",
        price: "$5",
        image_url: "https://m.media-amazon.com/images/I/81dF4AkLenL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/Bicycle-Standard-Playing-Cards-Pack/dp/B005EC3F7I",
        link_text: "Buy on Amazon",
        description: "The timeless classic. Over 130 years of quality card-making for hundreds of games, from poker to solitaire to magic tricks.",
        tags: ["Made in the USA"]
    },
    // FITNESS
    {
        name: "Manduka PRO Yoga Mat",
        category: "fitness",
        price: "$120",
        image_url: "https://www.manduka.com/dw/image/v2/ABQR_PRD/on/demandware.static/-/Sites-manduka-catalog/default/dwfb7c5e8a/images/large/111011-Black-1.jpg",
        link: "https://www.manduka.com/products/pro-yoga-mat-71-6mm",
        link_text: "Buy on Manduka",
        description: "Ultra-dense 6mm cushioning with a lifetime guarantee. Ditch the fitness apps and connect with your practice on the gold standard of yoga mats.",
        tags: ["Eco"]
    },
    {
        name: "Crossrope Get Lean Jump Rope Set",
        category: "fitness",
        price: "$99",
        image_url: "https://www.crossrope.com/cdn/shop/files/GetLeanSet-2.0-weighted-jump-rope-set_1800x.jpg?v=1683315547",
        link: "https://www.crossrope.com/products/get-lean-weighted-jump-rope-set",
        link_text: "Buy on Crossrope",
        description: "Weighted jump rope system with interchangeable ropes for a full-body workout. No app subscriptions needed, just pick up and jump.",
        tags: ["Small Business", "Made in the USA"]
    },
    // CALENDAR
    {
        name: "Ink+Volt Planner",
        category: "calendar",
        price: "$40",
        image_url: "https://inkandvolt.com/cdn/shop/files/2025-planner-evergreen-front_1800x.jpg?v=1694459789",
        link: "https://inkandvolt.com/products/ink-volt-planner",
        link_text: "Buy on Ink+Volt",
        description: "Goal-focused daily planner designed to help you prioritize what matters. Plan your days, weeks, and months without digital distractions.",
        tags: ["Female CEO", "Small Business"]
    },
    {
        name: "Stendig Wall Calendar",
        category: "calendar",
        price: "$48",
        image_url: "https://m.media-amazon.com/images/I/41OIgA3VG8L._AC_.jpg",
        link: "https://www.amazon.com/Stendig-Wall-Calendar-2025/dp/B0DCKKCPQF",
        link_text: "Buy on Amazon",
        description: "Iconic oversized black-and-white wall calendar featured in the MoMA permanent collection. A bold, beautiful way to track the year.",
        tags: []
    },
];