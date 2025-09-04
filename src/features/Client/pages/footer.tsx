import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Partie haute : logo + colonnes */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                    {/* Logo */}
                    <div>
                        <h1 className="text-white text-2xl font-bold">MyApp</h1>
                    </div>

                    {/* Featured */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Featured</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#">Air Force 1</Link></li>
                            <li><Link to="#">Huarache</Link></li>
                            <li><Link to="#">Air Max 90</Link></li>
                            <li><Link to="#">Air Max 95</Link></li>
                        </ul>
                    </div>

                    {/* Shoes */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Shoes</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#">All Shoes</Link></li>
                            <li><Link to="#">Custom Shoes</Link></li>
                            <li><Link to="#">Jordan Shoes</Link></li>
                            <li><Link to="#">Running Shoes</Link></li>
                        </ul>
                    </div>

                    {/* Clothing */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Clothing</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#">All Clothing</Link></li>
                            <li><Link to="#">Modest Wear</Link></li>
                            <li><Link to="#">Hoodies & Pullovers</Link></li>
                            <li><Link to="#">Shirts & Tops</Link></li>
                        </ul>
                    </div>

                    {/* Kids */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Kids'</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#">Infant & Toddler Shoes</Link></li>
                            <li><Link to="#">Kids' Shoes</Link></li>
                            <li><Link to="#">Kids' Jordan Shoes</Link></li>
                            <li><Link to="#">Kids' Basketball Shoes</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Partie basse : social + mentions */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400">© 2025 MyApp. All Rights Reserved.</p>

                    {/* Social icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                            <FaXTwitter className="text-white" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                            <FaFacebookF className="text-white" />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                            <FaInstagram className="text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
