
import { first, second, third, fourth } from "../assets/sliderImages";

const FirstSection = () => {


  return (

        <>
            <div className="box-border w-screen overflow-x-hidden p-4">
                <div className="w-full grid place-items-center">
                   <h1 className="text-center text-2xl md:text-4xl text-gray-400 font-extrabold md:w-[50%] py-10"> Aute minim officia id cillum esse mollit aute ipsum eu ullamco id commodo ad ut.</h1>
                </div>
               
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={first} className="w-6/12" />
                    <img src={second} className="w-6/12" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={second} className="w-6/12" />
                    <img src={third} className="w-6/12" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={third} className="w-6/12" />
                    <img src={fourth} className="w-6/12" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={fourth} className="w-6/12" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
              
            </div>
        </>
        
 )
};

export default FirstSection;
