import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOOpS</h1>
      <p>{error.status || error.statusText}</p>
      {error.status === 404 && (
        <div>
          <h2>page not found</h2>
          <p>please go back from where you are</p>
          <Link to={"/"}>
            <button>Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
