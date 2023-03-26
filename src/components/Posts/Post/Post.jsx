import { faEdit, faEllipsis, faEye, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "../../Button";
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux"
import { deletePost, likePost } from "../../../actions/posts"
import { useState } from "react";

const Post = ({post, setCurrentId}) => {

  const [user, setUser ] = useState(() => JSON.parse(localStorage.getItem("profile")))

  const dispatch = useDispatch()

  const allTags = post.tags.map(tag => (

      <div className="badge badge-outline">{`#${tag}`}</div>

  ))

  const likeText = post.likeCount ? post.likeCount : "Like" 

  return (
          <>

        
            <div className="card lg:card-side shadow-xl relative text-gray-600 dark:text-gray-200">
          
            <figure>

            <img className="sm:w-full lg:w-[500px] max-h-[500px] md:w-full  grid place-items-center place-content-center" src={post.selectedFile} alt="Shoes" height="300px"/>
                                    
            </figure>

            <div className="card-body relative">

   {   user?.result?.name   &&   <div className="absolute right-0 px-8">

                  <div className="dropdown dropdown-left">

                  <label tabIndex={0} className="btn m-1"><FontAwesomeIcon icon={faEllipsis}/></label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2">

                  <li><Button 
                          text="Edit" 
                          icon={faEdit} 
                          modifier="btn" 
                          bgColor="bg-neutral"
                          clickEvent={() => setCurrentId(post._id)}
                          />

                    </li>
                    <li><Button 
                          text="Delete" 
                          icon={faTrash} 
                          modifier="btn" 
                          bgColor="bg-red-600" 
                          textColor="text-white"
                          clickEvent={() => dispatch(deletePost(post._id))}
                          />
                          
                    </li>
                   
                  </ul>
                </div>
              </div>}
               <h2 className="card-title flex justify-between">

                  {post.name}

               </h2>
                <p>{post.message}</p>

                <div className="flex gap-2 flex-wrap m-4">
                
                {allTags}

                </div>

              <div className="card-actions justify-between items-end">

                <h1>{moment(post.createdAt).fromNow()}</h1>

    { user?.result?.name ? 
                  <Button 
                  text={likeText} 
                  icon={faThumbsUp} 
                  modifier="btn" 
                  bgColor="bg-primary" 
                  textColor="text-white"
                  clickEvent={() => dispatch(likePost(post._id))}
                  /> :   <Button 
                  text={likeText} 
                  icon={faThumbsUp} 
                  disabled={true}
                  modifier="btn " 
                  bgColor="bg-primary" 
                  textColor="text-white"/>

                }

              </div>
            </div>
          </div>
                      
          </>)
}

export default Post
