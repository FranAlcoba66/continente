"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const methodology = [
    {
        id: "posicionamiento",
        category: "POSICIONAMIENTO",
        color: "#009fe3", // Blue
        weeks: [1, 4],
        description: "Estructuramos el significado de su negocio. Desde el diagnóstico hasta la arquitectura de diseño, anclamos su marca en una base robusta.",
        phases: [
            { title: "Diagnóstico y Propuesta", start: 1, duration: 1.5 },
            { title: "Análisis de oportunidad y diseño", start: 2, duration: 2 }
        ]
    },
    {
        id: "reconocimiento",
        category: "RECONOCIMIENTO",
        color: "#f9b233", // Yellow
        weeks: [2, 6],
        description: "Navegamos la identidad digital. Convertimos la estrategia en mensajes claros y tácticas de audiencia orientadas a la conversión.",
        phases: [
            { title: "Rediseño y Pauta", start: 3.5, duration: 2 },
            { title: "Audiencias y call to action", start: 4.5, duration: 3.5 }
        ]
    },
    {
        id: "fidelizacion",
        category: "FIDELIZACIÓN",
        color: "#2b7a44", // Green
        weeks: [4.5, 8],
        description: "Sostenemos el crecimiento. Integramos equipos internos y procesos de mejora continua para que la marca viva y evolucione.",
        phases: [
            { title: "Articulación de equipos internos", start: 5.5, duration: 2.5 }
        ]
    }
];

export default function Process() {
    const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState(methodology[0]);

    const weeks = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section id="process" className="py-32 bg-[#050505] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-sm font-sans uppercase tracking-[0.3em] mb-4 text-slate-500">
                        Nuestra Metodología
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-white max-w-2xl">
                        Un flujo de trabajo riguroso diseñado para el crecimiento.
                    </h3>
                </div>

                {/* Timeline Axis */}
                <div className="relative mb-32 hidden md:block">
                    <div className="flex justify-between border-b border-white/10 pb-4 mb-8">
                        {weeks.map((week) => (
                            <div key={week} className="flex flex-col items-center flex-1">
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter mb-2">Semana</span>
                                <span className="text-sm font-light text-white/60">{week}</span>
                            </div>
                        ))}
                    </div>

                    {/* Category Tracks */}
                    <div className="space-y-4">
                        {methodology.map((cat) => (
                            <div key={cat.id} className="relative h-20 w-full group">
                                {/* Track Background */}
                                <div
                                    className="absolute h-1 rounded-full opacity-20 transition-all duration-500 group-hover:opacity-40"
                                    style={{
                                        left: `${((cat.weeks[0] - 1) / 8) * 100}%`,
                                        width: `${((cat.weeks[1] - cat.weeks[0]) / 8) * 100}%`,
                                        backgroundColor: cat.color
                                    }}
                                />

                                {/* Phases */}
                                {cat.phases.map((phase) => (
                                    <motion.div
                                        key={phase.title}
                                        onMouseEnter={() => {
                                            setHoveredPhase(phase.title);
                                            setSelectedCategory(cat);
                                        }}
                                        onMouseLeave={() => setHoveredPhase(null)}
                                        className={`absolute h-12 rounded-full flex items-center px-4 cursor-pointer transition-all duration-300 border border-white/5 backdrop-blur-sm
                                            ${hoveredPhase === phase.title ? "z-20 bg-white/10 border-white/20 scale-105" : "z-10 bg-white/5"}
                                        `}
                                        style={{
                                            left: `${((phase.start - 1) / 8) * 100}%`,
                                            width: `${(phase.duration / 8) * 100}%`,
                                            top: '1rem'
                                        }}
                                    >
                                        <div className="w-2 h-2 rounded-full mr-3 shrink-0" style={{ backgroundColor: cat.color }} />
                                        <span className="text-[11px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                                            {phase.title}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile View / Fallback */}
                <div className="md:hidden space-y-12 mb-20">
                    {methodology.map((cat) => (
                        <div key={cat.id} className="border-l-2 pl-6" style={{ borderColor: cat.color }}>
                            <span className="text-[10px] font-mono tracking-widest text-slate-500 mb-2 block">{cat.category}</span>
                            <div className="space-y-4">
                                {cat.phases.map((phase) => (
                                    <div key={phase.title} className="bg-white/5 p-4 rounded-sm border border-white/10">
                                        <h4 className="text-sm font-medium text-white mb-1">{phase.title}</h4>
                                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                                            Semana {phase.start} — {phase.start + phase.duration}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                    <div className="h-[200px] flex flex-col justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <span
                                    className="text-[10px] font-mono tracking-[0.4em] mb-4 block"
                                    style={{ color: selectedCategory.color }}
                                >
                                    {selectedCategory.category}
                                </span>
                                <p className="text-2xl md:text-3xl font-serif text-slate-300 leading-tight">
                                    {selectedCategory.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-end items-center gap-8">
                        {methodology.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex items-center gap-3 transition-opacity duration-300 ${selectedCategory.id === cat.id ? "opacity-100" : "opacity-30 hover:opacity-100"}`}
                            >
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                                <span className="text-[10px] font-mono tracking-widest uppercase hidden lg:block">{cat.category}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] -z-10 rounded-full" />
        </section>
    );
}
