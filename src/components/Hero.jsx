import React, { useState, useEffect } from 'react'
import { useTransition, animated} from 'react-spring'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram} from "react-icons/ai";
import bg from "../assets/bg-1.jpg"
import bg2 from "../assets/bg-2.jpg"
import bg3 from "../assets/bg-3.jpg"

const slides = [
  { id: 0, title: "Movimente-se", subtitle: "Cuide-se", img: bg, },
  { id: 1, title: "Comprometa-se", subtitle: "Exercite-se", img: bg2, },
  { id: 2, title: "Desenvolva-se", subtitle: "Adapte-se", img: bg3, },
]

export default function Hero() {


  const [currImg, setCurrImg] = useState(0)

  const [index, setIndex] = useState(0)

  const transitions = useTransition(slides[index], item => item.id, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 200, friction: 20},
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} className='absolute top-0 left-0 flex w-screen h-screen bg-center bg-no-repeat bg-cover will-change-auto' style={{ ...props, backgroundImage: `url(${item.img})` }}>
      <div className='ml-1 basis-[5%] h-full grid place-items-center grid-rows-[420px_100px_235px]'>
        <div className='place-self-end mr-auto ml-auto border-r-2 h-[55%] border-white'></div>
        <div>
          <div>
            <a target="_blank" href='https://wa.link/jgjpsl'><button><IoLogoWhatsapp className='text-yellow-green hover:text-green-wa text-2xl' /></button></a>
          </div>
          <div>
            <a target="_blank" href='https://www.instagram.com/studio.cpfitness/?igshid=YmMyMTA2M2Y%3D'><button><AiFillInstagram  className='text-yellow-green hover:text-purple-insta text-2xl' /></button></a>
          </div>
        </div>
        <div className='place-self-start mr-auto ml-auto border-r-2 h-[100%] border-white '></div>
      </div>
      <div className='basis-[90%] grid place-items-center grid-cols-3 md:grid-cols-5 '>
        <div className='col-start-2 md:col-start-4'>
          <div className='relative inline-block left-4 skew-x-[-15deg] bottom-2 bg-yellow-green text-2xl text-black font-bold text-center h-20 pl-6 pr-6 pt-2 2xl:text-5xl 2xl:h-16 xl:h-[80px] xl:text-[38px] '>
            <span>{item.title}</span>
          </div>
          <div className='bg-yellow-green skew-x-[-15deg] text-2xl text-black font-bold  text-center h-12 pl-6 pr-6 pt-2 2xl:text-5xl 2xl:h-16 xl:h-14 xl:text-[38px]' >
            <span>{item.subtitle}</span>
          </div>
        </div>
      </div>
      <div className='basis-[5%] grid place-items-center'>
        
      </div>
    </animated.div>
  ))
}
