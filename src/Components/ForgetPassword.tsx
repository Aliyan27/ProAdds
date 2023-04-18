import React from 'react'
import * as Yup from 'yup'
import {
    Formik,
    FormikErrors,
    Form,
    Field,
  } from "formik";
  type Props = {
    handleValues:(email:string) => void;
  }
interface MyFormValues {
    email: string;
  }
  const SignupSchema = Yup.object().shape({
    email: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email").required('Email Required'),
  });
  
  const ForgetPassword = (props: Props) => {
  const onSubmit = (values: MyFormValues) => {
    console.log(values);
    props.handleValues(values.email)
  };
    const initialValues: MyFormValues = { email: "" };
  return (
    <div className="clogin-screen">
    <div className="logo animated fadeInLeft imgDiv">
      <img src="https://dps.econceptions.mobi/dpsApp/images/login-logo.png" />
    </div>

    <div className="middle-box text-center loginscreen login-area animated fadeInRight forgetHeight">
      <div>
        <div className="title">
          <h1>Forgot Password</h1>
          <div className="sub-title">Enter your email address and recovery link will be emailed to you.</div>
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
            <Form className="formContainer" >
              <label className="formLabel" htmlFor="firstName">
                Email Address
              </label>
              <Field className="formInput" id="email" name="email" />
              {errors.email && touched.email && errors.email}
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
  )
}

export default ForgetPassword
