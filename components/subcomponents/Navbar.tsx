import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className=''>
                <ul className='flex gap-4 text-[#374c9f] uppercase font-Josefin font-light text-lg'>
                    <li>Home</li>
                    <li>Porfolio</li>
                    <li>Trabalhos</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </>
    );
}