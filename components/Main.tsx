import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const images = [
    { src: "h12-port-img-1-1100x1100.jpg", classes: "col-span-2 row-span-2", link: "/Quadros", text1: "Quadros", text2: "Telas / Pinturas " }, //QUADROS
    { src: "h12-port-img-2.jpg", classes: "col-start-3", link: "/pagina-2", text1: "Murais", text2: "A Arte que Acontece nas Paredes" }, //MURAIS
    { src: "h12-port-img-3.jpg", classes: "col-start-4", link: "/Parcerias", text1: "Parcerias", text2: "Criando Juntas, Transformando Marcas" }, //PARCERIA
    { src: "h12-port-img-4.jpg", classes: "col-start-5", link: "/SOBRE", text1: "Sobre", text2: "Minha Jornada Artística" }, //SOBRE
    { src: "h12-port-img-5.jpg", classes: "col-start-3 row-start-2", link: "/pagina-5", text1: "BIADAMI.ART", text2: "Levando arte por onde passo" }, //FRASE
    { src: "h12-port-img-6.jpg", classes: "col-start-4 row-start-2", link: "/pagina-6", text1: "Contato", text2: "Solicite um Orçamento" }, //CONTATO
    { src: "h12-port-img-7.jpg", classes: "col-start-5 row-start-2", link: "/pagina-7", text1: "Fashion", text2: "Arte através das roupas" }, //ROUPAS
    { src: "h12-port-img-13-1100x1100.jpg", classes: "row-start-3", link: "/pagina-8", text1: "Arte infantil", text2: "Transformando espaços e roupas em mundos de imaginação para crianças." }, //INFANTIL
    { src: "h12-port-img-3.jpg", classes: "row-start-3", link: "/pagina-9", text1: "Depoimentos", text2: "Depoimentos de nossos apreciadores" }, //DEPOIMENTOS
    { src: "h12-port-img-12-550x1100.jpg", classes: "row-span-2 row-start-3 h-full", link: null, text1: "Redes Sociais", text2: "Descubra nossas obras e inspirações" }, //Social Media
    { src: "h12-port-img-13-1100x1100.jpg", classes: "col-span-2 row-span-2 row-start-3", link: "/Portfolio", text1: "Portfólio", text2: "Explorando as criações mais recentes que refletem a evolução artística e a paixão pela pintura." }, //Portfolio
    { src: "h12-port-img-6.jpg", classes: "row-start-4", link: "/pagina-12", text1: "Ir para a Página 12", text2: "Texto adicional 12" },
    { src: "h12-port-img-13-1100x1100.jpg", classes: "row-start-4", link: "/Sobre", text1: "", text2: "" } 
];

export default function Main() {
    return (
        <section className="">
            <div className="maxW">
                {/* Layout flexível para telas menores e grid para lg */}
                <div className="flex justify-center flex-wrap gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-4 cursor-pointer">
                    {images.map((image, index) => (
                        <div key={index} className={`relative ${image.classes}`}>
                            <img
                                className="w-[500px] lg:w-full lg:h-full object-cover"
                                src={image.src}
                                alt={`Image ${index + 1}`}
                            />

                            {/* Verificar se é o item "Redes Sociais" ou "BIADAMI.ART" */}
                            {(image.text2 === "Descubra nossas obras e inspirações") ? (
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <div
                                        className="bg-white flex flex-col items-center justify-center"
                                        style={{
                                            width: 'calc(100% - 40px)', // 10px de padding em cada lado
                                            height: 'calc(100% - 40px)', // 10px de padding em cada lado
                                            padding: '10px', // padding interno
                                        }}
                                    >
                                        
                                        <span className="text-BlueP font-semibold text-2xl mb-1 font-Josefin">{image.text1}</span>
                                        <span className="text-black font-light text-xl font-Josefin text-center">{image.text2}</span>
                                        <div className="flex gap-4 mt-4">
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <FaFacebook className="text-blue-600 hover:text-blue-800 text-2xl" />
                                            </a>
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
                                            </a>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <FaTwitter className="text-blue-400 hover:text-blue-600 text-2xl" />
                                            </a>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <FaTiktok className="text-black hover:text-blue-600 text-2xl" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ) : (image.text2 === "Levando arte por onde passo") ? (
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <div
                                        className="bg-white flex flex-col items-center justify-center"
                                        style={{
                                            width: 'calc(100% - 40px)', // 10px de padding em cada lado
                                            height: 'calc(100% - 40px)', // 10px de padding em cada lado
                                            padding: '10px', // padding interno
                                        }}
                                    >
                                        <span className="text-BlueP font-semibold text-2xl mb-1 font-Josefin">{image.text1}</span>
                                        <span className="text-black font-light text-xl font-Josefin text-center">{image.text2}</span>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    href={image.link || ""}
                                    className="absolute inset-0 flex justify-center items-center transition-opacity opacity-0 hover:opacity-100"
                                >
                                    <div
                                        className="bg-white flex flex-col items-center justify-center"
                                        style={{
                                            width: 'calc(100% - 40px)', // 10px de padding em cada lado
                                            height: 'calc(100% - 40px)', // 10px de padding em cada lado
                                            padding: '10px', // padding interno
                                        }}
                                    >
                                        <span className="text-BlueP font-semibold text-2xl mb-1 font-Josefin">{image.text1}</span>
                                        <span className="text-black font-light text-xl font-Josefin text-center">{image.text2}</span>
                                    </div>
                                </a>
                            )}
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}
