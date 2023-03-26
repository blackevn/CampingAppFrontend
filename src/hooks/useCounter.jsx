import {useState, useEffect } from "react"

const useCounter = () => {

    const [count, setCount] = useState(() => {

        const savedCount = localStorage.getItem('count')
        
        return savedCount ? parseInt(savedCount, 10) : 0
        
      })

     const updateCount = () => {

        setCount( count + 1 )

    }
  
      useEffect(() => {
    
        localStorage.setItem('count', count)
       
      }, [count])

    
      const clearStorage = () => {

        localStorage.clear("count")

        setCount(0)

    }

  return [clearStorage, count, updateCount]

}

export default useCounter;
