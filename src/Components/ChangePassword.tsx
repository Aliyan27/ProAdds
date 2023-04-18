
import * as React from "react";
import "../StyleSheets/Login.css";
import { Formik, FormikErrors, Form, Field } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from 'yup'

interface MyFormValues {
  newPassword: string;
  confirmPassword: string;
}
type Props = {
  handleValues:(password:string) => void;
}
const SignupSchema = Yup.object().shape({
    newPassword:Yup.string().required('Password Required'),
    confirmPassword:Yup.string().required('Password Required'),
});
const ChangePassword = (props: Props) => {
  const navigate = useNavigate();
  const initialValues: MyFormValues = {newPassword:"", confirmPassword:""};
  const onSubmit = (values: MyFormValues) => {
    if(values.newPassword=== values.confirmPassword){
      props.handleValues(values.newPassword)
    }else{
      alert("Both Password does not match...!")
    }
  };
  return (
    <div className="clogin-screen">
      <div className="logo animated fadeInLeft imgDiv">
        <img src="https://dps.econceptions.mobi/dpsApp/images/login-logo.png" />
      </div>

      <div className="middle-box text-center loginscreen login-area animated fadeInRight">
        <div>
          <div className="title">
            <h1>Create New Password</h1>
            <div className="sub-title">Enter your credentials to continue</div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form className="formContainer">
                <label className="formLabel" htmlFor="firstName">
                  New Password
                </label>
                <Field className="formInput" id="email" name="newPassword" />
                {errors.newPassword && touched.newPassword && errors.newPassword}

                <label className="formLabel" htmlFor="firstName">
                  Confirm Password
                </label>
                <Field className="formInput" id="password" name="confirmPassword" />
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                <button
                  className="btn block full-width m-b login-btn"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          <p className="m-t cpy-rght">
            Copyright © 2023<span id="companyName"> Pro Tax Block</span> Pvt.
            Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
