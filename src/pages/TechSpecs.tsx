import './TechSpecs.css'
import { useState } from "react"
import {IconChevronUp, IconChevronDown } from "@tabler/icons-react"


function TechSpecs() {

    const [specs, setSpecs] = useState(false)

    const toggleSpecs = () => {
        setSpecs(!specs)
    }


    return (
        <div className="flex flex-col items-center">
            <button id="specsButton" className="specs-button bg-gradient-to-b from-[rgba(117,177,156,.5)] rounded-2xl h-14 w-[80%] text-2xl tracking-wider text-[#75F3A7] flex justify-center items-center text" onClick={toggleSpecs}><span>Especificaciones</span> {specs ? <IconChevronUp/> : <IconChevronDown/>}</button>
            {specs && <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="tableTitle">Rendimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tableSubtitle">Sistema Operativo</td>
                            <td className="tableSubtitle">Sensores</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">Android™ 12 con acceso sencillo a las aplicaciones de Google que más utilizas</td>
                            <td className="tableParagraph">
                                Proximidad <br />
                                Luz ambiental Acelerómetro <br />
                                Sensor SAR Magnetómetro (brújula) <br />
                                Giroscopio
                            </td>
                        </tr>
                        <tr>
                            <td className="tableSubtitle">Memoria (RAM)</td>
                            <td className="tableSubtitle">Procesador</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">8GB</td>
                            <td className="tableParagraph">Snapdragon™ 695 5G2</td>
                        </tr>
                        <tr>
                            <td className="tableSubtitle">Seguridad</td>
                            <td className="tableSubtitle">Almacenamiento interno</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">
                                Lector de huellas en pantalla<br />
                                Desbloqueo facial
                            </td>
                            <td className="tableParagraph">128 GB incorporados</td>
                        </tr>
                    </tbody>
                </table>
                <img src="./Divide X.svg" alt="" className="m-auto w-[90%] h-[3px] object-cover" />
                <table className="table">
                    <thead>
                        <tr>
                            <th className="tableTitle">Batería</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tableSubtitle">Tamaño de la batería</td>
                            <td className="tableSubtitle">Carga</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">4020 mAh</td>
                            <td className="tableParagraph">
                                Carga TurboPower™ de 68W<br />
                                Carga inalámbrica de 5 W
                            </td>
                        </tr>
                        <tr>
                            <td className="tableSubtitle">Duración de la batería</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">Batería para todo el día</td>
                        </tr>
                    </tbody>
                </table>
                <img src="./Divide X.svg" alt="" className="m-auto w-[90%] h-[3px] object-cover" />
                <table className="table">
                    <thead>
                        <tr>
                            <th className="tableTitle">Pantalla</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" font-bold">Tamaño de la pantalla</td>
                            <td className=" font-bold">Resolución</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">Pantalla pOLED FHD+ de 6,28" | 120 Hz</td>
                            <td className="tableParagraph">
                                FHD+ (2400×1080) | 419 ppp
                            </td>
                        </tr>
                        <tr>
                            <td className="tableSubtitle">Tecnología de la pantalla</td>
                            <td className="tableSubtitle">Relación pantalla-cuerpo</td>
                        </tr>
                        <tr>
                            <td className="tableParagraph">
                                pOLED 10-bit DCI-P3<br />
                                Frecuencia de actualización de 120 Hz<br /><br />

                                Velocidad táctil: 240 Hz</td>
                            <td className="tableParagraph">95,6 %</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableSubtitle">Relación de aspecto</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableParagraph">20:9</td>
                        </tr>
                    </tbody>
                </table >
                <img src="./Divide X.svg" alt="" className="m-auto w-[90%] h-[3px] object-cover" />
            </div>
            }
        </div>
    )
}

export default TechSpecs