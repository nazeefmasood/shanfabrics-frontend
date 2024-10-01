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

const getRandomColors = () => {
  const allColors = [
    "Red",

    "Black",
    "White",
    "Green",
    "Brown",
    "Gray",
    "Purple",
    "Pink"
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
  },
  {
    title: "Men's Casual Sneakers",
    category: "Footwear",
    color: "Blue",
    image: product_3,
    colors: getRandomColors(),
    price: 2030,
  },
  {
    title: "Classic Leather Jacket",
    category: "Outerwear",
    color: "Black",
    image: product_4,
    colors: getRandomColors(),
    price: 2330,
  },
  {
    title: "Elegant Evening Gown",
    category: "Dresses",
    color: "Black",
    image: product_5,
    colors: getRandomColors(),
    price: 3240,
  },
  {
    title: "Trendy Sunglasses",
    category: "Accessories",
    color: "Black",
    image: product_6,
    colors: getRandomColors(),
    price: 2050,
  },
  {
    title: "Casual White T-Shirt",
    category: "Tops",
    color: "White",
    image: product_2,
    colors: getRandomColors(),
    price: 2000,
  },
  {
    title: "Men's Chinos",
    category: "Pants",
    color: "Beige",
    image: product_7,
    colors: getRandomColors(),
    price: 1300,
  },
  {
    title: "Summer Flip Flops",
    category: "Footwear",
    color: "Yellow",
    image: product_8,
    colors: getRandomColors(),
    price: 240,
  },
  {
    title: "Leather Handbag",
    category: "Bags",
    color: "Brown",
    image: product_9,
    colors: getRandomColors(),
    price: 1200,
  },
  {
    title: "Wool Knit Scarf",
    category: "Accessories",
    color: "Gray",
    image: product_10,
    colors: getRandomColors(),
    price: 1000,
  },
];
