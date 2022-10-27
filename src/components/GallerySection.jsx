import React, { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryData } from '../data';

const slider = galleryData.images.map(
    ({original, width, height}) => ({
        src: original,
        width,
        height
    })
)

const GallerySection = () => {

    const [index, setIndex] = useState(-1)
    // destructure gallery data
    const {title, images} = galleryData

  return (
    <section className='gabg py-5  text-white mt-8'>
        <div className='constiner mx-auto'>
            <div className='max-w-[370px] lg:mb-8 mx-auto text-center text-xl pb-8'>
                <h1 className='font-primary text-[40px] xl:text-[45px] text-dark uppercase max-w-[336px] leading-none mb-[10px] pt-5 italic'>{title}</h1>
            </div>
        </div>
        <div className='mb-8 lg:mb-20'>
            <PhotoAlbum 
                layout='rows' 
                photos={images}
                onClick={(event, photo, index) => setIndex(index)}
                >
            </PhotoAlbum>
            <Lightbox
                open={index >= 0}
                index={index}
                slides={slider}
                close={() => setIndex(-1)}
            >
            </Lightbox>
        </div>
    </section>
  )
}

export default GallerySection