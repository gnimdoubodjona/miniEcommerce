import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="flex justify-between items-center bg-transparent p-3 m-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">
                    <Link to="/">MyApp</Link>
                </div>

                <ul className="flex gap-4">
                    <li>Produits</li>
                    <li>Panier</li>
                    <li>Recherche</li>
                </ul>

                <ul className="flex gap-4 items-center">
                    <li>
                        <Link
                            to="/login"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Connexion
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
        );
}

export default Header;
