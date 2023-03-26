import { useState } from "react"

const [toggle, setToggle] = useState({on: false})

const Toggle = () => {

   setToggle( prevState => ({on:!prevState.on}))

}

const Toggler = (props) => {

    const C = props.component

    return(

        <C on={toggle.on} toggle={Toggle} {...props}/>

    )
}


export const HOC = (component) => {

    return ( props) => {

        return (

            <Toggler component={component}  {...props}/>
        )
    }
}      


