import { useEffect, useState } from "react";


const useCoordinates = () => {

    const [ coordinates, setCoordinates ] = useState({})

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
    
          setCoordinates({ lat: latitude, lng: longitude })
    
        })
    
      }, [])

  return [coordinates, setCoordinates]
};

export default useCoordinates;
