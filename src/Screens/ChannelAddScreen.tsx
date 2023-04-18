import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChannelAddArea from "../Components/ChannelAddArea";

function ChannelAddScreen() {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const handleFormSubmit = () => {};
  return (
    <>
      <ChannelAddArea handleFormSubmit={handleFormSubmit}/>
    </>
  );
}

export default ChannelAddScreen;
