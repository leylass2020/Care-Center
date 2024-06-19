import pencil from "../imgs/icons/pencil-alt.svg";
import trash from "../imgs/icons/trash(1).svg";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AdminTable() {
  const[t,i18n]=useTranslation("general");
  const [visible, setVisible] = useState("none");
  const [id1, setId1] = useState(0);
  const [adminList, setAdminList] = useState([
    {
      id: 1,
      name: "nvvfgfgjfu",
      statu: "Active",
      email: "jone12@gmail.com",
      password: "1234sdf67@23",
      bank: "First",
      iban: "22334456",
      swift: [4, 1, 0, 4],
    },
    {
      id: 2,
      name: "hfkry",
      statu: "Active",
      email: "jone11@gmail.com",
      password: "12edsdf67@23",
      bank: "First",
      iban: "22254456",
      swift: [4, 1, 3, 4],
    },
    {
      id: 3,
      name: "hgdfdeayys",
      statu: "Inactive",
      email: "jone2@gmail.com",
      password: "1234f67@23",
      bank: "First",
      iban: "2233446",
      swift: [3, 1, 0, 3],
    },
    {
      id: 4,
      name: "ghrdus",
      statu: "Active",
      email: "ghrdus87@gmail.com",
      password: "1234f67@23",
      bank: "First",
      iban: "2233546",
      swift: [5, 1, 5, 3],
    },
  ]);
  const deleteadmin = (id) => {
    const temp = adminList.filter((item) => item.id != id);
    setAdminList(temp);
  };

  const navigate = useNavigate();
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
            {adminList.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
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
                      navigate("/Admin/EditeAdmin", {
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
                deleteadmin(id1);
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

export default AdminTable;
