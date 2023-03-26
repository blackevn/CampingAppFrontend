import { useState, useEffect } from 'react'
import { Button } from "../components"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const PageCounter = () => {

    const [visits, setVisits] = useState(() => {

        const savedVisits = localStorage.getItem('visits')
        return savedVisits ? parseInt(savedVisits, 10) : 0
        
      })

    
      useEffect(() => {
    
        window.addEventListener("loaded", setVisits( visits + 1))
    
      }, [])

    
      useEffect(() => {
    
        localStorage.setItem('visits', visits)
       
      }, [visits])

    
      const clearStorage = () => {

        localStorage.clear()

        setVisits(0)

    }

  return (<>


            <div className=' hidden md:flex px-8 gap-2 items-center'>
                <p className='text-gray-400 m-0 p-0'> You have visited this page <span className='font-black'>{visits} time{ visits > 1 && "s"}</span></p>
                 <Button 
                  modifier="tooltip" 
                  tip="Reset counter" 
                  icon={faArrowRotateRight} 
                  text="" 
                  paddingX="px-0" 
                  borderSize="border-0" 
                  clickEvent={clearStorage}/>
            </div>


  
          </>)

}

export default PageCounter;
