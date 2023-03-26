import Button from "../Button"
import Form from "../Form/Form"
import Input from "../Input"
import Toast from "../Toast"
import {
    faArrowAltCircleRight,
    faArrowRight,
    faEnvelope,
    faEye,
    faEyeSlash,
    faLock
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import GroupedInput from "../GroupedInput"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useGoogleLogin } from "@react-oauth/google"
import { useDispatch } from "react-redux"
import Avatar from "../Avatar"
import { useNavigate } from "react-router-dom"
import { signUp, signIn, signinErrorMessage, signupErrorMessage } from "../../actions/auth"
import { useCounter } from "../../hooks"
import CoundownTimer from "../CoundownTimer"
import AuthLock from "./AuthLock"
import ReCAPTCHA from 'react-google-recaptcha';

const Auth = () => {

    const [response, setResponse] = useState(null);

    const [clearStorage, count, updateCount] = useCounter()

    const [countdownTime, formattedTime, startTimer] = CoundownTimer()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [signinErrMessage, setSigninErrMessage] = useState("" || "Processing...")

    const [disable, setDisable] = useState(false)

    const [signupErrMessage, setSignupErrMessage] = useState("" || "Processing...")

    const [toastToggle, setToastToggle] = useState({ signup: false, signin: false, signinError: false, captcha: false })

    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('profile')))

    const [lockTime, setLockTime] = useState(() => JSON.parse(localStorage.getItem('countdownTime')))

    const [isSignUp, setIsSignUp] = useState(true)

    const userInfo = user?.result


    const switchInput = () => {

        setIsSignUp(prev => !prev)

    }


    const sendData = (e) => {

      if (response) { if ( isSignUp ) {


            for (let i = 0; i < signupErrorMessage.length; i++) {

                setSignupErrMessage(signupErrorMessage[0].response.data.message)

            }

            setToastToggle(prevState => ({ signup: !prevState.signup }))

            console.log(signupErrMessage)

            dispatch(signUp(authData, navigate))

        } else {

            updateCount()


            for (let i = 0; i < signinErrorMessage.length; i++) {

                setSigninErrMessage(signinErrorMessage[0].response.data.message)

            }

            console.log(signinErrMessage.length > 3);


            setToastToggle(prevState => ({ signin: !prevState.signin }))


            dispatch(signIn(authData, navigate))
          

        }} else {

            setToastToggle(prevState => ({ captcha: !prevState.captcha }))

        }

    }


    if (toastToggle) {

        setTimeout(() => {

            setToastToggle(false)

        }, 3500);

    }


    useEffect(() => {

        localStorage.setItem("disable", disable);

    }, [disable])


    if (count >= 3 && signinErrMessage === "Wrong password") {

        startTimer()

        clearStorage()

        console.log("Locking for 10mins");

        setDisable(true)

        setTimeout(() => {

            setDisable(false)

        }, 600000)


    }


    const [showPassword, setShowPassword] = useState(false)

    const [authData, setAuthData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""

    })


    const change = (e) => {

        const { name, value } = e.target

        setAuthData(prevData => ({ ...prevData, [name]: value }))
    }

    const makePasswordVisible = (e) => {

        e.preventDefault()
        setShowPassword(prevPass => !prevPass)

    }

    const passwordIcon = showPassword ? faEyeSlash : faEye


    console.log(authData)

    const authUrl = "https://www.googleapis.com/oauth2/v3/userinfo"


    const googleLogin = useGoogleLogin({

        onSuccess: async response => {

            try {

                const data = await axios.get(authUrl, {

                    headers: {

                        "Authorization": `Bearer ${response?.access_token}`

                    }

                })

                const token = response?.access_token
                const result = data.data
                console.log(result);
                console.log(token);

                dispatch({ type: "AUTH", data: { result, token } })

                navigate("/")

            } catch (error) {

                console.log(error)

            }
        }

    })

    // important
    const handleSubmit = (e) => {

        e.preventDefault()

    }

    const onChange = (value) => {

        setResponse(value)
        
      }

    console.log(response)

    return (

        <>

            {toastToggle.signin && <Toast modifier={ signinErrMessage === "Processing..." ? "alert-primary" : "alert-error" } value={signinErrMessage} />}
            {toastToggle.signup && <Toast modifier={signupErrMessage === "Processing..." ? "alert-primary" : "alert-error"} value={signupErrMessage} />}
            {toastToggle.captcha && <Toast value="ReCAPTCHA not ticked. If you do not see ReCAPTCHA wait or reload the page."/>}

            <div className="grid place-items-center h-screen bg-white dark:bg-base-100 ">

                {disable && <AuthLock modifier="badge-error">

                    <div className="flex gap-2 items-center">

                        <p>Locking Signin for 10 minute</p>

                    </div>

                </AuthLock>}

                <Form onSubmit={handleSubmit} label={isSignUp ? "Sign up" : "Login"} >

                    {isSignUp ? <div className="space-y-2">

                        <div className="grid md:grid-cols-2 gap-2">

                            <Input
                                type="text"
                                placeholder="First name"
                                name="firstName"
                                value={authData.firstName}
                                onChange={change}
                                modifier="input"
                                icon={faEnvelope}
                                disabled={disable}
                            />

                            <Input
                                type="text"
                                placeholder="Last name"
                                name="lastName"
                                value={authData.lastName}
                                onChange={change}
                                modifier="input"
                                icon={faEnvelope}
                                disabled={disable}
                            />

                        </div>

                        <GroupedInput
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={authData.email}
                            onChange={change}
                            modifier="input"
                            icon={faEnvelope}
                            disabled={disable}
                        />

                        <GroupedInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={authData.password}
                            onChange={change}
                            modifier="input "
                            icon={faLock}
                            disabled={disable}
                        >

                            <Button
                                modifier="btn bg-base-100 border-base-100"
                                text=""
                                icon={passwordIcon}
                                clickEvent={makePasswordVisible}
                                disabled={disable}
                            />

                        </GroupedInput>


                        <GroupedInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Repeat password"
                            name="repeatPassword"
                            value={authData.repeatPassword}
                            onChange={change}
                            modifier="input "
                            icon={faLock}
                            disabled={disable}
                        >

                            <Button
                                modifier="btn bg-base-100 border-base-100"
                                text=""
                                icon={passwordIcon}
                                clickEvent={makePasswordVisible}
                            />

                        </GroupedInput>

                        <div className="w-full grid place-items-center">

                        <ReCAPTCHA size="normal"  theme="invisible" sitekey="6LewhBUkAAAAANG4k1c2qhurZ20pd9qMHybYrtZ-" onChange={onChange} />

                        </div>

                        <Button
                            icon={faArrowAltCircleRight}
                            text="Sign up"
                            clickEvent={sendData}
                            modifier="btn border-0 bg-primary text-white w-full"
                            disabled={disable}

                        />

                    </div>

                        :

                        <div className="space-y-2">

                            <GroupedInput
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={authData.email}
                                onChange={change}
                                modifier="input"
                                icon={faEnvelope}
                                disabled={disable}
                            />

                            <GroupedInput
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                value={authData.password}
                                onChange={change}
                                modifier="input "
                                icon={faLock}
                                disabled={disable}
                            >

                                <Button
                                    modifier="btn bg-base-100 border-base-100"
                                    text=""
                                    icon={passwordIcon}
                                    clickEvent={makePasswordVisible}
                                    disabled={disable}
                                />

                            </GroupedInput>

                            <ReCAPTCHA size="normal" theme="invisible" sitekey="6LewhBUkAAAAANG4k1c2qhurZ20pd9qMHybYrtZ-" onChange={onChange} />

                            <Button
                                icon={faArrowAltCircleRight}
                                text="Login"
                                clickEvent={sendData}
                                modifier="btn border-0 bg-primary text-white w-full"
                                disabled={disable}
                            />


                        </div>



                    }


                    <Button
                        text={user ? userInfo?.name : "Sign in with Google"}
                        icon={faGoogle}
                        clickEvent={googleLogin}
                        modifier="btn border-0 bg-primary text-white w-full"
                        disabled={disable}
                    >

                        {user && <p>
                            <Avatar
                                image={userInfo?.picture}
                                width="w-6"
                                modifier="mx-1"
                            />
                        </p>}

                        <h1>{userInfo?.email}</h1>
                    </Button>

                    {isSignUp ? <p className="flex items-center text-black dark:text-gray-200">Already have an account?


                        <Button icon={faArrowRight} text="Login" modifier="text-primary px-2" borderSize="border-0" clickEvent={switchInput} disabled={disable} />


                    </p>

                        :

                        <p className="flex items-center text-black dark:text-gray-200">Don't have an account?



                            <Button icon={faArrowRight} text="Sign up" modifier=" px-2 text-primary" borderSize="border-0" clickEvent={switchInput} disabled={disable} />



                        </p>

                    }


                    <div className="flex justify-end">

                        <Link to="/">Home</Link>

                    </div>
                </Form>
            </div>


        </>
    )
}

export default Auth