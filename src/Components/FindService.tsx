import search from "../imgs/icons/search.svg";
import solar from "../imgs/icons/solarfilter.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/findser.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FindService() {
  const navigate = useNavigate();
  const [t,i18n] = useTranslation("general");
  return (
    <>
      <div className="row find-row">
        <div className="container">
          <h1>{t("Landing.services.findser")}</h1>
          <div className="search-nav">
            <img src={search}></img>
            <div onClick={()=>{
              navigate("/FindSevicePage")
            }}>
              <input
                className="search"
                name="search"
                placeholder={t("search")}
              ></input>
            </div>
            <img src={solar}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default FindService;
