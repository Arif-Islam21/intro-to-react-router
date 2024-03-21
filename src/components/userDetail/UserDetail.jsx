import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();
  const { name, website } = user;

  return (
    <div>
      <h2>Details about users {name}</h2>
      <p>Visit us : {website}</p>
    </div>
  );
};

export default UserDetail;
