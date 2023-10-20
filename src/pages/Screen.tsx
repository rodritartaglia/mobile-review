function Screen() {

    return (

        <div>
            <div className="text-white mb-14 mx-4">
                <div className="text-2xl flex flex-col justify-center items-center my-4 text-[#A0F3D6] font-black md:text-center">
                    <span>DISEÑO COMPACTO.</span>
                    <span>MÁS ENTRETENIMIENTO.</span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="p-5 flex flex-col gap-6"> {/*row2*/}
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-semibold tracking-widest">Rápido como ninguno</span>
                            <p className="font-kantumruy">A la hora de reproducir en streaming, jugar, desplazarte por la pantalla o cambiar entre aplicaciones, seguirás disfrutando de una experiencia de visualización fluida gracias a la velocidad de actualización de 120 Hz.</p>
                        </div>
                        <img src="./Divide X.svg" alt="" />
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-semibold tracking-widest">Se acabó forzar la vista</span>
                            <p className="font-kantumruy">Los ajustes de brillo compensan la luz exterior, las emisiones nocturnas de luz azul y el parpadeo visible de la pantalla para quienes tienen ojos más sensibles.</p>
                        </div>
                        <img src="./Divide X.svg" alt="" />
                        <div className="flex flex-col gap-2"> {/*row3*/}
                            <span className="text-3xl font-semibold tracking-widest">Sonidos más profundos</span>
                            <p className="font-kantumruy my-4">Emociónate todavía más con tu música favorita gracias al sonido multidimensional de Dolby Atmos®.</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="./image5.png" alt="" className="relative z-20"/>
                    <img src="./image5Shadow.svg" alt="" className="absolute inset-2 z-10"/>
                    <img src="./Rectangulo 2.svg" alt="" className="absolute -inset-0 z-0"/>
                </div>
                <div className="flex justify-around items-center">
                    <span className="dot bg-[#ADC3B4] shadow-red-500"></span>
                    <span className="dot selected bg-[#6667AB] shadow-red-500"></span>
                    <span className="dot bg-[#30292F] shadow-red-500"></span>
                    <span className="dot bg-[#B5B7B6] shadow-red-500"></span>
                </div>
            </div>
        </div>

    )
}

export default Screen