import React from "react";

const TitleLogin = (props) => {
  return (
    <div className="title">
      <figure className="flex justify-center"></figure>
      <div className="title-content mt-2 text-center">
        <h2 className="text-2xl font-extrabold">SMK TELKOM MALANG</h2>
        <p className="text-sm font-medium text-gray-500">{props.desc}</p>
      </div>
    </div>
  );
};

export default TitleLogin;
