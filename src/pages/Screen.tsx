import { Fade } from "react-awesome-reveal"

function Screen() {

    return (

        <div className="bg-[url(/background4.png)] bg-contain bg-no-repeat bg-center">
            <div className="text-white mb-14 mx-4">
                <Fade cascade={true} triggerOnce={true}>
                    <h3 className="text-4xl my-4 md:text-center">DISEÑO COMPACTO. MÁS ENTRETENIMIENTO.</h3>
                    <img src="/screen.jpg" alt="" className="md:w-2/3 md:m-auto" />
                    <div className="flex flex-col gap-3 divide-y">
                        <div className="p-5 flex flex-col gap-10"> {/*row1*/}
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl">Precisión de colores de calidad cinematográfica</span>
                                <p className="text-sm">La pantalla OLED de 6.28” muestra negros más intensos y colores más vivos, proporcionando un contraste infinito y un brillo mejorado.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl">Potentes altavoces estéreo</span>
                                <p className="text-sm">Siente los sonidos que te encantan más cerca gracias a unos bajos mejorados, voces más nítidas y una mayor amplificación.</p>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-10"> {/*row2*/}
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl">Rápido como ninguno</span>
                                <p className="text-sm">A la hora de reproducir en streaming, jugar, desplazarte por la pantalla o cambiar entre aplicaciones, seguirás disfrutando de una experiencia de visualización fluida gracias a la velocidad de actualización de 120 Hz.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl">Se acabó forzar la vista</span>
                                <p className="text-sm">Los ajustes de brillo compensan la luz exterior, las emisiones nocturnas de luz azul y el parpadeo visible de la pantalla para quienes tienen ojos más sensibles.</p>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-2"> {/*row3*/}
                            <span className="text-2xl">Sonidos más profundos</span>
                            <p className="text-sm">Emociónate todavía más con tu música favorita gracias al sonido multidimensional de Dolby Atmos®.</p>
                        </div>
                    </div>
                    <hr className="bg-primary h-0.5 border-none w-[85%] mx-auto mt-10" />
                </Fade>
            </div>
        </div>

    )
}

export default Screen