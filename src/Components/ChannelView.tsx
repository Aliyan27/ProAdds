import React from "react";
import data from "../Utils/channelData.json";
import "../StyleSheets/ChannelStyle.css";
import { EyeFilled, PlusSquareFilled } from "@ant-design/icons";
import ReactPaginate from "react-paginate";
type Props = {
  handleEditClick: (index: object) => void;
  handleViewClick: (index: number) => void;
  handleAddClick: (index: number) => void;
  handledetailClick: (index: object) => void;
  displayedUsers: {
    channelname: string;
    status: string;
    channelarea: string[];
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

function ChannelView(props: Props) {
  return (
    <>
      <div className="Container">
        <div className="title-btn">
          <h2 className="title">Channel View</h2>
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
                  Channel Name
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Status
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
                    <option>Active</option>
                    <option>InActive</option>
                  </select>
                </th>
                <th colSpan={1} rowSpan={1} />
              </tr>
            </thead>
            <tbody>
              {!props.searchQuery1
                ? props.displayedUsers?.map((data: any, index: number) => (
                    <tr className="odd" key={index}>
                      <td>{data.channelname}</td>
                      <td className="text-center">{data.status}</td>
                      <td
                        className="text-center"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {data.status === "Active" ? (
                          <span className="statusActionBtn">
                            Block
                          </span>
                        ) : (
                          <span className="statusActionBtn">
                            Unblock
                          </span>
                        )}
                        <EyeFilled
                          style={{ fontSize: "19px", marginRight: "10px" }}
                          onClick={() => props.handledetailClick(data)}
                        />
                        <PlusSquareFilled
                          style={{ fontSize: "18px" }}
                          onClick={() => props.handleAddClick(index)}
                        />
                      </td>
                    </tr>
                  ))
                : props.filteredData?.map((data: any, index: number) => (
                    <tr className="odd" key={index}>
                      <td>{data.channelname}</td>
                      <td className="text-center">{data.status}</td>
                      <td
                        className="text-center"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {data.status === "Active" ? (
                          <span className="statusActionBtn label label-danger">
                            Block
                          </span>
                        ) : (
                          <span className="statusActionBtn label label-danger">
                            Unblock
                          </span>
                        )}
                        <EyeFilled
                          style={{ fontSize: "19px", marginRight: "10px" }}
                          onClick={() => props.handledetailClick(data)}
                        />
                        <PlusSquareFilled
                          style={{ fontSize: "18px" }}
                          onClick={() => props.handleAddClick(index)}
                        />
                      </td>
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
}

export default ChannelView;
