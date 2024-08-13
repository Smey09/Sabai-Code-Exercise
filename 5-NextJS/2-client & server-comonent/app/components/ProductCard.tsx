import React from "react";

interface Product {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-200 w-96 rounded-lg shadow-lg overflow-hidden">
      <figure className="w-full h-48">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-4">
        <h2 className="text-xl font-semibold flex justify-between items-center">
          <span className="truncate">{item.title}</span>
          <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
        </h2>
        <p className="text-gray-700 truncate mt-2">{item.description}</p>
        <div className="flex flex-wrap justify-end mt-4 space-x-2">
          {item.tags.map((tag, index) => (
            <div
              className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
