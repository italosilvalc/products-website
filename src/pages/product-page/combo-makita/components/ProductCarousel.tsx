import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Product = {
  id: number;
  imageUrl: string;
};

type ProductCarouselProps = {
  products: Product[];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  }

  return (
    <div className="sticky top-0">
      <div className="bg-base-200 p-4 rounded-lg ">
        <div className="relative w-full">
          <button className="absolute top-[50%] bg-black opacity-50 text-white px-4 py-6 rounded" onClick={prevSlide}>
            <AiOutlineArrowLeft />
          </button>
          <button className="absolute top-[50%] right-0 bg-black opacity-50 text-white px-4 py-6 rounded" onClick={nextSlide}>
            <AiOutlineArrowRight />
          </button>
          <img src={products[currentIndex].imageUrl} className="max-w-full rounded w-full" />
        </div>
        <div className="mt-4 flex gap-2 overflow-hidden overflow-x-scroll">
          {products.map((product, index) => (
            <img
              key={product.id}
              src={product.imageUrl}
              className={`w-20 h-20 md:w-28 md:h-28 rounded-lg ${index === currentIndex ? "border-2 border-blue-500" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
