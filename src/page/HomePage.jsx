import IconList from '../components/IconCard';
import ProductCard from '../components/ProductCard';
import CardList from '../components/Card';
import Footer from '../layout/Footer'
import Navbar from '../layout/Header';





function HomePage() {

    return (
        <div>
            <Navbar/>
            <section className='bg-gradient-to-r from-cyan-300 to-teal-200 text-center rounded-[20px]'>
                <div>
                    <h5 className='text-[#2A7CC7] text-h5 font-bold'>SUMMER 2020</h5>
                    <h2 className='text-primaryText text-h2 font-bold'>NEW
                        COLLECTION</h2>
                    <h4 className='text-h4 text-secondText'>We know how large objects
                        will act, but things on a
                        small scale.</h4>
                    <button className='text-h3 font-bold  bg-blueText text-white rounded-lg py-4 px-10 '>
                        SHOP NOW
                    </button>
                </div>
                <div>
                    <img src='/images/figure1.png'/>
                </div>
            </section>
            <IconList />
            <CardList/>
            <ProductCard />


            <section>
                <div>
                    <h5 className='text-h5 text-bold text-blueText font-bold'>Featured Products</h5>
                    <h2 className='text-h2'>We love what we do</h2>
                    <p className='text-h6 text-secondText'>Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics

                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics </p>
                </div>
                <div className='flex'>
                    <img src='/images/featured1.png' />
                    <img src='/images/featured2.png' />
                </div>
            </section>
            <section>
                <div className='text-center'>
                    <h4 className='text-h4 text-secondText'>Featured Products</h4>
                    <h3 className='text-h3 font-bold'>THE BEST SERVICES</h3>
                    <h6 className='text-h6 text-secondText'>Problems trying to resolve 
                    the conflict between </h6>
                </div>
                <div  className='flex flex-wrap'>
                <img src='/images/icon1.png' alt='Easy Wins' />
                <img src='/images/icon2.png' alt='Concrete' />
                <img src='/images/icon3.png' alt='Hack Growth' />
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default HomePage;