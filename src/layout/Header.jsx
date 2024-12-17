import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../actions/userAction';
import { toast } from "react-toastify";

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu
    const history = useHistory(); // Yönlendirme için kullanılır
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    // Menüye tıklayınca geçişi sağlamak
    const handleNavigation = (path) => {
        setIsMenuOpen(false); // Menü kapat
        history.push(path); // Belirtilen sayfaya yönlendir
    };

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Successfully logged out!");
        setIsMenuOpen(false);
        history.push('/login');
    };

    return (
        
        <>
            <nav className="bg-transparent px-8  flex items-center justify-between py-8">
                {/* Sol Taraf */}
                <div className="text-xl font-bold">Bandage</div>
                {user.isAuthenticated ? (
                    <>
                        <p>Welcome, {user.name}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
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

            {/* Açılır Menü */}
            {isMenuOpen && (
                <div className="bg-gray-50 w-full py-4 flex
        flex-col ">
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
                                onClick={() => handleNavigation('/shop')}
                                className="text-secondText"
                            >
                                Shop
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/About')}
                                className="text-secondText"
                            >
                                About
                            </button>
                        </li><li>
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
                    <div>
                        <div className='text-3xl text-blueText flex justify-center py-4'>
                            <img src='/icons/user.svg' alt='Kullanıcı' className='fill-current text-blueText' />
                            {user.isAuthenticated ? (
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleNavigation('/login')}
                                    >
                                        Login /
                                    </button>
                                    <button
                                        onClick={() => handleNavigation('/signup')}
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                        <div className='flex flex-col justify-center items-center conta gap-4 py-4'>

                            <button
                                onClick={() => handleNavigation('/search')}
                            ><img src='/icons/search.svg' alt='search' />
                            </button>
                            <button
                                onClick={() => handleNavigation('/shopcard')}
                            ><img src='/icons/shopping-cart.svg' alt='shoppingcart' />
                            </button>
                            <button
                                onClick={() => handleNavigation('/like')}
                            ><img src='/icons/heart.svg' alt='like' />
                            </button>

                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Navbar2;
