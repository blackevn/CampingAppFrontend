
import { useState, useEffect } from 'react';
import imagesData from '../assets/sliderImages/imagesData';

const ImageSlider = () => {


    const [currentIndex, setCurrentIndex] = useState(0)

    const [info, setInfo] = useState(imagesData)
   
      const handleReset = (direction) => {
        if (direction === "next") {
          setCurrentIndex(0);
        } else if (direction === "prev"){
          setCurrentIndex(images.length - 1);

        } else (direction === "next" && currentIndex !== 0) 

        { 
            setCurrentIndex(0);
        }
        } 
      
            
      const handleMove = (direction) => {
        if (direction === "next" && currentIndex === info.length - 1) {
          handleReset(direction);
        } else if (direction === "prev" && currentIndex === 0) {
          handleReset(direction);
        } else {
          if (direction === "next") {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(currentIndex - 1);
          }
        }
      }
      
      useEffect(() => {
        const interval = setInterval(() => {
          handleMove("next");
        }, 3000);
        return () => clearInterval(interval);
      }, [handleMove]);
      

  return (

    <>

    <div className='lg:flex gap-4 max-h-[800px] overflow-hidden rounded-xl'>

      <div className=' drop-shadow-2xl relative'>

        {/* <div className='absolute top-0 bottom-0 right-0 left-0  rounded-xl grid items-end p-8'>
          
        <div className='  '>

          <div className='space-y-4 text-white flex items-end justify-between'>

          <div >
            

          <h1 className='text-4xl font-black '>{info[currentIndex].heading}</h1>

           <p className=''>

          {info[currentIndex].paragraph}

          </p>

          </div>

           <Button 
          bgColor="bg-white"
          text="View"
          textColor='text-black'
          borderColor='border-white'
          /> 
          </div>

        </div>

        </div> */}

        <img className='rounded-xl ' src={info[currentIndex].images} alt="Slider Image" />

      </div>
    
    </div>
{/* 
    <div className="flex justify-between my-4">

    <Button text='' paddingY='py' icon={faArrowCircleLeft} clickEvent={() => handleMove("prev")}/>

    <Button text='' icon={faArrowAltCircleRight} clickEvent={() => handleMove("next")}/>

    </div> */}

    </>

  )
};

export default ImageSlider;
