import React, { useState } from 'react'

import "../StyleSheets/CampaginAddStyle.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { decode as base64_decode } from "base-64";

type Props = {
  handleFile: (e: any) => void;
  handleTitle: (e: any) => void;
  imgData: any;
  title:string;
  imgVal:string
}

interface FormValues {
  title: string;
}
const BrandAdd = (props: Props) => {
  const [formvalues, setFormValue] = useState<FormValues>({
    title: ""
  });

  const validate = Yup.object({
    title: Yup.string().required("Please Enter Name"),
  });
  const formik = useFormik({
    initialValues: {
      title: ""
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      console.log(values,props.imgData)
      props.handleTitle(values.title)
      setFormValue({
        title: values.title
      });
    },
  });

  return (
    <>
      <div className=" campagin-add">
        <div className="campaginAddForm">
          <div className="campaginAddView">
            <h2 className="campaginAddTitle">Add Brand </h2>
            <form onSubmit={formik.handleSubmit}>
              <label className="campaginAddLable">Name</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {<p className="error">{formik.errors.title}</p>}

              <label className="campaginAddLable" >Icon</label>
              <input
                className="form-control"
                type="file"
                accept=".webp"
                value={props.imgVal}
                onChange={(e) => props.handleFile(e)}
              />
              {props.imgVal?
                <button type="submit" className="btn">
                  SUBMIT
                </button>:
                <div className="btn" style={{textAlign:"center",opacity:0.6}}>SUBMIT</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandAdd