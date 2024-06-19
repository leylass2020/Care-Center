import NameandLogo from "../Components/NameandLogo";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LogIn() {
  const [t, i18n] = useTranslation("general");
  const navigate = useNavigate();
  return (
    <>
      <div className="container login-main">
        <NameandLogo />
        <button
          className="row login-btn"
          onClick={() => {
            navigate("../LogInPatient");
          }}
        >
          {t("loginpatient")}
        </button>
        <button
          className="row login-btn"
          onClick={() => {
            navigate("../LogInProvider");
          }}
        >
          {t("loginprovider")}
        </button>
      </div>
    </>
  );
}
export default LogIn;
