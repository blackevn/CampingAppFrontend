import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = () => (
  <>
     <div className="w-full h-screen grid place-items-center">

      <div className="grid place-items-center gap-4">

      <FontAwesomeIcon className="text-9xl" icon={faXmark}/>

      <p className="text-3xl font-black" >Error 404: Page not found</p>

     
      </div>

    </div>
  </>
)

export default Error;
