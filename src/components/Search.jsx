import Input from "./Input";
import Button from "./Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Autocomplete } from "@react-google-maps/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCoordinates } from "../hooks";
import { useState } from "react";

const Search = () => {

  const [ coordinates, setCoordinates ] = useCoordinates() 

  const [ autocomplete, setAutocomplete ] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {

    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({ lat, lng })

  }

  return (<>


<label htmlFor="my-modal-4" className="searchBox"><FontAwesomeIcon icon={faSearch}/></label>

<input type="checkbox" id="my-modal-4" className="modal-toggle bg-none" />
<label htmlFor="my-modal-4" className="modal cursor-pointer backdrop-blur-md">
<label className="modal-box bg-transparent shadow-none absolute " htmlFor="">
  
  <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>

    <Input name="search" modifier="bg-ghost w-full input" placeholder="Enter name of a location.." />
  
  </Autocomplete>
  
</label>
</label>


    
          {/* <div className="form-control">
            <div className="input-group">
              <Input type="search" placeholder="Search" modifier="input input-bordered"/>
              <Button
               text=""
               icon={faSearch}
               modifier="btn btn-squared text-lg"
               bgColor="btn-primary"
               textColor="text-white"
              />
            </div>
            </div> */}

        </>)
};

export default Search;
