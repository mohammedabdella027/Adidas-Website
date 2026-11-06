import React from 'react'
import BasketBall from '../../assets/images/2023 COLLECTION.png';
import Gazelle from '../../assets/images/gazelle.png';
import ProofWater from '../../assets/images/PROOF WATER.png';
import Releases from '../../assets/images/2023 RELEASES.png';

const items = [
    { id: 1, src: BasketBall, alt: 'BasketBall' },
    { id: 2, src: Gazelle, alt: 'GAZELLE' },
    { id: 3, src: ProofWater, alt: 'ProofWater' },
    { id: 4, src: Releases, alt: 'RELEASES' },
]

function SectionFive() {
    return (
        <div className='mx-4 sm:mx-6 lg:mx-10 mt-10 lg:mt-16'>
            <p className='font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-8'>MOST INTERESTING</p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 lg:mb-20'>
                {items.map((item) => (
                    <div key={item.id} className='aspect-[3/4] overflow-hidden'>
                        <img src={item.src} alt={item.alt} className='w-full h-full object-cover' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionFive
