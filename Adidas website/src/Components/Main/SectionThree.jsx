import React from 'react'
import BothArrow from '../../assets/icons/both-arrow.png'
import Product from '../../assets/images/product.png'
import Like from '../../assets/icons/like.svg'

const products = [
    { id: 1, name: 'Sneaker X', style: 'Sneaker Style', price: 'U$170,00' },
    { id: 2, name: 'Sneaker X', style: 'Sneaker Style', price: 'U$170,00' },
    { id: 3, name: 'Sneaker X', style: 'Sneaker Style', price: 'U$170,00' },
    { id: 4, name: 'Sneaker X', style: 'Sneaker Style', price: 'U$170,00' },
]

function SectionThree() {
    return (
        <div className='mx-4 sm:mx-6 lg:mx-10 mt-6'>
            <div className='flex items-center justify-between gap-4'>
                <p className='font-[600] text-xl sm:text-2xl'>Do you still like these products?</p>

                <img src={BothArrow} alt="BothArrow" className='h-6 sm:h-8 w-auto shrink-0' />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8'>
                {products.map((item) => (
                    <div key={item.id}>
                        <div className='relative rounded-xl overflow-hidden shadow-lg'>
                            <img src={Product} alt={item.name} className='w-full h-full object-cover' />

                            <img
                                src={Like}
                                alt="like"
                                className='absolute top-3 right-3 sm:top-6 sm:right-6 w-6 sm:w-8'
                            />

                            <p className='absolute bottom-8 left-4 sm:left-6 text-base sm:text-lg font-[600]'>
                                {item.price}
                            </p>
                            <p className='absolute bottom-3 sm:bottom-4 left-4 sm:left-6 font-[300] text-base sm:text-lg'>
                                free shipping
                            </p>
                        </div>

                        <p className='ml-4 sm:ml-6 mt-4 font-[700]'>{item.name}</p>
                        <p className='ml-4 sm:ml-6'>{item.style}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionThree
