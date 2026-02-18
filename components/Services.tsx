"use client";

import { motion } from "framer-motion";

const AnimatedIcon = ({ index }: { index: number }) => {
    // 0: Brand (Shapes), 1: Motion (Play/Rotate), 2: Social (Grid/Bubbles), 3: Corporate (Chart)

    if (index === 0) {
        // Brand: Morphing Squares
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <motion.rect
                    x="5" y="5" width="12" height="12" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 0.8, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="28" cy="28" r="6" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        )
    }
    if (index === 1) {
        // Motion: Play Button Wave
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <motion.polygon
                    points="12,8 32,20 12,32" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M34,10 L34,30" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                    animate={{ opacity: [0, 1, 0], height: [10, 20, 10] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
            </svg>
        )
    }
    if (index === 2) {
        // Social: Chat Bubbles / Grid
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <motion.rect
                    x="8" y="8" width="10" height="10" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                    x="22" y="8" width="10" height="10" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.rect
                    x="8" y="22" width="10" height="10" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.rect
                    x="22" y="22" width="10" height="10" stroke="black" strokeWidth="1.5" fill="none"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
            </svg>
        )
    }
    // Corporate: Chart
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
            <motion.rect
                x="6" y="20" width="6" height="14" stroke="black" strokeWidth="1.5" fill="none"
                animate={{ height: [14, 20, 14], y: [20, 14, 20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
                x="16" y="10" width="6" height="24" stroke="black" strokeWidth="1.5" fill="none"
                animate={{ height: [24, 18, 24], y: [10, 16, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.rect
                x="26" y="16" width="6" height="18" stroke="black" strokeWidth="1.5" fill="none"
                animate={{ height: [18, 28, 18], y: [16, 6, 16] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
        </svg>
    )
}

const pillars = [
    {
        title: "Branding e Identidad Visual",
        description: "Creamos sistemas visuales integrales con enfoque en las circunstancias sociales, culturales y económicas en las que se desarrolla la marca.",
        items: ["Estrategia de Marca", "Diseño de Logotipo", "Manual de Identidad", "Dirección de Arte"],
    },
    {
        title: "Motion Graphics y Contenido Explicativo",
        description: "Rediseñamos información compleja en mensajes claros mediante animación, visualización de datos y narrativas audiovisuales de alto impacto.",
        items: ["Animación 2D", "Videos Corporativos", "Visualización de Datos", "Infografías Animadas"],
    },
    {
        title: "Estrategia de Contenidos y Social Media",
        description: "Diseñamos ecosistemas digitales donde el contenido trasciende el algoritmo. Creamos tácticas específicas para asegurar una presencia de marca sustentable, valiosa y posicionada a largo plazo.",
        items: ["Content Marketing", "Narrativas para Vertical Video", "Producción de YouTube", "Estrategia Digital"],
    },
    {
        title: "Comunicación Corporativa y Presentaciones",
        description: "Herramientas de comunicación de alto nivel para audiencias específicas. Diseñamos piezas que cierran tratos y estructuran la cultura organizacional.",
        items: ["Pitch Decks", "Dashboards de Datos", "Internal Branding", "Kits de Onboarding"],
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
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-black/40">0{index + 1}</span>
                                <AnimatedIcon index={index} />
                            </div>

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
