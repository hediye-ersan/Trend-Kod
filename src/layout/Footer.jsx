import Button from '../components/Button'



function Footer() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <main className='text-left flex flex-col justify-center'>
            <div className='px-12 py-16 bg-[#FAFAFA] gap-4 flex-col flex'>
                <h3 className='text-h3 font-bold'>Bendage</h3>
                <div className='flex gap-6'>
                    <a href='#'><img src="/icons/facebook.png" alt="Facebook" /></a>
                    <a href='#'><img src="/icons/insta.png" alt="İnstagram" /></a>
                    <a href='#'><img src="/icons/twitter.png" alt="Twitter" /></a>
                </div>
                
            </div>
            <article className='flex flex-col gap-8 leading-loose px-12 font-bold'>
                <div>
                    <h5 className='text-h5 '>Company Info</h5>
                    <div className='text-h6 text-secondText '>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h5 className='text-h5 '>Legal</h5>
                    <div className='text-h6 text-secondText'>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h5 className='text-h5'>Features</h5>
                    <div className='text-h6 text-secondText'>
                        <p>Business Marketing</p>
                        <p>User Analytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Support</p>
                    </div>
                </div>
                <div>
                    <h5 className='text-h5 font-bold'>Resources</h5>
                    <div className='text-h6 text-secondText'>
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>
                    </div>
                </div>
            </article>
            <section className='px-12 pt-12 pb-24'>
                <h5 className='text-h5 font-bold'>Get In Touch</h5>
                <div className="flex items-center justify-start">
                    <input
                        type="email"
                        placeholder="Your email"
                        className=" py-1.5 focus:outline-none focus:ring-2 focus:ring-blueText text-secondText pl-4"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blueText text-white rounded-r hover:bg-blue-200"
                    >
                        Subscribe
                    </button>
                </div>
                <p className='text-xs text-secondText font-bold'>Lore imp sum dolor Amit</p>
            </section>
            <div>
                <h6 className='text-h6 text-secondText bg-[#FAFAFA] h6 px-28 py-10 font-bold text-center'>Made With Love By
                    Finland All Right Reserved </h6>
            </div>

        </main>
    )
}
export default Footer;