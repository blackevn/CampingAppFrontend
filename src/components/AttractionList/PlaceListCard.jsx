import Button from "../Button";
import { Rating } from "@mui/material"
import restuarant from "../../assets/restuarant/restuarant.jpg"
import { faEye, faGlobe, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PlaceListCard = ({ place, ref, selected, refProp }) => {

    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"})


  return <>

            
 
            <div ref={ref} className="card shadow-xl m-6 text-gray-600 dark:text-gray-200">
            <figure><img src={place.photo ? place?.photo?.images.large.url : restuarant } alt={place.name} /></figure>
            <div className="card-body space-y-4">
                
                <h2 className="card-title">{place.name}</h2>
                
                <div className="flex w-full justify-between">
                <p>Rating</p>
                 <Rating size="small" value={Number(place.rating)} readOnly/>
                </div>
                
                <div className="flex w-full justify-between ">
                <p>Price range</p>
                <div>{place.price_level ? place.price_level : "N/A"}</div>
                </div>
                
                {/* <div className="flex w-full justify-between">
                <p>Ranking</p>
                <div>{place.ranking}</div>
                </div> */}

               {place?.awards?.map( award => (

                    <div key={award} className="flex w-full justify-between">
                    <img src={award.images.small} alt={award.display_name} />
                    <p>{award.display_name}</p>
                    </div>
              
               ))}

                <div className="flex w-full flex-wrap gap-2">
                {place?.cuisine?.map(({name}) => (

                    <span key={name} className="badge">{name}</span>

                ))}
                </div>

                {place?.address && (

                    <div className="flex w-full justify-between items-center gap-4">
                    <FontAwesomeIcon icon={faLocationPin}/>
                    <div className="max-w-[400px]">{place.address}</div>
                    </div>

                )}

                {place?.phone && (

                    <div className="flex w-full justify-between items-center gap-4">
                    <FontAwesomeIcon icon={faPhone}/>
                    <div>{place.phone}</div>
                    </div>

                )}
               
                <div className="card-actions flex gap-2 justify-end">
                <Button
                text="Trip Advisor"
                icon={faEye}
                modifier="btn"
                clickEvent={() => window.open(place.web_url, "_blank")}
                />
                <Button
                text="Website"
                icon={faGlobe}
                modifier="btn"
                clickEvent={() => window.open(place.web_url, "_blank")}
                />
                </div>
            </div>
            </div>
  
        </>
};

export default PlaceListCard;
