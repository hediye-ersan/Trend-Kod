import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../actions/userAction';
import { fetchCategories } from '../actions/categoriesActions'; // Kategorileri çekmek için action
import ShoppingCartDropdown from './ShoppingCardDropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false); // Shop menüsü durumu
    const [isCartOpen, setIsCartOpen] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const categories = useSelector((state) => state.categories.categories);
    const cartItems = useSelector(state => state.shopCard.cartItems);

    useEffect(() => {
        dispatch(fetchCategories()); // Navbar açıldığında kategorileri yükle
    }, [dispatch]);

    // Menüye tıklayınca geçişi sağlamak
    const handleNavigation = (path) => {
        setIsMenuOpen(false); // Menü kapat
        history.push(path); // Belirtilen sayfaya yönlendir
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/login'); // Kullanıcıyı login sayfasına yönlendiriyoruz
    };

    const womenCategories = categories.filter(category => category.gender === 'k');
    const menCategories = categories.filter(category => category.gender === 'e');

    console.log('Cart Items:', cartItems);

    return (
        <>
            <nav className="bg-transparent w-full px-4 md:px-8 flex items-center justify-between py-8 bg-custom-gradient mb-16">
                {/* Sol Taraf */}
                <div className="md:text-h3 text-h6 font-bold">Bandage</div>
                <div className="flex items-center justify-center ">
                    {user ? (
                        <p className="md:text-h3 sm:text-h6 font-bold  transition-all duration-300">
                            Welcome, <span className="font-extrabold text-blueText hover:text-primaryText ">{user.name}</span>! 🎉
                        </p>
                    ) : (
                        <p className="text-2xl font-bold  transition-all duration-300 ">
                            Please{" "}
                            <Link to={"/login"} className="font-extrabold text-blueText underline cursor-pointer hover:text-primaryText">
                                log in
                            </Link>{" "}
                            to continue. 🚀
                        </p>
                    )}
                </div>


                {/* Sağ Taraf */}
                <div className="flex items-center gap-4">

                    {/* Align Right Menüsü */}
                    <button
                        className="text-white hover:text-gray-400 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <img src="/icons/align-right.svg" alt="Menu" className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Menü */}
            {isMenuOpen && (
                <div className="bg-background w-full py-8 flex flex-col font-bold ">
                    <ul className='flex flex-col flex-wrap content-center gap-8 text-h3 text-center '>
                        <li>
                            <button
                                onClick={() => handleNavigation('/')}

                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
                                className="text-secondText hover:text-primaryText relative"
                            >
                                Shop
                            </button>
                            {isShopMenuOpen && (
                                <div className="w-full bg-white shadow-xl  flex gap px-12 text-secondText ">
                                    {/* Kadın Kategorileri */}
                                    <div className='p-4'>
                                        <h3 className="font-bold text-h">👗Kadın</h3>
                                        <ul className="list-none">
                                            {womenCategories.map(category => (
                                                <li key={category.id}>
                                                    <button
                                                        onClick={() => handleNavigation(`/shop?category=${category.id}`)}
                                                        className="hover:text-blue-500 text-h5 leading-loose"
                                                    >
                                                        {category.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Erkek Kategorileri */}
                                    <div className='p-4'>
                                        <h3 className="font-bold text-h3">👕Erkek</h3>
                                        <ul className="list-none">
                                            {menCategories.map(category => (
                                                <li key={category.id}>
                                                    <button
                                                        onClick={() => handleNavigation(`/shop?category=${category.id}`)}
                                                        className="hover:text-blue-500 text-h5 leading-loose"
                                                    >
                                                        {category.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/products')}
                                className="text-secondText hover:text-primaryText"
                            >
                                Product
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/orders')}
                                className="text-secondText hover:text-primaryText"
                            >
                                Orders
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/contact')}
                                className="text-secondText hover:text-primaryText"
                            >
                                Contact
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/teams')}
                                className="text-secondText hover:text-primaryText"
                            >
                                Teams
                            </button>
                        </li>
                    </ul>

                    {/* Kullanıcı İkonu ve Logout */}
                    <div className='text-h3 text-blueText flex justify-center py-4 hover:text-primaryText'>
                        <img src='/icons/user.svg' alt='Kullanıcı' className='fill-current text-blueText' />
                        {user ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <>
                                <button onClick={() => handleNavigation('/login')}>Login /</button>
                                <button onClick={() => handleNavigation('/signup')}>Register</button>
                            </>
                        )}
                    </div>

                    {/* Arama ve Sepet İkonları */}
                    <div className='flex flex-col justify-center items-center conta gap-4 py-4'>
                        <button
                            onClick={() => handleNavigation('/search')}
                        >
                            <img src='/icons/search.svg' alt='search' />
                        </button>
                        {/* Arama Menüsü (Kategoriler) */}

                        <button onClick={() => setIsCartOpen(!isCartOpen)}>
                            <img src='/icons/shopping-cart.svg' alt='shoppingcart' />
                            {cartItems.reduce((a, c) => a + c.quantity, 0) > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                            )}
                            {isCartOpen && <ShoppingCartDropdown />}
                        </button>
                        <button
                            onClick={() => handleNavigation('/like')}
                        >
                            <img src='/icons/heart.svg' alt='like' />
                        </button>
                    </div>

                </div>
            )}


        </>
    );
};

export default Navbar;
