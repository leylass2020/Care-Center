import NameandLogo from "./NameandLogo";
import "../styles/creat.css";
import "bootstrap/dist/css/bootstrap.css";
import mail2 from "../imgs/icons/iconamoon_email-bold.svg";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function CreatAccount2() {
  const navigate = useNavigate();
  const [k] = useTranslation("general");
  const handlesubmit = () => {
    navigate("../Confirm");
  };
  return (
    <>
      <div>
        <h1 className="titcre">{k("creatAccount")}</h1>
      </div>
      <div className="row creat-row">
        <div className="col col-4">
          <NameandLogo />
        </div>
        <div className="col col-6 right-creat">
          <form onSubmit={handlesubmit}>
            <Row>
              <Col style={{display:k("language")==="Ar"?"none":""}}>
                <label htmlFor="email" style={{ marginRight: "30px" }}>
                  {k("email")}:
                </label>
              </Col>
              <Col>
                <input id="email" type="email" required></input>
                <img className="icon" src={mail2}></img>
              </Col>
              <Col style={{display:k("language")==="En"?"none":""}}>
                <label htmlFor="email" style={{ marginRight: "30px" }}>
                  :{k("email")}
                </label>
              </Col>
            </Row>
            <div style={{marginRight:k("language")==="Ar"?"70px":""}}>
              <button type="submit">{k("sendmess")}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreatAccount2;
