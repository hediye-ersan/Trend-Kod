import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';


const ProductCardList = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <>

<div className="container mx-auto px-4 py-8 md:p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id} // Benzersiz key
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice || product.price}
            image={product.images[0]?.url}
            stock={product.stock}
            store_id={product.store_id}
            category_id={product.category_id}
            rating={product.rating}
            sell_count={product.sell_count}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default ProductCardList;
