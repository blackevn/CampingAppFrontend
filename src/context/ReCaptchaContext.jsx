import { createContext } from 'react'

const ReCaptchaContext = createContext({

  response: null,
  setResponse: () => {}
  
})



export  {ReCaptchaContext};
