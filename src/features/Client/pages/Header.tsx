import { Link } from "react-router-dom";
import { useAuthActions } from "@convex-dev/auth/react";

function Header() {
    const { isLoading, isAuthenticated, user } = useAuthActions();

    return (
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
                {isLoading ? (
                    <li>Chargement...</li>
                ) : isAuthenticated ? (
                    <>
                        <li className="flex items-center gap-2">
                            {/* Avatar ou icône */}
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                                {user?.email?.charAt(0).toUpperCase() || "U"}
                            </div>
                            <span className="hidden md:block">
                {user?.email || "Utilisateur"}
              </span>
                        </li>
                        <li>
                            <button
                                onClick={() => {}}
                                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm"
                            >
                                Déconnexion
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Connexion
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Header;