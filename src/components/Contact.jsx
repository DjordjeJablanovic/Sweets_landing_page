import React from 'react'
import { contactData } from '../data'
import { fadeIn } from '../variantls';
import {motion} from 'framer-motion'


const Contact = () => {
    // destructure contact data
    const { title, info, form } = contactData;
    return (
      <section className='section py-20 px-2'>
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-y-16 overflow-hidden'>
            {/* text */}
            
              {/* title */}

              <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
                <h2 className='h2 max-w-[490px] text-[40px] xl:text-[85px] text-dark uppercase font-primary leading-none mb-[38px]'>{title}</h2>
              </motion.div>
              {/* info items */}
              <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
                {info.map((item, index) => {
                  // destructure item
                  const { title, subtitle, address, phone, email, link } = item;
                  return (
                    // item
                    <div key={index}>
                      {/* title */}
                      <div className='font-primary uppercase font-medium text-xl mb-3'>
                        {title}
                      </div>
                      {/* subtitle */}
                      <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
                        {subtitle}
                      </div>
                      {/* address, phone & email */}
                      <div className='flex flex-col gap-y-3 mb-8'>
                        {/* address */}
                        <div className='flex items-center gap-[10px]'>
                          <div>{address.icon}</div>
                          <div className='font-medium'>{address.name}</div>
                        </div>
                        {/* phone */}
                        <div className='flex items-center gap-[10px]'>
                          <div>{phone.icon}</div>
                          <div className='font-medium'>{phone.number}</div>
                        </div>
                        {/* email */}
                        <div className='flex items-center gap-[10px]'>
                          <div>{email.icon}</div>
                          <div className='font-medium'>{email.adress}</div>
                        </div>
                      </div>
                      {/* link */}
                      <a
                        className='font-medium border-b border-dark pb-[5px]'
                        href='#'
                      >
                        {link}
                      </a>
                    </div>
                  );
                })}
              </div>
           
            {/* form */}
            <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
                <form className='flex flex-col gap-y-10 w-full'>
                  <input
                    className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                    type='text'
                    placeholder={form.name}
                  />
                  <input
                    className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                    type='text'
                    placeholder={form.email}
                  />
                  <input
                    className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]'
                    type='text'
                    placeholder={form.message}
                  />
                  <button className='self-start font-primary text-lg uppercase px-[40px] transition-all duration-300 flex items-center bg-gray-900 hover:bg-dark/90 text-white'>
                    {form.btnText}
                  </button>
                </form>
              </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default Contact