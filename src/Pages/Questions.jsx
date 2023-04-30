import { Fragment } from "react";
import Navbar from "../components/Navbar/navbar";
import QuestionsComps from "../components/Questions/questions";

const Questions = () => {
  return (
    <Fragment>
      <Navbar />
      <QuestionsComps />
    </Fragment>
  );
};

export default Questions;
