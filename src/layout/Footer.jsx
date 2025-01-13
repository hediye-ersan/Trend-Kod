import Button from '../components/Button';

function Footer() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <footer className="bg-gray-50 ">
            {/* Üst Bölüm */}
            <div className="px-8 md:px-24 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Logo ve Sosyal Medya */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-3xl font-extrabold ">Bandage</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <img src="/icons/insta.png" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Menü Bölümleri */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Company Info</h5>
                        <ul className="text-gray-600 space-y-2">
                            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
                            <li className="hover:text-gray-900 cursor-pointer">We are hiring</li>
                            <li className="hover:text-gray-900 cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Legal</h5>
                        <ul className="text-gray-600 space-y-2">
                            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-gray-900 cursor-pointer">Terms of Service</li>
                            <li className="hover:text-gray-900 cursor-pointer">Cookie Policy</li>
                            <li className="hover:text-gray-900 cursor-pointer">Disclaimer</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Features</h5>
                        <ul className="text-gray-600 space-y-2">
                            <li className="hover:text-gray-900 cursor-pointer">Business Marketing</li>
                            <li className="hover:text-gray-900 cursor-pointer">User Analytics</li>
                            <li className="hover:text-gray-900 cursor-pointer">Live Chat</li>
                            <li className="hover:text-gray-900 cursor-pointer">Unlimited Support</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Resources</h5>
                        <ul className="text-gray-600 space-y-2">
                            <li className="hover:text-gray-900 cursor-pointer">iOS & Android</li>
                            <li className="hover:text-gray-900 cursor-pointer">Watch a Demo</li>
                            <li className="hover:text-gray-900 cursor-pointer">Customers</li>
                            <li className="hover:text-gray-900 cursor-pointer">API Documentation</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Orta Bölüm - Abone Ol */}
            <div className="bg-custom-gradient py-12 px-6 sm:px-12 md:px-24">
                <h5 className="text-xl sm:text-2xl font-bold text-center mb-4">Get In Touch</h5>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full sm:w-auto py-2 px-4 mb-4 sm:mb-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 md:rounded-r-none"
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2 bg-blueText text-white font-bold rounded-lg hover:bg-primaryText transition-colors md:rounded-l-none"
                        onClick={handleClick}
                    >
                        Subscribe
                    </button>
                </div>
                <p className="text-sm text-center mt-2">Stay updated with our latest news and offers.</p>
            </div>

            {/* Alt Bölüm */}
            <div className=" py-6">
                <p className="text-center text-sm text-gray-600">
                    Made with ❤️ by Finland. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
