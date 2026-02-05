export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-[#050505] text-white min-h-[80vh] flex flex-col justify-between">
            <div className="max-w-[1400px] w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

                {/* Main CTA */}
                <div className="flex flex-col">
                    <h2 className="text-sm font-sans uppercase tracking-[0.2em] mb-8 text-slate-500">
                        Contacto
                    </h2>
                    <h3 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-8">
                        Hablemos
                    </h3>
                    <a
                        href="mailto:hello@continente.agency"
                        className="text-2xl md:text-4xl font-sans font-light hover:text-slate-300 transition-colors border-b border-white/20 pb-2 self-start"
                    >
                        hello@continente.agency
                    </a>
                </div>

                {/* Socials / Info */}
                <div className="flex flex-col gap-8 text-sm font-sans uppercase tracking-widest text-slate-400">
                    <div className="flex flex-col gap-2">
                        <span className="text-white mb-2 text-xs opacity-50">Redes</span>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Behance</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-white mb-2 text-xs opacity-50">Ubicación</span>
                        <span>Buenos Aires, AR</span>
                        <span>Madrid, ES</span>
                    </div>
                </div>

            </div>

            {/* Footer Line */}
            <div className="max-w-[1400px] w-full mx-auto px-6 mt-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-slate-600 uppercase tracking-wider">
                <span>&copy; {new Date().getFullYear()} Continente Estudio</span>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Privacidad</span>
                    <span>Términos</span>
                </div>
            </div>
        </section>
    );
}
