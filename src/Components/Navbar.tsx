import "../styles/navbarStyle.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../imgs/logo.svg";
import search from "../imgs/icons/search.svg";
import solar from "../imgs/icons/solarfilter.svg";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("general");
  const navList = [
    { id: 1, location: "/", name: t("navbar.home") },
    {
      id: 2,
      location: "/#services",
      name: t("navbar.services"),
    },
    {
      id: 3,
      location: "/#aboutus",
      name: t("navbar.about"),
    },
    {
      id: 4,
      location: "/GetInTouch",
      name: t("navbar.contact"),
    },
    {
      id: 5,
      location: "/LogInmain",
      name: t("navbar.login"),
    },
  ];
  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <Row className="row-nav my-nav">
        <Col lg={5} className="left-nav">
          <nav className="care-nav ">
            {navList.map((item) => (
              <NavLink
                key={item.id}
                to={item.location}
                onClick={() => {
                  window.location.href = item.location;
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </Col>
        <Col lg={5} className="right-nav">
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
                placeholder={t("search")}
              ></input>
            </div>
            <img src={solar}></img>
          </div>
          <p className="name">
            <span className="green">C</span>are
          </p>
          <img className="col-logo" src={logo}></img>
        </Col>
      </Row>
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
    </>
  );
}
export default Navbar;
