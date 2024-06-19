import "bootstrap/dist/css/bootstrap-grid.min.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import mainimg from "../imgs/Rectangle.svg";
import loc1 from "../imgs/location1.svg";
import loc2 from "../imgs/location2.svg";
import chat from "../imgs/live chat.svg";
import phone from "../imgs/phone.svg";
import time from "../imgs/time.svg";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";

function Contactleft() {
  const [t, i18n] = useTranslation("general");
  const contactlist = [
    {
      id: 0,
      im: time,
      title: t("contact.officet"),
      body: "Monday - Saturday (9:00am to 5:00pm) Sunday (Closed)",
    },
    {
      id: 1,
      im: loc2,
      title: t("contact.emailad"),
      body: "Smile01@gmail.com",
    },
    {
      id: 2,
      im: phone,
      title: t("contact.tel"),
      body: "0900-78601",
    },
    {
      id: 3,
      im: chat,
      title: t("contact.chat"),
      body: "+1-2064512559",
    },
  ];
  return (
    <div className="container-left">
      <div>
        <img src={mainimg}></img>
        <div>
          <div className="bar1">
            <div>
              <img src={loc1} style={{ marginLeft: "-30px" }}></img>
            </div>
            <div style={{marginLeft:"-20px"}}>
              <p>{t("contact.officead")}</p>
              <span>1441 Morris Ave, Union, NJ 07083</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        {contactlist.map((item) => (
          <div className="bar">
            <div>
              <img
                src={item.im}
                style={{ marginTop: "10px", marginLeft: "-30px" }}
              ></img>
            </div>
            <div style={{marginLeft:"-20px"}}>
              <p style={{ fontSize: "16px" }}>{item.title}</p>
              <span style={{ fontSize: "14px" }}>{item.body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contactleft;
