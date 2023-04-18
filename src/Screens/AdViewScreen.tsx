import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../Utils/AdListData.json";
import AdView from "../Components/AdView";

function AdViewScreen() {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery1, setSearchQuery1] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>([]);

  const search = (query1: string, query2: string) => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(query1.toLowerCase()) &&
        item.categories.toLowerCase().includes(query2.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const pageSize = 3;
  const pageCount = Math.ceil(data.length / pageSize);
  const displayedUsers = data.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <>
      <AdView
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

export default AdViewScreen;
