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
            <div className="grid grid-flow-col grid-rows-2 h-screen mt-20 p-2">
                <div className="row-span-3">
                    <h3 className="text-red-700 font-semibold">Qualité & Durable</h3>

                    {/* Le texte qui sera animé mot par mot */}
                    <p
                        ref={heroTextRef}
                        className="hero-text mt-2 max-w-lg text-5xl text-black font-extrabold"
                    >
                        Des Produits bien pour vous.
                    </p>

                    <p className="other-text mt-5 max-w-lg text-2xl text-black">
                        Bien plus qu'un simple site, vous trouverez vos articles de tous genre de premier choix juste ici.
                    </p>

                    <button className="cta-button mt-5 rounded-full bg-black text-white px-4 py-2">
                        Voir les produits
                    </button>
                </div>
                <div className="row-span-1">
                    <img src={shoe1} alt="Panier rempli" className="w-130 h-auto object-contain"/>
                </div>
            </div>
        </div>
    )
}

export default Body;