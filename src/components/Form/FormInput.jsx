import { useFormContext, Controller } from "react-hook-form"
import Input from "../Input"

const FormInput = ({ name, label, required, placeholder }) => {

    const { control } = useFormContext()

  return <>

            <div className="grid">

                <Controller
                
                    render={({ field }) => (

                        <Input modifier="input input-bordered" placeholder={placeholder}  { ...field }/>

                    )}
                    control={control}
                    fullWidth
                    label={label}
                    required={required}
                    name={name}
                />


            </div>
  
        </>

}

export default FormInput
