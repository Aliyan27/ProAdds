import React from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import data from "../Utils/data.json";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../StyleSheets/CampaginDashbordStyle.css";
import img from "../Assets/analytics-default.png";

type Props = {
  data1: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  range: any;
  setRange: any;
  handleDayClick: () => void;
  handleWeekClick: () => void;
  handleMonthClick: () => void;
  hideOnEscape: (e: KeyboardEvent) => void;
  hideOnClickOutside: (e: MouseEvent) => void;
  refOne: React.RefObject<HTMLDivElement>;
  navigation: any;
};

function Dashboard(props: Props) {
  return (
    <>
      <div className="Dashboard-campagin">
        <div className="dashboard-header">
          <div className="right">
            <h2 className="title">Campaigns Dashboard</h2>
            <p>Welcome to Campaigns Dashboard</p>
          </div>
          <div className="left">
            <div className="calendarWrap">
              <input
                value={`${format(
                  props.range[0].startDate,
                  "MM/dd/yyyy"
                )}-${format(props.range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                className="inputBox "
                onClick={() => props.setOpen(true)}
              />

              <div ref={props.refOne} className="datepicker">
                {props.open && (
                  <DateRangePicker
                    onChange={(item: any) => props.setRange([item.selection])}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={props.range}
                    months={2}
                    direction="horizontal"
                    className="calendarElement"
                  />
                )}
              </div>
            </div>
            <ul>
              <li onClick={props.handleMonthClick}>
                <span>Monthly</span>
              </li>
              <li onClick={props.handleWeekClick}>
                <span>Weekly</span>
              </li>
              <li onClick={props.handleDayClick}>
                <span>Daily</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboardrow">
          <div className="recentcampagin">
            <div className="ibox">
              <div className="recentcampagin-header">
                <h5 className="title">Campaigns</h5>
                <span
                  className="d-btn"
                  // onClick={() => props.movetopages("/campaigns/add")}
                >
                  {/* <FaPlus className="plus" /> */}
                  Add New Campaign
                </span>
              </div>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th colSpan={1} rowSpan={1}>
                        Title
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Start DateTime
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((data: any, index: number) => (
                      <tr className="odd">
                        <td>{data.title}</td>
                        <td>{data.starttime}</td>
                        <td>
                          <span className="label label-danger">Stopped</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <span
                onClick={() => props.navigation("/campaigns/list")}
                className="text-center View-more"
                style={{ cursor: "pointer" }}
              >
                View More
              </span>
            </div>
          </div>
          <div className="CampaignsOverview">
            <div className="ibox">
              <h5 className="title">Campaigns Overview</h5>
              <div className="chart">
                <ResponsiveContainer
                  className="ResponsiveContainer"
                  width="100%"
                  height={400}
                >
                  <PieChart>
                    <Pie
                      data={props.data1}
                      dataKey="students"
                      outerRadius={150}
                      innerRadius={70}
                      fill="green"
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="PieChartData">
                  <ul>
                    <li>
                      <div className="pending"></div>Pending
                    </li>
                    <li>
                      <div className="signed"></div>Signed
                    </li>
                    <li>
                      <div className="conpleted"></div>
                      Paid
                    </li>
                    <li>
                      <div className="paid"></div>Completed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardBottom">
          <div className="dashboardbtm">
            <div className="ibox">
              <h4>Pro Tax Block</h4>
              <h5>3</h5>
              <h5 className="title">Most Campaigns</h5>
              <img src={img} alt="missing" className="dashboardimg" />
            </div>
          </div>
          <div className="dashboardbtm">
            <div className="ibox">
              <h4>Pro Tax Block</h4>
              <h5>3</h5>
              <h5 className="title">Most Campaigns</h5>
              <img src={img} alt="missing" className="dashboardimg" />
            </div>
          </div>
          <div className="dashboardbtm">
            <div className="ibox">
              <h4>Pro Tax Block</h4>
              <h5>3</h5>
              <h5 className="title">Most Campaigns</h5>
              <img src={img} alt="missing" className="dashboardimg" />
            </div>
          </div>
          <div className="dashboardbtm">
            <div className="ibox">
              <h4>Pro Tax Block</h4>
              <h5>3</h5>
              <h5 className="title">Most Campaigns</h5>
              <img src={img} alt="missing" className="dashboardimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
