import { faPlusCircle, faSearch, faXmark, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import slots from "../assets/slots"
import { Input, Button, Select, Toast } from "../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PitchTypes = () => {

    const [ type, setType ] = useState("all");

    const [slotSearch, setSlotSearch] = useState("")

    const [ isLoading, setIsLoading ] = useState(false)

    const [ filteredSlots, setfilteredSlots ] = useState(slots)

    const [ user, setUser ] = useState(() =>  JSON.parse(localStorage.getItem('profile')))

    const [ bookedToast, setBookedToast] = useState(false)

    

    const changeType = (e) => {

        const { value } = e.target

        setType( value )
            
    }

    const slotLocation = (e) => {

        const { value } = e.target

        setSlotSearch( value )

        
    }

    const slotsFiltered = filteredSlots.filter((slot) => {

        if( type === "swimming") {

            return slot.type === "swimming"

        } else if( type === "camping") {

            return slot.type === "camping"

        } else {

            return slot
        }

    })


    const reduceAvailableSlot = (id) => {

        for(let i = 0; i < filteredSlots.length ; i++) {

            const allSlots = filteredSlots[i]

            if(id === allSlots.id) {
    
            setfilteredSlots(prevSlot => ({available_slots: prevSlot - 1}))
    
            }
        }

        setBookedToast(true)


    }

    const placeBooked = () => {

        setBookedToast(true)

    }

    const closeBookedToast = () => {

        setBookedToast(false)

    }



    console.log(slotSearch);
    
    console.log(slotsFiltered.filter((slot) => {
        
        return slotSearch.toLowerCase() === "" ? slot : slot.location.toLowerCase().includes(slotSearch)
        
        })
    
     )

    const availability = slotsFiltered.filter((slot) => {
        
        return slotSearch.toLowerCase() === "" ? slot : slot.name.toLowerCase().includes(slotSearch)
        
        }).map(slot => (

        <div key={slot.id} className="card lg:card-side shadow-xl">

        <figure className="max-h-50 overflow-hidden">  <img className="sm:w-full lg:w-[500px] max-h-[500px] md:w-full  grid place-items-center place-content-center" src={slot.image} alt="Shoes" height="300px"/>
             </figure>

        <div className="card-body space-y-4">

            <h2 className="card-title">{slot.name}</h2>

            <h4><FontAwesomeIcon icon={faLocationPin}/> <span className="mx-2"></span>{slot.location}</h4>

           <p className="max-w-[1000px]">
                Mollit eiusmod consectetur adipisicing culpa labore consectetur. Consectetur adipisicing dolore reprehenderit duis laborum nostrud eu Lorem. 
                Excepteur eiusmod labore dolor tempor aute fugiat aute sit. Ad excepteur pariatur excepteur fugiat officia ullamco. 
                Voluptate sunt excepteur laborum sit sint voluptate. Adipisicing irure aliqua elit ad commodo qui ea qui in do laborum.
           </p>

           <p className="font-bold"> ${slot.price}</p>

            <div className="card-actions flex justify-between items-center w-full">

            <span className="badge p-2"><p>Available slots {slot.available_slots}</p></span>

            <div>

             {user ? <Button 
                      icon={faPlusCircle} 
                      text="Book" 
                      modifier="btn text-white btn-primary" 
                      clickEvent={placeBooked}/> : <p>Sign in to Book a slot</p>}
         
            </div>

            </div>

        </div>

        </div>

    )) 

  return <>

                
<div className="z-[999]">

            {bookedToast && <Toast modifier="" value="🎉Place booked!🎉"> <Button text="" clickEvent={closeBookedToast} icon={faXmark} modifier="btn rounded-full"/></Toast>}
</div>

            <div className="p-4 space-y-4 text-gray-600 dark:text-gray-200">    

                <div className="flex justify-between items-center flex-wrap">

                <h1 className="text-4xl py-4">Pitch Types and Availability</h1>

                <div className="flex gap-2 flex-wrap w-full justify-between">
              

                <Select value={type} onChange={changeType}  name="Slots">
                    
                    <option value="all">All</option>

                    <option value="swimming">Swimming slots</option>

                    <option value="camping">Camping slots</option>
               
                </Select>

                <div className="flex gap">

                <div className="form-control">

                <div>

                    <Input type="search" placeholder="Search city" modifier="input input-bordered w-full" name="search" value={slotSearch} onChange={slotLocation}/>

                    {/* <Button text="" icon={faSearch} modifier="btn bg-primary text-white text-lg" /> */}

                </div>

                </div>

                </div>

                </div>

                
                </div>

          
                {/* {JSON.stringify(slotsFiltered)} */}
                {availability}

            </div>
  
         </>
};

export default PitchTypes;
