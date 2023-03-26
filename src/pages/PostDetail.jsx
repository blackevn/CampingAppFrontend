import { useParams } from "react-router-dom";

const PostDetail = () => {

  const { postID } = useParams()

  return (

          <h1>{postID}</h1>

        )
}

export default PostDetail;
