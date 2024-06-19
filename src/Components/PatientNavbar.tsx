import "../styles/navbarStyle.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../imgs/logo.svg";
import search from "../imgs/icons/search.svg";
import solar from "../imgs/icons/solarfilter.svg";
import Col from "react-bootstrap/Col";
import { NavLink, useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import person from "../imgs/icons/person12.svg";
import Row from "react-bootstrap/Row";
import Landing from "../Pages/Landing";
import { useTranslation } from "react-i18next";

function PatientNavbar() {
  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const [t,i18n] = useTranslation("general");
  const navList = [
    { id: 1, location: "/allAboutpatient", name: t("navbar.home") },
    {
      id: 2,
      location: "/allAboutpatient/LandForPatient/#services",
      name: t("navbar.services"),
    },
    {
      id: 3,
      location: "/allAboutpatient/LandForPatient/#aboutus",
      name: t("navbar.about"),
    },
    {
      id: 4,
      location: "/allAboutpatient/GetInTouch",
      name: t("navbar.contact"),
    },
    {
      id: 5,
      location: "/LogInmain",
      name: t("navbar.login"),
    },
  ];

  const navigate = useNavigate();
  return (
    <>
          <Col lg={1} className="lang" >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
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
      <Row
        className="row-nav my-nav "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingLeft: "100px",
        }}
      >
        <Col lg={6} className="left-nav" style={{ marginLeft: "-200px" }}>
          <nav className="care-nav">
            {navList.map((item) => (
              <NavLink key={item.id} to={item.location} onClick={() => {
                window.location.href = item.location;
              }}>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </Col>
        <Col
          lg={6}
          className="right-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="dropdown">
            <DropdownButton id="split-button-dropdown" title=" ||||">
              {navList.map((item) => (
                <Dropdown.Item eventKey={item.id}>
                  <NavLink
                    key={item.id}
                    to={item.location}
                    onClick={() => {
                      window.location.href = item.location;
                    }}
                  >
                    {item.name}
                  </NavLink>
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="search-nav">
            <img src={search}></img>
            <div>
              <input
                className="search"
                name="search"
                placeholder="serach"
              ></input>
            </div>
            <img src={solar}></img>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "20px", marginBottom: "2" }}>
              <span className="green">C</span>are
            </p>
            <img
              className="col-logo"
              src={logo}
              style={{ marginTop: "-30px" }}
            ></img>
          </div>
          <div>
            <div
              style={{
                border: "1px solid black",
                padding: "1px",
                height: "5vw",
                width: "5vw",
                borderRadius: "50%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                navigate("../allAboutpatient/PatientMain");
              }}
            >
              <img
                src={person}
                className="person-img"
                style={{ height: "4vw", width: "4vw" }}
              ></img>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default PatientNavbar;
