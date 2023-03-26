import { useEffect, useState, createContext} from "react";
import { commerce } from "../lib/commerce";

const CartContext = createContext()

const { Provider } = CartContext

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = async ( productId, quantity ) => {

        const item = await commerce.cart.add( productId, quantity )
    
        setCart( item.cart )
    
      }

    const fetchCart =  async () => {

        const cart = await commerce.cart.retrieve()
    
        setCart(cart)
    
      }

      useEffect(() => {
    
        fetchCart()
    
      }, [fetchCart])


  return (<>

            <Provider value={{ cart, fetchCart, addToCart }}>

                { children }

            </Provider>


  
          </>)
}

export  { CartContext , CartContextProvider }
