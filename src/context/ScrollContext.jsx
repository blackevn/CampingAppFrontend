import { useEffect, useState } from "react"
import { createContext } from "react"


const ScrollContext = createContext()

const { Provider, Consumer } = ScrollContext

const ScrollContextProvider = (props) => {

    const { children } = props

    const [scrollHeight, setScrollHeight] = useState(0)

    
    const handleScroll = () => {

        setScrollHeight(scrollY)

    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])


    return (<>

            <Provider value={scrollHeight}>

                {children}

            </Provider>

                     
            </>)
}

export  { ScrollContext, Consumer as ScrollContextConsumer }
