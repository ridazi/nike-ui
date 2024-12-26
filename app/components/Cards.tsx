import React from 'react';
import Image from 'next/image';

// Sample product data
const products = [
  { id: 1, image: '/product1.png', name: 'Air Max plus ' },
  { id: 2, image: '/product2.png', name: 'Air Max plus' },
  { id: 3, image: '/product3.png', name: 'Air Max plus' },
  { id: 4, image: '/product3.png', name: 'Air Max plus' },
  { id: 5, image: '/product1.png', name: 'Air Max plus' },
];

const Cards = () => {
  return (
    <div className="mt-10 pt-32">
      <div className="flex overflow-x-auto gap-6 px-4 py-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] border border-gray-300 rounded-lg p-4 bg-white shadow-lg"
          >
            <Image
              src={product.image} // Ensure the image path is correct
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h4 className="text-center mt-2">{product.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
