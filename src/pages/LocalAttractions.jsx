import { Map, AttractionList } from "../components";
// import { getPlacesData } from "../api/attractions";
import { useEffect, useState } from "react";
import { useCoordinates } from "../hooks";
import axios from "axios"
const LocalAttractions = () => {

const [ coordinates, setCoordinates ] = useCoordinates()

const [ places, setPlaces ] = useState([])

const [ filteredPlaces, setFilteredPlaces ] = useState([])

const [ bounds, setBounds ] = useState({})

const [ childClicked, setChildClicked ] = useState(null)

const [ isLoading, setIsLoading ] = useState(false) 

const [ rating, setRating ] = useState('')

const [ type, setType ] = useState('restaurants')


 const getPlacesData = async (type, bounds)  => {

    try {

        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          
        params: {

            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng, 
            tr_longitude: bounds.ne.lng,

        },

        headers: {

          'X-RapidAPI-Key': 'a853e959dcmsh032ab931bfa6af8p1f2377jsn66d05202161c',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  

        }

 })

        setPlaces(data?.filter(place => place.name && place.num_reviews > 0))
        setIsLoading(false)
        setFilteredPlaces([])
       
        
    } catch (error) {

        console.log(error);
        
    }

}

  useEffect(() => {

    const filteredPlaces = places.filter((place) => place.rating > rating)

    setFilteredPlaces(filteredPlaces)

  }, [rating])

  useEffect(() => {

    if (bounds.sw && bounds.ne) {

    setIsLoading(true)

    getPlacesData(type, bounds)

    }
         
  }, [type, bounds])

 

  return <>

      <div className="lg:grid grid-cols-12">

        <div className="col-span-4 flex flex-col items-center">

        <AttractionList
        
        places={filteredPlaces.length ? filteredPlaces : places}

        childClicked={childClicked}

        isLoading={isLoading}

        type={type}

        setType={setType}

        rating={rating}

        setRating={setRating}
        
        />

        </div>

        <div className="col-span-8">

        <Map 

        setCoordinates={setCoordinates} 

        setBounds={setBounds} 

        coordinates={coordinates} 

        places={filteredPlaces.length ? filteredPlaces : places} 

        setChildClicked={setChildClicked}
        
        />

        </div>

      </div>
        </>
};

export default LocalAttractions;
