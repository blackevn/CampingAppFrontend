import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useEffect, useRef } from "react";


const Card = ({ product, event }) => {

  const useDesc = useRef(null)

  const category = product.categories.map( item => (

          <span className="badge badge-primary text-white" key={item.id}>{item.name}</span>

  ))

  useEffect(() => {

    const productDesc = product.description
    
    useDesc.current.innerHTML = productDesc

  }, [])

  return (<>


            <div className="card max-w-[24rem] bg-white dark:bg-base-100 shadow-xl text-gray-600 dark:text-gray-200">

            <figure className="max-h-[300] grid place-items-center overflow-hidden ">
              
              <img className="max-h-[250px] w-full " src={product.image.url} alt={product.name} />

           </figure>

            <div className="card-body max-h-[300px]">

              <div  className="flex justify-between w-full items-center">

                <h2 className="card-title">{product.name}</h2>

          
              </div>

              {category}

              <p ref={useDesc} className="max-h-[70px] overflow-scroll"></p>

                <div className="card-actions justify-between items-center">
                 
                  <h1 className="font-black text-lg">{product.price.formatted_with_symbol}</h1>


                  <div className="flex gap-1">
                  
                  
                    <Button  
                    text="" 
                    icon={faCartPlus}
                    modifier="btn text-white bg-secondary"
                    clickEvent={() => event(product.id, 1)}
                    />

                    <Button
                    text="View"
                    modifier="btn text-white bg-primary"
                    icon={faEye}
                    />

                  </div> 

                </div>
            </div>
            </div>
            
         </>)
};

export default Card;
