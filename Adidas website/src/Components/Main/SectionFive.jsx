import React from 'react'
import BasketBall from '../../assets/images/2023 COLLECTION.png';
import Gazelle from '../../assets/images/gazelle.png';
import ProofWater from '../../assets/images/PROOF WATER.png';
import Releases from '../../assets/images/2023 RELEASES.png';

function SectionFive() {
    return (
        <div className='mx-10'>
            <p className='font-extrabold text-3xl mb-8'>MOST INTERESTING</p>

            <div className='flex justify-between gap-6 mb-20'>
                <div><img src={BasketBall} alt="BasketBall" /></div>

                <div><img src={Gazelle} alt="GAZELLE" /></div>

                <div><img src={ProofWater} alt="ProofWater" /></div>

                <div><img src={Releases} alt="RELEASES" /></div>
            </div>
        </div>
    )
}

export default SectionFive
