import React from 'react';
import ProductCard from './ProductCard';

const ProductCardList = ({ products = [] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.name}
            subtitle={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice || product.price} // Assuming discountedPrice is optional
            image={product.images[0]?.url} // Assuming the first image is the main image
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
