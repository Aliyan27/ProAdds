import React, { useState } from "react";
import DashboardChangePassword from "../Components/DashboardChangePassword";
import ApiNames from "../Constants/ApiNames";
import { fetchPosts } from "../Utils/FetchApis";

type Props = {
  token: any;
};
interface FormValues {
  currentpassword: string;
  newpassword: string;
  confirmpasword: string;
}

const DashboardChangePasswordScreen = (props: Props) => {
  const [formvalues, setFormValue] = useState<FormValues>({
    currentpassword: "",
    newpassword: "",
    confirmpasword: "",
  });
  const [response, setResponse] = useState("");
  const changePassword = async (currentPassword: any, confirmpasword: any) => {
    try {
      const data = {
        userId: 1,
        currentPassword: currentPassword,
        newPassword: confirmpasword,
      };
      const result = await fetchPosts(
        ApiNames.changePassword,
        data,
        props.token.jwttoken
      );
      setResponse(result.response);
    } catch (error) {}
  };

  return (
    <DashboardChangePassword
      formvalues={formvalues}
      setFormValue={setFormValue}
      changePassword={changePassword}
      response={response}
    />
  );
};

export default DashboardChangePasswordScreen;
