import React from "react";
import Navbar from "../layout/Header";
import { Link } from "react-router-dom";
import TeamGalery from "../components/TeamGalery";
import Team from "../layout/Teams";
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Footer from "../layout/Footer";

function TeamPage() {

    return (
        <div>
            <Navbar />
            <div className="text-center mb-10">
                <h5 className="text-h5 text-secondText mb-4 ">WHAT WE DO</h5>
                <h3 className="text-h3 font-bold mb-4">Innovation
                    tailored for you</h3>
                <div className="flex items-center justify-center gap-2 text-h6 font-bold text-secondText">
                    <Link to="/" className= "text-primaryText font-bold">Home</Link>
                    <span >/</span>
                    <Link to="/teams" >Team</Link>
                </div>
            </div>
            <TeamGalery />
            <Team />
            <div className=" flex flex-col items-center justify-center  my-12 ">
                <div className="w-full max-w-md md:max-w-none text-center">
                    <div className="mb-8 ">
                        <h2 className="text-h2 font-bold mb-4 font-montserrat">
                            Start your
                            14 days free trial
                        </h2>
                        <h4 className="text-secondText text-h4 mt-2">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                        </h4>
                    </div>

                    <button
                        className="px-6 bg-blueText text-white py-3 font-medium rounded-lg hover:bg-custom-gradient transition-colors"
                    >
                        Try it free now
                    </button>

                    <div className="mt-8 flex justify-center gap-6">
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            <Twitter size={30} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            <Instagram size={30} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            <Facebook size={30} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            <Linkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}
export default TeamPage;