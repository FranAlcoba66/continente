"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#f5f2d8] text-black">
            {/* Background - Clean Beige */}

            {/* Content */}
            <div className="z-10 flex flex-col items-center text-center px-4">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
                >
                    <Image
                        src="/logo_transparent.png"
                        alt="Continente Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-black"
                >
                    Branding y Estrategia de Contenido
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-sans text-lg md:text-xl text-gray-800 max-w-xl mb-12 tracking-wide font-light"
                >
                    Creamos identidades digitales que se mueven a la velocidad de la cultura.
                </motion.p>

                {/* Cinematic CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="group flex items-center gap-3 px-8 py-3 border border-black hover:bg-black hover:text-white transition-all uppercase text-xs tracking-[0.2em] cursor-pointer"
                    >
                        <Play size={14} className="group-hover:fill-white" />
                        Ver Showreel
                    </button>
                </motion.div>
            </div>

            {/* Video Lightbox */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    >
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-5xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl relative"
                        >
                            {/* Placeholder for Video */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/30 font-serif text-2xl">
                                Video Showreel Placeholder
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
