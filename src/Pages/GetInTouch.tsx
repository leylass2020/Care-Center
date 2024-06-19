import Col from "react-bootstrap/Col";
import Contactleft from "../Components/Contactleft";
import ContactRight from "../Components/ContactRight";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Fqs from "../Components/Fqs";
import { useTranslation } from "react-i18next";

function GetInTouch() {
  const [t,i18n]= useTranslation("general");
  return (
    <>
      <div className="in-touch">
        <div className="container ">
          <div className="head">
            <h1>{t("contact.title")}</h1>
            <p>{t("contact.body")}</p>
          </div>
          <Row>
            <Col lg={6}>
              <Contactleft />
            </Col>
            <Col lg={6}>
              <ContactRight />
            </Col>
          </Row>
        </div>
        <Fqs />
      </div>
    </>
  );
}

export default GetInTouch;
