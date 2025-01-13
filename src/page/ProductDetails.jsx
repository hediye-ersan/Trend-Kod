import React, { useEffect } from 'react'
import ProductCard from '../components/ProductDetailCard';
import Navbar from '../layout/Header';
import { Link } from 'react-router-dom';
import BestsellerProducts from '../components/BestsellerProducts';
import Footer from '../layout/Footer';
import IconList from '../components/IconCard';
import { fetchProductDetails } from '../actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopBanner } from '../layout/Banner';

function ProductDetails() {


  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productDetails, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);



  if (loading) return <div>Loading...</div>;
  if (!productDetails) return <div>Product not found.</div>;


  return (
    <div>
      <TopBanner />
      <Navbar />
      <div className="text-center mb-10">
        <h3 className="text-h3 font-bold mb-4">Shop</h3>
        <div className="flex items-center justify-center gap-2 text-sm text-h6 font-bold text-secondText">
          <Link to="/" >Home</Link>
          <span >/</span>
          <Link to="/shop" >Shop</Link>
        </div>
      </div>

      <ProductCard {...productDetails} />
      <div className=" mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-6 text-sm font-medium mb-6 border-b border-gray-200">
          <button className="pb-2 border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 transition-colors">
            Description
          </button>
          <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all">
            Additional Information
          </button>
          <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all">
            Reviews (0)
          </button>
        </div>

        <div className="md:flex md:gap-8 md:space-x-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={productDetails.images[0]?.url}
              alt="Product"
              className="max-h-screen w-full object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Description and Details */}
          <div className="mt-6 md:mt-0 md:w-1/2">
            {/* Description */}
            <h3 className="text-h3 font-semibold mb-4 ">The Quick Fox Jumps Over</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>


            {/* Details */}
            <h3 className="text-h3 font-semibold mb-4 ">Features & Details</h3>
            <ul className="space-y-3 text-secondText">
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
            </ul>
            <h3 className="text-h3 font-semibold mb-4 ">Additional Features</h3>
            <ul className="space-y-3 text-secondText">
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
              <li className="flex items-center ">
                <span className="mr-2 ">›</span>
                The quick fox jumps over the lazy dog.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BestsellerProducts />
      <IconList />
      <Footer />
    </div>
  )
}
export default ProductDetails;