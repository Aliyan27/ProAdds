import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChannelView from "../Components/ChannelView";
import ApiNames from "../Constants/ApiNames";
import { fetchGetPWKey } from "../Utils/FetchApis";

type Props = {
  token: any;
};

function ChannelViewScreen(props: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery1, setSearchQuery1] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>([]);
  const [channelData, setChannelData] = useState<any>([]);

  const navigation = useNavigate();
  useEffect(() => {
    let id = localStorage.getItem("id");
    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    if (id === null && name === null && email === null) {
      navigation("/login");
    }
    channelDateRequest();
  }, []);
  const search = (query1: string, query2: string) => {
    const filtered = channelData?.filter(
      (item: any) =>
        item.channelname.toLowerCase().includes(query1.toLowerCase()) &&
        item.status.toLowerCase().includes(query2.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const pageSize = 3;
  const pageCount = Math.ceil(channelData?.length / pageSize);
  const displayedUsers = channelData?.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const navigate = useNavigate();

  const handleEditClick = (index: object) => {
    navigate("/channels/edit", { state: index });
  };
  const handleViewClick = (index: number) => {
    if (index === 0) {
      navigate("/channels/edit", { state: -1 });
    } else {
      navigate("/channels/edit", { state: index });
    }
  };
  const handleAddClick = (index: number) => {
    navigate("/channels/add", { state: index });
  };
  const handledetailClick = (id: number, name: any, status: any) => {
    const channelAreaData = {
      id: id,
      name: name,
      status: status,
    };
    navigate("/channels/detail", { state: channelAreaData });
  };
  const channelDateRequest = async () => {
    try {
      const result = await fetchGetPWKey(
        ApiNames.channelView,
        props.token.jwttoken
      );
      setChannelData(result.response);
      console.log("----->",result.response);
    } catch (error) {}
  };

  return (
    <>
      <ChannelView
        handledetailClick={handledetailClick}
        handleEditClick={handleEditClick}
        handleViewClick={handleViewClick}
        handleAddClick={handleAddClick}
        displayedUsers={displayedUsers}
        handlePageChange={handlePageChange}
        pageCount={pageCount}
        pageSize={pageCount}
        search={search}
        filteredData={filteredData}
        searchQuery1={searchQuery1}
        setSearchQuery1={setSearchQuery1}
        searchQuery2={searchQuery2}
        setSearchQuery2={setSearchQuery2}
        channelData={channelData}
      />
    </>
  );
}

export default ChannelViewScreen;
