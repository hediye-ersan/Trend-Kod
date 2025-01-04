import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCategories } from '../actions/categoriesActions';
import { useEffect } from 'react';

export default function FashionCategories() {
  const dispatch = useDispatch();
  const categoriesState = useSelector(state => state.categories || { categories: [], loading: false, error: null });
  const { categories, loading, error } = categoriesState;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const topCategories = categories.slice(0, 5);

  const handleCategoryClick = (category) => {
    history.push(`/shop/${category.gender.toLowerCase()}/${category.title.toLowerCase()}/${category.id}`);
  };

  return (
    <div className="container mx-auto px-4 pb-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-screen-lg mx-auto">
        {topCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="relative block overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-300 transform hover:scale-105"
          >
            <div 
              className="w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="relative flex flex-col items-center justify-center text-white px-6 py-4">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-center transition-all duration-300 group-hover:text-yellow-400">
                  {category.title}
                </h3>
                <p className="text-lg sm:text-xl font-light text-center transition-all duration-300 group-hover:text-white">
                  {category.rating} ⭐️
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-bold text-blue-500">👁️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  