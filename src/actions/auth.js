import { AUTH } from "../constants/actionTypes";
import * as api from "../api"

export let signinErrorMessage = []
export let signupErrorMessage = []

setTimeout(() => {

    signinErrorMessage = []
    signupErrorMessage = []

    }, 3000);


export const signIn = (authData, navigate) => async (dispatch) => {


     try {
         // Signin the user
    const { data } = await api.signIn( authData )

    dispatch({ type: AUTH, data })
        
       navigate("/")

    } catch (error) {
  
       signinErrorMessage.push(error)
        
    }
   
    console.log(signinErrorMessage)
    
}


export const signUp = (authData, navigate) => async (dispatch) => {

    try {
         // Signup the user
    const { data } = await api.signUp( authData )

    dispatch({ type: AUTH, data })

       navigate("/")
       
    } catch (error) {

        signupErrorMessage.push(error)
               
    }

 

}


