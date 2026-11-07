import React from 'react'
import AdidasWhite from '../../assets/icons/adidas-white.png';
import AmericanExpress from '../../assets/icons/american-express.png';
import MasterCard from '../../assets/icons/master-card.png';
import Visa from '../../assets/icons/visa.png';
import Facebook from '../../assets/icons/facebook.png';
import Youtube from '../../assets/icons/youtube.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';

const columns = [
    { title: 'INFO', links: ['Terms and Conditions', 'Cookies', 'Privacy Politics'] },
    { title: 'COLLECTIONS', links: ['Ultraboost', 'Confirmed', 'NMD', 'Originals'] },
    { title: 'SPORTS', links: ['Football', 'Basketball', 'Running', 'Training'] },
    { title: 'SUPPORT', links: ['Customer', 'F.A.Q', 'Shipping', 'adiClub'] },
]

const socials = [
    { src: Facebook, alt: 'Facebook' },
    { src: Youtube, alt: 'Youtube' },
    { src: Instagram, alt: 'Instagram' },
    { src: Twitter, alt: 'Twitter' },
]

const payments = [
    { src: AmericanExpress, alt: 'AmericanExpress' },
    { src: MasterCard, alt: 'MasterCard' },
    { src: Visa, alt: 'Visa' },
]

function Footer() {
    return (
        <div className='bg-[#231F20] px-4 sm:px-6 xl:px-10 pt-8 pb-4'>
            <div className='flex justify-center'>
                <img src={AdidasWhite} alt="AdidasWhite" className='h-12 sm:h-16 w-auto' />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-10 mt-8 text-center text-white'>
                {columns.map((col) => (
                    <div key={col.title}>
                        <h3 className='font-extrabold text-xl sm:text-2xl xl:text-3xl'>{col.title}</h3>
                        {col.links.map((link) => (
                            <p key={link} className='font-normal text-base my-2'>{link}</p>
                        ))}
                    </div>
                ))}

                <div className='col-span-2 md:col-span-2 xl:col-span-1'>
                    <h3 className='font-extrabold text-xl sm:text-2xl xl:text-3xl'>FOLLOW US</h3>

                    <div className='grid grid-cols-2 gap-6 w-fit mx-auto mt-6'>
                        {socials.map((item) => (
                            <img
                                key={item.alt}
                                src={item.src}
                                alt={item.alt}
                                className='h-10 w-10 object-contain'
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-6 pt-10 pb-2'>
                {payments.map((item) => (
                    <img key={item.alt} src={item.src} alt={item.alt} />
                ))}
            </div>
        </div>
    )
}

export default Footer
