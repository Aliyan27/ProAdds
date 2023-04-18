import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdAdd from "../Components/AdAdd";

type Props = {}
interface Option {
  label: string;
  value: string;
  children?: Option[];
}
const PlacesData = ["metro", "Cafe", "Buss Station", "Sign Board"];
const options: Option[] = [
  {
    label: "Resturant",
    value: "resturant",
    children: [
      { label: "Pizza HUT/G8 Markaz", value: "Pizza HUT/G8 Markaz" },
      { label: "Subway/Giga Mall", value: "SubWay/Giga Mall" },
    ],
  },
  {
    label: "BUS",
    value: "BUS",
    children: [
      { label: "Metro/Islamabad", value: "Metro/Islamabad" },
      { label: "Metro/Lahore", value: "Metro/Lahore" },
    ],
  },
];
const AdAddScreen = (props: Props) => {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<Option | null>(
    null
  );
  const [imgData,setImgData]=useState("")
  const handleFile=(e:any)=>{
    setImgData(e.target.value)
  }

  const handleOptionChange = (option: Option | null) => {
    setSelectedOption(option);
    setSelectedSubOption(null);
  };

  const handleSubOptionChange = (option: Option | null) => {
    setSelectedSubOption(option);
  };
  return (
    <AdAdd
     handleOptionChange={handleOptionChange}
     handleSubOptionChange={handleSubOptionChange}
     selectedOption={selectedOption}
     selectedSubOption={selectedSubOption}
     PlacesData={PlacesData}
     options={options}
     handleFile={handleFile}
     imgData={imgData}
     />
  )
}

export default AdAddScreen