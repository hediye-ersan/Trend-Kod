import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../actions/userAction';
import { fetchCategories } from '../actions/categoriesActions'; // Kategorileri çekmek için action
import ShoppingCartDropdown from './ShoppingCardDropdown';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Menü durumu
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
            <nav className="bg-transparent px-8 flex items-center justify-between py-8">
                {/* Sol Taraf */}
                <div className="text-xl font-bold">Bandage</div>
                {user ? (
                    <p>Welcome, {user.name}!</p> // Kullanıcı adı header'da gösterilecek
                ) : (
                    <p>Please log in</p>
                )}

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
                <div className="bg-gray-50 w-full py-4 flex flex-col">
                    <ul className='flex flex-col flex-wrap content-center gap-8 text-3xl text-center'>
                        <li>
                            <button
                                onClick={() => handleNavigation('/')}
                                className="font-bold"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
                                className="text-secondText relative"
                            >
                                Shop
                            </button>
                            {isShopMenuOpen && (
                                <div className="absolute bg-white shadow-lg mt-2 p-4 flex gap-8">
                                    {/* Kadın Kategorileri */}
                                    <div>
                                        <h3 className="font-bold text-lg">Kadın</h3>
                                        <ul className="list-none">
                                            {womenCategories.map(category => (
                                                <li key={category.id}>
                                                    <button
                                                        onClick={() => handleNavigation(`/shop?category=${category.id}`)}
                                                        className="hover:text-blue-500"
                                                    >
                                                        {category.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Erkek Kategorileri */}
                                    <div>
                                        <h3 className="font-bold text-lg">Erkek</h3>
                                        <ul className="list-none">
                                            {menCategories.map(category => (
                                                <li key={category.id}>
                                                    <button
                                                        onClick={() => handleNavigation(`/shop?category=${category.id}`)}
                                                        className="hover:text-blue-500"
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
                                onClick={() => handleNavigation('/productdetails')}
                                className="text-secondText"
                            >
                                Product
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/Blog')}
                                className="text-secondText"
                            >
                                Blog
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/contact')}
                                className="text-secondText"
                            >
                                Contact
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/Pages')}
                                className="text-secondText"
                            >
                                Pages
                            </button>
                        </li>
                    </ul>

                    {/* Kullanıcı İkonu ve Logout */}
                    <div className='text-3xl text-blueText flex justify-center py-4'>
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
                            <img src='/icons/shopping-cart.svg' alt='shoppingcart'/>
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
