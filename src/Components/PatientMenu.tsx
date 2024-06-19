import { useNavigate } from "react-router-dom";
import "../styles/leftmanage.css";
import person from "../imgs/icons/person12.svg";
import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function PatientMenu() {
  const [t, i18n] = useTranslation("general");
  const navigate = useNavigate();
  const [showMen, setShowMen] = useState(true);
  const navList = [
    { id: 1, location: "patientAccount", name:t("patientAcc.edit") },
    {
      id: 2,
      location: "PaymentForPatient",
      name: t("patientAcc.pay"),
    },
    {
      id: 3,
      location: "PatientCart",
      name: t("patientAcc.cart"),
    },
    {
      id: 4,
      location: "/",
      name: t("patientAcc.logout"),
    },
    
  ];
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
        style={{ display: showMen ? "flex" : "none",position:"absolute" }}
      >
        <div className="per-con">
          <img src={person} className="person-img"></img>
        </div>
        { navList.map ((item)=>(
          <button
          onClick={() => {
            navigate(item.location);
          }}
        >
          {item.name}
        </button>

        ))}
          
      </div>
        </div>
      </div>
      <div
        className="left-acc-prov "
        id="coll-h">
        <div className="per-con">
          <img src={person} className="person-img"></img>
        </div>
        { navList.map ((item)=>(
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

export default PatientMenu;
