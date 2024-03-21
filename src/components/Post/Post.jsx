import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const hadleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="postStyle">
      <h2>Hello from post no: {id}</h2>
      <h4>{title}</h4>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={hadleShowDetail}>Click to show detail</button>
    </div>
  );
};

export default Post;
