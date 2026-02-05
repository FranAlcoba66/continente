import Image from "next/image";

export default function Process() {
    const steps = [
        {
            num: "01",
            title: "Descubrimiento",
            desc: "Profundizamos en el ADN de tu marca. Entrevistas con stakeholders, investigación de mercado y auditoría cultural.",
            image: "/project_branding.png", // Placeholder
        },
        {
            num: "02",
            title: "Estrategia",
            desc: "Definiendo el ángulo único. Posicionamiento, voz y el marco narrativo que guía todo.",
            image: "/process_strategy.png", // Generated
        },
        {
            num: "03",
            title: "Diseño",
            desc: "Visualizando el alma de la marca. Sistemas de logotipos, tipografía, paletas de colores y guías de movimiento.",
            image: "/project_social.png", // Placeholder
        },
        {
            num: "04",
            title: "Producción",
            desc: "Dándole vida. Activos de alta fidelidad, animación e implementación digital en todos los puntos de contacto.",
            image: "/project_motion.png", // Placeholder
        },
        {
            num: "05",
            title: "Lanzamiento",
            desc: "Salir al mercado con impacto. Estrategia de despliegue, entrega de activos y soporte post-lanzamiento.",
            image: "/project_branding.png", // Placeholder reuse
        },
    ];

    return (
        <section id="process" className="py-32 bg-[#050505] text-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 className="text-sm font-sans uppercase tracking-[0.2em] mb-16 text-slate-500">
                    La Metodología
                </h2>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
                    {steps.map((step, i) => {
                        const isEven = i % 2 === 0;
                        const bgClass = isEven ? "bg-[#f5f2d8] text-black" : "bg-white/5 text-white";
                        const numClass = isEven ? "text-black/20" : "text-white/20";
                        const descClass = isEven ? "text-gray-800" : "text-slate-400";

                        return (
                            <div
                                key={i}
                                className={`min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-start border-l border-white/20 pl-8 flex flex-col justify-between h-[500px] transition-colors duration-500 p-6 relative group overflow-hidden ${bgClass}`}
                            >
                                <div className={`text-6xl font-serif font-bold ${numClass}`}>
                                    {step.num}
                                </div>

                                <div className="relative w-full h-40 my-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-serif mb-4">{step.title}</h3>
                                    <p className={`${descClass} leading-relaxed font-light`}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    {/* Spacer */}
                    <div className="min-w-[100px]" />
                </div>
            </div>
        </section>
    );
}
