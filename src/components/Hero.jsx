import { heroData } from '../data'
import { Box, Typography, Stack } from '@mui/material'
import Typed from 'react-typed';

const Hero = () => {
    //destructure hero data
    const { subtitle, btnText} = heroData;

  return (
   
    <Stack spacing={1} className='w-full h-[80vh] relative md:p-[20px] md:h-[80vh]  lg:h-[90vh] items-center '> 
        <Box className='h-[25vh] absolute flex flex-col items-center '>
            <div  className='text-white text-[65px] text-center md:text-[80px] lg:text-[80px]'>
                <Typed className='italic'
                     strings={[
                    'Chocolates.',
                    'Lollipops.',
                    'Macarons.']}  typeSpeed={30} backSpeed={100} loop>    
                </Typed>
            </div>
            <Typography variant='subtitle1' component='h2' className='text-white text-center py-6 px-10 italic md:w-[70%] lg:w-[70%] '>
                {subtitle}
            </Typography>
            <button type='text' className='italic font-bold text-[15px] w-[150px] md:w-[250px] md:text-[20px] Button bg-orange-400 uppercase py-2 items-center h-[50px] hover:bg-orange-500 hover:ease-in duration-300 rounded-md'>
                    {btnText}
            </button>
        </Box>
    
    </Stack>
  )
}

export default Hero