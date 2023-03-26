import { useState, useEffect } from "react"
import Form from "./Form"
import Input from "../Input"
import Button from "../Button"
import Select from "../Select"
import { faArrowAltCircleRight  } from "@fortawesome/free-solid-svg-icons"
import { commerce } from "../../lib/commerce"

const AddressForm = ({ checkoutToken, cart }) => {

  const [ shippingCountries, setShippingCountries ] = useState([])

  const [ shippingCountry, setShippingCountry ] = useState("")

  const [ shippingSubdivisions, setShippingSubdivisions ] = useState([])

  const [ shippingSubdivision, setShippingSubdivision ] = useState("")

  const [ shippingOptions, setShippingOptions ] = useState([])

  const [ shippingOption, setShippingOption ] = useState("")

const [addressForm, setAddressForm ] = useState({

  firstName: "",
  lastName: "",
  address: "",
  email: "",
  city: "",
  zip: ""

})

const handleAddress = (e) => {

  const { name, value } = e.target

  setAddressForm( prevAddress => ({...prevAddress, [name]: value}) )

}


const fetchShippingCountries = async () => {

  const {countries} = await commerce.services.localeListShippingCountries(checkoutToken.id)

  setShippingCountries(countries)
 
} 


useEffect(() => {


fetchShippingCountries()


  }, [])

  
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))

  console.log(shippingCountries);


  const handleSubmit = (e) => {

    e.preventDefault()
   
  
  }

  const selectHandler = (e) => {

    const { value } = e.target

    setShippingCountry(prevValue => ({...prevValue, value}))


  }


  return <>

      
              <Form onSubmit={handleSubmit} label="Shipping Address" modifier="shadow-0">

                <div className="grid md:grid-cols-2 gap-2">

                  <Input placeholder="First name"  name="firstName" required modifier="input input-bordered" onChange={handleAddress} value={addressForm.firstName}/>
                  <Input placeholder="Last name"  name="lastName" required modifier="input input-bordered" onChange={handleAddress} value={addressForm.lastName}/>
                  <Input placeholder="Address"  name="address" required modifier="input input-bordered" onChange={handleAddress} value={addressForm.address}/>
                  <Input placeholder="Email"  name="email" required modifier="input input-bordered" onChange={handleAddress} value={addressForm.email}/>
                  <Input placeholder="City"  name="city" required modifier="input input-bordered" onChange={handleAddress} value={addressForm.city}/>
                  <Input placeholder="ZIP"  name="zip" required modifier="input input-bordered" onChange={handleAddress} value={addressForm.zip}/>

                  <select value={shippingCountry} onChange={selectHandler} className="select w-full max-w-xs bg-gray-200 text-gray-600 dark:bg-base-100 dark:text-gray-200">
                    <option disabled selected>Shipping Country</option>
                    { countries }
                  </select>

                  <Select name="Shipping Subdivision">
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </Select>

                  <select className="select w-full max-w-xs bg-gray-200 text-gray-600 dark:bg-base-100 dark:text-gray-200">
                    <option disabled selected>Shipping Options</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>

                </div> 

                <Button icon={faArrowAltCircleRight} modifier="btn bg-primary text-white" text="Continue"/>

              </Form>
  
        </>
}

export default AddressForm;
