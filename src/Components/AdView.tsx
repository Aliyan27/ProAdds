import React from "react";
import data from "../Utils/AdListData.json";
import ReactPaginate from "react-paginate";

type Props = {
  displayedUsers: {
    title: string;
    starttime: string;
    qrtext: string;
    subscribers: number;
    smssend: number;
    unsubcount: number;
    action: string;
    channel: string;
    categories: string;
    tenour: string;
    phonenumber: string;
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

function AdView(props: Props) {
  return (
    <>
      <div className="Container">
        <div className="title-btn">
          <h2 className="title">AD</h2>
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
                <th colSpan={1} rowSpan={1} className="text-center">
                  Title
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Channel
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Categories
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Tenour
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Phonenumber
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Date
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  SmsText
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
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1}>
                  <input className="form-control" type="text" />
                </th>
              </tr>
            </thead>
            <tbody>
              {!props.searchQuery1
                ? props.displayedUsers?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.title}</td>
                      <td>{data.channel}</td>
                      <td>{data.categories}</td>
                      <td>{data.tenour}</td>
                      <td> {data.phonenumber}</td>
                      <td>{data.starttime}</td>
                      <td>{data.qrtext}</td>
                    </tr>
                  ))
                : props.filteredData?.map((data: any, index: number) => (
                    <tr className="odd">
                      <td>{data.title}</td>
                      <td>{data.channel}</td>
                      <td>{data.categories}</td>
                      <td>{data.tenour}</td>
                      <td> {data.phonenumber}</td>
                      <td>{data.starttime}</td>
                      <td>{data.qrtext}</td>
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

export default AdView;
