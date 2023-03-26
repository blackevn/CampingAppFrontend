import Select from "../Select"
import PlaceListCard from "./PlaceListCard";
import  {useEffect, createRef} from "react"
import { useState } from "react";

const AttractionList = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {

  const [ elRefs, setElRefs ] = useState([])

  const selectChange = (e) => { 

    const { value } = e.target

    setType( value )
    setRating( value ) 

  }

  useEffect (() => {

      const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())

      setElRefs(refs)

  }, [places])

  const placeDetails = places?.map((place, i) => (<PlaceListCard

                                                   isLoading={isLoading}
                                                   selected={Number(childClicked) === i} 
                                                   key={i} 
                                                   place={place}
                                                   refProp={elRefs[i]}

                                                   />))

  console.log({childClicked})

  return <>

        <div className="flex gap-2 p-4">

          <Select value={type} onChange={selectChange} name="Type">

            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>

          </Select>

          <Select value={rating} onChange={selectChange} name="Rating">

            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>

          </Select>

       </div>

     { isLoading ? 
     
     <div className="m-4">  

      <button className="btn btn-square loading"></button>

     </div>
     
          :
      
      <div className="max-h-[100vh] overflow-x-hidden overflow-y-scroll">

      {placeDetails}
        
      </div> }

        </>
}

export default AttractionList;
