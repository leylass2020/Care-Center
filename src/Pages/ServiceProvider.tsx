import NameandLogo from "../Components/NameandLogo";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ServiceProvider() {
  const[t,i18n]= useTranslation("general");
  const navigate = useNavigate();
  return (
    <>
      <div className="container login-main">
        <NameandLogo />
        <button
          className="row creat-btn"
          onClick={() => {
            navigate("../CreatPatient");
          }}
        >
          {t("creatpatient")}
        </button>
        <button
          className="row creat-btn"
          onClick={() => {
            navigate("../CreatProvider");
          }}
        >
          {t("creatprovider")}
        </button>
      </div>
    </>
  );
}
export default ServiceProvider;
