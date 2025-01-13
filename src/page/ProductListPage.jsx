import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import ProductDetailCard from '../components/ProductDetailCard';
import Pagination from "../layout/Pagination";
import Navbar from '../layout/Header';
import { TopBanner } from '../layout/Banner';


const ProductListPage = () => {

    const dispatch = useDispatch();
    const { loading, products, error, total } = useSelector((state) => state.products);

    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        // Sayfa değiştiğinde API çağrısı
        dispatch(fetchProducts("", page, limit));
    }, [dispatch, page, limit]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div className="text-center mt-10">Loading products...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
    }

    return (
        <>
        <TopBanner/>
        <Navbar
         />
        <div className=" mx-auto p-2 space-y-6">
            <img src="../images/productList.png" alt="Product Image" className="w-full h-auto object-cover rounded-3xl "   />
            <div className="text-center px-6 sm:px-24 py-8">
                <h4 className="text-base sm:text-lg md:text-xl text-secondText">Featured Products</h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Featured Products</h2>
                <h6 className="text-sm sm:text-base md:text-lg text-secondText mt-2">
                    Problems trying to resolve the conflict between the two major realms of Classical physics:
                    Newtonian mechanics
                </h6>
            </div>

            {products.map((product) => (
                <ProductDetailCard
                    key={product.id}
                    id={product.id}
                    images={product.images}
                    name={product.name}
                    rating={product.rating}
                    price={product.price}
                    stock={product.stock}
                    description={product.description}
                />
            ))}
            <Pagination total={total} limit={limit} page={page} setPage={setPage} />
        </div>
        </>
    );
};

export default ProductListPage;