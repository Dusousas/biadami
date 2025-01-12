import React from 'react';
import Navbar from './subcomponents/Navbar';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <section className='py-10 bg-white'>
                <div className='flex items-center maxW justify-between'>
                    <span  className='text-black font-Josefin cursor-pointer uppercase text-xl items-center z-30'>
                        <Link href="/">
                            <h1 className='font-semibold'>Biadami<span className='text-[#374c9f]'>.ART</span></h1>
                        </Link>
                    </span>
                    <div>
                    <Navbar />
                    </div>
                    
                </div>
            </section>
        </>
    );
}