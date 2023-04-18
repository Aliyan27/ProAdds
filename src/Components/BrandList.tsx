import React from "react";
import "../StyleSheets/CommonListStyle.css";
import data from "../Utils/BrandListData.json";
import { FormOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

type Props = {
  displayedUsers: {
    title: string;
    starttime: string;
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
const BrandList = (props: Props) => {
  const navigation = useNavigate();
  return (
    <>
      <div className="Container">
        <div className="title-btn">
          <h2 className="title">Brands</h2>
          <span className="d-btn" onClick={() => navigation("/brand/add")}>
            {/* <FaPlus className="plus" /> */}
            Add Brand
          </span>
        </div>
        <div className="search">
          <label>
            Search:
            <input type="text" name="name" />
          </label>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  Title
                </th>
                <th colSpan={1} rowSpan={1}>
                  Status
                </th>
                <th colSpan={1} rowSpan={1}>
                  Start DateTime
                </th>
                <th colSpan={1} rowSpan={1}>
                  Action
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <select className="custom-select">
                    <option>All</option>
                    <option>Enable</option>
                    <option>Disable</option>
                  </select>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1} />
              </tr>
            </thead>
            <tbody>
              {!props.searchQuery1
                ? props.displayedUsers?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.title}</td>
                      <td>
                        <span className="enabled_label">Enabled</span>
                      </td>
                      <td>{data.starttime}</td>
                      <td>
                        <FormOutlined width={40} height={40} />
                      </td>
                    </tr>
                  ))
                : props.filteredData?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.title}</td>
                      <td>
                        <span className="enabled_label">Enabled</span>
                      </td>
                      <td>{data.starttime}</td>
                      <td>
                        <FormOutlined width={40} height={40} />
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

export default BrandList;
