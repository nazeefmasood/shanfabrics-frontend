import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../images/dummy_products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(products[id]);
  }, [id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-[60vw]">
      
      
      </div>
      <div className="w-[40vw]"></div>
    </div>
  );
};

export default ProductDetails;
