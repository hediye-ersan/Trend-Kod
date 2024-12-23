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
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-screen-lg mx-auto">
        {topCategories.map((category, index) => (
          <Link
            key={index}
            to={`/shop/${category.gender.toLowerCase()}/${category.title.toLowerCase()}/${category.id}`} // Use Link to navigate
            className="block overflow-hidden aspect-[4/3] group"
          >
            <div 
              className="w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${category.img})` }}
            >
              <div className="flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                <p className="text-xl">{category.items} Items</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
