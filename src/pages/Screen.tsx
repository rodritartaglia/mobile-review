import { useEffect, useState } from 'react';
import './Screen.css'

function Screen() {

    const [image, setImage] = useState("./image5violet.png")

    useEffect(() => {
        const circulos = document.querySelectorAll('.circulo');

        circulos.forEach((circulo) => {
            circulo.addEventListener('click', () => {
                // Restablece el tamaño normal y otras propiedades de todos los círculos
                circulos.forEach((c) => {
                    c.classList.remove('scale-150');
                    // Restablece otras propiedades según sea necesario
                });

                // Amplía el círculo clicado y realiza otras acciones
                circulo.classList.add('scale-150');
                // Realiza otras acciones aquí, como cambiar la imagen en el futuro
            });
        });
    })



    return (


        <div>
            <div className="text-white mb-14">
                <div className="text-2xl flex flex-col justify-center items-center my-4 text-[#A0F3D6] font-black md:text-4xl md:gap-4 md:text-center">
                    <span>DISEÑO COMPACTO.</span>
                    <span>MÁS ENTRETENIMIENTO.</span>
                </div>
                <div className='md:grid md:grid-cols-3 md:grid-rows-3'>
                    <div className="flex flex-col gap-3 md:col-span-2 md:row-span-2 -z-40">
                        <div className="p-5 flex flex-col gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-2 md:gap-0 md:p-0"> {/*row2*/}
                            <div className="flex flex-col gap-2 md:row-span-2 md:p-7">
                                <span className="text-3xl font-semibold tracking-widest md:text-2xl">Rápido como ninguno</span>
                                <p className="font-kantumruy md:text-sm">A la hora de reproducir en streaming, jugar, desplazarte por la pantalla o cambiar entre aplicaciones, seguirás disfrutando de una experiencia de visualización fluida gracias a la velocidad de actualización de 120 Hz.</p>
                            </div>
                            <div className=' md:row-span-2 md:flex md:w-fit'>
                                <img src="./Divide X.svg" alt="" className="w-full md:hidden" />
                                <img src="./Divide Y.svg" alt="" className="hidden w-3 h-[80%] md:block m-auto" />
                            </div>
                            <div className="flex flex-col gap-2 md:justify-end md:mb-6 md:px-5">
                                <span className="text-3xl font-semibold tracking-widest md:text-2xl">Se acabó forzar la vista</span>
                                <p className="font-kantumruy md:hidden">Los ajustes de brillo compensan la luz exterior, las emisiones nocturnas de luz azul y el parpadeo visible de la pantalla para quienes tienen ojos más sensibles.</p>
                            </div>
                            <img src="./Divide X.svg" alt="" className='md:hidden' />
                            <div className="flex flex-col gap-2 md:mt-6 md:px-5"> {/*row3*/}
                                <span className="text-3xl font-semibold tracking-widest md:text-2xl">Sonidos más profundos</span>
                                <p className="font-kantumruy my-4 md:hidden">Emociónate todavía más con tu música favorita gracias al sonido multidimensional de Dolby Atmos®.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative my-8 bg-[url(/Ellipse6.png)] bg-cover bg-center md:row-span-3 md:bg-none z-40">
                        <img src={image} alt="" className="relative z-20 pruebaimagen md:h-full md:object-cover" />
                        {/* <img src="./image5Shadow.svg" alt="" className="absolute inset-2 z-10" /> */}
                        <img src="./Rectangulo 2.svg" alt="" className="absolute -inset-0 z-0 md:h-full md:object-cover" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 md:col-span-2">
                        <div className="flex justify-around items-center mt-16 mb-6 w-full md:mt-0 md:justify-evenly">
                            <span className="dot circulo bg-[#ADC3B4] transition-all" onClick={() => setImage("./image5green.png")}></span>
                            <span className="dot circulo scale-150 bg-[#6667AB] transition-all" onClick={() => setImage("./image5violet.png")}></span>
                            <span className="dot circulo bg-[#30292F] transition-all" onClick={() => setImage("./image5black.png")}></span>
                            <span className="dot circulo bg-[#B5B7B6] transition-all" onClick={() => setImage("./image5white.png")}></span>
                        </div>
                        <span className="font-light text-xl">Colores que marcan tendencia</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Screen