import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../StyleSheets/ChannelAddStyle.css";
import {DeleteTwoTone} from "@ant-design/icons"

type Props = {
  handleFormSubmit: () => void;
};
interface FormValues {
  places: string;
}



function ChannelAddArea(props: Props) {
  const [formvalues, setFormValue] = useState<FormValues>({
    places: "",
  });
  
  const [channelData, setChannelData] = useState<any>([]);
  

  const validate = Yup.object({
    places: Yup.string().required("Please Enter Title"),
  });
  const formik = useFormik({
    initialValues: {
      places: "",
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      const newData = {
        places: values.places,
      };
      setChannelData([...channelData, newData]);

      // if(channelData.length !==0){
      //   let temp1 =[...channelData,newData]
      //   for(let i=0;i<temp1.length;i++){
      //     if(temp1[i].channelname!==values.channelname){
      //       temp1[i].channelname = values.channelname
      //     }
      //   }
      // }
      
      // formik.values.channelname = "";
      formik.values.places = "";
    }
  });
  const handelDelete = (index:number) => {
    const temp = [...channelData]
    for(let i=0;i<temp.length;i++){
      if(i===index){
        temp.splice(i, 1)
      }
    }
    setChannelData(temp)
    
  };
  return (
    <>
      <div className="channel-add">
        <div className="channel-Add-Form">
          <div className="channel-Add-View">
            <div className="Addbox">
              <div className="topmenu">
                <h2 className="channelAddTitle">Add Channel Area </h2>
              </div>
              <form className="Form" onSubmit={formik.handleSubmit}>
                <label className="campaginAddLable">Name/Area </label>
                <input
                  type="text"
                  name="places"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.places}
                />
                <button className="d-btn" type="submit">
                  Add Channel Area
                </button>
              </form>
            </div>
            <div className="Addbox">
              <div className="table">
              {channelData.length !==0 ?<>
                <table>
                  <thead>
                    <tr>
                      <th colSpan={1} rowSpan={1}>
                        Channel Area
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                   {channelData.map((data: any, index: number)=>{
                    return(
                      <tr className="odd" key={index} >
                        <td>{data.places}</td>
                        <td style={{cursor:"pointer"}} onClick={()=>handelDelete(index)} ><DeleteTwoTone twoToneColor="red" /></td>
                      </tr>
                    )
                   })}
                  </tbody>
                </table>
                <button
                  type="submit"
                   className="d-btn"
                   style={{width:"100%",marginTop:"30px"}}
                  onClick={props.handleFormSubmit}
                >
                  SUBMIT
                </button>
                   </>:<div className="channelNotAdd">Channel Not Added Yet...!</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelAddArea;
