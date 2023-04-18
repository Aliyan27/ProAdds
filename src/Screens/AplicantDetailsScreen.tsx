import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApplicantDetails from "../Components/ApplicantDetails";
import ApiNames from "../Constants/ApiNames";
import { fetchGetPWKey } from "../Utils/FetchApis";

type Props = {
  token: any;
};

function AplicantDetailsScreen(props: Props) {
  const [areaData, setAreaData] = useState<any>([]);
  const navigation = useNavigate();
  useEffect(() => {
    let id = localStorage.getItem("id");
    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    if (id === null && name === null && email === null) {
      navigation("/login");
    }
    areaList();
  }, []);

  const { state } = useLocation();

  const areaList = async () => {
    const url = `${ApiNames.channelareas}?channelId=${state.id}`;
    try {
      const result = await fetchGetPWKey(url, props.token.jwttoken);
      console.log(result);
      setAreaData(result.response);
    } catch (error) {}
  };

  console.log("State=>", state);
  return (
    <>
      <ApplicantDetails state={state} areaData={areaData} />
    </>
  );
}

export default AplicantDetailsScreen;
