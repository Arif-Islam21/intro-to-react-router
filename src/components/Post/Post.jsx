import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="postStyle">
      <h2>Hello from post no: {id}</h2>
      <h4>{title}</h4>
      <Link to={"/posts"}>Post Details</Link>
    </div>
  );
};

export default Post;
