import { Link } from "react-router-dom";
import "./user.css";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="userStyle">
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
