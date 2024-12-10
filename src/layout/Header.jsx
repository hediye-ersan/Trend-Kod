import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu
  const history = useHistory(); // Yönlendirme için kullanılır

  // Menüye tıklayınca geçişi sağlamak
  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Menü kapat
    history.push(path); // Belirtilen sayfaya yönlendir
  };

  return (
    <>
    <nav className="bg-transparent px-8  flex items-center justify-between py-8">
      {/* Sol Taraf */}
      <div className="text-xl font-bold">Bandage</div>

      {/* Sağ Taraf */}
      <div className="flex items-center gap-4">
        {/* İkonlar */}
        <img src='/icons/search.svg' alt="Search" className="w-6 h-6 cursor-pointer" />
        <img src="/icons/shopping-cart.svg" alt="Shopping" className="w-6 h-6 cursor-pointer" />

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
          <ul className='flex flex-col flex-wrap content-center gap-8 text-3xl'>
            <li>
              <button
                onClick={() => handleNavigation('/')}
                className="text-secondText"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/product')}
                className="text-secondText"
              >
                Product
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/pricing')}
                className="text-secondText"
              >
                Pricing
              </button>
            </li><li>
              <button
                onClick={() => handleNavigation('/contact')}
                className="text-secondText"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
