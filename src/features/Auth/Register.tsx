function Register() {
    return (
        <div className="h-screen grid grid-cols-1 md:grid-cols-2">

            {/* Partie gauche (branding Nike style) */}
            <div className="bg-black text-white flex flex-col justify-between p-8">
                <div>
                    {/* Logo */}
                    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-md mb-10">
                        <span className="text-black font-bold">MA</span>
                        {/* Remplace par une vraie icône/logo */}
                    </div>


                </div>

                <div className="mb-24">
                    <h2 className="text-2xl font-bold mb-4">Qualité unique</h2>
                    <p className="text-gray-300 max-w-sm">
                        Rejoins par de millions de personnes qui confient notre plateforme pour leurs besoins.
                    </p>
                </div>

                <p className="text-gray-500 text-sm">© 2025 @GnimdouT. All rights reserved.</p>
            </div>

            {/* Partie droite (formulaire) */}
            <div className="flex flex-col justify-center px-8 md:px-20 py-12">
                {/*<p className="text-right text-sm text-gray-500 mb-2 justify-items-center ">
                    Already have an account?{" "}
                    <a href="#" className="text-black font-semibold hover:underline">
                        Sign In
                    </a>
                </p>*/}
                <p className="text-center  text-gray-900 mb-2">
                    Vous avez déjà un compte?
                    <a href="#" className="text-black font-semibold hover:underline">
                        Sign In
                    </a>
                </p>

                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Rejoignez nous!</h1>
                <p className="text-gray-500 mb-6 text-center">
                    Créer votre compte et commencer vos achats
                </p>

                {/* Boutons sociaux */}
                <button className="w-full border flex items-center justify-center gap-2 py-2 rounded-md mb-4">
                    <span>🔍</span> Continuer avec Google
                </button>
                <button className="w-full border flex items-center justify-center gap-2 py-2 rounded-md mb-6">
                    <span>🍎</span> Continuer avec Facebook
                </button>

                <div className="flex items-center mb-6">
                    <div className="flex-grow border-t" />
                    <span className="px-3 text-gray-400 text-sm">Ou inscrivez vous avec</span>
                    <div className="flex-grow border-t" />
                </div>

                {/* Formulaire */}
                <form className="space-y-4">
                    <label className="font-bold ">Nom complet</label>
                    <input
                        type="text"
                        placeholder="Remplissez par votre nom complet"
                        className="w-full border-4 rounded-md px-3 py-2 shadow-sm  border-black focus:ring-black"

                    />

                    <label className="font-bold ">Email</label>
                    <input
                        type="email"
                        placeholder="Remplissez par votre email"
                        className="w-full border-4 rounded-md px-3 py-2 shadow-sm  border-black focus:ring-black"
                    />

                    <label className="font-bold ">Mot de passe</label>
                    <input
                        type="Mot de passe"
                        placeholder="Votre mot de passe doit contenir au minimum 8 caractères"
                        className="w-full border-4 rounded-md px-3 py-2 shadow-sm  border-black focus:ring-black"
                    />
                    <button className="w-full bg-black text-white py-2 rounded-md font-semibold">
                        Inscription
                    </button>
                </form>


            </div>
        </div>
    );
}

export default Register;
