import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BrandAdd from '../Components/BrandAdd'
import ApiNames from '../Constants/ApiNames';
import { fetchPosts } from '../Utils/FetchApis';
import { encode as base64_encode } from 'base-64';
// import {encode as base64_encode} from 'file-base64'

type Props = {
  token: any;
};

const BrandAddScreen = (props: Props) => {
  const navigation = useNavigate();
  var xyz:any=""
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  const [imgData,setImgData]=useState<any>("")
  const [title,setTitle]=useState("")
  const [imgVal,setImgVal]=useState("")
  // var imgData:any=''
  
  const handleFile=async(e:any)=>{
    let extention = e.target.files[0].name.toLowerCase().endsWith(".webp")
    if(extention){
      setImgVal(e.target.value)
      try {
       const file = e.target.files[0];
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => {
         setImgData(reader.result)
       };
      } catch (error) {
       console.log("handleFile error",error)
      }
    }else {
      setImgVal('')
      alert("Image is not in valid format..!")
    }
   
  }

  const handleTitle=(e:any)=>{
    setTitle(e)
    console.log(e)
  }
  useEffect(() => {
    if(title && imgData){
      brandAddHandler()
    }
  }, [title,imgData])
  

  const brandAddHandler=async()=>{
    let img=imgData.split(',')[1]
    const data = {
      name:title,
      iconBase64: img
    };
    try {
      let response = await fetchPosts(
        ApiNames.brandAdd,
        data,
        props.token.jwttoken
      );
      console.log("brand Add==>", response);
      if (response.status === 0) {
        alert(response.response);
        navigation("/brand/list");
      } else if (response.status === 1) {
        
        alert(response.response);
      }
    } catch (err) {
      console.log("Login failed: " + err);
    }
  }

  return (
    <BrandAdd
    handleFile={handleFile}
    handleTitle={handleTitle}
    imgData={imgData}
    title={title}
    imgVal={imgVal}
     />
  )
}

export default BrandAddScreen