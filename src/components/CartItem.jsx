import { faArrowAltCircleRight, faPlug, faPlus, faSubtract, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Input from "./Input";

const CartItem = ({ cart, removeItem, updateQuantity }) => {



  return (

    <>
    
    <div className="card p-4 w-full shadow-xl my-4 text-gray-600 dark:text-gray-200 ">

      <div className="flex items-center justify-between flex-wrap">

        <div>

            <img className="w-32 h-32 rounded-lg" src={cart.image.url} alt={cart.name} />
       
        </div>

      <div className="grid place-items-center">

      <h1 className="font-bold m-2">Quantity</h1>

        <div className="btn-group">
          
         <Button modifier="btn text-white" text="" icon={faSubtract} clickEvent={() => updateQuantity(cart.id,  cart.quantity - 1)}/>
         <Input modifier="input outline-0 w-10 grid place-items-center text-center bg-ghost disabled border-0" placeholder={cart.quantity}/>
         <Button modifier="btn text-white" text="" icon={faPlus} clickEvent={() => updateQuantity(cart.id, cart.quantity + 1)}/>
        </div>

      </div> 

      <div className="grid place-items-center">

        <h1 className="font-bold m-2">Price</h1>
        <p>{cart.line_total.formatted_with_symbol}</p>

      </div>

      <div className="flex gap-2">

        <Button modifier="btn bg-red-500 text-white tooltip" text="" tip="Remove from cart" icon={faTrashCan} clickEvent={() => removeItem(cart.id)}/>
        <Button modifier="btn text-white" text="Checkout" icon={faArrowAltCircleRight}/>

      </div>

      </div>

    </div>

    </>

  )

}

export default CartItem;
