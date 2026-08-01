import React from 'react'
import Logo from '../../assets/images/adidas.png'
import Search from '../../assets/icons/search.png'
import User from '../../assets/icons/user.png'
import Like from '../../assets/icons/like.svg'
import Cart from '../../assets/icons/cart.png'

function Nav() {
    return (
        <>
        <nav className='mx-20 my-5'>
            <ul className='flex justify-between mx-8'>
                <li> <a href="#"><img src={Logo} alt="Logo"/></a></li>

                <li><a href="#" className='font-[600]'>WOMAN</a></li>
                <li><a href="#" className='font-[600]'>MEN</a></li>
                <li><a href="#" className='font-[600]'>KIDS</a></li>
                <li><a href="#" className='font-[400]'>NEWS</a></li>
                <li><a href="#" className='font-[400]'>SPORTS</a></li>
                <li><a href="#" className='font-[400]'>ADIDAS WORLD</a></li>

                <div className="relative w-[240px] h-[40px] bg-[#ECEFF1] rounded-sm flex items-center mt-[-5px]">
                <input type="text" placeholder="Forum-Mid Parley" className="w-full h-full bg-transparent pl-4 pr-10 text-sm text-gray-700 outline-none placeholder:text-gray-400"/>

                <button className="absolute right-3 text-gray-800 hover:text-black">
                <img src={Search} alt="Search" className="w-5 h-5" />
                </button>
                </div>
                
                <div><a href="#"><img src={User} alt="user" /></a></div>
                <div><a href="#"><img src={Like} alt="user" /></a></div>
                <div><a href="#"><img src={Cart} alt="user" /></a></div>
            </ul>
        </nav>
        </>
    )
}

export default Nav
