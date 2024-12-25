import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../actions/productsActions";
import FashionCategories from "../components/CategoryCard";
import IconList from "../components/IconCard";
import ProductCardList from "../components/ProductCardList";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header";
import { useParams } from 'react-router-dom';
import FilterInterface from '../layout/FilterInterface';
import Pagination from '../layout/Pagination';

function ShopPage() {
  const dispatch = useDispatch();
  const { products, loading, error, total } = useSelector(state => state.products);
  const { categoryId } = useParams();
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const query = new URLSearchParams();
    if (categoryId) query.append('category', categoryId);
    if (sort) query.append('sort', sort);
    if (filter) query.append('filter', filter);

    dispatch(fetchProducts(query.toString(), page, limit));
  }, [dispatch, categoryId, sort, filter, page, limit]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <FashionCategories />
      <FilterInterface setSort={setSort} setFilter={setFilter} />
      <ProductCardList products={products} />
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
      <IconList />
      <Footer />
    </>
  );
}

export default ShopPage;