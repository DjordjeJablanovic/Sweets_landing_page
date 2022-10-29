import React from 'react'
import { useState } from 'react';
import logo from '../assets/cupcake.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import{BsInstagram, BsFacebook, BsReddit, BsTwitter} from 'react-icons/bs';
import Hero from './Hero';

const Nav = () => {

    const [nav, setNav] = useState('false');

    const onClickHendler = () => (
        setNav(!nav)
    )

  return (
    <section className='w-full   flex justify-between navbg h-[100vh] flex-col'>
        <div className='flex justify-between'>
         <img src={logo} alt="logo" className='h-[60px] p-2' />
            <ul className='hidden md:flex  items-center'>
                <li className='p-4 cursor-pointer font-primary font-bold uppercase text-[20px] lg:text-[28px] text-white hover:text-orange-400'>Home</li>
                <li className='p-4 cursor-pointer font-primary font-bold uppercase text-[20px] lg:text-[28px] text-white hover:text-orange-400'>Company</li>
                <li className='p-4 cursor-pointer font-primary font-bold uppercase text-[20px] lg:text-[28px] text-white hover:text-orange-400'>Resources</li>
                <li className='p-4 cursor-pointer font-primary font-bold uppercase text-[20px] lg:text-[28px] text-white hover:text-orange-400'>About</li>
                <li className='p-4 cursor-pointer font-primary font-bold uppercase text-[20px] lg:text-[28px] text-white hover:text-orange-400'>Contact</li>
            </ul>
            <div className='flex items-center lg:mr-0 pr-7 text-white'>
               <BsInstagram size={25} className='ml-2 cursor-pointer'/>
               <BsFacebook size={25} className='ml-2 cursor-pointer'/>
               <BsReddit size={25} className='ml-2 cursor-pointer'/>
               <BsTwitter size={25} className='ml-2 cursor-pointer'/>
            </div>
                <div onClick={onClickHendler} className='md:hidden mt-5 pr-5 text-white '>
                    {nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>} 
                </div >
                <div className={!nav ? 'fixed right-0 top-0 w-[60%] bg-white h-full z-20 ease-in-out duration-500' : 'fixed right-[-100%]'}>
                        <ul className='uppercase'>
                            <div onClick={onClickHendler} className='absolute right-1 bg-white mt-5 mr-5 cursor-pointer'><AiOutlineClose size={30}/></div>
                            <li className='p-4 cursor-pointer font-bold hover:text-[#ba5a9f]'>Home</li>
                            <li className='p-4 cursor-pointer font-bold hover:text-[#ba5a9f]'>Company</li>
                            <li className='p-4 cursor-pointer font-bold hover:text-[#ba5a9f]'>Resources</li>
                            <li className='p-4 cursor-pointer font-bold hover:text-[#ba5a9f]'>About</li>
                            <li className='p-4 cursor-pointer font-bold hover:text-[#ba5a9f]'>Contact</li>
                        </ul>
                </div>
        </div>
        
      <Hero/>
    </section>
  )
}

export default Nav