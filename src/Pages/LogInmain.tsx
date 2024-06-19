import NameandLogo from "../Components/NameandLogo";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LogInmain() {
  const [t, i18n] = useTranslation("general");
  const navigate = useNavigate();
  return (
    <>
      <div className="container login-main">
        <NameandLogo />
        <button
          className="row login-btn"
          onClick={() => {
            navigate("../login");
          }}
        >
          {t("login")}
        </button>
        <button
          className="row login-btn"
          onClick={() => {
            navigate("../ServiceProvider");
          }}
        >
          {t("creatAccount")}
        </button>
      </div>
    </>
  );
}
export default LogInmain;
