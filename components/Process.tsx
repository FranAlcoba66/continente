"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="process" className="py-24 bg-[#050505] text-white overflow-hidden min-h-[800px] flex flex-col justify-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <h2 className="text-sm font-sans uppercase tracking-[0.2em] mb-12 text-slate-500">
                    La Metodología
                </h2>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {/* Tabs / List */}
                    <div className="flex flex-col gap-6 w-full md:w-1/3">
                        {steps.map((step, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`text-left group flex items-baseline gap-4 transition-all duration-300 ${activeTab === i ? "opacity-100" : "opacity-30 hover:opacity-100"
                                    }`}
                            >
                                <span className="font-mono text-xs text-white/50">{step.num}</span>
                                <h3 className={`font-serif text-3xl md:text-4xl ${activeTab === i ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"}`}>
                                    {step.title}
                                </h3>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-2/3 relative h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-8"
                            >
                                <div className="relative w-full h-[300px] bg-[#f5f2d8]/5 rounded-sm overflow-hidden border border-white/10">
                                    <Image
                                        src={steps[activeTab].image}
                                        alt={steps[activeTab].title}
                                        fill
                                        className="object-contain p-8 grayscale opacity-80"
                                    />
                                </div>
                                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-lg">
                                    {steps[activeTab].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
