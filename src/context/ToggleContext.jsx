import { createContext } from "react";

const ToggleContext = createContext()

const { Provider, Consumer } = ToggleContext

const ToggleContextProvider = (props) => {

    const {children, value} = props

       return (<>

                <Provider value={value}>  

                    {children}
                    
                </Provider>

            </>)
}

export { ToggleContextProvider, Consumer as ToggleContextConsumer }

