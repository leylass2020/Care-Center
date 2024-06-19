import "../styles/happy.css";
import "bootstrap/dist/css/bootstrap.css";
import stars from "../imgs/Group 346.svg";
import Col from "react-bootstrap/esm/Col";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

function HappyClient(Props) {
  const [k] = useTranslation("general");
  return (
    <>
      <Col lg={4}  className="client">
        <div className="card  mb-3">
          <div className="card-header bg-transparent">
            <div className="row">
              <div className="col col-3">
                <img className="imgC" src={Props.srcimg}></img>
              </div>
              <div className="col col-8 name-client">
                <h5>{Props.name}</h5>
                <img className="stars" src={stars}></img>
              </div>
            </div>
          </div>
          <div className="card-body text-success">
            <p style={{textAlign:k("language")==="Ar"?"right":"left"}} className="card-text">{Props.text}</p>
          </div>
        </div>
      </Col>
    </>
  );
}
export default HappyClient;
