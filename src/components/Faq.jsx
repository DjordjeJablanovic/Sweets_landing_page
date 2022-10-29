import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import {Stack, Typography } from '@mui/material'
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from 'react-icons/bs'
import { useState } from 'react';

const Faq =() => {

  const [isActive, setIsActive] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isThierd, setIsThierd] = useState(false);
  const [isFourth, setIsFourth] = useState(false);
  const [isFifth, setIsFifth] = useState(false);

  return (


    <Stack className='w-full mx-auto px-8 py-20 md:px-[110px] gabg lg:px-[240px]'>
      <Typography  variant="h4" component="h2">
        <div className='font-secondary font-bold italic text-orange-400 text-[40px] mb-4'>
        Frequently Asked Questions:
        </div>
      </Typography>
      <Accordion className='my-1'>
        <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='realative text-[30px]'
          onClick={() => setIsActive(!isActive)}
        >
          <Typography variant="h5" component="h2">Question One</Typography>
          {isActive ? <BsFillArrowUpCircleFill className='absolute top-3 right-3'/> : <BsFillArrowDownCircleFill className='absolute top-3 right-3'/>}
        </AccordionSummary>
        <AccordionDetails className='border border-gray-700 border-t-1 border-r-0 border-b-0 border-l-0'>
          <Typography>
            Answer One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='realative text-[30px]'
          onClick={() => setIsSecond(!isSecond)}
        >
          <Typography variant="h5" component="h2">Question Two</Typography>
          {isSecond ? <BsFillArrowUpCircleFill className='absolute top-3 right-3'/> : <BsFillArrowDownCircleFill className='absolute top-3 right-3'/>}
        </AccordionSummary>
        <AccordionDetails className='border border-gray-700 border-t-1 border-r-0 border-b-0 border-l-0'>
          <Typography>
            Answer Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='my-1'>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='realative text-[30px]'
          onClick={() => setIsThierd(!isThierd)}
        >
          <Typography variant="h5" component="h2">Question Three</Typography>
          {isThierd ? <BsFillArrowUpCircleFill className='absolute top-3 right-3'/> : <BsFillArrowDownCircleFill className='absolute top-3 right-3'/>}
        </AccordionSummary>
        <AccordionDetails className='border border-gray-700 border-t-1 border-r-0 border-b-0 border-l-0'>
          <Typography>
            Answer Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='realative text-[30px]'
          onClick={() => setIsFourth(!isFourth)}
        >
          <Typography variant="h5" component="h2">Question Four</Typography>
          {isFourth ? <BsFillArrowUpCircleFill className='absolute top-3 right-3'/> : <BsFillArrowDownCircleFill className='absolute top-3 right-3'/>}
        </AccordionSummary>
        <AccordionDetails className='border border-gray-700 border-t-1 border-r-0 border-b-0 border-l-0'>
          <Typography>
            Answer Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='my-1'>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='realative text-[30px]'
          onClick={() => setIsFifth(!isFifth)}
        >
          <Typography variant="h5" component="h2">Question Five</Typography>
          {isFifth ? <BsFillArrowUpCircleFill className='absolute top-3 right-3'/> : <BsFillArrowDownCircleFill className='absolute top-3 right-3'/>}
        </AccordionSummary>
        <AccordionDetails className='border border-gray-700 border-t-1 border-r-0 border-b-0 border-l-0'>
          <Typography>
            Answer Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Stack>
)};

  export default Faq