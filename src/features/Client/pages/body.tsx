import shoe1 from '../../../assets/shoe-1.png';
import { useEffect, useRef } from "react";
import gsap from "gsap";


function Body() {
    const heroTextRef = useRef(null);

    useEffect(() => {
        // Fonction pour diviser le texte en mots et les wrapper dans des spans
        const splitTextIntoWords = (element) => {
            const text = element.textContent;
            const words = text.split(' ');

            // Créer un nouveau contenu avec chaque mot dans un span
            element.innerHTML = words
                .map(word => `<span class="word">${word}</span>`)
                .join(' ');

            return element.querySelectorAll('.word');
        };

        // Diviser le texte en mots
        const words = splitTextIntoWords(heroTextRef.current);

        // Initialiser les mots comme invisibles
        gsap.set(words, {
            opacity: 0,
            y: 20
        });

        // Animer les mots un par un
        gsap.to(words, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15, // Délai entre chaque mot (150ms)
            ease: "power2.out"
        });

        // Animation pour les autres éléments
        gsap.fromTo(".other-text",
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1, // ← IMPORTANT : spécifier l'état final
                y: 0,
                duration: 1,
                delay: words.length * 0.15 + 0.5,
                ease: "power2.out"
            }
        );


        gsap.fromTo(".cta-button",
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1, // ← IMPORTANT : spécifier l'état final
                y: 0,
                duration: 0.8,
                delay: words.length * 0.15 + 1,
                ease: "power2.out"
            }
        );

    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div>   {/* ✅ Fond léger */}
                <div className="grid md:grid-cols-2 gap-8 mt-10 px-4 items-center pb-20">
                    {/* ✅ pb-20 = padding-bottom pour respirer */}

                    {/* Texte */}
                    <div>
                        <h3 className="text-red-700 font-semibold">Qualité & Durable</h3>

                        <p
                            ref={heroTextRef}
                            className="hero-text mt-2 max-w-lg text-4xl md:text-5xl text-black font-extrabold"
                        >
                            Des Produits bien pour vous.
                        </p>

                        <p className="other-text mt-5 max-w-lg text-lg md:text-2xl text-black">
                            Bien plus qu'un simple site, vous trouverez vos articles de tous genre
                            de premier choix juste ici.
                        </p>

                        <button className="cta-button mt-5 rounded-full bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
                            Voir les produits
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={shoe1}
                            alt="Panier rempli"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            {/* Section Meilleures ventes */}
            <div className="mt-16 px-4 mb-16">
                <h3 className="text-2xl font-bold mb-6">Meilleures ventes</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Exemple Card */}
                    <div className="rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                        {/* Partie image */}
                        <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                            {/* Badge */}
                            <div className="absolute top-2 left-2 inline-flex items-center justify-center bg-gray-200 border border-black px-3 py-1 rounded-md">
                                <p className="text-xs font-semibold">10% des ventes</p>
                            </div>

                            <img
                                src={shoe1}
                                alt="Panier rempli"
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Partie texte */}
                        <div className="p-4 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold">Prix des NikeeeAir</h3>
                                <p className="text-sm text-gray-600">Chaussure pour femme</p>
                                <p className="text-sm text-gray-600">10 couleurs</p>
                            </div>
                            <p className="text-xl font-bold">128$</p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                        {/* Partie image */}
                        <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                            {/* Badge */}
                            <div className="absolute top-2 left-2 inline-flex items-center justify-center bg-gray-200 border border-black px-3 py-1 rounded-md">
                                <p className="text-xs font-semibold">10% des ventes</p>
                            </div>

                            <img
                                src={shoe1}
                                alt="Panier rempli"
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Partie texte */}
                        <div className="p-4 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold">Prix des NikeeeAir</h3>
                                <p className="text-sm text-gray-600">Chaussure pour femme</p>
                                <p className="text-sm text-gray-600">10 couleurs</p>
                            </div>
                            <p className="text-xl font-bold">128$</p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                        {/* Partie image */}
                        <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                            {/* Badge */}
                            <div className="absolute top-2 left-2 inline-flex items-center justify-center bg-gray-200 border border-black px-3 py-1 rounded-md">
                                <p className="text-xs font-semibold">10% des ventes</p>
                            </div>

                            <img
                                src={shoe1}
                                alt="Panier rempli"
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Partie texte */}
                        <div className="p-4 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold">Prix des NikeeeAir</h3>
                                <p className="text-sm text-gray-600">Chaussure pour femme</p>
                                <p className="text-sm text-gray-600">10 couleurs</p>
                            </div>
                            <p className="text-xl font-bold">128$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Body;