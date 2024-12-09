import Button from '../components/Button'



function Footer() {
    const handleClick = () => {
        alert("Button clicked!");
      };

    return (
        <main>
            <div>
                <h3>BrandName</h3>
                <img src="/images/social-image.png" alt="social icons" />
            </div>
            <article>
                <div>
                    <h5>Company Info</h5>
                    <div>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h5>Legal</h5>
                    <div>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h5>Features</h5>
                    <div>
                    <p>Business Marketing</p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                    </div>
                </div>
                <div>
                    <h5>Resources</h5>
                    <div>
                    <p>IOS & Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                    </div>
                </div>
            </article>
            <section>
                <h5>Get In Touch</h5>
                <div>
                <input type="email" className='bg-[#E6E6E6]'></input>
                <Button text="Subscribe" onClick={handleClick}/>
                </div>
                <p>Lore imp sum dolor Amit</p>
            </section>
            <div>
                <p>Made With Love By 
                Finland All Right Reserved </p>
            </div>
            
        </main>
    )
}
export default Footer;