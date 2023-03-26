import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const GroupedInput = (props) => {

    const { type, 
            name, 
            value, 
            id, 
            onChange, 
            placeholder, 
            textColor, 
            modifier,
            label,
            icon,
            children,
            disabled  } = props

  return (

    <>
        <div className="form-control">
        <label className="label m-0 p-0">
            <span className="label-text">{label}</span>
        </label>
        <label className="input-group text-gray-600 dark:text-base-200">

            <span className="text-gray-600 dark:text-base-200"><FontAwesomeIcon className="text-gray-600 dark:text-base-200" icon={icon}/></span>

            <input 

            disabled={disabled}

            className={`

                rounded-lg
                p-1.5
                px-2
                ${textColor}
                ${modifier}
                w-full
                bg-gray-200
                dark:bg-base-300
                `}

                type={type}
                name={name}
                value={value}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                
                />

          

               {children}

            

        </label>
        </div>

   

    </>

  )
}

GroupedInput.defaultProps = {

  placeholder: "Input",
  textColor: "text-gray-400",
  icon: faIcons

}

export default GroupedInput;
