import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <h2>This is my react website</h2>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
