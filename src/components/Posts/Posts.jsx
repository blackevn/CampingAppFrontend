import Post from "./Post/Post"
import { useSelector  } from "react-redux"
import { post } from "jquery";

const Posts = ({ setCurrentId }) => {

  const posts = useSelector((state) => state.posts)

  console.log(posts);

  const allPost = posts.map(post => (
   
    <Post key={post._id} post={post} setCurrentId={setCurrentId}/>
   
  ))

  return (<>

        
        
      { posts.length ? 
       
       <div className="w-full flex flex-col gap-4">
        
         { allPost }

        </div> :

        <div>

          <button className="btn btn-square loading"></button>

        </div>

        
      }
        
       
          </>)
}

export default Posts;
