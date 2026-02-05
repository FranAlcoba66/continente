import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#f5f2d8] text-black">
            {/* Background - Clean Cream */}

            {/* Content */}
            <div className="z-10 flex flex-col items-center text-center px-4 animate-in fade-in zoom-in duration-1000 ease-out">
                {/* Logo */}
                <div className="mb-8 relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <Image
                        src="/logo_transparent.png"
                        alt="Continente Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-black">
                    Branding y Estrategia de Contenido
                </h1>

                <p className="font-sans text-lg md:text-xl text-gray-800 max-w-xl mb-12 tracking-wide font-light">
                    Creamos identidades digitales que se mueven a la velocidad de la cultura.
                </p>

                {/* Cinematic CTA */}
                <div className="flex flex-col md:flex-row gap-6">
                    <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-all uppercase text-xs tracking-[0.2em] cursor-pointer">
                        Ver Showreel
                    </button>
                </div>
            </div>
        </section>
    );
}
