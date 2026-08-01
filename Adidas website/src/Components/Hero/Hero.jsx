import React from 'react'
import Cover from '../../assets/images/cover.png'
import RightArrow from '../../assets/icons/right-arrow.png'

function Hero() {
    return (
        <div 
        style={{ backgroundImage: `url(${Cover})` }}
        className="h-screen w-full bg-cover bg-center bg-no-repeat">

            <h1 className="pt-40 pl-16 text-6xl font-[700] bg-gradient-to-r from-red-500 via-black to-black bg-clip-text text-transparent">
            ADICLUB <br /> IS SHOWING OFF.
            </h1>

            <p className='pl-16 pt-5 text-2xl text-white'>Exclusive releases for our members and more ways <br />to unlock those things that you love.</p>

            <p className='pl-16 pt-8'><a href="#" className='text-white font-[800] text-3xl'><img src={RightArrow} alt="right-arrow" className='inline-block'/> SEE MORE</a></p>

            <p className='pl-16 pt-8'><a href="#" className='text-white font-[800] text-3xl'><img src={RightArrow} alt="right-arrow" className='inline-block'/> BUY NOW</a></p>
        </div>
    )
}

export default Hero
