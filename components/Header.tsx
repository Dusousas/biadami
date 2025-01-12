import React from 'react';
import Navbar from './subcomponents/Navbar';

export default function Header() {
    return (
        <>
            <section className='py-10 bg-white'>
                <div className='flex justify-between items-center maxW'>
                    <a href='' className='text-black font-Josefin cursor-pointer uppercase text-xl items-center'>
                        <h1 className='font-semibold'>Biadami<span className='text-[#374c9f]'>.ART</span></h1>
                    </a>
                    <Navbar />
                </div>
            </section>
        </>
    );
}