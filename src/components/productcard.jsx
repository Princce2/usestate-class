import { useState } from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
};
export default ProductCard;