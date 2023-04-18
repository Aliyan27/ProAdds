import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ChangePassword from '../Components/ChangePassword'
import ApiNames from '../Constants/ApiNames';
import { fetchPosts } from '../Utils/FetchApis';

type Props = {
  token: any;
}

const ChangePasswordScreen = (props: Props) => {
  const { state } = useLocation();
  const navigation = useNavigate()
  console.log(state)
  const handleValues = async (
    password: string,
  ) => {
    const data = {
      resetKey:state.resetKey,
      newPassword:password
    };
    console.log(data.newPassword)
    try {
      let response = await fetchPosts(
        ApiNames.recoverAccount,
        data,
        props.token.jwttoken
      );
      console.log("Recover pass==>", response);
      if (response.status === 0) {
        navigation('/login')
        alert(response.response)
      } else if (response.status === 1) {
        alert(response.response);
      }
    } catch (err) {
      console.log("forgetpassword failed: " + err);
    }

  };
  return (
    <ChangePassword  handleValues={handleValues}/>
  )
}

export default ChangePasswordScreen