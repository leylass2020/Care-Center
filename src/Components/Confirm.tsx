import "../styles/confirm.css";
import "bootstrap/dist/css/bootstrap.css";
import NameandLogo from "./NameandLogo";
import { useNavigate } from "react-router-dom";
import LogInmain from "../Pages/LogInmain";
import { useTranslation } from "react-i18next";

function Confirm() {
  const [k] = useTranslation("general");
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className="tit">{k("entercode")}</h1>
        <div className="row rowCo">
          <div className="col col-3">
            <NameandLogo />
          </div>
          <div
            className="col col-6 right-col"
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="row">
              <p
                className="col"
                style={{ display: k("language") === "Ar" ? "none" : "" }}
              >
                {k("code")}:
              </p>
              <input className="cod-num" maxLength={1} />
              <input className="cod-num" maxLength={1} />
              <input className="cod-num" maxLength={1} />
              <input className="cod-num" maxLength={1} />
              <input className="cod-num" maxLength={1} />
              <p
                className="col"
                style={{ display: k("language") === "En" ? "none" : "" }}
              >
                :{k("code")}
              </p>
            </div>
            <div className="row">
              <button
                className="con-but"
                onClick={() => {
                  navigate("../LogInmain");
                }}
              >
                {k("confirmcode")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Confirm;
