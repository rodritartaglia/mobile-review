function Navbar() {
    return (
        <nav>
            <ul className={`flex flex-col absolute bg-[#191919] -top-96 translate-y-96 pt-20 h-full w-screen -ml-4 left-0 -z-10 text-center`}>
                <li className="bg-[#191919] p-6 text-xl border-b-2 border-gray-400">Galeria</li>
                <li className="bg-[#191919] p-6 text-xl border-b-2 border-gray-400">Caracteristicas</li>
                <li className="bg-[#191919] p-6 text-xl">Especificaciones</li>
            </ul>
        </nav>
    )
}

export default Navbar