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
                        El Estudio — La filosofía de la agencia
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
                        Estructuramos el significado de su negocio.
                    </h3>
                    <div className="space-y-6 text-lg font-light text-gray-800 leading-relaxed">
                        <p>
                            Somos un estudio de comunicación centrado en la estrategia aplicada al negocio. Mediante sistemas visuales y contenido narrativo, anclamos el propósito de su marca para construir una base robusta que trascienda el entorno digital.
                        </p>
                        <p className="font-medium text-black italic">
                            Transformamos la complejidad en claridad estratégica.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
