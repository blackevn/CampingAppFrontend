import { useState } from "react";

const useToggle = (dafaultValue = false) => {
    
    const [toggle, setToggle] = useState(dafaultValue)

    const handle = () => {
        setToggle(prevState => !prevState)
    }

    return [toggle, handle]

}

export default useToggle;
