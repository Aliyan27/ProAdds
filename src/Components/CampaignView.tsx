import React from "react";
import "../StyleSheets/CommonListStyle.css";
// import { FaPlus } from "react-icons/fa";
import data from "../Utils/data.json";
import ReactPaginate from "react-paginate";

type Props = {
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

const CampaignView = (props: Props) => {
  return (
    <>
      <div className="Container">
        <div className="title-btn">
          <h2 className="title">Campaigns</h2>
          <span className="d-btn">
            {/* <FaPlus className="plus" /> */}
            Add Campaign
          </span>
        </div>
        <div className="search">
          <label>
            Search:
            <input
              type="text"
              name="name"
              value={props.searchQuery1}
              onChange={(e) => {
                props.setSearchQuery1(e.target.value);
                props.search(e.target.value, props.searchQuery2);
              }}
            />
          </label>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  Title
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Status
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Start DateTime
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  SMS Text
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Subscribers
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  SMS Sent
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Unsub Count
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  <input
                    className="form-control"
                    type="text"
                    value={props.searchQuery1}
                    onChange={(e) => {
                      props.setSearchQuery1(e.target.value);
                      props.search(e.target.value, props.searchQuery2);
                    }}
                  />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <select className="custom-select">
                    <option>All</option>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Stopped</option>
                    <option>Completed</option>
                  </select>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input
                    className="form-control"
                    type="text"
                    value={props.searchQuery2}
                    onChange={(e) => {
                      props.setSearchQuery2(e.target.value);
                      props.search(props.searchQuery1, e.target.value);
                    }}
                  />
                </th>
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
              </tr>
            </thead>
            <tbody>
              {!props.searchQuery1
                ? props.displayedUsers?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.title}</td>
                      <td>
                        <span className="label label-danger">Stopped</span>
                      </td>
                      <td className="text-center">{data.starttime}</td>
                      <td>{data.SMStext}</td>
                      <td className="text-center">{data.subscribers}</td>
                      <td className="text-center">{data.smssend}</td>
                      <td className="text-center">{data.unsubcount}</td>
                      <td className="text-center">{data.action}</td>
                    </tr>
                  ))
                : props.filteredData?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.title}</td>
                      <td>
                        <span className="label label-danger">Stopped</span>
                      </td>
                      <td className="text-center">{data.starttime}</td>
                      <td>{data.SMStext}</td>
                      <td className="text-center">{data.subscribers}</td>
                      <td className="text-center">{data.smssend}</td>
                      <td className="text-center">{data.unsubcount}</td>
                      <td className="text-center">{data.action}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="d-bottom">
          <div className="dataTables_info">
            Showing 1 to {props.displayedUsers.length} of {data.length} entries
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
    </>
  );
};

export default CampaignView;
