import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS del carrusel

const CarouselComponent: React.FC = () => {
    return (
        <div>
            <div className='p-6 md:hidden'>
                <Carousel>
                    <div>
                        <img src="src/assets/image1.jpg" alt="Imagen 1" />
                    </div>
                    <div>
                        <img src="src/assets/image2.jpg" alt="Imagen 2" />
                    </div>
                    <div>
                        <img src="src/assets/image3.jpg" alt="" />
                    </div>
                    {/* Agrega más elementos <div> para más imágenes */}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselComponent;
