import data from "../assets/data";
import { Button, Card, Slider} from "../components";
import { useState, useEffect, useContext } from 'react';
import { commerce } from "../lib/commerce";
import Carousel from 'react-multi-carousel';
import styles from 'react-multi-carousel/lib/styles.css';
import { CartContextProvider } from "../context/CartContext";


const Store = () => {

  const [ products, setProducts ] = useState([])
  
  const [ cart, setCart ] = useState([])

  const fetchProducts = async () => {

   const { data } = await commerce.products.list()

   setProducts( data )

  }

  const addToCart = async ( productId, quantity ) => {

    const item = await commerce.cart.add( productId, quantity )

    setCart( item.cart )

  }

  useEffect(() => {

    fetchProducts()


  }, [])

  // console.log(products);

  const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1500 },
      items: 4
    },

    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3
    },

    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 2
    },

    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }

  }


  const displayProducts = products.map(product => (

                                 <div className="m-4">

                                  <Card

                                      key={product.id}
                                      product={product}
                                      event={addToCart}
                                    
                                    />

                                 </div>
                                    
                                                                                    
                              ))


  return (<>

    <div className="text-gray-600 dark:text-gray-200 p-4">

      <h1 className="text-4xl py-4">Store</h1>
 
      <div className=" bg-white dark:bg-base-100">

    
      <Carousel
       swipeable={true}
       draggable={true}
       showDots={false}
       responsive={responsive}
       infinite={true}
       autoPlaySpeed={1000}
       keyBoardControl={true}
       customTransition="all .5"
       transitionDuration={500}
       containerClass="carousel-container"
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
 
      >

      

          {displayProducts}




      </Carousel>

      </div>
              
        {/* <div className="w-full flex justify-between">

        <Button/>

        <Button/>
            
        </div> */}

         <div className="flex flex-col lg:grid grid-cols-12 bg-white dark:bg-base-100">

         
         <div  className="grid grid-cols gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center col-span-9">

        { products.length ? displayProducts :   <button className="btn btn-square loading absolute"></button>}

        </div>

        <div className="col-span-3 ">

          <div className="card p-4  shadow-xl grid bg-white dark:bg-base-100">

            <h1 className="menu-title text-xl text-center font-semibold">Wearable Section</h1>

            <ul className="menu bg-white dark:bg-base-100 text-base-300 dark:text-gray-200 p-2 rounded-box w-full">

            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Item 2
              </a>
            </li>
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Item 2
              </a>
            </li>
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Item 2
              </a>
            </li>
           
          </ul>

          </div>

        </div>


         </div>

         </div>

     
        
        </>)
};

export default Store;
