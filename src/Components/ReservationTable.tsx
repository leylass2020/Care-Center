import { useState } from "react";
import pencil from "../imgs/icons/pencil-alt.svg";
import trash from "../imgs/icons/trash(1).svg";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ReservationTable() {
  const [t,i18n]=useTranslation("general");
  const [visible, setVisible] = useState("none");
  const [id1, setId1] = useState(0);
  const [resList, setResList] = useState([
    {
      id: 6754,
      name: "nvvfgfgjfu",
      CostDiscount: "200$ 100$ 20$",
      statu: "Delivered",
    },
    {
      id: 654,
      name: "hfkry",
      CostDiscount: "200$ 100$ 20$",
      statu: "Delivered",
    },
    {
      id: 7864,
      name: "hgdfdeayys",
      CostDiscount: "200$ 100$ 20$",
      statu: "Cancelled",
    },
    {
      id: 564,
      name: "ghrdus",
      CostDiscount: "200$ 100$ 20$",
      statu: "In progress",
    },
  ]);
  const deleteRes = (id) => {
    const temp = resList.filter((item) => item.id != id);
    setResList(temp);
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
                {t("Admintabl.costanddis")}
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
            {resList.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.CostDiscount}</td>
                <td
                  style={{
                    color:
                      item.statu === "Delivered"
                        ? "rgba(89, 193, 46, 1)"
                        : item.statu === "Cancelled"
                        ? "rgba(234, 30, 30, 1)"
                        : "rgba(155, 205, 240, 1)",
                  }}
                >
                  {item.statu}
                </td>
                <td>
                  <button
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
                deleteRes(id1);
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

export default ReservationTable;