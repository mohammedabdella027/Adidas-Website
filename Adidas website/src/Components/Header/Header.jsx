import React from 'react'
import '../../App.css'
import DownArrow from '../../assets/icons/down-arrow.png';

function Header() {
    return (
        <>
            <div className='text-center bg-[#231F20] text-[#EDE734] text-[14px] font-[600] sm:text-[16px]'>NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE <span> <img src={DownArrow} alt='DownArrow' className='inline-block w-[16px] m-2' /> </span> </div>
        </>
    )
}

export default Header
