import gal1 from './assets/gal1.jpg'
import gal2 from './assets/gal2.jpg'
import gal3 from './assets/gal3.jpg'
import gal4 from './assets/gal4.jpg'
import gal5 from './assets/gal5.jpg'
import gal6 from './assets/gal6.jpg'
import gal7 from './assets/gal7.jpg'
import gal8 from './assets/gal8.jpg'
import gal9 from './assets/gal9.jpg'
import gal10 from './assets/gal10.jpg'
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


export const galleryData ={
    title : 'See Our Sweet Gallery',
    btnTex : 'Look Gallery',
    images: [
      {
        src: gal1,
        original: gal1,
        width: 600,
        height: 800,
      },
      {
        src: gal2,
        original: gal2,
        width: 465,
        height: 540,
      },
      {
        src: gal3,
        original: gal3,
        width: 900,
        height: 600,
      },
      {
        src: gal4,
        original: gal4,
        width: 800,
        height: 600,
      },
      {
        src: gal5,
        original: gal5,
        width: 500,
        height: 540,
      },
      {
        src: gal6,
        original: gal6,
        width: 500,
        height: 600,
      },
      {
        src: gal7,
        original: gal7,
        width: 400,
        height: 540,
      },
      {
        src: gal8,
        original: gal8,
        width: 300,
        height: 412,
      },
      {
        src: gal9,
        original: gal9,
        width: 700,
        height: 540,
      },
      {
        src: gal10,
        original: gal10,
        width: 300,
        height: 412,
      },
    ],
}

export const heroData = {
    title: 'Sweets',
    subtitle:
    'Sweet roll soufflé macaroon pie marzipan tootsie roll liquorice sugar plum. Chocolate cake cookie danish bonbon marzipan. ',
    btnText: 'read more',
};

export const navData = {
    items: [
      { href: '/', name: 'Home' },
      { href: '/', name: 'About' },
      { href: '/', name: 'Gallery' },
      { href: '/', name: 'Interview' },
      { href: '/', name: 'Articles' },
      { href: '/', name: 'Contact' },
    ],
  };

  export const aboutData = {
    title: 'Our Story:',
    subtitle1:
      'Weet powder gummies caramels lollipop lemon drops jelly-o cotton candy ice cream. Lollipop cake marshmallow donut halvah biscuit lollipop chocolate liquorice. Jujubes pie carrot cake pudding croissant wafer. Lollipop tart lemon drops gingerbread cake apple pie.',
    subtitle2:
      'Soufflé powder muffin marshmallow sweet roll biscuit chocolate. Jelly-o chupa chups halvah gummi bears croissant gummi bears caramels. Dessert bonbon sweet apple pie dragée caramels toffee bear claw. Sweet roll candy gingerbread carrot cake lemon drops caramels oat cake cheesecake. ',
    btnText: 'Know more',
  };

  export const faqData = {
    title:'Frequently Asked Questions (FAQ)',
    rows:[
      {
        id: 1,
        question:'Questuion One?',
        answer:'Answer One',
        open : true,
      },
      {
        id: 2,
        question:'Questuion Two?',
        answer:'Answer Two',
        open : false,
      },
      {
        id: 3,
        question:'Questuion Three?',
        answer:'Answer Three',
        open : false,
      },
      {
        id: 4,
        question:'Questuion Four?',
        answer:'Answer Four',
        open : false,
      },
      {
        id: 5,
        question:'Questuion Five?',
        answer:'Answer Five',
        open : false,
      },
      {
        id: 6,
        question:'Questuion Six?',
        answer:'Answer Six',
        open : false,
      },
    ]
  }

  export const contactData ={
    title:'Get in Sweet touch with us',
    info:[{
      title:'LA Office',
      subtitle:'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address:{
          icon:<FaMapMarkerAlt/>,
          name:'784 Norman Street, Los Angeles',
        },
      phone:{
        icon:<FaPhoneAlt/>,
        number:'+381 65 999 788'
      },
      email:{
        icon:<FaEnvelope/>,
        adress:'contact@gmail.com',
      },
      link:'Get Location',
    },
    {
      title:'Paris Office',
      subtitle:'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address:{
          icon:<FaMapMarkerAlt/>,
          name:'784 Norman Street, Paris',
        },
      phone:{
        icon:<FaPhoneAlt/>,
        number:'+381 65 888 978'
      },
      email:{
        icon:<FaEnvelope/>,
        adress:'contactParis@gmail.com',
      },
      link:'Get Location',
    },
  ],
  form:{
    name:'Write your name here',
    email:'Write your email here',
    message:'Write your message here',
    btnText:'Send it',
  }
  }

  export const footerData={
    about:{
      title:'About Sweet Sweets',
      subtitle:'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address:{
        icon:<FaMapMarkerAlt/>,
        name:'name of street',
      },
      phone:{
        icon:<FaPhoneAlt/>,
        number:'+381 64 666 454',
      },
      email:{
        icon:<FaEnvelope/>,
        address:'contact@sweetmail.com'
      }
    },
    links:{
      title:'Usefull Links',
      items:[
        { href: '/', name: 'About me' },
        { href: '/', name: 'Gallery' },
        { href: '/', name: 'Services' },
        { href: '/', name: 'Contact me' },
      ]
    },
    program:{
      title:'Working Hours',
      items: [
        { name: 'Mon - Tue /  09:00 - 21:00' },
        { name: 'Wed - Fri / 09:00 - 21:00' },
        { name: 'Sat / 09:00 - 14:00' },
        { name: 'Sun / no work on this day' },
      ],
    },
    newsletter:{
      title:'Newsletter',
      subtitle:'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    },
  }