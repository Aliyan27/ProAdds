import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ChannelCreate from '../Components/ChannelCreate'

type Props = {}

const ChannelCreateScreen = (props: Props) => {
  const navigation = useNavigate();
  useEffect(() => {
    let id= localStorage.getItem("id");
    let name= localStorage.getItem("username");
    let email= localStorage.getItem("email");
    if(id===null && name===null && email===null){
      navigation("/login")
    }
  }, [])
  
  return (
    <ChannelCreate/>
  )
}

export default ChannelCreateScreen