import React from 'react'
import AdidasWhite from '../../assets/icons/adidas-white.png';
import AmericanExpress from '../../assets/icons/american-express.png';
import MasterCard from '../../assets/icons/master-card.png';
import Visa from '../../assets/icons/visa.png';
import Facebook from '../../assets/icons/facebook.png';
import Youtube from '../../assets/icons/youtube.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';

function Footer() {
    return (
        <div className='bg-[#231F20]'>
            <div className='flex justify-center pt-8 pl-14'>
                <img src={AdidasWhite} alt="AdidasWhite" />
            </div>

            <div className='flex justify-between mx-10 mt-6'>
            <div className='text-center text-white'>
                <h3 className='font-extrabold text-3xl'>INFO</h3>
                <p className='font-normal text-base my-2'>Terms and Conditions</p>
                <p className='font-normal text-base my-2'>Cookies</p>
                <p className='font-normal text-base my-2'>Privacy Politics</p>
            </div>

            <div className='text-center text-white'>
                <h3 className='font-extrabold text-3xl'>COLLECTIONS</h3>
                <p className='font-normal text-base my-2'>Ultraboost</p>
                <p className='font-normal text-base my-2'>Confirmed</p>
                <p className='font-normal text-base my-2'>NMD</p>
                <p className='font-normal text-base my-2'>Originals</p>
            </div>

            <div className='text-center text-white'>
                <h3 className='font-extrabold text-3xl'>SPORTS</h3>
                <p className='font-normal text-base my-2'>Football</p>
                <p className='font-normal text-base my-2'>Basketball</p>
                <p className='font-normal text-base my-2'>Running</p>
                <p className='font-normal text-base my-2'>Training</p>
            </div>

            <div className='text-center text-white'>
                <h3 className='font-extrabold text-3xl'>SUPPORT</h3>
                <p className='font-normal text-base my-2'>Customer</p>
                <p className='font-normal text-base my-2'>F.A.Q</p>
                <p className='font-normal text-base my-2'>Shipping</p>
                <p className='font-normal text-base my-2'>adiClub</p>
            </div>

            <div className='text-center text-white'>
                <h3 className='font-extrabold text-3xl'>FOLLOW US</h3>

                <div className='flex gap-7 justify-center'>
                <div className='pt-8'>
                    <div className='pb-6'>
                    <img src={Facebook} alt="Facebook"/>
                    </div>

                    <div>
                    <img src={Instagram} alt="Instagram"/>
                    </div>
                </div>

                <div className='pt-9'>
                    <div className='pb-8'>
                    <img src={Youtube} alt="Youtube"/>
                    </div>

                    <div>
                    <img src={Twitter} alt="Twitter"/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        
            <div className='justify-center flex pt-10 pb-2 pl-16 gap-6'>
                <div><img src={AmericanExpress} alt="AmericanExpress"/></div>

                <div className='pt-2'><img src={MasterCard} alt="MasterCard"/></div>

                <div className='pt-3'><img src={Visa} alt="Visa"/></div>
            </div>
        </div>
    )
}

export default Footer
