const pillars = [
    {
        title: "Identidad de Marca",
        description: "Creamos sistemas visuales que hablan más fuerte que las palabras. Desde el diseño del logotipo hasta guías de marca completas.",
        items: ["Estrategia", "Identidad Visual", "Dirección de Arte", "Guías"],
    },
    {
        title: "Diseño de Movimiento",
        description: "Damos vida a marcas estáticas a través de tipografía cinética, animación 2D y visuales impactantes.",
        items: ["Animación 2D", "Tipo Cinético", "Reveal de Logo", "Videos Explicativos"],
    },
    {
        title: "Contenido Social",
        description: "Producción de contenido estratégico para la era del algoritmo. Formatos de alta retención para IG, TikTok y YouTube.",
        items: ["Reels y TikToks", "Estrategia de Contenido", "Producción YouTube", "Análisis de Tendencias"],
    },
    {
        title: "Soluciones Corporativas",
        description: "Herramientas de comunicación de alto nivel. Diseñamos pitch decks y dashboards que cierran tratos.",
        items: ["Pitch Decks", "Visualización de Datos", "Dashboards", "Kits de Onboarding"],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 px-6 bg-[#f5f2d8] text-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-serif mb-24 text-center tracking-tight text-black">
                    Nuestra Experiencia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col group border-t border-black/10 pt-8 hover:border-black/40 transition-colors duration-500">
                            <span className="text-xs font-mono text-black/40 mb-4">0{index + 1}</span>
                            <h3 className="text-3xl font-serif mb-6 text-black group-hover:text-black/70 transition-colors duration-300">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-700 font-light leading-relaxed mb-8 max-w-sm">
                                {pillar.description}
                            </p>
                            <ul className="flex flex-wrap gap-3">
                                {pillar.items.map((item) => (
                                    <li key={item} className="px-3 py-1 rounded-full border border-black/10 text-xs text-black/60 uppercase tracking-wider group-hover:border-black/30 transition-all">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
