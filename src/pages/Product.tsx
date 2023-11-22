import React from "react";
import { useNavigate } from "react-router-dom";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  images: Image[];
  price?: number;
};

const Product = ({ title, description, images, price }: Props) => {
  return (
    <div>
      <img className="col-span-3" src={images[0].src} alt={images[0].alt} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
