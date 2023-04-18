import * as React from "react";
import "../StyleSheets/Login.css";
import { Formik, FormikErrors, Form, Field } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha"

type Props = {
  handleValues:(username:string,password:string,captcha:string,captchaRef:any) => void;
}
interface MyFormValues {
  username: string;
  password: string;
}
// .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Invalid password")
const SignupSchema = Yup.object().shape({
  password:Yup.string().required('Password Required'),
  username: Yup.string().required('Email Required'),
});
const Login = (props: Props) => {
  const navigate = useNavigate();
  const [verify,setVerify]=React.useState(false)
  const [captcha, setCaptcha] = React.useState('')
  const [captchaRef,setCaptchaRef]=React.useState({})
  const initialValues: MyFormValues = { username: "", password: "" };
  const onSubmit = (values: MyFormValues) => {
    props.handleValues(values.username,values.password,captcha,captchaRef)
  };
  const setCaptchaRefHandler = (ref:any) => {
    if (ref) {
      setCaptchaRef(ref)
    }
 }
  function onChange(value:any) {
    console.log("Captcha value:", value);
    setCaptcha(value)
    setVerify(true)
  }
  return (
    <div className="clogin-screen">
      <div className="logo animated fadeInLeft imgDiv">
        <img src="https://dps.econceptions.mobi/dpsApp/images/login-logo.png" />
      </div>

      <div className="middle-box text-center loginscreen login-area animated fadeInRight">
        <div>
          <div className="title">
            <h1>Login</h1>
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
                  Username
                </label>
                <Field className="formInput" id="username" name="username" />
                {errors.username && touched.username && errors.username}

                <label className="formLabel" htmlFor="firstName">
                  Password
                </label>
                <Field className="formInput" id="password" name="password" />
                {errors.password && touched.password && errors.password}

                <ReCAPTCHA
                  ref={(r) => setCaptchaRefHandler(r) }
                  style={{marginTop:"20px"}}
                  sitekey="6Le1lvMfAAAAAFaa_9QHtylnHZ1x6Bsiif6rucbi"
                  onChange={onChange}
                />

                <button
                  className="btn block full-width m-b login-btn"
                  type="submit"
                  disabled={!verify}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>

          <a
            className="forgot-pass"
            onClick={() => navigate("/forgotPassword")}
          >
            <small>Forgot password?</small>
          </a>

          <p className="m-t cpy-rght">
            Copyright © 2023<span id="companyName"> Pro Tax Block</span> Pvt.
            Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
