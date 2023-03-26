import React, { useState, useEffect } from 'react'

const Time = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {

    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval)

  }, [])

  const timeString = time.toLocaleString('en-US', {

    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true

  })

  return (

    <div className='text-gray-600 dark:text-gray-200'>

          <h2>{ time.toLocaleString('en-US', {

                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  
})}</h2>

    </div>
    
  )

}

export default Time
