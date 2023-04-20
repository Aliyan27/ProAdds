import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChannelCreate from "../Components/ChannelCreate";
import ApiNames from "../Constants/ApiNames";
import { fetchPosts } from "../Utils/FetchApis";

type Props = {
  token: any;
};

const ChannelCreateScreen = (props: Props) => {
  const navigation = useNavigate();
  useEffect(() => {
    let id = localStorage.getItem("id");
    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    if (id === null && name === null && email === null) {
      navigation("/login");
    }
  }, []);
  const createChannel = async (
    name: string,
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const data = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      console.log(data);
      const result = await fetchPosts(
        ApiNames.channelcreate,
        data,
        props.token.jwttoken
      );
      console.log(result);
    } catch (error) {}
  };

  return <ChannelCreate createChannel={createChannel} />;
};

export default ChannelCreateScreen;
