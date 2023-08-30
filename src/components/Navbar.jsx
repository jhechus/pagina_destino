import BurguerMenu from '../assets/images/icon-hamburger.svg'
import CloseMenu from '../assets/images/icon-close.svg'
import Patron from '../assets/images/bg-pattern-mobile-nav.svg'
import { useState } from 'react'

export default function Navbar() {

    const [menuClicked, setmenuClicked] = useState(false)

    const handleClick = () => {
        setmenuClicked( prevState => !prevState)
    }
  
    return (
    <div>
        <nav>
            <ul className={`${menuClicked ? 'flex' : 'hidden'} bg-Very-Dark-Violet py-[40px] h-[63vh] absolute left-0 right-0 top-[68px] flex-col items-center font-bold text-[20px] gap-8
            sm:flex sm:bg-white sm:flex-row sm:top-0 sm:w-auto sm:h-[12px] sm:relative sm:justify-end sm:gap-5
            lg:gap-10 z-10 sm:pr-10
            `}>
                <li className=' text-white sm:text-Dark-Grayish-Violet hover:sm:text-Very-Dark-Violet cursor-pointer'>How we work</li>
                <li className=' text-white sm:text-Dark-Grayish-Violet hover:sm:text-Very-Dark-Violet cursor-pointer'>Blog</li>
                <li className=' text-white sm:text-Dark-Grayish-Violet hover:sm:text-Very-Dark-Violet cursor-pointer'>Account</li>
                <li className=' text-white sm:text-Dark-Grayish-Violet hover:sm:text-Very-Dark-Violet cursor-pointer border border-white py-2 px-[100px] sm:border-Very-Dark-Violet sm:py-3 sm:px-5'>View plans</li>
                <img className=' sm:hidden sm:invisible' src={Patron} alt="" />
            </ul>

            <div className='cursor-pointer sm:hidden' onClick={handleClick}>
                {menuClicked ? <img src={CloseMenu} /> : <img src={BurguerMenu} />}
            </div>
        </nav>
    </div>
  )
}
