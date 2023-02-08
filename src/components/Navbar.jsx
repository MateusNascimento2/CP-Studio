import React from 'react'
import { MdOutlineMenu, MdOutlineClear } from "react-icons/md";
import { useState } from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'


export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 50 ){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header className={navbar ? 'w-screen h-[120px] z-10 bg-darkgray fixed drop-shadow-lg' : 'w-screen h-[120px] z-10 bg-transparent fixed drop-shadow-lg'}>
            <div className='px-2 flex items-center w-full h-full'>
                <div className='flex items-center md:mx-12 w-full h-full md:justify-between'>
                    <div className='w-[190px] md:w-[350px] '>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className='hidden  md:flex md:text-sm  lg:text-base brightness-150'>
                        <li className='px-4'><a className='hover:text-white italic ' href='#home'>HOME</a></li>
                        <li className='px-4'><a className='hover:text-white italic ' href='#about'>QUEM SOMOS</a></li>
                        <li className='px-4'><a className='hover:text-white italic'  href='#planos'>PLANOS</a></li>
                    </ul>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <button><MdOutlineMenu className='text-3xl text-white'/></button> : <button><MdOutlineClear className='text-3xl text-white'/></button>  }
                </div>
            </div>
            <ul className={!nav ? 'md:hidden translate-x-full duration-200' : 'transition ease-in-out duration-300 translate-x-0 absolute bg-darkgray w-full px-8 md:hidden'}>
                <li className='border-b-2 border-zinc-300 w-full text-white py-4'><a href='#home'>HOME</a></li>
                <li className='border-b-2 border-zinc-300 w-full text-white py-4'><a href='#about'>QUEM SOMOS</a></li>
                <li className='w-full text-white py-4'><a href='#planos'>PLANOS</a></li>
            </ul>
        </header>
    )
}
