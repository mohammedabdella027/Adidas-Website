import React from "react";
import Girl from '../../assets/images/girl.png';
import Black from '../../assets/images/black.png';
import RightArrow from '../../assets/icons/right-arrow.png';
import Down from '../../assets/icons/down.png';

function SectionTwo() {
    return (
    <div
        style={{
        backgroundImage: `url(${Girl}), url(${Black})`,
        backgroundPosition: "left center, right center",
        backgroundSize: "35% 100%, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
        width: "1175px",
        margin: "auto",
        borderRadius: "110px",
        }}
        className="h-screen w-full"
    >
    <h1 className="pt-20 pl-40 font-bold text-6xl text-white">OUTFITS FOR <br /><span className="text-[#EDE734]">BENEFITS</span></h1>

    <p className="pt-10 pl-[460px]  font-medium text-2xl text-white"><span className="text-[#EDE734]">60% OFF + free shipping</span>: only for adiClub members.</p>

    <p className="pt-8 pl-[460px]  font-medium text-2xl text-white">Check your account and start buying for benefits on <span className="text-[#EDE734]">adiWeek.</span></p>

    <div className="flex gap-32">
    <p className='pl-[480px] pt-20'><a href="#" className='text-white font-[800] text-3xl'><img src={RightArrow} alt="right-arrow" className='inline-block'/> BUY NOW</a></p>

    <p className='pt-20'><a href="#" className='text-white font-[800] text-3xl'><img src={Down} alt="right-arrow" className='inline-block'/> WHAT IS ADIDAS</a></p>
    </div>
    
    </div>
    );
}

export default SectionTwo;
