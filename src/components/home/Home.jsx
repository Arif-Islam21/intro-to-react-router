import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <h2>THis is the home component</h2>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
