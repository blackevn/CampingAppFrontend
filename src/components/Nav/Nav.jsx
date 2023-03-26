import { useEffect, useState, useContext , useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faBarsStaggered,
  faXmark,
  faSearch,
  faPlus,
  faSignIn,
  faSun,
  faMoon,
  faAngleDown,
  faAngleUp,
  faTree,
  faCircleExclamation,
  faLocationCrosshairs,
  faArrowRight,
  faSignOut,
  faHome,
  faContactCard,
  faUser,
  faBagShopping,
  faUsers,
  faCartPlus,
  faEllipsis,
  faQuestionCircle,
  faStar
  
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { Input, Button, Toggle, Search, Collapse, Avatar, Time, DropDown } from "../index";
import { faInstagramSquare, 
         faSnapchatSquare, 
         faTwitterSquare, 
         faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useToggle } from "../../hooks";
import { useDispatch } from "react-redux";
import { commerce } from "../../lib/commerce";
import { CartContextProvider } from "../../context/CartContext";
import useDarkMode from "../../hooks/useDarkMode";

const DesktopNav = ({toggle, user, logOut, dark, darkToggle, cart, location}) => {

  const [drop, dropToggle] = useToggle(false)
  
 
  // console.log(toggle ? "Toggle on" : "Toggle off")

  const linkButtonMod = "px-2 hover:bg-primary text-white bg-neutral"

 
   return (<>


    <div className={`flex justify-between p-2 box-border transition-all ${scroll} items-center`}>
      <Link to="/">
        <div>
        <h1 className="font-black text-md rounded-lg p-2 mx-4 bg-neutral hover:glass">GWSC</h1>
        </div>
      </Link>


       
      <div className="flex gap-6 items-center">
        <div className="flex text-blue-400 font-semibold items-center">

          <NavLink className={` p-2 rounded-md `} to="/">
            <Button  modifier={`${location.pathname === "/" ? "bg-primary text-white" : "text-black"}
                               dark:text-white hover:bg-primary hover:text-white px-2`}  text="Home" icon={faHome}/>
          </NavLink>
          {/* <NavLink className={`p-2 rounded-md hover:text-white`} to="/users"><Button modifier={linkButtonMod} text="Users" icon={faUsers}/></NavLink> */}
          <NavLink className={`p-2 rounded-md hover:text-white`} to="/store">
            <Button  modifier={`${location.pathname === "/store" ? "bg-primary text-white" : "text-black"} 
                              dark:text-white hover:text-white hover:bg-primary px-2`} text="Store" icon={faBagShopping}/>
         </NavLink>

          <NavLink className={`p-2 rounded-md`} to="/posts">
            <Button  modifier={`${location.pathname === "/posts" ? "bg-primary text-white" : "text-black"} 
                              dark:text-white hover:bg-primary hover:text-white px-2`} text="Reviews" icon={faStar}/>
         </NavLink>

          <DropDown
          name="Features"
          icon={faAngleDown} 
               modifier="text-black dark:text-white hover:bg-primary hover:text-white rounded-lg"
          >

         
         <div>

        
          <ul className=" menu bg-white dark:bg-base-100  p-2 rounded-box">


                <li className="p-2 ">
                <NavLink to="/pitchtypes">
                  <FontAwesomeIcon className="mx-1" icon={faTree}/>
                  Pitch Type and Availability
                </NavLink> 
                </li>

         
                <li className=" p-2">
                <NavLink to="/attractions">
                  <FontAwesomeIcon className="mx-1" icon={faLocationCrosshairs}/>
                  Local Attraction
              </NavLink>
                </li>

            </ul>

         

          </div>
         
          </DropDown>

          <DropDown
          name="Information"
          dropEvent={dropToggle}
          modifier={`bg-ghost text-black dark:text-white hover:text-white hover:bg-primary rounded-lg`}
          >

         
         <div>

        
          <ul className=" menu bg-white dark:bg-base-100 p-2 rounded-box">


                <li className="p-2 ">
                <NavLink to="/contact">
                  <FontAwesomeIcon className="mx-1" icon={faContactCard}/>
                  Contact
                </NavLink> 
                </li>

                <li className=" p-2 ">
                <NavLink to="/about">
                  <FontAwesomeIcon className="mx-1" icon={faCircleExclamation}/>
                  About
                </NavLink>
                </li>

                <li className=" p-2 ">
                <NavLink to="/faq">
                  <FontAwesomeIcon className="mx-1" icon={faQuestionCircle}/>
                  FAQ
                </NavLink>
                </li>

             
                <div className="divider m-0 p-0"></div> 
                  

          <div className="flex gap-2 p-2 w-full font-semibold items-center justify-between">
            
            <h1 className="m-0 p-0">Follow us <FontAwesomeIcon icon={faArrowRight} /></h1>
            <div className="flex items-center gap-2 min-h-max">
              
            <div className="h-6 w-6 text-2xl m-0 p-0"> <FontAwesomeIcon icon={faTwitterSquare} /></div>
            <div className="h-6 w-6 text-2xl m-0 p-0"> <FontAwesomeIcon icon={faInstagramSquare} /></div>
            <div className="h-6 w-6 text-2xl m-0 p-0"> <FontAwesomeIcon icon={faSnapchatSquare} /></div>
            <div className="h-6 w-6 text-2xl m-0 p-0"> <FontAwesomeIcon icon={faLinkedin} /></div>
            
            </div>
          </div>

          </ul>

         

          </div>
         
          </DropDown>

        
          
        </div>

        
 
        <Search/>



       { user ? 

        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1"><FontAwesomeIcon icon={faEllipsis}/></label>
        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box space-y-2 min-w-[20rem] w-fit">

        <li>

        <div className="flex gap-4 items-center">


    { user?.picture ?
    
        <Avatar

        image={user?.picture }

        /> : <div>{ user.name.charAt(0)} </div>}

          <h1 className="font-bold">{user.name}</h1>

          
          <Button
            text="Logout"
            icon={faSignOut}
            modifier="btn tooltip tooltip-bottom bg-primary"
            tip="Logout"
            textColor="text-white"
            clickEvent={logOut}
          />

        
          </div>

          </li>
        
        
        </ul>

        </div>
              
            :

        <div className="flex gap-2">
         
          <NavLink to="/auth">

            <Button
              text="Join"
              icon={faPlus}
              modifier="btn tooltip tooltip-bottom bg-primary"
              tip="Join"
              textColor="text-white"
            />

          </NavLink>
         
         
        </div>}

      {location.pathname !== "/cart" &&  <div className="indicator">

     {cart ? <span className="indicator-item badge badge-neutral">{cart}</span> : ""} 

       <NavLink to="/cart">
        <Button  
                    text="" 
                    icon={faCartPlus}
                    modifier="btn text-white bg-secondary rounded-full"
                    />
        </NavLink>            
      </div>}

        <div className="px-4 grid place-items-center">

          <Toggle
          checked={dark}
          toggleEvent={darkToggle}
          on={faMoon}
          off={faSun}
          modifier1="text-blue-500"
          modifier2="text-yellow-500"
          />

        </div>
        
      </div>

    </div>

  </>)

}

const MobileNav = ({ toggle, event, user, logOut, dark, darkToggle, cart, location }) => {

 
  return (

    <>
      <div className="box-border ">

        <div className="flex justify-between p-4 items-center">
          
          <div className=" z-[90]">
          <Link to="/">
          <h1 className="font-black text-md rounded-lg p-2 mx-4 bg-neutral hover:glass">GWSC</h1>
          </Link>
          </div>
  
          <div className="flex items-center gap-8">
                     
            <div className="flex gap-10 text-3xl z-[90] items-center">

              <Search/>

          { location.pathname !== "/cart" && <div className="indicator">

            { cart ? <span className="indicator-item badge badge-primary">{cart}</span> : "" }

              <Link to="/cart">
              <Button  
                          text="" 
                          icon={faCartPlus}
                          modifier="btn text-white bg-secondary btn-sm"
                          />
              </Link>

            </div>}

              <Toggle
              on={faXmark}
              off={faBarsStaggered}
              checked={toggle}
              toggleEvent={event}
          />
           

            </div>

            { toggle && <div  className=" backdrop-blur-md  fixed bottom-0 top-0 left-0 right-0 z-50 flex flex-col p-14 gap-8">

              <div className="flex justify-between items-center mt-8">

                <div>

                  <Time/>

                </div>

                
                <div className="">

                  <Toggle
                  
                  on={faMoon}
                  off={faSun}
                  modifier1="text-blue-500"
                  modifier2="text-yellow-500"
                  checked={dark}
                  toggleEvent={darkToggle}

                  />  

                    <div className="w-16">

                    </div>


                </div>

             

              </div>

              <div>
               
               { user ? <div className="flex justify-between">

                <div className="flex items-center gap-4 flex-wrap">

                <Avatar
                image={user.picture}
                width="w-8"
                />

                <div>
                  
                  <h1 className="font-black text-xl">{user.name}</h1>
                  <p>{user.email}</p>

                </div>

                </div>

                <Button
                  text=""
                  icon={faSignOut}
                  modifier="btn tooltip tooltip-bottom bg-primary"
                  tip="Logout"
                  textColor="text-white"
                  borderSize="border-0"
                  clickEvent={logOut}
                />
                
               </div>
              
              :

              <div className="flex gap-2 justify-between">
         
              <NavLink to="/auth">
    
                <Button
                  text="Register"
                  icon={faPlus}
                  modifier="btn tooltip tooltip-bottom bg-primary"
                  tip="Register"
                  textColor="text-white"
                />
    
              </NavLink>
              <NavLink to="/auth">
    
                <Button
                  text="Login"
                  icon={faSignIn}
                  modifier="btn tooltip tooltip-bottom bg-primary"
                  tip="Login"
                  textColor="text-white"
                />
    
              </NavLink>
             
            </div>
              
              }
            
              </div>

           <div className="space-y-2">

           <NavLink className={` p-2 rounded-md `} to="/">
            <Button  modifier={`${location.pathname === "/" && "bg-primary text-white" }
                               dark:text-white hover:bg-primary hover:text-white px-2 w-full btn`}  text="Home" icon={faHome} clickEvent={event}/>
          </NavLink>
          {/* <NavLink className={`p-2 rounded-md hover:text-white`} to="/users"><Button modifier={linkButtonMod} text="Users" icon={faUsers}/></NavLink> */}
          <NavLink className={`p-2 rounded-md hover:text-white`} to="/store">
            <Button  modifier={`${location.pathname === "/store" && "bg-primary text-white" } 
                              dark:text-white hover:text-white hover:bg-primary px-2 w-full btn`} text="Store" icon={faBagShopping} clickEvent={event}/>
         </NavLink>

          <NavLink className={`p-2 rounded-md`} to="/posts">
            <Button  modifier={`${location.pathname === "/posts" && "bg-primary text-white"} 
                              dark:text-white hover:bg-primary hover:text-white px-2 w-full btn`} text="Reviews" icon={faStar} clickEvent={event}/>
         </NavLink>

         <DropDown
          name="Features"
          icon={faAngleDown} 
          modifier="text-white hover:bg-primary hover:text-white rounded-lg w-full bg-neutral"
          dropEvent={event}  
          >

         
         <div>

        
          <ul className=" menu bg-base-100  p-2 rounded-box">


                <li className="p-2 ">
                <NavLink to="/pitchtypes">
                  <FontAwesomeIcon className="mx-1" icon={faTree}/>
                  Pitch Type and Availability
                </NavLink> 
                </li>

         
                <li className=" p-2">
                <NavLink to="/attractions">
                  <FontAwesomeIcon className="mx-1" icon={faLocationCrosshairs}/>
                  Local Attraction
              </NavLink>
                </li>

            </ul>

         

          </div>
         
          </DropDown>

         <DropDown
          name="Features"
          icon={faAngleDown} 
          modifier="text-white hover:bg-primary hover:text-white rounded-lg w-full bg-neutral"
          dropEvent={event}
          >

         
         <div>

        
          <ul className=" menu bg-base-100  p-2 rounded-box">

                 <li className="p-2 ">
                <NavLink to="/contact">
                  <FontAwesomeIcon className="mx-1" icon={faContactCard}/>
                  Contact
                </NavLink> 
                </li>

                <li className=" p-2 ">
                <NavLink to="/about">
                  <FontAwesomeIcon className="mx-1" icon={faCircleExclamation}/>
                  About
                </NavLink>
                </li>

                <li className=" p-2 ">
                <NavLink to="/faq">
                  <FontAwesomeIcon className="mx-1" icon={faQuestionCircle}/>
                  FAQ
                </NavLink>
                </li>

            </ul>

         

          </div>
         
          </DropDown>
         
           </div>

            </div>

            }
            
          </div>
          </div>
        </div>


    </>
  )
}


const Nav = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
 
  const [darkTheme, setDarkTheme] = useDarkMode();

  const darkToggle = () => {

    setDarkTheme(!darkTheme)


  }
  
  const [user, setUser] = useState( () => JSON.parse(localStorage.getItem('profile')))
  
  const [cart, setCart] = useState([])

  const fetchCart =  async () => {

    const cart = await commerce.cart.retrieve()

    setCart(cart)

  }

  useEffect(() => {

    fetchCart()

  }, [fetchCart])

  const cartItems = cart.total_items

    // console.log(cart)
  

 const logOut = () => {

    dispatch({type: "LOGOUT"})
    navigate("/auth")
    setUser(null)

 }

 useEffect(() => {

  const token = user?.token

  setUser(JSON.parse(localStorage.getItem('profile')))

}, [location])

 const userInfo = user?.result

//  console.log(userInfo);

 const [toggle, setToggle] = useToggle(false)

 const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {

    reSize()
    

  }, [])

  const reSize = () => {

    window.addEventListener("resize", () => {

      setWidth(window.innerWidth)
      
    })
  }


  return (
    <>

    <div className="w-full z-50 md:py-2">

      { width <= 1060 ?

      <MobileNav location={location} cart={cartItems} dark={darkTheme} darkToggle={darkToggle} toggle={toggle} event={setToggle} user={userInfo} setState={setUser} logOut={logOut}/>

        :

      <DesktopNav location={location} cart={cartItems} dark={darkTheme} darkToggle={darkToggle}  toggle={toggle} event={setToggle} user={userInfo} setState={setUser} logOut={logOut}/> 
            
        }

        </div>
    </>
  )
}

export default Nav;
