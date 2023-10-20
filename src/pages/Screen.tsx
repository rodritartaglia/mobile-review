function Screen() {

    return (

        <div>
            <div className="text-white mb-14 mx-4">
                <div className="text-2xl flex flex-col justify-center items-center my-4 text-[#A0F3D6] font-black md:text-center">
                    <span>DISEÑO COMPACTO.</span>
                    <span>MÁS ENTRETENIMIENTO.</span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="p-5 flex flex-col gap-10"> {/*row2*/}
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-semibold tracking-widest">Rápido como ninguno</span>
                            <p className="font-kantumruy my-4">A la hora de reproducir en streaming, jugar, desplazarte por la pantalla o cambiar entre aplicaciones, seguirás disfrutando de una experiencia de visualización fluida gracias a la velocidad de actualización de 120 Hz.</p>
                        </div>
                        <img src="./Divide X.svg" alt=""/>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-semibold tracking-widest">Se acabó forzar la vista</span>
                            <p className="font-kantumruy my-4">Los ajustes de brillo compensan la luz exterior, las emisiones nocturnas de luz azul y el parpadeo visible de la pantalla para quienes tienen ojos más sensibles.</p>
                        </div>
                        <img src="./Divide X.svg" alt=""/>
                        <div className="flex flex-col gap-2"> {/*row3*/}
                            <span className="text-3xl font-semibold tracking-widest">Sonidos más profundos</span>
                            <p className="font-kantumruy my-4">Emociónate todavía más con tu música favorita gracias al sonido multidimensional de Dolby Atmos®.</p>
                        </div>
                    </div>
                </div>
                <hr className="bg-primary h-0.5 border-none w-[85%] mx-auto mt-10" />
            </div>
        </div>

    )
}

export default Screen