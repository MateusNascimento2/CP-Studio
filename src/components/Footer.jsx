import React from 'react'
import logo2 from '../assets/logo2.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone } from "react-icons/ai";


export default function Footer() {
    return (
        <div className='relative w-screen bg-darkgray z-10'>
            <div>
                <div className='border-b-2 p-4 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-around'>
                    <div className='w-[150px]'>
                        <img src={logo2} alt="logo-rodape" />
                    </div>
                    <div className='flex justify-center flex-wrap mr-[-15px] ml-[-15px] text-center sm:w-[450px] mt-1 mb-2'>
                        <div className='flex justify-center content-center pr-[1rem] pl-[1rem]'>
                            <span className='text-white inline-block pr-2'><GrMail className='text-lg text-yellow-green inline mr-1' />fitnesscp.studio@gmail.com</span>
                        </div>
                        <div className='flex justify-center content-center pr-[1rem] pl-[1rem]'>
                            <span className='text-white inline-block pl-2'><AiTwotonePhone className='text-yellow-green text-xl inline mr-1 mb-[3px]' />+55 &#40;21&#41; 99726-8169</span>
                        </div>
                        <div className='flex justify-center content-center pr-[2rem] pl-[2rem]'>
                            <span className='text-white inline-block'><MdLocationPin className='text-yellow-green text-lg inline mr-1 ' />Av. das Américas, 18500, sala 222 / RJ</span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <a target="_blank" href='https://wa.link/jgjpsl'><button><IoLogoWhatsapp className='text-white hover:text-green-wa text-2xl' /></button></a>
                        <a target="_blank" href='https://www.instagram.com/studio.cpfitness/?igshid=YmMyMTA2M2Y%3D'><button><AiFillInstagram className='text-white hover:text-purple-insta text-2xl' /></button></a>
                    </div>
                </div>
                <div className='p-4 flex justify-center'>
                    <ul className='text-center'>
                        <li className='p-[3px] text-white'>Menu</li>
                        <li className='p-[3px]'><a href='#home' className='hover:text-white'>Home</a></li>
                        <li className='p-[3px]'><a href='#about' className='hover:text-white'>Quem Somos</a></li>
                        <li className='p-[3px]'><a href='#' className='hover:text-white'>Planos</a></li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <span className='text-white'><span className='text-grey'>Copyright © 2022</span> CP Studio Fitness</span>
                </div>
            </div>
        </div>
    )
}
