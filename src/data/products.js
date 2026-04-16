import product1 from"/images/product-1.jpg";
import product2 from"/images/product-2.jpg";
import product3 from"/images/product-3.jpg";
import product4 from"/images/product-4.jpg";
import product5 from"/images/product-5.jpg";
import product6 from"/images/product-6.jpg";
import product7 from"/images/product-7.jpg";
import product8 from"/images/product-8.jpg";

export const products = [
    {
        id: 1,
        name: "Urban Runner Sneakers",
        price: 189,
        originalPrice: 249,
        image: product1,
        category: "Footwear",
        description: "Crafted with premium materials for ultimate comfort and style. These sneakers feature a breathable mesh upper, cushioned insole, and durable rubber outsole. Perfect for everyday wear or light workouts.",
        rating: 4.8,
        reviews: 124,
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        colors: ["Silver", "Black", "White"],
    },
    {
        id: 2,
        name: "Bordeaux Leather Tote",
        price: 349,
        image: product2,
        category: "Bags",
        description: "Handcrafted from premium full-grain leather with a rich bordeaux finish. Features gold-toned hardware, spacious interior with organized pockets, and a detachable shoulder strap for versatile carrying options.",
        rating: 4.9,
        reviews: 87,
        colors: ["Bordeaux", "Black", "Tan"],
    },
    {
        id: 3,
        name: "Studio Pro Headphones",
        price: 279,
        originalPrice: 329,
        image: product3,
        category: "Electronics",
        description: "Premium wireless headphones with active noise cancellation, 40-hour battery life, and studio-quality sound. Memory foam ear cushions provide all-day comfort for music lovers and professionals alike.",
        rating: 4.7,
        reviews: 203,
        colors: ["Matte Black", "Silver", "Navy"],
    },
    {
        id: 4,
        name: "Rose Gold Chronograph",
        price: 599,
        image: product4,
        category: "Watches",
        description: "An exquisite timepiece featuring a Swiss-made movement, sapphire crystal glass, and a stunning rose gold case. The chronograph function adds both elegance and functionality to this luxury watch.",
        rating: 4.9,
        reviews: 56,
    },
    {
        id: 5,
        name: "Aviator Sunglasses",
        price: 159,
        image: product5,
        category: "Accessories",
        description: "Classic aviator design with polarized lenses offering 100% UV protection. Features a lightweight titanium frame with gold accents, perfect for those who appreciate timeless style.",
        rating: 4.6,
        reviews: 178,
        colors: ["Gold/Brown", "Silver/Gray", "Black"],
    },
    {
        id: 6,
        name: "Heritage Leather Wallet",
        price: 129,
        image: product6,
        category: "Accessories",
        description: "Crafted from vegetable-tanned leather that develops a beautiful patina over time. Features multiple card slots, a bill compartment, and RFID-blocking technology to keep your information secure.",
        rating: 4.8,
        reviews: 142,
        colors: ["Cognac", "Black", "Dark Brown"],
    },
    {
        id: 7,
        name: "Élégance Parfum",
        price: 219,
        image: product7,
        category: "Beauty",
        description: "A sophisticated fragrance in a handcrafted ceramic bottle with gold cap. Notes of bergamot, jasmine, and sandalwood create an unforgettable scent that lasts throughout the day.",
        rating: 4.7,
        reviews: 93,
    },
    {
        id: 8,
        name: "Italian Leather Belt",
        price: 149,
        originalPrice: 189,
        image: product8,
        category: "Accessories",
        description: "Premium Italian leather belt featuring a solid brass buckle with a rich gold finish. The full-grain leather ensures durability and develops character with every wear.",
        rating: 4.8,
        reviews: 167,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown"],
    },
];

