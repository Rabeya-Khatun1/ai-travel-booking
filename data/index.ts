export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl?: string;
  price: number;
  rating: number;
  reviews: number;
  tags?: string[];
  dateAdded: string; // ISO format string
}

export const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Kyoto Temple Retreat",
    location: "Kyoto, Japan",
    description: "Experience the magic of peaceful temples, bamboo forests, and beautiful garden sanctuaries.",
    price: 1299,
    rating: 4.9,
    reviews: 320,
    tags: ["culture", "peaceful", "nature"],
    dateAdded: "2026-03-01T10:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Santorini Cliff Villas",
    location: "Santorini, Greece",
    description: "Relax in stunning white villas with breathtaking ocean views and magnificent sunsets.",
    price: 1899,
    rating: 4.8,
    reviews: 412,
    tags: ["beach", "romantic", "luxury"],
    dateAdded: "2026-01-15T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Ubud Jungle Resort",
    location: "Bali, Indonesia",
    description: "Lush jungles meet luxury in this eco-friendly resort perfect for yoga and relaxation.",
    price: 850,
    rating: 4.7,
    reviews: 850,
    tags: ["nature", "wellness", "budget"],
    dateAdded: "2025-11-20T08:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Colosseum & Vatican Tour",
    location: "Rome, Italy",
    description: "Walk through ancient history and enjoy award-winning authentic pasta and wine.",
    price: 1450,
    rating: 4.9,
    reviews: 1250,
    tags: ["history", "food", "city"],
    dateAdded: "2026-02-10T09:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Manhattan City Lights",
    location: "New York City, USA",
    description: "Experience the city that never sleeps with broadway shows and skyline dining.",
    price: 1600,
    rating: 4.6,
    reviews: 5040,
    tags: ["city", "nightlife", "shopping"],
    dateAdded: "2025-12-05T14:45:00Z",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Swiss Alps Ski Chalet",
    location: "Zermatt, Switzerland",
    description: "Breathtaking snowy peaks combined with premium skiing experiences and cozy fires.",
    price: 2400,
    rating: 4.9,
    reviews: 180,
    tags: ["snow", "sports", "luxury"],
    dateAdded: "2026-04-01T08:15:00Z",
    imageUrl: "https://images.unsplash.com/photo-1531281896827-0cc6a550cc39?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "7",
    name: "Maldives Overwater Bungalow",
    location: "Male, Maldives",
    description: "Wake up directly above crystal clear waters and vibrant coral reefs.",
    price: 3200,
    rating: 5.0,
    reviews: 95,
    tags: ["beach", "luxury", "romantic"],
    dateAdded: "2026-03-25T11:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "Machu Picchu Trek",
    location: "Cusco, Peru",
    description: "A guided hike through the sacred valley ending at the magnificent Incan citadel.",
    price: 950,
    rating: 4.8,
    reviews: 620,
    tags: ["adventure", "history", "nature"],
    dateAdded: "2026-02-28T16:20:00Z",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "9",
    name: "Dubai Desert Safari",
    location: "Dubai, UAE",
    description: "Dune bashing, camel riding, and a luxury dinner camp under the desert stars.",
    price: 1100,
    rating: 4.5,
    reviews: 1400,
    tags: ["adventure", "city", "luxury"],
    dateAdded: "2025-10-10T10:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "10",
    name: "Phuket Island Hopping",
    location: "Phuket, Thailand",
    description: "Discover hidden coves, emerald waters, and vibrant nightlife.",
    price: 650,
    rating: 4.6,
    reviews: 2100,
    tags: ["beach", "party", "budget"],
    dateAdded: "2026-01-05T09:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ce0fa58d0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "11",
    name: "Northern Lights Igloo",
    location: "Tromso, Norway",
    description: "Sleep under the Aurora Borealis in a warm, glass-domed private igloo.",
    price: 1950,
    rating: 4.9,
    reviews: 110,
    tags: ["nature", "snow", "romantic"],
    dateAdded: "2026-03-10T20:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1531366936310-6cb1c832dcce?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "12",
    name: "Great Barrier Reef Dive",
    location: "Queensland, Australia",
    description: "Scuba dive alongside sea turtles and thousands of tropical fish species.",
    price: 2100,
    rating: 4.8,
    reviews: 340,
    tags: ["adventure", "nature", "beach"],
    dateAdded: "2025-09-15T08:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=800&auto=format&fit=crop"
  }
];

export const popularDestinations = mockDestinations.slice(0, 2);
