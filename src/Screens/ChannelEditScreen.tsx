import React, { useEffect } from "react";
import ChannelEdit from "../Components/ChannelEdit";
import { useLocation, useNavigate } from "react-router-dom";
import ApiNames from "../Constants/ApiNames";
import { fetchPosts } from "../Utils/FetchApis";
import { async } from "q";

function ChannelEditScreen() {
  const navigation = useNavigate();
  useEffect(() => {
    let id = localStorage.getItem("id");
    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    if (id === null && name === null && email === null) {
      navigation("/login");
    }
  }, []);

  const { state } = useLocation();

  const handleEdit = async (name:string,id:number) => {
    console.log("edit id name",name,id);
    try {
      const data = {
        id: id,
        name: name
      };
      const result = await fetchPosts(
        ApiNames.channelAreasEdit,
        data,
        state.token.jwttoken
      );
      console.log("edited==>", result);
      navigation("/channels/list")
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <>
      <ChannelEdit state={state} handleEdit={handleEdit}/>
    </>
  );
}

export default ChannelEditScreen;
