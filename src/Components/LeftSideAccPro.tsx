import { useNavigate } from "react-router-dom";
import "../styles/leftmanage.css";
import person from "../imgs/icons/person12.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function LeftSideAccPro() {
  const [t, i18n] = useTranslation("general");
  const [showMen, setShowMen] = useState(false);
  const navList = [
    { id: 1, location: "ShowProviderAccount", name: t("providerAcc.acc") },
    {
      id: 2,
      location: "ProviderAccount",
      name: t("providerAcc.edit"),
    },
    {
      id: 3,
      location: "AllAboutService/AllServicesProv",
      name: t("providerAcc.ser"),
    },
    {
      id: 4,
      location: "AllAboutPro/ShowAllProduct",
      name: t("providerAcc.pro"),
    },
    {
      id: 5,
      location: "../",
      name: t("providerAcc.logout"),
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="patient-collaps">
        <button
          className="collaps-btn-ad"
          style={{
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#59C12E",
            width: "70px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
            color: "white",
          }}
          onClick={() => {
            setShowMen(!showMen);
          }}
        >
          | | |
        </button>
        <div>
          <div
            className="left-acc-prov"
            style={{ display: showMen ? "flex" : "none" }}
          >
            <div className="per-con">
              <img src={person} className="person-img"></img>
            </div>
            {navList.map((item) => (
              <button
                onClick={() => {
                  navigate(item.location);
                  setShowMen(!showMen);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="left-acc-prov " id="coll-h">
        <div className="per-con">
          <img src={person} className="person-img"></img>
        </div>
        {navList.map((item) => (
          <button
            onClick={() => {
              navigate(item.location);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default LeftSideAccPro;
