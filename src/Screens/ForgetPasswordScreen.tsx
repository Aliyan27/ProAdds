import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ForgetPassword from "../Components/ForgetPassword";
import ApiNames from "../Constants/ApiNames";
import {
  fetchGetPWKey,
  fetchPostforgetpass,
  fetchPosts,
} from "../Utils/FetchApis";

type Props = {
  token: any;
};

const ForgetPasswordScreen = (props: Props) => {
  const navigation = useNavigate()
  const search = useLocation().search;
  const resetKey = new URLSearchParams(search).get("resetKey");
  useEffect(() => {
    if (resetKey) {
      if(props.token){
        console.log(resetKey,props.token.jwttoken);
        handlePWResetKey();
      }
    }
  }, [resetKey,props.token]);

  const handlePWResetKey = async () => {
    try {
      let response = await fetchGetPWKey(
        ApiNames.checkPWResetKey+"?resetKey="+resetKey,
        props.token.jwttoken
      );
      console.log("key==>", response);
      if (response.status === 0) {
        navigation('/changePassword', { state: { resetKey:resetKey } })
      } else if (response.status === 1) {
        alert(response.response);
      }
    } catch (err) {
      console.log("PWResetKey failed: " + err);
    }
  };

  const handleValues = async (email: string) => {
    let data = new FormData();
    data.append("email", email);
    try {
      let response = await fetchPostforgetpass(
        ApiNames.forgotPassword,
        data,
        props.token.jwttoken
      );
      console.log("forget pass==>", response);
      if (response.status === 0) {
        alert(response.response)
      } else if (response.status === 1) {
        alert(response.response);
      }
    } catch (err) {
      console.log("forgetpassword failed: " + err);
    }
  };
  return <ForgetPassword handleValues={handleValues} />;
};

export default ForgetPasswordScreen;
