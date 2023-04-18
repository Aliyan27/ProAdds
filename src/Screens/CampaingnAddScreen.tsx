import React, { useEffect, useState } from "react";
import data from "../Utils/data.json";
import Campaginadd from "../Components/CampaignAdd";
import { useNavigate } from "react-router-dom";

interface FormValues {
  title: string;
  brand: string;
  date: any;
  smsText: string;
}

function Campaginaddscreen() {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const [formvalues, setFormValue] = useState<FormValues>({
    title: "",
    brand: "",
    date: "",
    smsText: "",
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery1, setSearchQuery1] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>([]);

  const search = (query1: string, query2: string) => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(query1.toLowerCase()) &&
        item.starttime.toLowerCase().includes(query2.toLowerCase())
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
      <Campaginadd
        setFormValue={setFormValue}
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

export default Campaginaddscreen;
