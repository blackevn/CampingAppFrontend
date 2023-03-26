
import{ Button, Input} from "../components"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";


const Users = ( ) => {
  

  const [users, setUsers] = useState([])

  useEffect(() => {

    getUsers()    

  }, [])


  const getUsers = () => {
    const url = "http://localhost:80/api/users/save"

    axios.get(url, {

        Accept: "application/json"

    })

        .then(data => {

            setUsers(data.data)

        })

        .catch(error => console.error(error.message))
  }

  console.log(users);

  const deleteBtn = (id) => {
    const url = `http://localhost:80/api/users/${id}/delete`
    axios.delete(url)
      .then(res => console.log(res.message))
      getUsers()
  }

  const allUsers = users.map(user => 
    
    
    <div key={user.USERID} className="flex gap-4 justify-between shadow-2xl rounded-lg p-6 m-4 bg-white items-center">

    <h1><span className="font-bold">ID:</span>  {user.USERID}</h1>
    <h1><span className="font-bold">Username:</span>  {user.USERNAME}</h1>
    <h1><span className="font-bold">Email:</span>  {user.EMAIL}</h1>
    <h1><span className="font-bold">Age:</span>  {user.AGE}</h1>
    <h1><span className="font-bold">Origin:</span> {user.ORIGIN}</h1>
    <div className="flex flex-wrap gap-2">

    
    <Link to={`/users/${user.USERID}`}>
      <Button
          text="Edit"
          borderColor="border-blue-500"
          textColor="text-blue-500"
          icon={faEdit}
      />

    </Link>
      <Button
          text="Delete"
          borderColor="border-red-500"
          textColor="text-red-500"
          icon={faTrash}
          clickEvent = {()=>deleteBtn(user.USERID)}
      />

  </div>
  </div>

    ) 


  return (

    <>
    <div className="relative">

    
     <div className="shadow-2xl rounded-lx p-6 m-4 bg-gray-200 rounded-md">
      <div className="flex justify-between items-center">
      <h1 className="text-5xl font-black py-3">Users</h1>
      <div className="flex gap-2">

      <Input
      type="search"
      bgColor="bg-white"
      placeholder="Search"
      />
     
      <Button
      text=""
      icon={faSearch}
      paddinX="px-4"
      />
      </div>

      </div>
                   
      
    {allUsers}
    </div>
    </div>


    </>
  )
};


export default Users;
