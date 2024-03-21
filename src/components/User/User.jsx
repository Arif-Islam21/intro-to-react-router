import "./user.css";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="userStyle">
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
};

export default User;
