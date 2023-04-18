import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ChannelAddArea from "../Components/ChannelAddArea";
import ApiNames from "../Constants/ApiNames";
import { fetchPosts } from "../Utils/FetchApis";
import { fetchGetPWKey } from "../Utils/FetchApis";

type Props = {
  token: any;
};

function ChannelAddScreen(props: Props) {
  console.log(props.token);
  const [channelData, setChannelData] = useState<any>([]);
  const [areaData, setAreaData] = useState<any>([]);
  const [initialValue, setInitialValue] = useState<string>("");
  const [stateUpdate, setStateUpdate] = useState<boolean>(false);
  const { state } = useLocation();

  const navigation = useNavigate();
  useEffect(() => {
    let id = localStorage.getItem("id");
    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    if (id === null && name === null && email === null) {
      navigation("/login");
    }
  }, []);

  useEffect(() => {
    console.log(props.token.jwttoken != null);
    if (props.token.jwttoken != null) {
      areaList();
    }
  }, [stateUpdate, props.token.jwttoken]);

  const handleDelete = (index: number) => {
    const temp = [...channelData];
    for (let i = 0; i < temp.length; i++) {
      if (i === index) {
        temp.splice(i, 1);
      }
    }
    setChannelData(temp);
  };
  const handleEdit = (index: number) => {
    const value = channelData[index];
    console.log(value.places);
    setInitialValue(value.places);
  };

  const handleFormSubmit = () => {
    const placesArray = [];
    for (let i = 0; i < channelData.length; i++) {
      placesArray.push(channelData[i].places);
    }
    AddchannelArea(placesArray);
  };

  const AddchannelArea = async (placesArray: any[]) => {
    try {
      const data = {
        channelId: state,
        areaNames: placesArray,
      };
      const result = await fetchPosts(
        ApiNames.channelareasadd,
        data,
        props.token.jwttoken
      );
      response: if (result.response === "Success") {
        setStateUpdate(true);
      }
    } catch (error) {}
  };
  const areaList = async () => {
    const url = `${ApiNames.channelareas}?channelId=${state}`;
    try {
      const result = await fetchGetPWKey(url, props.token.jwttoken);
      console.log(result);
      setAreaData(result.response);
    } catch (error) {}
  };

  return (
    <>
      <ChannelAddArea
        channelData={channelData}
        setChannelData={setChannelData}
        handleDelete={handleDelete}
        handleFormSubmit={handleFormSubmit}
        handleEdit={handleEdit}
        areaData={areaData}
        initialValue={initialValue}
      />
    </>
  );
}

export default ChannelAddScreen;
