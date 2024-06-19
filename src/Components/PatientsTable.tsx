import pencil from "../imgs/icons/pencil-alt.svg";
import trash from "../imgs/icons/trash(1).svg";
import eye from "../imgs/icons/eye.svg";
import edit from "../imgs/undraw_Throw_away_re_x60k (1) 1(1).svg";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PatientsTable() {
  const [t,i18n] = useTranslation("general");
  const navigate = useNavigate();
  const [visible, setVisible] = useState("none");
  const deletePatient = (id) => {
    const temp = PatientList.filter((item) => item.id != id);
    setPatientList(temp);
  };
  const handleclick1 = () => {
    setVisible("none");
  };
  const [PatientList, setPatientList] = useState([
    {
      id: 6754,
      name: "nvvfgfgjfu",
      profile: "dzfzds",
      statu: "Active",
      email:"hghfd@llfh.com",
      password:"dfddewi",
    },
    {
      id: 654,
      name: "hfkry",
      profile: "dzfzds",
      statu: "Active",
      email:"hghfd@llfh.com",
      password:"dfddewi",
    },
    {
      id: 7864,
      name: "hgdfdeayys",
      profile: "dzfzds",
      statu: "Inactive",
      email:"hghfd@llfh.com",
      password:"dfddewi",
    },
    {
      id: 564,
      name: "ghrdus",
      profile: "dzfzds",
      statu: "Active",
      email:"hghfd@llfh.com",
      password:"dfddewi",
    },
  ]);
  return (
    <>
      <Col lg={9}>
        <table
          className="table"
          style={{
            border: "2px solid rgba(207, 207, 207, 1)",
            textAlign: "center",
            marginTop: "70px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                scope="col"
              >
                id
              </th>
              <th
                style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                scope="col"
              >
                {t("Admintabl.name")}
              </th>
              <th
                style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                scope="col"
              >
                {t("Admintabl.profile")}
              </th>
              <th
                style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                scope="col"
              >
                {t("Admintabl.statu")}
              </th>
              <th
                style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                scope="col"
              >
                {t("Admintabl.action")}
              </th>
            </tr>
          </thead>
          <tbody>
            {PatientList.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                  {item.profile}
                  <img src={eye} style={{ width: "25px", margin: "5px" }}></img>
                </td>
                <td
                  style={{
                    color:
                      item.statu === "Active"
                        ? "rgba(89, 193, 46, 1)"
                        : "rgba(234, 30, 30, 1)",
                  }}
                >
                  {item.statu}
                </td>
                <td>
                  <button
                  onClick={() => {
                    navigate("/admin/EditeAdmin", {
                      state: item,
                    });
                  }}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <img src={pencil}></img>
                  </button>
                  <span
                    style={{ color: "black", fontSize: "50", height: "50px" }}
                  >
                    |
                  </span>
                  <button
                    onClick={(e) => {
                      deletePatient(item.id);
                      setVisible("flex");
                    }}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <img src={trash}></img>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          onClick={handleclick1}
          style={{
            borderRadius: "5px",
            backgroundColor: "white",
            top: "30px",
            left: "140px",
            position: "absolute",
            width: "80%",
            padding: "20px",
            display: visible,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid black",
          }}
        >
          <img src={edit} style={{ width: "80%" }}></img>
          <h1 style={{ color: "rgba(193, 232, 177, 1)" }}>
            {t("patientdelet")}
          </h1>
        </div>
      </Col>
    </>
  );
}

export default PatientsTable;
