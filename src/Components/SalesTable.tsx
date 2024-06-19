import pencil from "../imgs/icons/pencil-alt.svg";
import trash from "../imgs/icons/trash(1).svg";
import digram from "../imgs/digram.svg";
import charp from "../imgs/Charp.svg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SalesTable() {
  const [t,i18n]=useTranslation("general");
  const [ProductsList, setProductList] = useState([
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
  const deleteProduct = (id) => {
    const temp = ProductsList.filter((item) => item.id != id);
    setProductList(temp);
  };
  return (
    <>
      <img src={digram} style={{ width: "90%",marginTop:"20px" }}></img>
      <Row>
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
              </tr>
            </thead>
            <tbody>
              {ProductsList.map((item) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col lg={3}>
          <img src={charp}></img>
        </Col>
      </Row>
    </>
  );
}

export default SalesTable;
