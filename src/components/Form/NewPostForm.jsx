import { Link } from "react-router-dom";
import { Button, Form, Input, TextArea } from "../index.js";
import { faArrowRotateRight, faEdit, faPlusCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";


const NewPostForm = ({ currentId, setCurrentId }) => {

const posts = useSelector(state => currentId ? state.posts.find( p => p._id === currentId) : null )

const dispatch  = useDispatch()

const user = JSON.parse(localStorage.getItem("profile"))

const [ postData, setPostData ] = useState({

                                            title: "",
                                            message: "",
                                            tags: "",
                                            selectedFile: ""

                                          })

useEffect(() => {

if (posts){
  
  setPostData(posts)

}

}, [posts])                                            


const handleChange = (e) => {

  const { name, value } = e.target 

  setPostData(prevData => ({ ...prevData, [name]: value }))
  
}


const handleChangeTags = (e) => {

  const { value } = e.target 

  setPostData(prevData => ({ ...prevData, tags: value.split(",") }))
  
}


const clear = (e) => {

  setCurrentId(null)
  
  setPostData({

    title: "",
    message: "",
    tags: "",
    selectedFile: ""

  })


} 

const handleSubmit = (e) => {

  e.preventDefault()

  if(currentId) {

    dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))

  } else {

    dispatch(createPost({...postData, name: user?.result?.name}))

  }

  clear()

}

if ( !user?.result?.name ) {

  return (
  
  <div className="card shadow-xl w-full text-gray-600 dark:text-gray-200">

  <div className="card-body grid place-items-center">

    <h2 className="card-title">Leave review</h2>

    <p>Join to share your experience</p>

    <div className="card-actions justify-center w-full">
      
      <Link to="/auth">

      <Button
              text="Join"
              icon={faPlus}
              modifier="btn tooltip tooltip-bottom bg-primary w-full"
              tip="Join"
              textColor="text-white"
            />

      </Link>

    </div>

  </div>

</div>

)}

const formText = currentId ? "Editing review" : "Share expierience"
const submitButtonText = currentId ? "Edit review" : "Add review"
const submitButtonIcon = currentId ? faEdit : faPlusCircle

console.log(postData)

  return (
        <>

          <Form label={formText} bgColor="bg-neutral" modifier="form-control relative">

                    
           
            <Input
            name="title"
            value={ postData.title }
            placeholder="Title"
            onChange={ handleChange }
            modifier="input p-2"
            />
            
            <TextArea
            modifier="textarea p-2 bg-base-100 border-0"
            name="message"
            value={ postData.message }
            placeholder="Share the experience..."
            onChange={ handleChange }
             />

            <Input
            name="tags"
            value={ postData.tags }
            placeholder="Tags"
            onChange={ handleChangeTags }
            modifier="input p-2"
            />
            
            <FileBase
              type="file"
              className="file-input file-input-primary w-full p-0"
              multiple={ false }
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />

            <div className="flex gap-2 w-full justify-between">

            <Button 
                clickEvent={ handleSubmit }
                text={ submitButtonText } 
                bgColor="bg-primary" 
                icon={ submitButtonIcon } 
                textColor="text-white" 
                borderSize="border-0"
                modifier="w-full"
                />

            <Button
              icon={faArrowRotateRight}
              text=""
              textColor="text-gray-100"
              borderSize="border-0"
              clickEvent={ clear }
              tip="Reset input"
              modifier="tooltip btn"
              />

            </div>

          </Form>
  
            
         </>
    )
}

export default NewPostForm
