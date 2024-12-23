'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import { Link } from 'react-router-dom';
export default function FashionCategories() {
  const dispatch = useDispatch();
  const categoriesState = useSelector(state => state.categories || { categories: [], loading: false, error: null });
  const { categories, loading, error } = categoriesState;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const topCategories = categories.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {topCategories.map((category, index) => (
          <Link
            key={index}
             to={`/shop/${category.gender}/${category.title.toLowerCase()}/${category.id}`}
            className="relative min-w-[330px] min-h-[300px] bg-contain bg-no-repeat bg-center cursor-pointer transition-all duration-300 hover:shadow-lg group mx-auto"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="text-lg font-semibold">{category.rating} Rating</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
