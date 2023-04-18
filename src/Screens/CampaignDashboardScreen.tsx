import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Components/CampaignDashboard";

const data1 = [
  { name: "pending", students: 400, fill: "#f8bf34" },
  { name: "signed", students: 700, fill: "#304e75" },
  { name: "paid", students: 200, fill: "#74ce73" },
  { name: "complete", students: 1000, fill: "#00ada3" },
];

function DashboardScreen() {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const refOne = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [range, setRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  const handleDayClick = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };
  const handleMonthClick = () => {
    setRange([
      {
        startDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          new Date().getDate()
        ),
        endDate: new Date(),
      },
    ]);
  };
  const handleWeekClick = () => {
    setRange([
      {
        startDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 7
        ),
        endDate: new Date(),
      },
    ]);
  };
  const hideOnEscape = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: MouseEvent): void => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <div>
      <Dashboard
        data1={data1}
        open={open}
        setOpen={setOpen}
        range={range}
        setRange={setRange}
        handleDayClick={handleDayClick}
        handleMonthClick={handleMonthClick}
        handleWeekClick={handleWeekClick}
        hideOnEscape={hideOnEscape}
        hideOnClickOutside={hideOnClickOutside}
        refOne={refOne}
        navigation={navigation}
      />
    </div>
  );
}

export default DashboardScreen;
