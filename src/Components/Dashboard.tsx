import React from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import data from "../Utils/data.json";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import img from "../Assets/analytics-default.png";
import ReactPaginate from "react-paginate";
import "../StyleSheets/DashboardStyle.css";

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
  displayedUsers: {
    title: string;
    starttime: string;
    SMStext: string;
    subscribers: number;
    smssend: number;
    unsubcount: number;
    action: string;
  }[];
  handlePageChange: ({ selected }: { selected: number }) => void;
  pageCount: number;
  pageSize: number;
  search: (query1: string, query2: string) => void;
  filteredData: any;
  searchQuery1: string;
  setSearchQuery1: React.Dispatch<React.SetStateAction<string>>;
  searchQuery2: string;
  setSearchQuery2: React.Dispatch<React.SetStateAction<string>>;
};

function Dashboard(props: Props) {
  return (
    <>
      <div className="Main-Dashboard">
        <div className="Main-Dashboard-Header">
          <div className="Main-Dashboard-right">
            <h2 className="Main-Dashboard-title Dashboard-default-color">
              Dashboard
            </h2>
            <p className="Dashboard-default-color">
              Welcome to Pro Tax Admin Dashboard
            </p>
          </div>
          <div className="Main-Dashboard-left">
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
          <div className="Recent-Application">
            <div className="ibox">
              <div className="Recent-Application-Top">
                <h5 className="Main-Dashboard-title">Recent Applications</h5>
                <span className="d-btn">
                  {/* <FaPlus className="plus" /> */}
                  Add New Applicant
                </span>
              </div>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th colSpan={1} rowSpan={1}>
                        Name
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Date & Time
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {!props.searchQuery1
                      ? props.displayedUsers?.map(
                          (data: any, index: number) => (
                            <tr className="odd">
                              <td>{data.title}</td>
                              <td>{data.starttime}</td>
                              <td>
                                <span className="label label-danger">
                                  Stopped
                                </span>
                              </td>
                            </tr>
                          )
                        )
                      : props.filteredData?.map((data: any, index: number) => (
                          <tr className="odd">
                            <td>{data.title}</td>
                            <td>{data.starttime}</td>
                            <td>
                              <span className="label label-danger">
                                Stopped
                              </span>
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
              <div className="d-bottom">
                <div className="dataTables_info">
                  Showing 1 to {props.displayedUsers.length} of {data.length}{" "}
                  entries
                </div>
                <div className="bottom-navbar">
                  <ReactPaginate
                    pageCount={props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={props.handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="CampaignsOverview">
            <div className="ibox">
              <h5 className="title">Applications Overview</h5>
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
