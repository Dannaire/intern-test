import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromApi } from "../../config/Axios/AxiosGet";
import { loginAction } from "../../config/firebase/Auth/Login";
import LoginForm from "./LoginForm";
import TitleLogin from "./TitleLogin";

const LoginTabs = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isLogin) {
      navigate("/pages");
    }
  });

  // Function to handle email input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle password input changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle user login
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setLogin(true);
      } else {
        alert("Email atau password salah.");
      }
    } else {
      alert("Tidak ada pengguna yang terdaftar.");
    }
  };

  // Function to perform Firebase login action
  const login = async () => {
    await loginAction();
    setLogin(true);
    getDataFromApi();
  };

  // Render 
  return (
    <>
      <section className="wrapper flex w-full justify-center ">
        <div className=" content-wrap mt-8 flex justify-center rounded-xl shadow-2xl px-8 py-16 bg-white flex-col">
          <figure className="w-full flex flex-row justify-center">
            <img src={require("../../assets/Logo_SMK.png")} className="w-10 text-center" alt="" />
          </figure>
          <TitleLogin desc={"Masukan email dan password yang sudah dibuat"} />
          <div className="form-content mt-7">
            <LoginForm label={"Email"} type={"email"} placeholder={"cth: alex123@gmail.com"} onChange={handleEmailChange} value={email} />
            <LoginForm label={"Kata Sandi"} type={"password"} onChange={handlePasswordChange} value={password} />
          </div>
          <div className="button-login mt-4">
            <button type="submit" onClick={handleLogin} className="py-2 w-full rounded-full bg-red-600 text-white font-semibold text-base">
              Login
            </button>
            <div className="w-full h-px my-3 bg-gray-300 "></div>
            <p className="my-5">atau login dengan</p>
            <button onClick={login} type="submit" className="py-2 w-full rounded-full border-2 border-red-600  text-black-900 font-semibold text-base">
              Google
            </button>
            <div className="mt-5">
            Belum punya akun? <a className="text-red-600" href="register">Daftar</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginTabs;
