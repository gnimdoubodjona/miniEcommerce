import {Link} from "react-router-dom";





function Header() {
    return (
        <div className="flex justify-between items-center bg-transparent p-3 m-4 rounded-lg shadow-lg" >
            <div className="text-2xl font-bold ">
                <Link to="/">MyApp</Link>
            </div>

            <ul className="flex gap-4 ">
                <li>Produits</li>
                <li>Panier</li>
                <li>Recherche</li>
            </ul>

            <ul className="flex gap-4 ">
                <li>
                    <Link to="/login">Connexion</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
