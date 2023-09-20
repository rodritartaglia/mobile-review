import CameraBlock from "../components/CameraBlock"

function Camera() {
  return (
    <div className="text-white flex flex-col gap-10 mt-6">
      <div>
        <div className="flex flex-col gap-4 p-2 text-center">
          <h4 className="text-[1.75rem]">Cámaras minimalistas, fotos detalladísimas</h4>
          <p className="text-sm">Disfruta de la fotografía <span className="text-primary font-semibold">edge</span> y de las ventajas de hacer fotos muy nítidas en condiciones de poca o mucha luz, tanto de día como de noche.</p>
          <div className="flex flex-col my-4 mx-auto">
            <span className="w-72 p-1.5 rounded-xl cursor-pointer text-center hover:bg-primary">Principal de 64 MP + OIS</span>
            <span className="w-72 p-1.5 rounded-xl cursor-pointer text-center hover:bg-primary">Ultra gran angular de 13 MP y Macro</span>
            <span className="w-72 p-1.5 rounded-xl cursor-pointer text-center hover:bg-primary">Cámara para selfies de 32 MP</span>
          </div>
        </div>
        <img src="src/assets/camera1.jpg" alt="" className="md:w-2/3 md:m-auto" />
      </div>
      <CameraBlock title="PERSPECTIVA DE ALTA RESOLUCIÓN" description="Gracias a la cámara de 64 MP, tus fotos tendrán siempre una calidad definida, vívida y nítida, incluso en condiciones de poca luz." imageSrc="src/assets/camera2.jpg" reverse={false}/>
      <CameraBlock title="ENCUADRA TODO LO QUE VES" description="Disfruta de un encuadre cuatro veces mayor con las fotos ultra gran angular, haz primeros planos cuatro veces más cerca y ajusta la profundidad focal para hacer retratos creativos." imageSrc="src/assets/camera3.jpg" reverse={true}/>
      <CameraBlock title="SELFIES INCREÍBLES" description="Los selfies de alta resolución con tecnología Quad Pixel combinan cuatro píxeles en uno para mejorar la sensibilidad en condiciones de poca luz." imageSrc="src/assets/camera4.jpg"  reverse={false}/>
      <hr className="bg-primary h-0.5 border-none w-[85%] mx-auto mt-10" />
    </div>
  )
}

export default Camera