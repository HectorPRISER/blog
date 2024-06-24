"use client";

import { useState } from "react";

export default function publication() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="shadow-sm border-b sticky top-0 gggg z-30 p-3">
            <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <input
                        type="text"
                        placeholder="Recherche"
                        className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
                    />

                    <>
                        <button className="text-sm font-semibold text-black cursor-pointer">
                            User: Hector
                        </button>
                    </>
                </div>
            </div>
            <section>
                <h1 className="text-5xl font-bold py-3 ">Publication</h1>
                <div className="hero-content text-sm font-semibold text-black flex">
                    <div>
                        <img src="/image/MicrosoftTeams-image (1).png" width={468} height={512} alt=" " />
                    </div>
                    <div>
                        <h2 className="">
                            & BLOG
                            <br />& BLOG bien mieux que facebook
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Voir Plus
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="hero-content text-sm font-bold  text-black ">
                    <br></br>
                </h3>
                <div>
                    <div className="hero-content text-sm font-semibold text-black ">
                        Xx_DarkMathis_xX
                    </div>
                    <span className="text-black">reel</span>
                    <div className="hero-content text-sm font-semibold text-black ">
                        noah
                    </div>
                    <span className="text-black">miaule</span>
                </div>
                <br />
                <br />
                <div className="hero-content text-sm font-semibold text-black flex">
                    <div>
                        <img src="/image/cama.webp" width={468} height={512} alt=" " />
                    </div>
                    <div>
                        <h2 className="">
                            camavinga
                            <br />
                            super match encore du goat
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Voir Plus
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="hero-content text-sm font-bold  text-black ">
                    <br></br>
                </h3>
                <div>
                    <div className="hero-content text-sm font-semibold text-black ">
                        Lenaig
                    </div>
                    <span className="text-black">quel match</span>
                    <div className="hero-content text-sm font-semibold text-black ">
                        Tony
                    </div>
                    <span className="text-black">first</span>
                </div>
                <br />
                <br />
                <div className="hero-content text-sm font-semibold text-black flex">
                    <div>
                        <img src="/image/MicrosoftTeams-image.png" width={468} height={512} alt=" " />
                    </div>
                    <div>
                        <h2 className="">
                            jo
                            <br />
                            polimique autour de mbappe
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Voir Plus
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="hero-content text-sm font-bold  text-black ">
                    <br></br>
                </h3>
                <div>
                    <div className="hero-content text-sm font-semibold text-black ">
                        jean
                    </div>
                    <span className="text-black">je l'aime pas lui</span>
                    <div className="hero-content text-sm font-semibold text-black ">
                        philou
                    </div>
                    <span className="text-black">c'est du fake</span>
                    <div className="hero-content text-sm font-semibold text-black ">
                        pepsi
                    </div>
                    <span className="text-black">je follow back</span>
                </div>
            </section>
        </main>
    );
}
