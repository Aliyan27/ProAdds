import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApplicantDetails from "../Components/ApplicantDetails";

function AplicantDetailsScreen() {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const { state } = useLocation();
  
  console.log("State=>",state);
  return (
    <>
      <ApplicantDetails state={state}/>
    </>
  );
}

export default AplicantDetailsScreen;
