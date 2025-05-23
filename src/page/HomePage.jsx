import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconList from '../components/IconCard';
import CardList from '../components/Card';
import Footer from '../layout/Footer'
import Navbar from '../layout/Header';
import PostCardList from '../components/PostCard';
import ProductCardList from '../components/ProductCardList';
import { fetchProducts } from '../actions/productsActions';
import { TopBanner } from '../layout/Banner';

function HomePage() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <TopBanner />
            <Navbar />
            <section className='bg-custom-gradient text-center  rounded-[20px] mx-2 px-12 pt-24 sm:pt-0 sm:flex md:mx-16'>
            <div className="p-16  sm:flex sm:flex-col sm:justify-center text-center md:text-left">
                    <h5 className='text-blue text-h5 font-bold sm:text-h6'>SUMMER 2020</h5>
                    <h2 className='text-primaryText md:text-h2 font-bold py-8  text-h4'>NEW
                        COLLECTION</h2>
                    <h4 className='text-h4 text-secondText'>We know how large objects
                        will act, but things on a
                        small scale.</h4>
                    <div className='py-8'>
                        <button className='md:text-h3 font-bold  bg-blueText text-white rounded-lg px-8 py-3  sm:text-h5'>
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-end'>
                    <img src='/images/figure1.png' />
                </div>
            </section>
            <IconList />
            <CardList />
            <ProductCardList products={products} />

            <section className=' md:flex gap-4 items-center'>
                <div className='flex flex-col gap-2 p-16 font-bold md:w-1/2 md:p-24'>
                    <h5 className='text-h5 text-blueText '>Featured Products</h5>
                    <h2 className='text-h2'>We love what we do</h2>
                    <p className='text-h6 text-secondText'>
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <p className='text-h6 text-secondText'>
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className='flex md:w-1/2 px-3 justify-center h-auto'>
                    <img src='/images/featured1.png'  />
                    <img src='/images/featured2.png'  />
                </div>
            </section>


            <section className='py-20'>
                <div className='text-center px-12 font-bold leading-loose'>
                    <h4 className='text-h4 text-secondText'>Featured Products</h4>
                    <h3 className='text-h3 font-bold'>THE BEST SERVICES</h3>
                    <h6 className='text-h6 text-secondText'>Problems trying to resolve
                        the conflict between </h6>
                </div>
                <div className='flex flex-wrap justify-center gap-4 pt-20'>
                    <img src='/images/icon1.png' alt='Easy Wins' />
                    <img src='/images/icon2.png' alt='Concrete' />
                    <img src='/images/icon3.png' alt='Hack Growth' />
                </div>
            </section>
            <PostCardList />
            <Footer />
        </div>
    );
}
export default HomePage;