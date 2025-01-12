import React from 'react';

const images = [
    { src: "h12-port-img-1-1100x1100.jpg", classes: "col-span-2 row-span-2", link: "/pagina-1", text1: "Ir para a Página 1", text2: "Texto adicional 1" },
    { src: "h12-port-img-2.jpg", classes: "col-start-3", link: "/pagina-2", text1: "Ir para a Página 2", text2: "Texto adicional 2" },
    { src: "h12-port-img-3.jpg", classes: "col-start-4", link: "/pagina-3", text1: "Ir para a Página 3", text2: "Texto adicional 3" },
    { src: "h12-port-img-4.jpg", classes: "col-start-5", link: "/pagina-4", text1: "Ir para a Página 4", text2: "Texto adicional 4" },
    { src: "h12-port-img-5.jpg", classes: "col-start-3 row-start-2", link: "/pagina-5", text1: "Ir para a Página 5", text2: "Texto adicional 5" },
    { src: "h12-port-img-6.jpg", classes: "col-start-4 row-start-2", link: "/pagina-6", text1: "Ir para a Página 6", text2: "Texto adicional 6" },
    { src: "h12-port-img-7.jpg", classes: "col-start-5 row-start-2", link: "/pagina-7", text1: "Ir para a Página 7", text2: "Texto adicional 7" },
    { src: "h12-port-img-13-1100x1100.jpg", classes: "row-start-3", link: "/pagina-8", text1: "Ir para a Página 8", text2: "Texto adicional 8" },
    { src: "h12-port-img-3.jpg", classes: "row-start-3", link: "/pagina-9", text1: "Ir para a Página 9", text2: "Texto adicional 9" },
    { src: "h12-port-img-12-550x1100.jpg", classes: "row-span-2 row-start-3 h-full", link: "/pagina-10", text1: "Social Media", text2: "Texto adicional 10" },
    { src: "h12-port-img-13-1100x1100.jpg", classes: "col-span-2 row-span-2 row-start-3", link: "/pagina-11", text1: "Ir para a Página 11", text2: "Texto adicional 11" },
    { src: "h12-port-img-6.jpg", classes: "row-start-4", link: "/pagina-12", text1: "Ir para a Página 12", text2: "Texto adicional 12" },
    { src: "h12-port-img-13-1100x1100.jpg", classes: "row-start-4", link: "/pagina-13", text1: "Ir para a Página 13", text2: "Texto adicional 13" }
];

export default function Main() {
    return (
        <section className="">
            <div className="maxW">
                {/* Layout flexível para telas menores e grid para lg */}
                <div className="flex justify-center flex-wrap gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-4">
                    {images.map((image, index) => (
                        <div key={index} className={`relative ${image.classes}`}>
                            <img
                                className="w-[500px] lg:w-full lg:h-full object-cover"
                                src={image.src}
                                alt={`Image ${index + 1}`}
                            />
                            {/* Quadrado branco com dois textos e link aparecendo ao passar o mouse */}
                            <a href={image.link} className="absolute inset-0 bg-white opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center flex-col">
                                <span className="text-black font-semibold mb-2">{image.text1}</span>
                                <span className="text-black font-semibold">{image.text2}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
