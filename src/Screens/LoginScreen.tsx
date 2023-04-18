import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Components/Login";
import ApiNames from "../Constants/ApiNames";
import { fetchPosts } from "../Utils/FetchApis";

type Props = {
  token: any;
};

const LoginScreen = (props: Props) => {
  let navigate = useNavigate();


  const handleValues = async (
    username: string,
    password: string,
    captcha: string,
    captchaRef: any
  ) => {
    let capt = captchaRef;
    const data = {
      username: username,
      password: password,
      recaptchaResponse: captcha,
    };

    try {
      let response = await fetchPosts(
        ApiNames.login,
        data,
        props.token.jwttoken
      );
      console.log("login==>", response);
      if (response.status === 0) {
        localStorage.setItem("email", response.response.email);
        localStorage.setItem("id", response.response.id);
        localStorage.setItem("username", response.response.username);
        navigate("/dashboard");
      } else if (response.status === 1) {
        capt.reset();
        alert(response.response);
      }
    } catch (err) {
      console.log("Login failed: " + err);
    }
  };

  return <Login handleValues={handleValues} />;
};

export default LoginScreen;
