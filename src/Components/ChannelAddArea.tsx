import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../StyleSheets/ChannelAddStyle.css";
import { DeleteTwoTone, EditOutlined } from "@ant-design/icons";

type Props = {
  setChannelData: React.Dispatch<any>;
  channelData: any;
  handleDelete: (index: number) => void;
  handleFormSubmit: () => void;
  handleEdit: (index: number) => void;
  areaData: any;
  initialValue: string;
};
interface FormValues {
  places: string;
}

function ChannelAddArea(props: Props) {
  // const [formvalues, setFormValue] = useState<FormValues>({
  //   places: "",
  // });

  const validate = Yup.object({
    places: Yup.string().required("Please Enter Title"),
  });
  const formik = useFormik({
    initialValues: {
      places: props.initialValue,
    },
    validationSchema: validate,
    onSubmit: (values: FormValues) => {
      const newData = {
        places: values.places,
      };
      props.setChannelData([...props.channelData, newData]);

      // if(channelData.length !==0){
      //   let temp1 =[...channelData,newData]
      //   for(let i=0;i<temp1.length;i++){
      //     if(temp1[i].channelname!==values.channelname){
      //       temp1[i].channelname = values.channelname
      //     }
      //   }
      // }

      // formik.values.channelname = "";
      formik.values.places = "";
    },
  });

  return (
    <>
      <div className="channel-add">
        <div className="channel-Add-Form">
          <div className="channel-Add-View">
            <div className="Addbox">
              <div className="topmenu">
                <h2 className="channelAddTitle">Add Channel Area </h2>
              </div>
              <form className="Form" onSubmit={formik.handleSubmit}>
                <label className="campaginAddLable">Name/Area </label>
                <input
                  type="text"
                  name="places"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.places}
                />
                <button className="d-btn" type="submit">
                  ADD
                </button>
              </form>
              <>
                <table className="table">
                  <tbody>
                    {props.channelData?.map((data: any, index: number) => {
                      return (
                        <tr className="odd" key={index}>
                          <td>{data.places}</td>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              props.handleEdit(index);
                            }}
                          >
                            <EditOutlined twoToneColor="red" />
                          </td>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => props.handleDelete(index)}
                          >
                            <DeleteTwoTone twoToneColor="red" />
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td>
                        <span
                          className="d-btn"
                          style={{
                            width: "100%",
                            margin: "0 auto",
                            marginTop: "30px",
                            textAlign: "center",
                          }}
                          onClick={props.handleFormSubmit}
                        >
                          SUBMIT
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            </div>
            <div className="Addbox">
              <div className="table">
                {props.areaData?.lenght !== 0 ? (
                  <>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={1} rowSpan={1}>
                            Channel Area
                          </th>
                          <th colSpan={1} rowSpan={1}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.areaData?.map((data: any, index: number) => {
                          return (
                            <tr className="odd" key={index}>
                              <td>{data.name}</td>
                              <td
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  props.handleEdit(data);
                                }}
                              >
                                <EditOutlined twoToneColor="red" />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <div className="channelNotAdd">Channel Not Added Yet...!</div>
                )}
              </div>
              <button
                type="submit"
                className="d-btn"
                style={{ width: "100%", marginTop: "30px" }}
                onClick={props.handleFormSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelAddArea;
