import { useState, useEffect } from "react";


const CoundownTimer = () => {

    const [countdownTime, setCountdownTime] = useState(600);
    let intervalId = null;
    
    const startTimer = () => {
        if (intervalId === null) {
            intervalId = setInterval(() => {
            setCountdownTime(countdownTime - 1);
            if (countdownTime === 0) {
                setCountdownTime(600);
            }
            }, 1000);
        }
    }
    
    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [intervalId]);
    



      useEffect(() => {
        localStorage.setItem("countdownTime", countdownTime);
      }, [countdownTime])

      useEffect(() => {
        const storedCountdownTime = localStorage.getItem("countdownTime");
        if (storedCountdownTime) {
          setCountdownTime(parseInt(storedCountdownTime))
        }
      }, [])

    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      

  return [countdownTime, formattedTime, startTimer]
}

export default CoundownTimer;
