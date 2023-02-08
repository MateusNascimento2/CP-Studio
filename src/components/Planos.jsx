import React from 'react'
import Card from './Card'
import pilatesImg from '../assets/PILATES.png'
import bg from '../assets/imgplanos.png'
import { useState } from 'react'
import Modal from './Modal/Modal'

export const muscList = ['1x R$270,00', '2x R$380,00', '3x R$460,00', 'Todos os dias: R$650,00']
export const funcionalList = ['R$80,00']

export default function Planos() {
  const [show, setShow] = useState(false)


  return (
    <div id='planos' className='bg-[#f7f7f7] w-screen pb-[100px]'>
      <div className=' h-[500px] w-screen bg-cover bg-top blur-[3px] contrast-125' style={{backgroundImage: `url(${bg})`}}></div>
      <div className='flex justify-center relative bottom-[180px] z-[5]'>
        <h5 className='pb-2 text-[2rem] mb-[2rem] font-semibold italic place-content-center'>Planos</h5>
      </div>
      <div className='flex justify-center gap-10 flex-wrap relative bottom-[170px] z-[5]'>
        <Card title='Mensal' img={pilatesImg} lists={muscList} />
      </div>
      <div>
        <div className='flex justify-center'>
          <p className='inline underline underline-offset-4 font-bold mb-10 text-center text-[20px]'>Aula avulsa: R$80,00</p>
        </div>
        <p className='italic text-center'>Obs: Máximo de 3 alunos por aula.</p>
        <div className='flex justify-center'>
          <button onClick={() => setShow(true)} className='bg-yellow-green px-6 py-2 font-bold disabled:opacity-[0.5]' disabled>AGENDAR UMA AULA EXPERIMENTAL</button>
          <Modal onClose={() => setShow(false)} show={show} />
        </div>
      </div>
    </div>
  )
}
