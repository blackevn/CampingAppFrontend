import {Button, Form, Input} from "../components";
import {useParams, Link, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { faArrowCircleLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const User = () => {

  const {userID} = useParams()

  const [edit, setEdit] = useState({

    USERNAME:"",
    EMAIL:""

  })

  const handleChange = (e) => {

    const {value,  name} = e.target
    setEdit(prevEdit => ({...prevEdit, [name]: value}))

  }
  
  const editUsers = (e) => {
    e.preventDefault()
    console.log(edit);
    const url = `http://localhost:80/api/users/${userID}/save`
    axios.put(url, edit)
    
  }

  useEffect(() => {

    const url = `http://localhost:80/api/users/${userID}`

    axios.get(url, {

        Accept: "application/json"

    })

        .then(data => {

            setEdit(data.data)

        })

        .catch(error => console.error(error.message))

}, [])

  return (
  
          <>
          <div className="p-8">

            <Form
            label={`USER ID: ${userID}`}
            >
            <Input
            type="text"
            placeholder="Username"
            
            name="username"
            onChange={handleChange}
            bgColor="bg-white"
            textTrans="capitalize"
            />
            <Input
            type="email"
            placeholder="Email"
            
            name="email"
            onChange={handleChange}
            bgColor="bg-white"
            />
            <Button
             clickEvent={editUsers}
             text="Save"
             icon={faSave}
            />
            </Form>

            <Link to="/users">
            <Button
            text="Back"
            margin="my-4"
            icon={faArrowCircleLeft}
            
            />
            </Link>

            </div>
          </>
        )
};

export default User;
