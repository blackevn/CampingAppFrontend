import { faCartShopping, faArrowAltCircleRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { CartItem, Button } from "../components";
import { commerce } from "../lib/commerce";
import { Link } from "react-router-dom";

const Cart = () => {

  
  const [ cart, setCart ] = useState([])

  const isEmpty = !cart?.line_items || !cart.line_items?.length

  const allCartItems = cart?.line_items

  console.log(allCartItems)

  const fetchCart =  async () => {

    const cart = await commerce.cart.retrieve()

    setCart(cart)

  }

  const updateCartQuantity = async (productId , quantity) => {

    const { cart } = await commerce.cart.update(productId, {quantity})

    setCart(cart)

  }

  const removeFromCart = async (productId) => {


    const { cart } = await commerce.cart.remove(productId)

    setCart(cart)

  }

  const emptyCart = async () => {

    const { cart } = await commerce.cart.empty()

    setCart(cart)

  }

  useEffect(() => {

      fetchCart()

  }, [fetchCart])

    
  const NoItemsInCart = () => (

    <div className="w-full h-screen grid place-items-center">

    <div className="grid place-items-center gap-4">

    <FontAwesomeIcon className="text-9xl" icon={faCartShopping}/>

    <p className="text-3xl font-black" >No Items in Cart</p>

    <Link to="/store">Go to Store</Link>

  </div>
    
  </div>

  )

 
  const cartItems = allCartItems?.map(item => <CartItem
                                                  key={item.id} 
                                                  cart={item} 
                                                  removeItem={removeFromCart} 
                                                  updateQuantity={updateCartQuantity}/>)

  const ItemsInCart = () => (

    <div className="px-8 ">

      <div className="flex w-full justify-between items-center">

        <h1 className="text-3xl font-black">{cart.total_items}  {cart?.total_items.length >= 1 ? "Item" : "Items"} in cart </h1>

      </div>


   { cartItems }

   <div className="flex justify-between w-screen absolute bottom-0 left-0 right-0 p-4">

    <p className="text-2xl font-bold">Subtotal: {cart.subtotal.formatted_with_symbol} </p>

    <div className="flex gap-2 items-center flex-wrap">

        <Button modifier="btn bg-red-500 text-white" text="Empty cart" icon={faTrashCan} clickEvent={() => emptyCart()}/>

        <Link to="/checkout">
        <Button modifier="btn text-white" text="Checkout" icon={faArrowAltCircleRight} />
        </Link>

    </div>


   </div>

    </div>
  )


  return (<>

  <div className="min-h-[100vh] relative">

  {  isEmpty ? <NoItemsInCart/> : <ItemsInCart/> }

  </div>
  
  

  </>)
};

export default Cart;
