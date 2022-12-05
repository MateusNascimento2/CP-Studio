import React from 'react'
import portImg from '../assets/1-2.png'
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone } from "react-icons/ai";

export default function Portfolio() {
    return (
        <div id='portfolio' className='w-screen mr-auto ml-auto bg-white pt-[120px]'>
            <div className='flex flex-col-reverse justify-center gap-10 lg:flex-row'>
                <div className='text-center sm:text-left mb-[3rem] sm:basis-1/4 p-4'>
                    <h5 className='pb-2 text-[2rem] mb-[2rem] font-semibold italic'>A Instrutora</h5>
                    <div className='text-[17px] leading-[28px] px-2 sm:px-0'>
                        <p className='mb-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam non adipisci cupiditate magnam voluptatem sint ullam cumque eveniet doloremque illo.
                            Sint, asperiores fuga corporis fugiat porro quos veniam harum odit?
                        </p>
                        <span className='text-[20px] font-semibold block text-center'>FORMAÇÃO</span>
                        <ul className='mb-10  text-left list-disc list-inside'>
                            <li>Universidade Federal do Estado do Rio de Janeiro</li>
                            <li>Universidade Federal do Rio de Janeiro</li>
                            <li>Universidade Estácio de Sá</li>
                        </ul>
                        <span className='text-[20px] font-semibold block text-center'>EXPERIÊNCIA</span>
                        <ul className='mb-10 list-disc text-left list-inside'>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
