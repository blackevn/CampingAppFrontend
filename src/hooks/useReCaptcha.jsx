import { useContext } from 'react'

import {ReCaptchaContext} from '../context/ReCaptchaContext'

export const useReCaptcha = () => {

  const { response, setResponse } = useContext(ReCaptchaContext)

  return [ response, setResponse ]

}
