import React, { useState } from "react";
import TitleLogin from "./TitleLogin";
import LoginForm from "./LoginForm";

const RegisterTabs = () => {
  const [registerVal, setRegisterVal] = useState({
    nama_lengkap: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setRegisterVal({
      ...registerVal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if password matches confirm password
    if (registerVal.password !== registerVal.confirm_password) {
      alert("Kata sandi tidak sesuai!");
      return;
    }
    // Check if email is valid
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(registerVal.email)) {
      alert("Email tidak valid! gunakan seperti contoh !!!");
      return;
    }
    // Get existing users from local storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if email already exists
    const userExists = users.find((user) => user.email === registerVal.email);
    if (userExists) {
      alert("Email sudah terdaftar!");
      return;
    }
    // Add new user to users array
    users.push(registerVal);
    // Store updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registrasi berhasil!");
    // Clear form fields
    setRegisterVal({
      nama_lengkap: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };
  
  return (
    <>
     <section className="wrapper flex w-full justify-center ">
      <div className=" content-wrap mt-8 flex justify-center rounded-xl shadow-2xl px-8 py-16 bg-white flex-col">
      <figure className="w-full flex flex-row justify-center">
            <img src={require("../../assets/Logo_SMK.png")} className="w-10 text-center" alt="" />
          </figure>
        <TitleLogin desc={"Buat email dan kata sandi anda untuk login"} />
        <div className="form-content mt-7">
          <LoginForm
            label={"Nama Siswa"}
            type={"text"}
            placeholder={"cth: Alex Ferguson"}
            onChange={handleChange}
            value={registerVal.nama_lengkap}
            name={"nama_lengkap"}
          />
          <LoginForm
            label={"Email"}
            type={"email"}
            placeholder={"cth: alex123@gmail.com"}
            onChange={handleChange}
            value={registerVal.email}
            name={"email"}
          />
          <LoginForm
            label={"Kata sandi"}
            type={"password"}
            onChange={handleChange}
            value={registerVal.password}
            name={"password"}
          />
          <LoginForm
            label={"Ulangi Kata Sandi"}
            type={"password"}
            onChange={handleChange}
            value={registerVal.confirm_password}
            name={"confirm_password"}
          />
        </div>
        <div className="button-login mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-2 w-full rounded-full bg-red-600 text-white font-semibold text-base"
          >
            Daftar
          </button>
          <div className="mt-5">
          Sudah punya akun? <a className="text-red-600" href="login">Login</a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default RegisterTabs;
