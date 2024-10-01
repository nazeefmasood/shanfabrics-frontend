import product_1 from "./products/product_1.webp";
import product_2 from "./products/product_2.webp";
import product_3 from "./products/product_3.webp";
import product_4 from "./products/product_4.webp";
import product_5 from "./products/product_5.webp";
import product_6 from "./products/product_6.webp";
import product_7 from "./products/product_7.jpeg";
import product_8 from "./products/product_8.jpeg";
import product_9 from "./products/product_9.jpeg";
import product_10 from "./products/product_10.webp";

import men from "./categories/men.jpeg";
import women from "./categories/women.jpeg";
import footwear from "./categories/footwear.jpeg";
import bag from "./categories/bag.webp";

const getRandomColors = () => {
  const allColors = [
    "Red",

    "Black",
    "White",
    "Green",
    "Brown",
    "Gray",
    "Purple",
    "Pink",
  ];
  const selectedColors = [];
  const colorCount = Math.floor(Math.random() * 1) + 3; // Randomly choose 2 or 3 colors

  while (selectedColors.length < colorCount) {
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    if (!selectedColors.includes(randomColor)) {
      selectedColors.push(randomColor);
    }
  }

  return selectedColors;
};

export const products = [
  {
    title: "Stylish Summer Dress",
    category: "Dresses",
    color: "Red",
    image: product_1,
    colors: getRandomColors(),
    price: 900,
    description:
      "A breezy, lightweight dress perfect for warm summer days. Stylish and comfortable for any occasion.",
  },
  {
    title: "Men's Casual Sneakers",
    category: "Footwear",
    color: "Blue",
    image: product_3,
    colors: getRandomColors(),
    price: 2030,
    description:
      "Durable and versatile sneakers with a modern design. Ideal for everyday casual wear.",
  },
  {
    title: "Classic Leather Jacket",
    category: "Outerwear",
    color: "Black",
    image: product_4,
    colors: getRandomColors(),
    price: 2330,
    description:
      "Timeless leather jacket that adds an edge to any outfit. Made from premium leather for maximum durability.",
  },
  {
    title: "Elegant Evening Gown",
    category: "Dresses",
    color: "Black",
    image: product_5,
    colors: getRandomColors(),
    price: 3240,
    description:
      "Turn heads at any event with this elegant gown. The perfect combination of sophistication and style.",
  },
  {
    title: "Trendy Sunglasses",
    category: "Accessories",
    color: "Black",
    image: product_6,
    colors: getRandomColors(),
    price: 2050,
    description:
      "Stylish sunglasses with UV protection. A must-have accessory for sunny days.",
  },
  {
    title: "Casual White T-Shirt",
    category: "Tops",
    color: "White",
    image: product_2,
    colors: getRandomColors(),
    price: 2000,
    description:
      "A classic white tee that pairs with any outfit. Soft, breathable cotton for all-day comfort.",
  },
  {
    title: "Men's Chinos",
    category: "Pants",
    color: "Beige",
    image: product_7,
    colors: getRandomColors(),
    price: 1300,
    description:
      "Smart yet casual chinos perfect for both office and weekend wear. Tailored fit for added style.",
  },
  {
    title: "Summer Flip Flops",
    category: "Footwear",
    color: "Yellow",
    image: product_8,
    colors: getRandomColors(),
    price: 240,
    description:
      "Lightweight and comfortable flip flops designed for a relaxed summer day by the beach or pool.",
  },
  {
    title: "Leather Handbag",
    category: "Bags",
    color: "Brown",
    image: product_9,
    colors: getRandomColors(),
    price: 1200,
    description:
      "A chic leather handbag that complements any outfit. Spacious enough to carry all your essentials.",
  },
  {
    title: "Wool Knit Scarf",
    category: "Accessories",
    color: "Gray",
    image: product_10,
    colors: getRandomColors(),
    price: 1000,
    description:
      "Soft and cozy wool scarf to keep you warm during cold months. Available in a variety of colors.",
  },
];

export const categories = [
  {
    name: "Men's Clothing",
    image: men, // Replace with your actual image URL
  },
  {
    name: "Women's Clothing",
    image: women, // Replace with your actual image URL
  },
  {
    name: "Footwear",
    image: footwear, // Replace with your actual image URL
  },
  {
    name: "Bags",
    image: bag, // Replace with your actual image URL
  },
];
