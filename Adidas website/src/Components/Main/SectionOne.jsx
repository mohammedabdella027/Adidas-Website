import React from 'react'
import BothArrow from '../../assets/icons/both-arrow.png'
import Product from '../../assets/images/product.png'
import Like from '../../assets/icons/like.svg'

function SectionOne() {
    return (
        <div className='m-10'>
            <div className='flex justify-between'>
                <p className='font-[600] text-2xl'>adiWeek</p>

                <img src={BothArrow} alt="BothArrow"/>
            </div>

            <div className='flex mt-8 justify-between gap-8'>
                <div>
                <div className='relative rounded-xl overflow-hidden shadow-lg'>
                    <img src={Product} alt="Product" className='w-full h-full object-cover'/>

                    <img src={Like} alt="like" className='absolute top-6 right-6'/>

                    <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                    <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
                </div>

                <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
                <p className='ml-6'>Sneaker Style</p>
                </div>


                <div>
                <div className='relative rounded-xl overflow-hidden shadow-lg'>
                    <img src={Product} alt="Product" className='w-full h-full object-cover'/>

                    <img src={Like} alt="like" className='absolute top-6 right-6'/>

                    <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                    <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
                </div>

                <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
                <p className='ml-6'>Sneaker Style</p>
                </div>


                <div>
                <div className='relative rounded-xl overflow-hidden shadow-lg'>
                    <img src={Product} alt="Product" className='w-full h-full object-cover'/>

                    <img src={Like} alt="like" className='absolute top-6 right-6'/>

                    <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                    <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
                </div>

                <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
                <p className='ml-6'>Sneaker Style</p>
                </div>


                <div>
                <div className='relative rounded-xl overflow-hidden shadow-lg'>
                    <img src={Product} alt="Product" className='w-full h-full object-cover'/>

                    <img src={Like} alt="like" className='absolute top-6 right-6'/>

                    <p className='absolute bottom-8 left-6 text-lg font-[600] mb-1'>U$170,00</p>
                    <p className='absolute bottom-4 left-6 font-[300] text-lg'>free shipping</p>
                </div>

                <p className='ml-6 mt-4 font-[700]'>Sneaker X</p>
                <p className='ml-6'>Sneaker Style</p>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
