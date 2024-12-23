import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../actions/productsActions";
import FashionCategories from "../components/CategoryCard";
import IconList from "../components/IconCard";
import ProductCardList from "../components/ProductCardList";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header";


function ShopPage() {
    const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  

    return (
        <>
        <Navbar />
        <FashionCategories/>
        <ProductCardList products={products}/>
        <IconList/>
        <Footer/>
        </>
    );
}

export default ShopPage;