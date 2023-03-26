import { useState } from "react"
import Form from "./Form"
import Button from "../Button"
import Input from "../Input"

const CheckoutForm = () => {
  return <>

            <Form label="Checkout" modifier="min-w-[20em]">

                <div className=" grid place-items-center">

                    <div className="md:flex md:gap-2 ">

                    <Input
                    modifier="input input-bordered m-2"
                    />
                    <Input
                    modifier="input input-bordered m-2"
                    />

                    </div>
                    <div className="md:flex md:gap-2">

                    <Input
                    modifier="input input-bordered m-2"
                    />
                    <Input
                    modifier="input input-bordered m-2"
                    />

                    </div>

                </div>

 
            </Form>
  
         </>
};

export default CheckoutForm
