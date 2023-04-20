import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

type Props = {
  state: any;
  handleEdit: (name:string,id:number) => void;
};
interface FormValues {
  channel: string;
}

function ChannelEdit(props: Props) {

  const navigation = useNavigate();
 
  var dataAtIndex = props.state.data;

  const validate = Yup.object({
    channel: Yup.string().required("Please Enter channel"),
  });
  const formik = useFormik({
    initialValues: {
      channel: dataAtIndex.name,
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      props.handleEdit(values.channel,dataAtIndex.id)
    
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
