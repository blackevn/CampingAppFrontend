import { Button, Form, Input } from "../components";
import axios from "axios";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const [registerData, setRegisterData] = useState({

                username:"",
                userpass:"",
                age:"",
                origin:"",
                email:""

              })

  const handleChange = (e) => {

      const {name, value} = e.target
      setRegisterData(prevData => ({...prevData, [name]: value}))

  }

  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault();

    console.log(registerData);

    const url = 'http://localhost:80/api/users'

    axios.post(url, registerData)
    navigate("/users")
  }

  
  return (

    <>
    <div className="grid place-items-center h-screen bg-gray-200 text-wh">

        <Form label="Register" bgColor="bg-neutral">

        <Input
          type="text"
          placeholder="Username"
          value={registerData.username}
          name="username"
          onChange={handleChange}
          modifier="input input-bordered"

        />
        <Input
          type="password"
          placeholder="Password"
          value={registerData.userpass}
          name="userpass"
          onChange={handleChange}
          modifier="input input-bordered"
        />
        <Input
          type="text"
          placeholder="Age"
          value={registerData.age}
          name="age"
          onChange={handleChange}
          modifier="input input-bordered"
        />
        <Input
          type="text"
          placeholder="Origin"
          value={registerData.origin}
          name="origin"
          onChange={handleChange}
          modifier="input input-bordered"
        />
        <Input
          type="email"
          placeholder="Email"
          value={registerData.email}
          name="email"
          onChange={handleChange}
          modifier="input input-bordered"
        />
        
        <Button
        icon={faArrowAltCircleRight}
        text="Register"
        clickEvent={sendData}
        textColor="text-white"
        modifier="btn border-0 bg-primary"
        />

        <Link to="/login">Login</Link>
    </Form>

    </div>
    </>

  )
};

export default Register;
