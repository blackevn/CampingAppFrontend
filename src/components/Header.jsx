import { faArrowAltCircleRight  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { first } from "../assets/sliderImages"
import { Button, PageCounter, Slider } from "../components"
import { Link } from "react-router-dom"



const Header = () => {

  return (

    <>

<div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left bg-white dark:bg-base-100">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2  items-center">
          <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 backdrop-blur-sm z-[80]">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12 text-gray-600 dark:text-gray-200">The Best Wild Swimming <br /><span className="text-primary">And Camping Experiences</span></h1>
               <div className="flex justify-center flex-col md:flex-row md:justify-between w-full">

                <Link className="w-full" to="/pitchtypes">

                <Button text="Book a slot" modifier="btn bg-primary text-white w-full" icon={faArrowAltCircleRight} />

                </Link>

                <div className="z-[80]">

                <PageCounter/>
                
                </div>

                </div> 

            </div>

          </div>

          <div className="md:mb-12 lg:mb-0">

            <Slider/>

          </div>
        </div>
      </div>
    </div>

    </>

  )
};

export default Header
