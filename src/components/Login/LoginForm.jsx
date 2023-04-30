import React from "react";

const LoginForm = (props) => {
  return (
    <div className="form-input mb-2">
      <p className="text-base font-medium">{props.label}</p>
      <input className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700" type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} name={props.name} />
    </div>
  );
};

export default LoginForm;
