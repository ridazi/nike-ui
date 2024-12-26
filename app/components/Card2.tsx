import React from 'react';
import Image from 'next/image';

// Sample product data
const products = [
  { id: 1, image: '/Frame (7).png', name: '' },
  { id: 2, image: '/product22.png', name: '' },
  { id: 3, image: '/product33.png', name: '' },
  { id: 4, image: '/product22.png', name: '' },
  { id: 5, image: '/product33.png', name: '' },
];

const Card2 = () => {
  return (
    <div className="mt-5 pt-5">
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

export default Card2;