import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../Utils/channelData.json";
import ChannelView from "../Components/ChannelView";

function ChannelViewScreen() {

  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery1, setSearchQuery1] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>([]);

  const search = (query1: string, query2: string) => {
    const filtered = data.filter(
      (item) =>
        item.channelname.toLowerCase().includes(query1.toLowerCase()) &&
        item.status.toLowerCase().includes(query2.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const pageSize = 3;
  const pageCount = Math.ceil(data.length / pageSize);
  const displayedUsers = data.slice(
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
    if (index === 0) {
      navigate("/channels/add", { state: -1 });
    } else {
      navigate("/channels/add", { state: index });
    }
  };
  const handledetailClick = (index: object) => {
    navigate("/channels/detail", { state: index });
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
      />
    </>
  );
}

export default ChannelViewScreen;
