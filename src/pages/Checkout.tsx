// import React from 'react'
import ProductCard from "../components/ProductCard";
import PRODUCT from "../productinfo";

function Checkout() {
  return (
    <div className="flex container mt-8">
      <ProductCard {...PRODUCT} />
    </div>
  );
}

export default Checkout;
