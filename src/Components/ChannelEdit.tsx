import React, { useState } from "react";
import data from "../Utils/channelData.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

type Props = {
  state: any;
};
interface FormValues {
  channel: string;
  // channelarea: string;
}

function ChannelEdit(props: Props) {
  const [area,setaArea]=useState('')

  const handleOptionChange=(value:any)=>{
    setaArea(value)
  }
  const navigation = useNavigate()
  const [formvalue, setFormValue] = useState({
    channel: "",
  });
    var dataAtIndex = props.state

  console.log("===>",typeof dataAtIndex.channelarea);
  const validate = Yup.object({
    channel: Yup.string().required("Please Enter channel"),
    // channelarea: Yup.string().required("Please Enter Area"),
  });
  const formik = useFormik({
    initialValues: {
      channel: dataAtIndex.channelname,
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      navigation("/channels/list")
      setFormValue({
        channel: values.channel
      });
    },
  });
  return (
    <>
      <div className=" campagin-add">
        <div className="campaginAddForm">
          <div className="campaginAddView">
            <h2 className="campaginAddTitle">Edit Channel </h2>
            <form onSubmit={formik.handleSubmit}>
              <label className="campaginAddLable">Channel </label>
             
              <input
                type="text"
                name="channel"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.channel}
              />
              {<p className="error">{formik.errors.channel}</p>}

              <label className="campaginAddLable">Channel Area </label>
              <Select
                    // className="adOptionContainer"
                    options={dataAtIndex.channelarea}
                    onChange={handleOptionChange}
                    value={area}
                  />
              {/* <input
                type="text"
                name="channelarea"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.channelarea}
              />
              {<p className="error">{formik.errors.channelarea}</p>} */}

              <button type="submit" className="btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelEdit;
