import React from 'react';

export default function Quadros() {
    return (
        <>
            <section className='py-8'>
                <div className=' mx-auto px-4'>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-4">
                        <div className=''>
                            <img className='w-full h-full object-cover' src="quadros/img-5.jpg" alt="" />
                        </div>

                        <div className="row-span-2 col-span-1 sm:col-span-1 lg:col-start-1 lg:row-start-2">
                            <img className='w-full h-full object-cover' src="quadros/Portfolio-2.jpg" alt="" />
                        </div>

                        <div className="row-span-2 col-span-1 sm:col-span-1 lg:col-start-2 lg:row-start-1">
                            <img className='w-full h-full object-cover' src="quadros/Portfolio-2.jpg" alt="" />
                        </div>

                        <div className="row-span-1 col-span-1 sm:col-span-1 lg:col-start-2 lg:row-start-3">
                            <img className='w-full h-full object-cover' src="quadros/Portfolio-5.jpg" alt="" />
                        </div>

                        <div className="col-span-1 sm:col-span-1 lg:col-start-3 lg:row-start-1">
                            <img className='w-full h-full object-cover' src="quadros/Portfolio-3.jpg" alt="" />
                        </div>

                        <div className="col-span-1 sm:col-span-1 lg:col-start-3 lg:row-start-2">
                            <img className='w-full h-full object-cover' src="quadros/img-5.jpg" alt="" />
                        </div>

                        <div className="col-span-1 sm:col-span-1 lg:col-start-3 lg:row-start-3">
                            <img className='w-full h-full object-cover' src="quadros/Portfolio-3.jpg" alt="" />
                        </div>

                        <div className="row-span-3 col-span-1 sm:col-span-1 lg:col-start-4 lg:row-start-1">
                            <img className='w-full h-full object-cover' src="quadros/Portfolio-4.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
