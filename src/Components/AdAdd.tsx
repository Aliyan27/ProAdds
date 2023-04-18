import React, { useState } from "react";
import Select from "react-select";
import "../StyleSheets/CampaginAddStyle.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../StyleSheets/AdAddStyle.css";
import data from "../Utils/AdData.json";

interface props {
  handleOptionChange: (option: any) => void;
  handleSubOptionChange: (otion: any) => void;
  selectedOption: any;
  selectedSubOption: any;
  PlacesData: string[];
  options: object[];
  handleFile: (e: any) => void;
  imgData: any;
}

interface FormValues {
  title: string;
  Amount: string;
  categories: string;
  tenour: string;
  phonenumber: string;
  date: any;
  smsText: string;
  brand:string;
}

function AdAdd(props: props) {
  const [formvalues, setFormValue] = useState<FormValues>({
    title: "",
    Amount: "",
    categories: "",
    tenour: "",
    phonenumber: "",
    date: "",
    smsText: "",
    brand:""
  });

  const validate = Yup.object({
    title: Yup.string().required("Please Enter Title"),
    Amount: Yup.string().required("Please Enter Charges"),
    categories: Yup.string().required("Please Select Category"),
    tenour: Yup.string().required("Please Enter tenour"),
    phonenumber: Yup.string().required("Please Enter Phone number"),
    date: Yup.string().required("Please Enter Date-Time"),
    smsText: Yup.string().max(200).required("Please Enter SMS Text"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      Amount: "",
      categories: "Platinum",
      tenour: "Month",
      phonenumber: "",
      date: new Date(),
      smsText: "",
      brand:"Econceptions"
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      console.log(
        "Data",
        values,
        props.selectedOption.value,
        "--",
        props.selectedSubOption,
        props.imgData
      );
      setFormValue({
        title: values.title,
        Amount: values.Amount,
        categories: values.categories,
        tenour: values.tenour,
        phonenumber: values.phonenumber,
        date: values.date,
        smsText: values.smsText,
        brand:values.brand,
      });
    },
  });

  return (
    <>
      <div className="AD-add">
        <div className="Ad-Add-Form">
          <div className="Ad_Add-View">
            <div className="Addbox">
              <h2 className="Ad-Add-Title">AD</h2>
              <form onSubmit={formik.handleSubmit} className="Ad-Form">
              <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Brand</label>
                  <select
                    name="brand"
                    className="Ad-Form-Control"
                    onChange={formik.handleChange}
                    value={formik.values.brand}
                  >
                    <option>Econceptions</option>
                    <option>Pro Tax Block</option>
                    <option>Jomo</option>
                  </select>
                  {<p className="error">{formik.errors.categories}</p>}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Channel</label>
                  <Select
                    className="adOptionContainer"
                    options={props.options}
                    value={props.selectedOption}
                    onChange={props.handleOptionChange}
                  />
                  {props.selectedOption?.children && (
                    <Select
                      isMulti
                      className="adOptionContainer"
                      options={props.selectedOption.children}
                      value={props.selectedSubOption}
                      onChange={props.handleSubOptionChange}
                    />
                  )}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Title </label>
                  <input
                    type="text"
                    name="title"
                    className="Ad-Form-Control"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  {<p className="error">{formik.errors.title}</p>}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Categories </label>
                  <select
                    name="categories"
                    className="Ad-Form-Control"
                    onChange={formik.handleChange}
                    value={formik.values.categories}
                  >
                    <option>Platinum</option>
                    <option>Gold</option>
                    <option>Silver</option>
                  </select>
                  {<p className="error">{formik.errors.categories}</p>}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Tenure </label>
                  <select
                    name="tenour"
                    className="Ad-Form-Control"
                    onChange={formik.handleChange}
                    value={formik.values.tenour}
                  >
                    <option>Month</option>
                    <option>Day</option>
                  </select>
                  {<p className="error">{formik.errors.tenour}</p>}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Banner Image </label>

                  <input
                    className="Ad-Form-Control"
                    type="file"
                    accept=".jpg, .jpeg, .png , .webp, .svg+xml"
                    value={props.imgData}
                    onChange={(e) => props.handleFile(e)}
                  />
                </div>
                
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Start DateTime </label>
                  <DatePicker
                    selected={formik.values.date}
                    className="form-control flatpickrDateTimeInput Ad-Form-Control input"
                    onChange={(date: any) => formik.setFieldValue("date", date)}
                    showTimeInput
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </div>
                <div className="Ad-From-Group">
                  {/* <label className="Ad-Add-Lable">QR Information </label> */}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable" style={{fontWeight:"bolder",fontSize:"14px"}}>QR Information :</label>
                </div>
                <div className="Ad-From-Group">
                  {/* <label className="Ad-Add-Lable">QR Information </label> */}
                </div>
                <div className="Ad-From-Group">
                  <label className="Ad-Add-Lable">Short Code</label>
                  <input
                    type="text"
                    name="phonenumber"
                    className="Ad-Form-Control"
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                  />
                  {<p className="error">{formik.errors.phonenumber}</p>}
                </div>

                <div className="Ad-From-Group">
                  <label htmlFor="smsText" className="Ad-Add-Lable">
                    SMS Text
                  </label>
                  <textarea
                    className="Ad-Form-Control"
                    name="smsText"
                    id="smsText"
                    cols={30}
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.smsText}
                  ></textarea>
                  {<p className="error">{formik.errors.smsText}</p>}
                </div>
                {/* Note */}
                <div className="Ad-From-Group">
                  <label htmlFor="smsText" className="Ad-Add-Lable" style={{fontWeight:"bolder",fontSize:"14px"}}>
                    Note*
                  </label>
                  <div>Hours for {formik.values.categories}</div>
                  <div className="table">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={1} rowSpan={1} className="text-center">
                            AM
                          </th>
                          <th colSpan={1} rowSpan={1} className="text-center">
                            PM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {formik.values.categories === "Platinum" ? (
                          <>
                            {data.Platinum?.map((data: any, index: number) => (
                              <tr className="odd">
                                <td className="text-center">{data.AM}</td>

                                <td className="text-center">{data.PM}</td>
                              </tr>
                            ))}
                          </>
                        ) : formik.values.categories === "Gold" ? (
                          <>
                            {data.Gold?.map((data: any, index: number) => (
                              <tr className="odd">
                                <td className="text-center">{data.AM}</td>

                                <td className="text-center">{data.PM}</td>
                              </tr>
                            ))}
                          </>
                        ) : formik.values.categories === "Silver" ? (
                          <>
                            {data.Silver?.map((data: any, index: number) => (
                              <tr className="odd">
                                <td className="text-center">{data.AM}</td>

                                <td className="text-center">{data.PM}</td>
                              </tr>
                            ))}
                          </>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Note */}
                {formvalues && props.selectedOption&&props.selectedSubOption&&props.imgData?
                <button type="submit" className="Ad-Btn">
                  SUBMIT
                </button>:
                <div className="Ad-Btn" style={{textAlign:"center",opacity:0.6}}>SUBMIT</div>}
              </form>
            </div>
            <div className="Addbox">
              <h2 className="Ad-Add-Title">Payment</h2>
              <div className="Ad-From-Group">
                <label className="Ad-Add-Lable">Amount to Charge </label>
                <input
                  type="text"
                  name="Amount"
                  className="Ad-Form-Control"
                  onChange={formik.handleChange}
                  value={formik.values.Amount}
                />
                {<p className="error">{formik.errors.Amount}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdAdd;
