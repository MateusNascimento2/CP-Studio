import React from 'react'
import muscle from '../assets/muscle.svg'
import diet from '../assets/diet.svg'
import run from '../assets/run.svg'
import pain from '../assets/pain5.svg'
import agility from '../assets/agility.svg'


export default function SvgsContainer() {
  return (
    <>
        <div className='bg-black flex justify-center'>
            <p className='text-white  uppercase text-4xl text-center py-8 w-[1120px]'>Nossas aulas são adaptadas aos seus objetivos, sob medida e orientadas para resultados reais</p>
        </div>
        <div className='flex flex-wrap justify-center gap-10 w-screen bg-black py-[50px]'>
            <div className='w-[280px]'>
                <img src={muscle} alt="Imagem musculo" className='w-[40%] ml-auto mr-auto' />
                <p className='text-white text-[19px] text-center mt-[36px]'>FORTALEÇA SEU CORPO E AUMENTE SEU CONDICIONAMENTO</p>
            </div> 
            <div className='w-[280px]'>
                <img src={pain} alt="boneco com dor" className='w-[45%] ml-auto mr-auto mt-[5px]' />
                <p className='text-white text-[19px] text-center mt-[36px]'>DIMINUA SUAS DORES</p>
            </div> 
            <div className='w-[280px]'>
                <img src={agility} alt="boneco exercitando" className='w-[40%] ml-auto mr-auto' />
                <p className='text-white text-[19px] text-center mt-[36px]'>DESENVOLVA OUTRAS APTIDÕES COMO FLEXIBILIDADE E EQUILÍBRIO</p>
            </div>        
        </div>
    </>
  )
}
