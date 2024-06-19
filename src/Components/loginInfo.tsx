import NameandLogo from "./NameandLogo";
import "../styles/creat.css";
import "bootstrap/dist/css/bootstrap.css";
import mail2 from "../imgs/icons/iconamoon_email-bold.svg";
import { Icon } from "react-icons-kit";
import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";

function LoginInfo(Props) {
  const [t, i18n] = useTranslation("general");
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(view_off);

  const handlsubmit = Props.handlesubmit;

  const handleToggle = () => {
    if (type === "password") {
      setIcon(view);
      setType("text");
    } else {
      setIcon(view_off);
      setType("password");
    }
  };
  return (
    <>
      <div>
        <h1 className="titcre">{t("login")}</h1>
      </div>
      <div className="row creat-row">
        <div className="col col-4 ">
          <NameandLogo />
        </div>
        <div className="col col-8 col-lg-6 right-creat right-reset">
          <form noValidate onSubmit={handlsubmit}>
            <div className="sec-input">
              <div style={{ display: t("language") === "Ar" ? "none" : "" }}>
                <label htmlFor="email">{t("email")}:</label>
              </div>
              <div>
                <input type="email" id="email" required />
                <img src={mail2} className="icon"></img>
              </div>
              <div style={{ display: t("language") === "En" ? "none" : "" ,marginLeft:"40px"}}>
                <label htmlFor="email">:{t("email")}</label>
              </div>
            </div>
            <div className="sec-input">
              <div style={{ display: t("language") === "Ar" ? "none" : "" }}>
                <label htmlFor="password">{t("password")}:</label>
              </div>
              <div>
                <input type={type} id="password" minLength={8} required />
                <Icon
                  className="icon"
                  onClick={handleToggle}
                  size={25}
                  icon={icon}
                />
              </div>
              <div style={{ display: t("language") === "En" ? "none" : "" ,marginLeft:"20px"}}>
                <label htmlFor="password">:{t("password")}</label>
              </div>
            </div>

            <div>
              <div>
                <span className="forgit">
                  {t("forgetpass")}
                  <Link
                    onClick={() => {
                      navigate("../ResetPass");
                    }}
                  >
                    {t("resetpass")}
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <div>
                <button type="submit" onClick={handlsubmit}>
                  {t("login")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginInfo;
