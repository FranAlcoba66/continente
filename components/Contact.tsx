"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Send } from "lucide-react";

export default function Contact() {
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleTypeSelect = (type: string) => {
        setProjectType(type);
        setTimeout(() => setStep(2), 300);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submitting
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    return (
        <section id="contact" className="py-24 bg-[#050505] text-white min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-[1400px] w-full mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-sm font-sans uppercase tracking-[0.2em] mb-8 text-slate-500">
                                Contacto
                            </h2>
                            <h3 className="text-6xl md:text-7xl font-serif tracking-tighter mb-8 max-w-md">
                                Construyamos algo icónico.
                            </h3>
                            <a
                                href="mailto:hello@continente.agency"
                                className="text-xl font-sans font-light hover:text-slate-300 transition-colors border-b border-white/20 pb-2 self-start"
                            >
                                hello@continente.agency
                            </a>
                        </div>

                        <div className="hidden lg:flex flex-col gap-8 text-sm font-sans uppercase tracking-widest text-slate-400 mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-white mb-2 text-xs opacity-50">Redes</span>
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-white mb-2 text-xs opacity-50">Ubicación</span>
                                <span>Buenos Aires, AR</span>
                                <span>Madrid, ES</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Form */}
                    <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 min-h-[500px] flex flex-col">
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center flex-1 text-center"
                                >
                                    <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-6">
                                        <Check size={32} />
                                    </div>
                                    <h4 className="text-3xl font-serif mb-2">¡Mensaje Enviado!</h4>
                                    <p className="text-slate-400 font-light">Nos pondremos en contacto pronto.</p>
                                </motion.div>
                            ) : step === 1 ? (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col h-full"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono">01</span>
                                        <span className="text-sm uppercase tracking-widest text-slate-400">¿Qué tienes en mente?</span>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        {["Branding & Identidad", "Diseño de Movimiento", "Estrategia Social", "Corporativo / Pitch Deck"].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => handleTypeSelect(type)}
                                                className={`p-6 text-left border transition-all duration-300 flex justify-between group ${projectType === type
                                                        ? "bg-white text-black border-white"
                                                        : "border-white/10 hover:border-white/50 hover:bg-white/5"
                                                    }`}
                                            >
                                                <span className="font-serif text-xl">{type}</span>
                                                <ArrowRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${projectType === type ? "text-black opacity-100" : "text-white"}`} />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col h-full"
                                >
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-xs uppercase tracking-widest text-slate-500 hover:text-white mb-6 self-start transition-colors"
                                    >
                                        ← Volver
                                    </button>

                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-mono">02</span>
                                        <span className="text-sm uppercase tracking-widest text-slate-400">Tus Detalles ({projectType})</span>
                                    </div>

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                                        <div className="space-y-1">
                                            <label className="text-xs uppercase text-slate-500 ml-1">Nombre</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/20 py-3 px-2 focus:border-white outline-none transition-colors font-serif text-xl"
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs uppercase text-slate-500 ml-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/20 py-3 px-2 focus:border-white outline-none transition-colors font-serif text-xl"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <label className="text-xs uppercase text-slate-500 ml-1">Mensaje (Opcional)</label>
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/20 py-3 px-2 focus:border-white outline-none transition-colors font-serif text-xl resize-none h-24"
                                                placeholder="Cuéntanos un poco más..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="mt-4 bg-white text-black py-4 px-8 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <span>Enviar Propuesta</span>
                                            <Send size={14} />
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-slate-600 uppercase tracking-wider">
                    <span>&copy; {new Date().getFullYear()} Continente Estudio</span>
                </div>
            </div>
        </section>
    );
}
