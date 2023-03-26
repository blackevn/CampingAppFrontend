import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import { Button, CheckoutForm, AddressForm, PaymentForm } from "../components"
import { Stepper } from "@mui/material"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { commerce } from "../lib/commerce"

const Checkout = () => {

  const [ activeStep, setActiveStep ] = useState(0)

  const [ checkoutToken, setCheckoutToken ] = useState(null)

  const [ cart, setCart ] = useState([])

  
  const fetchCart =  async () => {

    const cart = await commerce?.cart.retrieve()

    setCart(cart)

  }


  useEffect(() => {
   
    fetchCart()

  }, [fetchCart])


  const generateToken = async () => {

    try {

      const token = await commerce?.checkout.generateToken(cart.id, { type: "cart"})

      setCheckoutToken(token)
      
    } catch (error) {


      
    }

  }


  if (cart) {

       useEffect(() => { 
  
      generateToken()
  
     }, [cart])

  } else {


    console.log("Loading");
   
  }

  if(cart && checkoutToken) {

    console.log(checkoutToken)


  } 

   const Confirmation  = () => {

   return (

    <div>

      Confirmation

    </div>

 )
}

  const Form = () => activeStep === 0 ?  <AddressForm checkoutToken={checkoutToken} cart={cart}/> :  <PaymentForm/>

  const steps = ["Shipping Address ", " Payment Details"]

  return <>

            <div className="w-screen bg-white dark:bg-base-100 ">

              <div>


                    
              <Link to="/cart">

              <Button text="Back" icon={faAnglesLeft} modifier=""/>

              </Link>


              </div>



            <div className="w-screen grid place-items-center min-h-[100vh]">

             <div className="w-[80%] card shadow-2xl flex flex-cols items-center bg-gray-400 dark:bg-neutral">

              <div className="my-4">

              <div className="w-full flex justify-center mt-8 relative">

                <Stepper activeStep={activeStep}  className="steps">

                { steps.map( step => (

                  <li key={step} className="step step-primary">{step}</li>

                ))}

                </Stepper>

                </div>
                                
               {activeStep === steps.length ?  <Confirmation/> : checkoutToken && <Form/>} 

              </div>

             </div>

            </div>

            </div>
           
        </>
}

export default Checkout
