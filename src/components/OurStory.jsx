import React from 'react'
import {aboutData} from '../data'

const OurStory = () => {

    const { title, subtitle1, subtitle2, btnText} = aboutData;
    return (
      <section className='lg:py-16 xl:pb-[160px] px-2'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
            {/* numbers */}
            
              <div className='text-[260px] md:text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-aboutus bg-no-repeat bg-right bg-clip-text text-transparent'>
                77
              </div>
            
            {/* text */}
            
              <h2 className='text-[40px] xl:text-[85px] uppercase font-primary max-w-[236px] leading-none mb-[38px]'>{title}</h2>
              <div className='flex flex-col items-end'>
                <div className='max-w-[530px] text-grey'>
                  <p className='mb-6'>{subtitle1}</p>
                  <p className='mb-9'>{subtitle2}</p>
                  <button className='border text-orange-400 italic font-bold gabg w-[110px] rounded py-2 '>
                    {btnText}
                  </button>
                </div>
              </div>
            
          </div>
        </div>
      </section>
    );
}

export default OurStory