import React from 'react'
import cardlogo from '../assets/logo3.png'
import Card from './Card'
import { cardInfo } from '../Helpers/cardData'
import funcionalImg from '../assets/FUNCIONAL.png'
import musculacaoImg from '../assets/MUSCULAÇÃO.png'
import pilatesImg from '../assets/PILATES.png'
import bg from '../assets/imgplanos.png'
import { useState } from 'react'
import Modal from './Modal/Modal'

export const muscList = ['1', 'B', 'C', 'D']
export const pilatesList = ['E', 'F', 'G', 'H']
export const funcionalList = ['I', 'J', 'K', 'L']

export default function Planos() {
  const [show, setShow] = useState(false)


  return (
    <div id='planos' className='bg-[#f7f7f7] w-screen pb-[100px]'>
      <div className=' h-[500px] w-screen bg-cover bg-top blur-[3px] contrast-125' style={{backgroundImage: `url(${bg})`}}></div>
      <div className='flex justify-center relative bottom-[180px] z-[5]'>
        <h5 className='pb-2 text-[2rem] mb-[2rem] font-semibold italic place-content-center'>Planos</h5>
      </div>
      <div className='flex justify-center gap-10 flex-wrap relative bottom-[170px] z-[5]'>
        <Card title='Pilates' img={pilatesImg} price='120,00' lists={muscList} />
        <Card title='Musculação' img={musculacaoImg} price='140,00' lists={pilatesList}/>
        <Card title='Funcional' img={funcionalImg} price='150,00' lists={funcionalList}/>
      </div>
      <div className='flex justify-center'>
        <button onClick={() => setShow(true)} className='bg-yellow-green px-6 py-2 font-bold'>AGENDAR UMA AULA EXPERIMENTAL</button>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
    </div>
  )
}
