import { useState } from "react";
import pencil from "../imgs/icons/pencil-alt.svg";
import trash from "../imgs/icons/trash(1).svg";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ServicesTable() {
  const [t,i18n]=useTranslation("general");
  const navigate=useNavigate();
  const [visible, setVisible] = useState("none");
  const [id1, setId1] = useState(0);
  const [ServiceList, setServiceList] = useState([
    {
      id: 6754,
      name: "nvvfgfgjfu",
      Type: "dzfzds",
      Cost: "200$",
    },
    {
      id: 654,
      name: "hfkry",
      Type: "dzfzds",
      Cost: "200$",
    },
    {
      id: 7864,
      name: "hgdfdeayys",
      Type: "dzfzds",
      Cost: "200$",
    },
    {
      id: 564,
      name: "ghrdus",
      Type: "dzfzds",
      Cost: "200$",
    },
  ]);
  const deleteService = (id) => {
    const temp = ServiceList.filter((item) => item.id != id);
    setServiceList(temp);
  };
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
                {t("Admintabl.type")}
              </th>
              <th
                style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                scope="col"
              >
                {t("Admintabl.cost")}
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
            {ServiceList.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.Type}</td>
                <td>{item.Cost}</td>
                <td>
                  <button
                  onClick={()=>navigate("/admin/EditeService", {
                    state: item,
                  })}
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
                deleteService(id1);
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

export default ServicesTable;
