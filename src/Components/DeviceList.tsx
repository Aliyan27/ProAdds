import React from "react";
import ReactPaginate from "react-paginate";
import data from "../Utils/DeviceData.json";

type Props = {
  displayedUsers: {
    deviceName: string;
    channelName: string;
    channelArea: string;
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

const DeviceList = (props: Props) => {
  return (
    <>
      <div className="Container">
        <div className="title-btn">
          <h2 className="title">Device List</h2>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  Device name
                </th>
                <th colSpan={1} rowSpan={1}>
                  Channel Name
                </th>
                <th colSpan={1} rowSpan={1}>
                  Channel Area
                </th>
                <th colSpan={1} rowSpan={1}>
                  status
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <select className="custom-select">
                    <option>All</option>
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {!props.searchQuery1
                ? props.displayedUsers?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.deviceName}</td>
                      <td>{data.channelName}</td>
                      <td>{data.channelArea}</td>
                      <td>
                        <span className="enabled_label">Enabled</span>
                      </td>
                    </tr>
                  ))
                : props.filteredData?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.deviceName}</td>
                      <td>{data.channelName}</td>
                      <td>{data.channelArea}</td>
                      <td>
                        <span className="enabled_label">Enabled</span>
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
};

export default DeviceList;
