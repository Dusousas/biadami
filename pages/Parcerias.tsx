import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const parceriasData = [
    {
        imgSrc: "parcerias/parceria1.png",
        alt: "Parceria 1",
        description: "Descrição da Parceria 1: Arte de rua integrada com marcas inovadoras.",
    },
    {
        imgSrc: "parcerias/parceria2.png",
        alt: "Parceria 2",
        description: "Descrição da Parceria 2: Um trabalho colaborativo com grande impacto.",
    },
    {
        imgSrc: "parcerias/parceria1.png",
        alt: "Parceria 3",
        description: "Descrição da Parceria 3: Criatividade em sua forma mais pura.",
    },
    {
        imgSrc: "parcerias/parceria2.png",
        alt: "Parceria 4",
        description: "Descrição da Parceria 4: União entre arte e inovação.",
    },
];

export default function Parcerias() {
    return (
        <section className=''>
            <div className="maxW">

                <h1 className="text-center uppercase font-Josefin text-4xl text-BlueP font-light pt-5">
                    Grandes Parcerias, Obras Incríveis
                </h1>
                <h2 className="text-center pb-5 uppercase font-Josefin font-light text-2xl">
                    Conectando a arte de rua com grandes marcas em parcerias memoráveis.
                </h2>

                {/* CONTAINER GALERIA */}
                <div className='pb-6 '>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20} // Espaço entre os slides
                        slidesPerView={3} // Número de slides visíveis
                        breakpoints={{
                            1024: { slidesPerView: 3 }, // Para telas lg
                            768: { slidesPerView: 2 }, // Para telas md
                            640: { slidesPerView: 1 }, // Para telas sm
                        }}
                    >
                        {/* Renderizando os slides dinamicamente */}
                        {parceriasData.map((parceria, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group flex justify-center">
                                    <img
                                        className="w-[550px] h-auto"
                                        src={parceria.imgSrc}
                                        alt={parceria.alt}
                                    />
                                    <div className="absolute inset-0 w-[550px] bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <p className="text-white text-center px-4">
                                            {parceria.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
