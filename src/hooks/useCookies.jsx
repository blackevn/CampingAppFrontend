import Cookies from 'js-cookie'
import { useState } from "react";
import { useEffect } from "react";


const useCookies = () => {

    const [ cookies, setCookies ] = useState(false)

    useEffect(() => {

      const allCookies = Cookies.get()

      if ( allCookies ) {

          setCookies(true)

      }

  }, [])


  const closeCookies = () => {

      setCookies(false)

  }

  const acceptCookies = () => {

    closeCookies()

  }

  const denyCookies = () => {

    Cookies.remove()
    closeCookies()

  }


  return [closeCookies, cookies, denyCookies, acceptCookies]
}

export default useCookies;
