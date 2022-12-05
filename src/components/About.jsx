import React, { useState } from 'react'
import template from "../assets/template.gif"
import template2 from '../assets/template2.gif'
import { pictures } from "../Helpers/aboutData"
import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";




export default function About() {

  const [picture, setPicture] = useState(0)

  return (
    <div id='about' className='w-screen bg-[#f7f7f7]'>
      <div className='w-[90%] ml-auto mr-auto lg:w-[960px] pt-[120px] pb-[150px] lg:ml-auto lg:mr-auto '>
        <div className='flex flex-col-reverse text-center place-items-center  md:flex-row gap-10 md:text-left md:place-items-start'>
          <div className='mb-5'>
            <img className='w-[450px] h-[380px] border-2 p-2 md:p-3  md:w-[548px] md:h-[430px]' src={pictures[picture].img} alt="Template Demo Image" />
          </div>
          <div className='font-sans mb-[3rem] w-[80%] lg:w-[40%] lg:mb-[7rem]'>
            <h5 className='pb-2 text-[2rem] mb-[0.8rem] font-semibold italic'>Quem Somos</h5>
            <p className='text-[17px] leading-[28px] mb-3'>
              No <b>CP Studio Fitness</b> você terá o poder de movimentar-se através de um treinamento especializado voltado aos seus objetivos, feito por uma profissional
              altamente qualificada e focada no cuidado da sua saúde.
            </p>
            <p className='text-[17px] leading-[25px] mb-2'>
              <b>Missão:</b> Proporcionar treinos eficientes de acordo com o seu objetivo, sob orientação de profissionais qualificados em um ambiente seguro e confortável.
            </p>
            <p className='text-[17px] leading-[25px] mb-2'>
              <b>Visão:</b> Ser referência positiva no mercado fitness do bairro local oferecendo aos clientes uma relação duradoura.
            </p>
            <p className='text-[17px] leading-[25px]'>
              <b>Valores:</b> Segurança, Transparência, Ética, Simplicidade e Personalização.
            </p>
          </div>
        </div>
        <div className='ml-auto w-[90%] mr-auto lg:w-full'>
          <div className='pt-4 pb-4 border-t-2 border-b-2'>
            <ul className='flex flex-wrap justify-center'>
              <li className='p-2 hover:scale-110 hover:transition-[1s]'>
                <img className='w-[176px] h-[120px]' src={pictures[0].img} alt="" onClick={() => setPicture(0)} />
              </li>
              <li className='p-2 hover:scale-110 hover:transition-[1s]'>
                <img className='w-[176px] h-[120px]' src={pictures[1].img} alt="" onClick={() => setPicture(1)} />
              </li>
              <li className='p-2 hover:scale-110 hover:transition-[1s]'>
                <img className='w-[176px] h-[120px]' src={pictures[2].img} alt="" onClick={() => setPicture(2)} />
              </li>
              <li className='p-2 hover:scale-110 hover:transition-[1s]'>
                <img className='w-[176px] h-[120px]' src={pictures[3].img} alt="" onClick={() => setPicture(3)} />
              </li>
              <li className='p-2 hover:scale-110 hover:transition-[1s]'>
                <img className='w-[176px] h-[120px]' src={pictures[4].img} alt="" onClick={() => setPicture(4)} />
              </li>
            </ul>
          </div>
        </div>
        <h5 className='mt-9 mb-9 text-center text-[1.5rem]'>SAIBA ONDE NOS ENCONTRAR</h5>
        <div className='mb-10 flex flex-wrap justify-center lg:justify-start'>
          <div className='flex flex-col gap-4 w-[60%]'>
            <p className='bg-grey p-2 rounded-[5px] text-center'><span className='text-[18px]'><MdLocationPin className='inline mr-1 mb-1' />Av. das Américas, 18500 - Uprise Business Center, Sala 999, Recreio dos Bandeirantes | Rio de Janeiro / RJ</span></p>
            <p className='bg-grey p-2 rounded-[5px] text-center'><span className='text-[18px]'><AiTwotonePhone className='inline mr-1 mb-1' />Ligue para esta unidade: +55 	&#40;21&#41; 99726-8169</span></p>
            <p className='bg-grey p-2 rounded-[5px] text-center'><span className='text-[18px]'><IoLogoWhatsapp className='inline mr-1 mb-1' />Chame no Whatsapp: 21 99999-9999</span></p>
            <p className='bg-grey p-2 rounded-[5px] text-center'><span className='text-[18px]'><GrMail className='inline mr-1 mb-1' />Envie um e-mail: fitnesscp.studio@gmail.com</span></p>
          </div>
          <div className='ml-9 mt-6 lg:mt-0'>
            <p className='text-[18px]'><b>Segunda a Sexta</b>: 7h às 20h</p>
            <p className='text-[18px]'><b>Sábado</b>: 9h às 12h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
