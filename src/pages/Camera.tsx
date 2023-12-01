import FeatureCard from "../components/FeatureCard"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';

function Camera() {
  return (
    <div className="">
      <div className="text-black flex flex-col gap-10 mt-6">
        <div className="relative overflow-hidden">
          <img src="/CameraInterseccion.svg" alt="" className="w-full -z-10" />
          <div className="flex flex-col gap-4 px-7 mt-20 absolute top-0 z-10">
            <h4 className="text-2xl font-bold">Cámaras minimalistas, fotos detalladísimas</h4>
            <p className="font-kantumruy text-sm">Disfruta de la fotografía <span className="text-primary font-semibold">edge</span> y de las ventajas de hacer fotos muy nítidas en condiciones de poca o mucha luz, tanto de día como de noche.</p>
            <div className="flex flex-col mx-auto space-y-2 text-white items-center">
              <span className="bg-[rgba(25,25,25,0.4)] w-[90%] p-1.5 rounded-2xl cursor-pointer text-center hover:bg-[#191919]">Principal de 64 MP + OIS</span>
              <span className="bg-[rgba(25,25,25,0.4)] w-[90%] p-1.5 rounded-2xl cursor-pointer text-center hover:bg-[#191919]">Ultra gran angular de 13 MP y Macro</span>
              <span className="bg-[rgba(25,25,25,0.4)] w-[90%] p-1.5 rounded-2xl cursor-pointer text-center hover:bg-[#191919]">Cámara para selfies de 32 MP</span>
            </div>
          </div>
          <div>
          </div>
          {/* <img src="/Camera.png" alt="" className="absolute -bottom-4 scale-95 -right-4 w-full z-10" /> */}
        </div>
        <div>
          <Swiper
          slidesPerView={1}
          >
            <SwiperSlide><FeatureCard title="Tu teléfono. Tu experiencia." description="Personalízalo todo eligiendo entre varios colores Pantone, fuentes y formas de los iconos. " imageSrc="/image8.png" /></SwiperSlide>
            <SwiperSlide><FeatureCard title="ENCUADRA TODO LO QUE VES" description="Disfruta de un encuadre cuatro veces mayor con las fotos ultra gran angular, haz primeros planos cuatro veces más cerca y ajusta la profundidad focal para hacer retratos creativos." imageSrc="/camera3.jpg" /></SwiperSlide>
            <SwiperSlide><FeatureCard title="SELFIES INCREÍBLES" description="Los selfies de alta resolución con tecnología Quad Pixel combinan cuatro píxeles en uno para mejorar la sensibilidad en condiciones de poca luz." imageSrc="/camera4.jpg" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Camera