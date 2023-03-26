
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Collapse = ({label, children, modifier, icon}) => {
  return (<>

            <div tabIndex={0} className={`collapse collapse-arrow border rounded-box ${modifier}`}>
            <div className="collapse-title text-xl font-medium flex items-center gap-4 justify-center">
                <FontAwesomeIcon icon={icon}/>
                {label}
            </div>
            <div className="collapse-content "> 
               {children}
            </div>
            </div>
  
  
         </>)
}

Collapse.defaultProps = {
    icon: faIcons
}

export default Collapse;
