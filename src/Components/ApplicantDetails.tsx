import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { useFormik } from "formik";
type Props = {
  state: any;
}
function ApplicantDetails(props: Props) {
  var dataAtIndex = props.state
  
  var date=new Date().toDateString()
  var areaArray= Object.values(dataAtIndex.channelarea)
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
                        <td>{dataAtIndex.channelname}</td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td>{dataAtIndex.status}</td>
                      </tr>
                     
                      <tr>
                        <td> Date Added:</td>
                        <td>
                          {date}
                        </td>
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
                    {areaArray.map((e:any)=>{
                      return(
                        <tr>
                          <td>Area:</td>
                          <td>{e}</td>
                        </tr>
                      )
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
