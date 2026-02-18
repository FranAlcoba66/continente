"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Process() {
    const steps = [
        {
            num: "01",
            title: "Posicionamiento",
            desc: "Estructuramos el significado de su negocio. Desde el diagnóstico hasta la arquitectura de diseño, anclamos su marca en una base robusta.",
            image: "/process_strategy.png",
        },
        {
            num: "02",
            title: "Reconocimiento",
            desc: "Navegamos la identidad digital. Convertimos la estrategia en mensajes claros y tácticas de audiencia orientadas a la conversión.",
            image: "/project_social.png",
        },
        {
            num: "03",
            title: "Fidelización",
            desc: "Sostenemos el crecimiento. Integramos equipos internos y procesos de mejora continua para que la marca viva y evolucione.",
            image: "/project_motion.png",
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
