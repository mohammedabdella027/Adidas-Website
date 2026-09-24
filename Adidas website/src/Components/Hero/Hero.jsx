import React from 'react'
import Cover from '../../assets/images/cover.png'
import RightArrow from '../../assets/icons/right-arrow.png'

function Hero() {
    return (
        <section
            style={{ backgroundImage: `url(${Cover})` }}
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center gap-5 sm:gap-6 px-6 sm:px-10 lg:px-16 py-24 md:py-32"
        >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-red-500 via-black to-black bg-clip-text text-transparent">
                ADICLUB <br /> IS SHOWING OFF.
            </h1>

            <p className="max-w-xl lg:max-w-none text-base sm:text-xl lg:text-2xl text-white">
                Exclusive releases for our members and more ways
                <br className="hidden lg:block" />
                {' '}to unlock those things that you love.
            </p>

            <div className="flex flex-col items-start gap-4 sm:gap-6 mt-2">
                <a href="#" className="flex items-center gap-3 text-white font-extrabold text-xl sm:text-2xl lg:text-3xl">
                    <img src={RightArrow} alt="right-arrow" className="h-6 sm:h-8 lg:h-10 w-auto" />
                    SEE MORE
                </a>

                <a href="#" className="flex items-center gap-3 text-white font-extrabold text-xl sm:text-2xl lg:text-3xl">
                    <img src={RightArrow} alt="right-arrow" className="h-6 sm:h-8 lg:h-10 w-auto" />
                    BUY NOW
                </a>
            </div>
        </section>
    )
}

export default Hero