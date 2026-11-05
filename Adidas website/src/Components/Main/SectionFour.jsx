import React from 'react'
import Man from '../../assets/images/man.png';
import ManBg from '../../assets/images/man-bg.png';

function SectionFour() {
    return (
        <section className="relative w-full overflow-hidden bg-[#7a3b00] lg:h-screen lg:bg-transparent">
            {/* Images: a normal block on phone/tablet, full-section layers on desktop */}
            <div className="relative h-[260px] sm:h-96 md:h-[28rem] lg:static lg:h-0">
                <img
                    src={ManBg}
                    alt=""
                    className="block w-full h-auto lg:absolute lg:left-0 lg:top-[10%] lg:h-[80%] lg:object-fill"
                />
                <img
                    src={Man}
                    alt="man"
                    className="absolute bottom-0 left-1/2 h-[90%] w-auto max-w-none -translate-x-1/2 lg:bottom-auto lg:top-[10%] lg:h-[80%] lg:w-[80%] lg:object-fill"
                />
            </div>

            {/* Text: stacked on phone, 2 columns on tablet, 3 columns on desktop */}
            <div className="relative z-10 grid grid-cols-1 gap-6 px-6 py-8 md:grid-cols-2 md:gap-8 md:px-10 lg:flex lg:h-full lg:justify-between lg:gap-0 lg:px-16 lg:pb-0 lg:pt-40">
                <div className="space-y-4 lg:w-[30%] lg:space-y-8">
                    <p className="font-light text-base md:text-lg text-white text-left">
                        At adidas, we believe that sports have the power to transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individuals who share the same passion for excellence.
                    </p>
                    <p className="font-light text-base md:text-lg text-white text-left">
                        We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals.
                    </p>
                </div>

                <div className="order-2 space-y-4 lg:order-3 lg:w-[30%] lg:space-y-8">
                    <p className="font-light text-base md:text-lg text-white text-left lg:text-right">
                        Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us. Our products are designed to meet your needs, no matter what your preferred form of exercise may be.
                    </p>
                    <p className="font-light text-base md:text-lg text-white text-left lg:text-right">
                        We're not just present on the playing field, either. You'll find the three stripes at music festivals, on stages, and in the city streets.
                    </p>
                </div>

                <p className="order-3 text-center font-semibold text-lg md:col-span-2 lg:order-2 lg:col-span-1 lg:w-[30%] lg:self-end lg:pb-[13%] lg:text-xl text-white">
                    To improve performances. Improve lives and change the world.
                </p>
            </div>
        </section>
    )
}

export default SectionFour
