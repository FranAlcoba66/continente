import Image from "next/image";

export default function About() {
    return (
        <section id="studio" className="py-24 px-4 bg-[#f5f2d8] text-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px]">
                    <Image
                        src="/about_image.png"
                        alt="Studio Details"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-sm font-sans uppercase tracking-widest mb-6 text-gray-500">
                        El Estudio
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
                        Creemos que cada marca tiene un continente de historias esperando ser descubiertas.
                    </h3>
                    <div className="space-y-6 text-lg font-light text-gray-800">
                        <p>
                            Continente es una agencia de branding centrada en la estrategia. Navegamos el complejo paisaje de la identidad digital para construir una base sólida para tu negocio.
                        </p>
                        <p>
                            Desde sistemas visuales hasta contenido narrativo, estructuramos el significado desde el caos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
