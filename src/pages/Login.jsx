import {Button, Form, Input} from "../components";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery"
import axios from "axios";

const Login = () => {

    const [loginData, setLoginData] = useState({
      
        username:"",
        password:""
        
    })

    const change = (e) => {
      
        const { name, value } = e.target
        setLoginData(prevData => ({...prevData, [name]: value}))
    }   
    
    

    const sendData = (e) => {
        e.preventDefault()
        console.log(loginData)
        const url = "http://localhost:80/api/users/login"
        axios.post(url, loginData)
    }

    console.log(loginData)

  return (
    <>

    <div className="grid place-items-center h-screen bg-gray-200">
      
        <Form label="Login" bgColor="bg-neutral">
        <Input
        type="text"
        placeholder="Username"
        name="username"
        value={loginData.username}
        onChange={change}
        modifier="input input-bordered"
        />
        <Input
        type="password"
        placeholder="Password"
        name="password"
        value={loginData.password}
        onChange={change}
        modifier="input input-bordered"
        />
        <Button
        icon={faArrowAltCircleRight}
        text="Login"
        clickEvent={sendData}
        modifier="btn border-0 bg-primary text-white"
        />

        <div className="flex justify-between">

        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
        </div>
        </Form>
        </div>
  

    </>
  )
};

export default Login;
