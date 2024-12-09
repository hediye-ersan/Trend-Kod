import Footer from '../layout/Footer'



function HomePage() {

    return (
        <div>
            <section>
                <div>
                    <h5 className='text-h5 text-bold'>Featured Products</h5>
                    <h2 className='text-h2'>We love what we do</h2>
                    <p className='text-h6 text-secondText'>Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics

                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics </p>
                </div>
                <div className='flex'>
                    <img src='/images/featured1.png'/>
                    <img src='/images/featured2.png'/>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default HomePage;