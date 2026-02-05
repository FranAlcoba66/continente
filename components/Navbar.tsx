import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
            <div className="text-xl font-display tracking-widest font-bold">
                <Link href="/">CONTINENTE</Link>
            </div>
            <ul className="flex space-x-8 font-sans text-sm tracking-wide uppercase opacity-80">
                <li className="hover:opacity-100 transition-opacity duration-300">
                    <Link href="#work">Proyectos</Link>
                </li>
                <li className="hover:opacity-100 transition-opacity duration-300">
                    <Link href="#services">Servicios</Link>
                </li>
                <li className="hover:opacity-100 transition-opacity duration-300">
                    <Link href="#process">Proceso</Link>
                </li>
                <li className="hover:opacity-100 transition-opacity duration-300">
                    <Link href="#studio">Estudio</Link>
                </li>
                <li className="hover:opacity-100 transition-opacity duration-300">
                    <Link href="#contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
