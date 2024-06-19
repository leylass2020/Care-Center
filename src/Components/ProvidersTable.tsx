import pencil from "../imgs/icons/pencil-alt.svg";
import trash from "../imgs/icons/trash(1).svg";
import eye from "../imgs/icons/eye.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProvidersTable() {
  const [t,i18n]=useTranslation("general");
  const [visible, setVisible] = useState("none");
  const [id1, setId1] = useState(0);
  const [ProviderList, setProviderList] = useState([
    {
      id: 6754,
      name: "nvvfgfgjfu",
      profile: "dzfzds",
      statu: "Active",
    },
    {
      id: 654,
      name: "hfkry",
      profile: "dzfzds",
      statu: "Active",
    },
    {
      id: 7864,
      name: "hgdfdeayys",
      profile: "dzfzds",
      statu: "Inactive",
    },
    {
      id: 564,
      name: "ghrdus",
      profile: "dzfzds",
      statu: "Active",
    },
  ]);
  const deleteProvider = (id) => {
    const temp = ProviderList.filter((item) => item.id != id);
    setProviderList(temp);
  };
  const navigate=useNavigate();
  return (
    <>
    <Col lg={8}>
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
          {ProviderList.map((item) => (
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
                  style={{ backgroundColor: "transparent", border: "none" }}
                  onClick={()=>navigate("../AdminEditeProvider")}
                >
                  <img src={pencil}></img>
                </button>
                <span
                  style={{ color: "black", fontSize: "50", height: "50px" }}
                >
                  |
                </span>
                <button
                  onClick={() => {
                    setId1(item.id);
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
          style={{
            borderRadius: "5px",
            backgroundColor: "#E6F6FE",
            width: "60%",
            padding: "20px",
            display: visible,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "30px",
            marginTop: "50px",
          }}
        >
          <p style={{ color: "black" }}>{t("messagedele")}</p>
          <div>
            <button
              style={{
                border: "none",
                backgroundColor: "#74BCEE",
                color: "white",
                width: "70px",
                marginRight: "20px",
              }}
              onClick={() => {
                deleteProvider(id1);
                setVisible("none");
              }}
            >
              {" "}
              {t("yes")}
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "#74BCEE",
                color: "white",
                width: "70px",
                marginRight: "20px",
              }}
              onClick={() => setVisible("none")}
            >
              {" "}
              {t("no")}
            </button>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProvidersTable;
