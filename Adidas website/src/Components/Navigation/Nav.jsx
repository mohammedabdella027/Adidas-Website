import React, { useState } from 'react'
import Logo from '../../assets/images/adidas.png'
import Search from '../../assets/icons/search.png'
import User from '../../assets/icons/user.png'
import Like from '../../assets/icons/like.svg'
import Cart from '../../assets/icons/cart.png'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="mx-4 sm:mx-8 lg:mx-20 my-5">
            {/* Main Navbar */}
            <div className="flex items-center justify-between">

                {/* Logo */}
                <a href="#">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-10 sm:w-12"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-5 lg:gap-6">

                    <a href="#" className="font-[600]">WOMAN</a>
                    <a href="#" className="font-[600]">MEN</a>
                    <a href="#" className="font-[600]">KIDS</a>
                    <a href="#" className="font-[400]">NEWS</a>
                    <a href="#" className="font-[400]">SPORTS</a>
                    <a href="#" className="font-[400]">ADIDAS WORLD</a>

                    {/* Search */}
                    <div className="relative w-[180px] lg:w-[240px] h-[40px] bg-[#ECEFF1] rounded-sm flex items-center">
                        <input
                            type="text"
                            placeholder="Forum-Mid Parley"
                            className="w-full h-full bg-transparent pl-4 pr-10 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                        />

                        <button className="absolute right-3 text-gray-800 hover:text-black">
                            <img
                                src={Search}
                                alt="Search"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>

                    {/* Icons */}
                    <a href="#">
                        <img src={User} alt="User" className="w-5 h-5" />
                    </a>

                    <a href="#">
                        <img src={Like} alt="Like" className="w-5 h-5" />
                    </a>

                    <a href="#">
                        <img src={Cart} alt="Cart" className="w-5 h-5" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-7 w-7 fill-current"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.828 4.829 4.829z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-5 border-t pt-5">
                    <div className="flex flex-col gap-5">

                        <a href="#" className="font-[600]">WOMAN</a>
                        <a href="#" className="font-[600]">MEN</a>
                        <a href="#" className="font-[600]">KIDS</a>
                        <a href="#" className="font-[400]">NEWS</a>
                        <a href="#" className="font-[400]">SPORTS</a>
                        <a href="#" className="font-[400]">ADIDAS WORLD</a>

                        {/* Mobile Search */}
                        <div className="relative w-full h-[40px] bg-[#ECEFF1] rounded-sm flex items-center">
                            <input
                                type="text"
                                placeholder="Forum-Mid Parley"
                                className="w-full h-full bg-transparent pl-4 pr-10 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                            />

                            <button className="absolute right-3">
                                <img
                                    src={Search}
                                    alt="Search"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>

                        {/* Mobile Icons */}
                        <div className="flex items-center gap-6 pt-2">
                            <a href="#">
                                <img src={User} alt="User" className="w-5 h-5" />
                            </a>

                            <a href="#">
                                <img src={Like} alt="Like" className="w-5 h-5" />
                            </a>

                            <a href="#">
                                <img src={Cart} alt="Cart" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav
