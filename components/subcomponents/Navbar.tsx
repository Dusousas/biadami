import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Bloqueia a rolagem
        } else {
            document.body.style.overflow = 'auto'; // Permite rolar novamente
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* DESKTOP */}
            <nav className='hidden lg:block'>
                <ul className='flex gap-8 text-BlueP uppercase font-Josefin font-light text-lg'>
                    <Link href="/"><li className='cursor-pointer'>Home</li></Link>
                    <li className='cursor-pointer'>Porfolio</li>
                    <li className='cursor-pointer'>Trabalhos</li>
                    <li className='cursor-pointer'>Contatos</li>
                </ul>
            </nav>

            {/* MOBILE */}
            <nav className='lg:hidden'>
                {/* Ícone do hambúrguer */}
                <div className='flex justify-between items-center p-4'>
                    <button 
                        className='flex flex-col gap-2 z-30' 
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <FaTimes className='w-6 h-6 text-BlueP' />
                        ) : (
                            <FaBars className='w-6 h-6 text-BlueP' />
                        )}
                    </button>
                </div>

                {/* Menu de navegação (em tela cheia) */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white  z-20 text-center text-BlueP uppercase font-Josefin font-light text-lg ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <ul className='flex flex-col justify-center gap-y-10 h-full'>
                    <Link href="/"><li className='cursor-pointer py-2' onClick={toggleMenu}>Home</li></Link>
                        <li className='cursor-pointer py-2' onClick={toggleMenu}>Porfolio</li>
                        <li className='cursor-pointer py-2' onClick={toggleMenu}>Trabalhos</li>
                        <li className='cursor-pointer py-2' onClick={toggleMenu}>Contatos</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
