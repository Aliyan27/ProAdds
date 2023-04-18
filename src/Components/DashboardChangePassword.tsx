import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

interface FormValues {
  currentpassword: string;
  newpassword: string;
  confirmpasword: string;
}
type Props = {
  formvalues: FormValues;
  setFormValue: React.Dispatch<React.SetStateAction<FormValues>>;
  changePassword: (currentPassword: any, confirmpasword: any) => Promise<void>;
  response: string;
};

function DashboardChangePassword({
  formvalues,
  setFormValue,
  changePassword,
  response,
}: Props) {
  const validationSchema = Yup.object().shape({
    currentpassword: Yup.string().required("Please Enter Title"),
    newpassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmpasword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref(" newpassword")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      currentpassword: "",
      newpassword: "",
      confirmpasword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      setFormValue({
        currentpassword: values.currentpassword,
        newpassword: values.newpassword,
        confirmpasword: values.confirmpasword,
      });
      changePassword(values.currentpassword, values.confirmpasword);
    },
  });

  return (
    <>
      <div className=" campagin-add">
        <div className="campaginAddForm">
          <div className="campaginAddView">
            <h2 className="campaginAddTitle">Change Password </h2>
            <form onSubmit={formik.handleSubmit}>
              <label className="campaginAddLable">Current Password</label>
              <input
                type="password"
                name="currentpassword"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.currentpassword}
              />
              {<p className="error">{formik.errors.currentpassword}</p>}
              <label className="campaginAddLable">New Password</label>
              <input
                type="password"
                name="newpassword"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.newpassword}
              />
              {<p className="error">{formik.errors.newpassword}</p>}
              <label className="campaginAddLable">Confirm Password</label>
              <input
                type="password"
                name="confirmpasword"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.confirmpasword}
              />
              {<p className="error">{formik.errors.confirmpasword}</p>}
              {<p className="error">{response}</p>}
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

export default DashboardChangePassword;
