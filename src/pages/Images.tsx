import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS del carrusel

const CarouselComponent: React.FC = () => {
    return (
        <div>
            <div className='mb-12 p-6 relative h-full w-full'>
                <img src="./Rectangulo.svg" alt="" className='absolute inset-0 m-auto w-full h-full' />
                <Carousel showThumbs={false} selectedItem={1} emulateTouch={true} showStatus={false}>
                    <div>
                        <img src="/image1.png" alt="Imagen 1" />
                    </div>
                    <div>
                        <img src="/image2.png" alt="Imagen 2" />
                    </div>
                    <div>
                        <img src="/image3.png" alt="" />
                    </div>
                    {/* Agrega más elementos <div> para más imágenes */}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselComponent;
