import { faIcons, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DropDown = ({ modifier, children, name, icon, dropEvent }) => {
  return (

    <>
    
  <div className={`dropdown dropdown-hover w-full `} >

    <div className="w-full grid place-items-center">
      
  <label tabIndex="0" className={`items-center m-2 capitalize flex gap-2 text-[1rem] text-white py-1 px-2 ${modifier} ` }onClick={ dropEvent }>  {name} <FontAwesomeIcon icon={faAngleDown}/></label>

    </div>
  <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded-box min-w-max">
    
       {children}
 
  </ul>
</div>

    </>

  )
}

DropDown.defaultProps = {

  name: "Dropdown",

}

export default DropDown;
