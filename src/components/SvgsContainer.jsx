import React from 'react'
import muscle from '../assets/muscle.svg'
import diet from '../assets/diet.svg'
import run from '../assets/run.svg'
import pain from '../assets/pain.svg'
import agility from '../assets/agility.svg'

export default function SvgsContainer() {
  return (
    <div className='flex flex-wrap justify-center gap-10 w-screen bg-black py-[50px]'>
        <div className='w-[280px]'>
            <img src={muscle} alt="" className='w-[40%] ml-auto mr-auto' />
            <p className='text-white text-[19px] text-center mt-[36px]'>FORTALEÇA SEU SISTEMA IMUNOLÓGICO</p>
        </div> 
        <div className='w-[280px]'>
            <img src={pain} alt="" className='w-[40%] ml-auto mr-auto mt-[5px]' />
            <p className='text-white text-[19px] text-center mt-[36px]'>ALIVIE DORES E TENSÕES</p>
        </div> 
        <div className='w-[280px]'>
            <img src={run} alt="" className='w-[40%] ml-auto mr-auto ' />
            <p className='text-white text-[19px] text-center mt-[36px]'>AUMENTE CONDICIONAMENTO, FORÇA E MOBILIDADE</p>
        </div> 
        <div className='w-[280px]'>
            <img src={diet} alt="" className='w-[40%] ml-auto mr-auto mt-[5px]' />
            <p className='text-white text-[19px] text-center mt-[36px]'>EMAGREÇA COM SAÚDE</p>
        </div> 
        <div className='w-[280px]'>
            <img src={agility} alt="" className='w-[40%] ml-auto mr-auto' />
            <p className='text-white text-[19px] text-center mt-[36px]'>DESENVOLVA AGILIDADE, EQUILÍBRIO E FLEXIBILIDADE</p>
        </div>        
    </div>
  )
}
