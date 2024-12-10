import Button from '../components/Button'



function Footer() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <main className='text-left flex flex-col justify-center'>
            <div className='px-12 py-16 bg-[#FAFAFA] gap-4 flex-col flex'>
                <h3 className='text-h3 font-bold'>Bendage</h3>
                <img src="/images/social-image.png" alt="social icons" />
            </div>
            <article className='flex flex-col gap-8 leading-loose px-12'>
                <div>
                    <h5 className='text-h5 font-bold'>Company Info</h5>
                    <div className='text-h6 text-secondText '>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h5 className='text-h5 font-bold'>Legal</h5>
                    <div className='text-h6 text-secondText'>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h5 className='text-h5 font-bold'>Features</h5>
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
                        className=" py-2 px-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blueText text-white rounded-md hover:bg-blue-200"
                    >
                        Subscribe
                    </button>
                </div>
                <p className='text-xs text-secondText'>Lore imp sum dolor Amit</p>
            </section>
            <div>
                <h6 className='text-h6 text-secondText bg-[#FAFAFA] h6 px-28 py-10 font-bold text-center'>Made With Love By
                    Finland All Right Reserved </h6>
            </div>

        </main>
    )
}
export default Footer;