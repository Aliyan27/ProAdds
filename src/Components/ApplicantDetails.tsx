import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { useFormik } from "formik";
type Props = {
  state: any;
  areaData: any;
};
function ApplicantDetails(props: Props) {
  var date = new Date().toDateString();

  return (
    <>
      <div className="Dashboard-campagin">
        <div className="dashboard-header">
          <div className="right">
            <h2 className="title">Channel Details</h2>
          </div>
        </div>
        <div className="dashboardrow">
          <div className="recentcampagin">
            <div className="ibox">
              <div className="recentcampagin-header">
                <div className="table">
                  <table>
                    <tbody>
                      <tr>
                        <td> Name:</td>
                        <td>{props.state.name}</td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td>{props.state.status}</td>
                      </tr>

                      <tr>
                        <td> Date Added:</td>
                        <td>{}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="CampaignsOverview">
            <div className="ibox">
              <h5 className="title">Areas/Names</h5>
              <div className="table">
                <table>
                  <tbody>
                    {props.areaData?.map((data: any, e: any) => {
                      return (
                        <tr>
                          <td>Area:{}</td>
                          <td>{e}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantDetails;
