import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BrandAdd from '../Components/BrandAdd'



const BrandAddScreen = () => {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const [imgData,setImgData]=useState("")
  const handleFile=(e:any)=>{
    setImgData(e.target.value)
  }
  return (
    <BrandAdd
    handleFile={handleFile}
     imgData={imgData}
     />
  )
}

export default BrandAddScreen