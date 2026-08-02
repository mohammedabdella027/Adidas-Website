import React from 'react'
import Man from '../../assets/images/man.png';
import ManBg from '../../assets/images/man-bg.png';

function SectionFour() {
    return (
        <div
        style={{
        backgroundImage: `url(${Man}), url(${ManBg})`,
        backgroundPosition: "center,center",
        backgroundSize: "80% 80%, 100% 80%",
        backgroundRepeat: "no-repeat, no-repeat",
        }}
        className="h-screen w-full"
        >

        <div className='flex justify-between'>
            <div>
                <p className='pt-40 pl-16 font-light text-lg text-white text-left'>At adidas, we believe that sports have the <br /> power to transform lives. It's not just about <br />keeping your body and mind fit; it's about <br />bringing people together and creating a <br />community of individuals who share the <br />same passion for excellence. </p>

                <p className='pt-8 pl-16 font-light text-lg text-white text-left'>We draw inspiration from the athletes who <br />push themselves to their limits every <br />day, and from the technology we develop to help <br />them achieve their goals. </p>
            </div>

            <div>
                <p className='pt-[460px] text-white font-semibold text-center text-xl'>To improve performances. Improve lives <br />and change the world.</p>
            </div>

            <div>
                <p className='pt-40 pr-16 font-light text-lg text-white text-right'>Whether you're a runner, a basketball player, <br />a soccer player, or someone who loves to <br />train, you'll find a home with us. Our <br />products are designed to meet your needs, <br />no matter what your preferred form of <br />exercise may be.</p>

                <p className='pt-8 pr-16 font-light text-lg text-white text-right'>We're not just present on the playing field, <br />either. You'll find the three stripes at music <br />festivals, on stages, and in the city streets. </p>
            </div>
        </div>


        </div>
    )
}

export default SectionFour
