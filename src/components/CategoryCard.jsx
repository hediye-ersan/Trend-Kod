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
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-screen-lg mx-auto">
        {topCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="block overflow-hidden aspect-[4/3] group cursor-pointer"
          >
            <div 
              className="w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${category.img})` }}
            >
              <div className="flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                <p className="text-xl">{category.rating} Items</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}