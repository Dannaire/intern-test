import { Fragment } from "react";
import HomeComps from "../components/Home/Home";
import Navbar from "../components/Navbar/navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeComps />
    </Fragment>
  );
};
export default Home;
