import { useState } from "react"

const Toggler = (props) => {

    const { children } = props

    const [toggleState, setToggleState] = useState({toggle: false})

    const toggleHandler = () => {

        setToggleState(prevState => ({toggle: !prevState.toggle}))

    }

  return (
            <>
                <div>

                    {children( toggleHandler, toggleState )}
                
                </div>

            </>
        )
}

export default Toggler
