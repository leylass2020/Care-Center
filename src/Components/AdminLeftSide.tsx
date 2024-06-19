import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/admin.css";
import def from "../imgs/Default.svg";
import AdminBtn from "./AdminBtn";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function AdminLeftSide() {
  const [t, i18n] = useTranslation("general");
  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const [adminEngMenu, setAdminEng] = useState([
    {
      id: 1,
      name: t("AdminNav.provider"),
      loc: "ProvidersTable",
      stat: "",
    },
    {
      id: 2,
      name: t("AdminNav.patient"),
      loc: "PatientsTable",
      stat: "",
    },
    {
      id: 3,
      name: t("AdminNav.sales"),
      loc: "SalesTable",
      stat: "",
    },
    {
      id: 4,
      name: t("AdminNav.service"),
      loc: "ServicesTable",
      stat: "",
    },
    {
      id: 5,
      name: t("AdminNav.product"),
      loc: "ProductsTable",
      stat: "",
    },
    {
      id: 6,
      name: t("AdminNav.reservation"),
      loc: "ReservationTable",
      stat: "",
    },
    {
      id: 7,
      name: t("AdminNav.admanag"),
      loc: "AdminTable",
      stat: "",
    },
    {
      id: 8,
      name: t("AdminNav.adoption"),
      loc: "Admin Options",
      stat: "",
    },
    {
      id: 9,
      name: t("AdminNav.logout"),
      loc: "/",
      stat: "",
    },
  ]);
  const [showMen, setShowMen] = useState(false);
  return (
    <>
      <Col lg={1} className="lang" style={{ left: "90%", width: "50px" }}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
        >
          <button
            onClick={() => {
              handleChangeLang("en");
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#59C12E",
            }}
          >
            En
          </button>
          <p
            style={{
              color: "#59C12E",
            }}
          >
            |
          </p>
          <button
            onClick={() => {
              handleChangeLang("ar");
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#59C12E",
            }}
          >
            Ar
          </button>
        </div>
      </Col>
      <Col lg={4}>
        <div className="collaps-ad">
          <Row>
            <button
              className="collaps-btn-ad"
              style={{
                border: "2px solid black",
                width: "100%",
                height: "100%",
              }}
              onClick={() => {
                setShowMen(!showMen);
              }}
            >
              |||
            </button>
          </Row>

          <div
            className="coll-menu"
            style={{ display: showMen ? "flex" : "none" }}
          >
            {adminEngMenu.map((lin) => (
              <div
                onClick={() => {
                  setShowMen(!showMen);
                }}
                style={{
                  margin: "10px",
                  padding: "0",
                  width: "150px",
                  height: "40px",
                  fontSize: "12px",
                }}
              >
                <AdminBtn name={lin.name} loc={lin.loc} />
              </div>
            ))}
          </div>
        </div>
      </Col>
      <div className="admin-left">
        <Col lg={2}>
          <Row className="left-head">
            <Col lg={3}>
              <img src={def}></img>
            </Col>
            <Col lg={9}>
              <p>Ms.Happiness!</p>
              <span
                style={{ color: "rgba(111, 114, 122, 1)", fontSize: "11px" }}
              >
                This is short and sweet description text.
              </span>
            </Col>
          </Row>
          <div>
            {adminEngMenu.map((lin) => (
              <div
                style={{
                  margin: "5px",
                  padding: "0",
                  width: "300px",
                  height: "60px",
                }}
              >
                <AdminBtn name={lin.name} loc={lin.loc} />
              </div>
            ))}
          </div>
        </Col>
      </div>
    </>
  );
}

export default AdminLeftSide;
