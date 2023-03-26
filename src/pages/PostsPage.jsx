
import { Link } from "react-router-dom";
import { NewPostForm, Posts } from "../components";
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { getPosts } from "../actions/posts";

  const PostsPage = () => {

  const [ currentId, setCurrentId ] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getPosts())

  }, [currentId, dispatch])

  return (

    <>

    <div className="text-gray-600 p-4 dark:text-gray-200">

    <h1 className="text-4xl py-4">Reviews</h1>

    <div className=" flex flex-col-reverse lg:grid w-full lg:grid-cols-12 lg:gap-4 sm:gap-4">

        <div className="col-span-9 relative grid place-items-center m-4">
        
          <Posts setCurrentId={setCurrentId}/>

        </div>

        <div className="col-span-3 relative">

          <NewPostForm currentId={currentId} setCurrentId={setCurrentId}/>

        </div>

    </div>

    </div>
   
    </>
  )
};

export default PostsPage;
