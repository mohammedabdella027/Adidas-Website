import React from "react";
import Girl from '../../assets/images/girl.png';
import Black from '../../assets/images/black.png';
import RightArrow from '../../assets/icons/right-arrow.png';
import Down from '../../assets/icons/down.png';

function SectionTwo() {
    return (
        <div className="px-4 py-6 md:px-6">
            <section
                style={{ backgroundImage: `url(${Black})` }}
                className="relative grid grid-cols-1 md:grid-cols-[40%_1fr] lg:block w-full max-w-[1175px] mx-auto overflow-hidden bg-cover bg-center rounded-[40px] md:rounded-[60px] lg:rounded-[110px] lg:min-h-screen"
            >
                {/* Image box: top on phone, left column on tablet, overlay on desktop */}
                <div className="relative h-96 md:h-auto lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[35%]">
                    <img
                        src={Girl}
                        alt="girl"
                        className="absolute inset-0 w-full h-full object-cover object-[center_65%] md:object-[center_60%] lg:object-center"
                    />
                </div>

                <div className="relative px-6 py-8 md:px-8 md:py-12 lg:p-0 lg:pt-20 lg:pb-16">
                    <h1 className="font-bold text-4xl lg:text-6xl text-white lg:pl-[13%]">
                        OUTFITS FOR <br />
                        <span className="text-[#EDE734]">BENEFITS</span>
                    </h1>

                    <div className="lg:pl-[39%] lg:pr-6">
                        <p className="mt-6 lg:mt-10 font-medium text-base md:text-lg lg:text-2xl text-white">
                            <span className="text-[#EDE734]">60% OFF + free shipping</span>: only for adiClub members.
                        </p>

                        <p className="mt-4 lg:mt-8 font-medium text-base md:text-lg lg:text-2xl text-white">
                            Check your account and start buying for benefits on{" "}
                            <span className="text-[#EDE734]">adiWeek.</span>
                        </p>

                        <div className="flex flex-wrap gap-x-10 gap-y-4 lg:gap-x-24 mt-8 lg:mt-16">
                            <a href="#" className="text-white font-[800] text-xl md:text-2xl lg:text-3xl">
                                <img src={RightArrow} alt="right-arrow" className="inline-block h-6 lg:h-8 w-auto" /> BUY NOW
                            </a>

                            <a href="#" className="text-white font-[800] text-xl md:text-2xl lg:text-3xl">
                                <img src={Down} alt="down-arrow" className="inline-block h-6 lg:h-8 w-auto" /> WHAT IS ADIDAS
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionTwo;