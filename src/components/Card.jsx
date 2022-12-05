import React from 'react'


import { GiCheckMark } from "react-icons/gi";


export default function Card(props) {
    const lists = props.lists;
    const listItems = lists.map((list) => <li className='text-gray-500' key={list}><GiCheckMark className='inline mr-1 text-black'/>{list}</li>)

    return (
        <div className='bg-gradient-to-b from-[#FFF] to-[#eee] border-2 border-[#99999921] rounded-[15px] ml-2 mr-2 flex flex-col items-center pt-10 pb-10 w-[375px] hover:scale-110 hover:transition-[1s] hover:ease-in-out hover:bg-gradient-to-t duration-300'>
            <div className='w-full flex flex-col items-center'>
                <img className='rounded-[50%] w-[30%] h-[90%] shadow-xl' src={props.img} alt="" />
                <div className='mt-5 '>
                    <p className='text-black text-[30px] flex justify-center'>{props.title}</p>
                </div>
            </div>
            <div className='items-center'>
                <p className='p-3 text-center font-bold text-[48px]'>R${props.price}</p>
                <hr />
                <ul className='text-center mt-6'>
                    {listItems}
                </ul>
            </div>
            <div>
                <button className='border-black border-solid border-2 rounded-[1em] mt-[1em] ml-auto mr-auto px-10 py-1 text-black hover:text-white hover:bg-black duration-200'>Click Here!</button>
            </div>
        </div>
    )
}
