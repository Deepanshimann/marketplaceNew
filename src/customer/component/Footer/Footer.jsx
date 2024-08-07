import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#212B39] text-white">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-40 fill-white">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
                    </path>
                </svg>
            </div>

            <div className="container mx-auto pt-20 pb-5 px-5 mt-20">
                <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20">
                    <div className="flex flex-col gap-5">
                        <h2 className="heading text-3xl mt-20 font-bold text-yellow-200">About Us</h2>
                        <p className="font-sans my-2 text-white text-xl">Discover the story behind Vintage Store, how it was created and our commitment to sustainability and community.</p>
                        <a  href="/about-us" className="read-button" >Read More</a>
                    </div>

                    <div className="container flex flex-col gap-5">
                        <h2 className="heading text-3xl font-bold mt-20 text-yellow-200">Categories</h2>
                        <ul>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Electronics</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Clothing</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Home & Furniture</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Books</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Services</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Rentals</a></li>
                        </ul>
                    </div>

                    <div className="container flex flex-col gap-5">
                        <h2 className="heading  text-3xl font-bold mt-20 text-yellow-200">Customer Support</h2>
                        <ul>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Contact Us</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">FAQ</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Return Policy</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Help Center</a></li>
                            <li className="my-2 text-lg  text-white"><a className="font-sans" href="#">Shipping Information</a></li>
                        </ul>
                    </div>

                    <div className="icon flex flex-col gap-7">
                        <h2 className="heading text-3xl mt-20 font-bold text-yellow-200">Connect With Us</h2>
                        <div className="flex space-x-4">
                            <a className="icon text-3xl  transform hover:scale-150 transition-all duration-150 ease-in-out" href="#">
                                <FaGithub />
                            </a>
                            <a className="icon text-3xl  transform hover:scale-150 transition-all duration-150 ease-in-out" href="#">
                                <FaLinkedinIn  />
                            </a>
                            <a className="icon text-3xl transform hover:scale-150 transition-all duration-150 ease-in-out" href="#">
                                <FaTwitter  />
                            </a>
                            <a className="icon text-3xl transform hover:scale-150 transition-all duration-150 ease-in-out" href="#">
                                <FaInstagram   />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <p className="text-white">&copy; {Year} YourMarketplace. All rights reserved.</p>
                    <p><a href="#" className=" text-white">Terms of Service</a> | <a href="#" className="text-white">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
