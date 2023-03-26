import { Outlet } from "react-router-dom";
import { Nav, Footer, Cookies, Toast, Button } from "../components";
import { useEffect, useRef, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



const SharedLayout = () => {

  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('profile')))

  const [databaseToast, setDatabaseToast] = useState(false)

  const [welcomeToast, setWelcomeToast] = useState(false)

  console.log(user);

  const navbarRef = useRef(null)

  useEffect(() => {

    if(!user) {

      setDatabaseToast(true)

    } else {

      setWelcomeToast(true)

    }

  }, [])


  const disableToast = () => {

    setWelcomeToast(false)
           
  }

  const closeToast = () => {

    setDatabaseToast(false)

  }



  return (

    <>
      <div className="box-border bg-white dark:bg-base-100">

        <div ref={navbarRef} className={`w-full fixed z-[100] bg-white dark:bg-base-100`}>

        <Nav />

        </div>

        <div className="pt-20 min-h-[100vh] bg-white dark:bg-base-100">

        <Outlet />

        <Cookies/>

        {databaseToast && <Toast value="You are not in the database"><Button
                                                                      clickEvent={closeToast} 
                                                                      modifier="btn rounded-full" 
                                                                      text="" 
                                                                      icon={faXmark}
                                                                      /></Toast>} 
        
        {welcomeToast && <Toast value={`Welcome ${user?.result?.name}`}><Button 
                                                                        clickEvent={disableToast} 
                                                                         modifier="btn rounded-full" 
                                                                         text="" 
                                                                         icon={faXmark}/></Toast>}

        </div>


        <Footer/>

      </div>
    </>
  )
}

export default SharedLayout
