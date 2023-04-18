import React, { useState } from "react";
import data from "../Utils/DeviceData.json";
import DeviceList from "../Components/DeviceList";

type Props = {};

const DeviceListScreen = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery1, setSearchQuery1] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>([]);

  const search = (query1: string, query2: string) => {
    const filtered = data.filter(
      (item) =>
        item.channelName.toLowerCase().includes(query1.toLowerCase()) &&
        item.deviceName.toLowerCase().includes(query2.toLowerCase())
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
    <DeviceList
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
  );
};

export default DeviceListScreen;
