import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Apex FinTech",
        category: "Identidad de Marca",
        image: "/project_branding.png",
        className: "col-span-1 md:col-span-2 row-span-2 h-[600px]",
    },
    {
        id: 2,
        title: "Lumina",
        category: "Diseño de Movimiento",
        image: "/project_motion.png",
        className: "col-span-1 h-[400px]",
    },
    {
        id: 3,
        title: "Vortex",
        category: "Estrategia Social",
        image: "/project_social.png",
        className: "col-span-1 h-[400px]",
    },
    {
        id: 4,
        title: "Echo Valley",
        category: "Presentaciones Corporativas",
        image: "/about_image.png",
        className: "col-span-1 md:col-span-2 h-[500px]",
    },
];

export default function Projects() {
    return (
        <section id="work" className="py-32 px-4 bg-black text-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                    <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
                        Proyectos Destacados
                    </h2>
                    <p className="font-sans text-slate-400 text-sm uppercase tracking-widest mt-4 md:mt-0">
                        (2024 — Presente)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`relative group overflow-hidden ${project.className} bg-gray-900 cursor-pointer`}
                        >
                            {/* Static Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-0"
                            />

                            {/* Video Placeholder (Revealed on Hover) */}
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <span className="text-white/20 font-serif text-lg tracking-widest uppercase">
                                    Video Preview
                                </span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                                <h3 className="text-3xl font-serif italic mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                                <p className="font-sans text-xs uppercase tracking-widest text-white/70 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
