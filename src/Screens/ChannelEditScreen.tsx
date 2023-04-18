import React, { useEffect } from "react";
import ChannelEdit from "../Components/ChannelEdit";
import { useLocation, useNavigate } from "react-router-dom";

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

  return (
    <>
      <ChannelEdit state={state} />
    </>
  );
}

export default ChannelEditScreen;
