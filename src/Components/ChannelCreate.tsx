import React, { useState } from "react";
import "../StyleSheets/CampaginAddStyle.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  channelName: string;
  userName: string;
  password: string;
}
type Props = {};

const ChannelCreate = (props: Props) => {
  const [formvalues, setFormValue] = useState<FormValues>({
    channelName: "",
    userName: "",
    password: "",
  });

  const validate = Yup.object().shape({
    channelName: Yup.string().required("Please Enter Title"),
    userName: Yup.string().required("Please Enter User Name"),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Invalid password"
      ).required("Password Required"),
  });
  const formik = useFormik({
    initialValues: {
      channelName: "",
      userName: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      console.log("==>",values);
      setFormValue({
        channelName: values.channelName,
        userName: values.userName,
        password: values.password,
      });
    },
  });

  return (
    <>
      <div className=" campagin-add">
        <div className="campaginAddForm">
          <div className="campaginAddView">
            <h2 className="campaginAddTitle">Create Channel </h2>
            <form onSubmit={formik.handleSubmit}>
              <label className="campaginAddLable">Channel Name </label>
              <input
                type="text"
                name="channelName"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.channelName}
              />
              {<p className="error">{formik.errors.channelName}</p>}
              <label className="campaginAddLable">User Name</label>
              <input
                type="text"
                name="userName"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
              {<p className="error">{formik.errors.userName}</p>}

              <label className="campaginAddLable">Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {<p className="error">{formik.errors.password}</p>}

              <button type="submit" className="btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChannelCreate;
