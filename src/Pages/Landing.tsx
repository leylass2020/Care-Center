import "bootstrap/dist/css/bootstrap.css";
import OurSpecialists from "../Components/OurSpecialists";
import Services from "../Components/Services";
import FindService from "../Components/FindService";
import OurClients from "../Components/OurClients";
import Fqs from "../Components/Fqs";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/landing.css";
import vbn from "../imgs/vbn 1.svg";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";

function Landing() {
  const [t, i18n] = useTranslation("general");
  return (
    <>
      <div className="container landing">
        <Row>
          <Col md={7} className="left-side">
            <h1
              style={{ textAlign: t("language") === "En" ? "left" : "right" }}
            >
              {t("Landing.firstsec.title")}
            </h1>
            <p
              style={{
                fontSize: "20px",
                textAlign: t("language") === "En" ? "left" : "right",
              }}
            >
              {t("Landing.firstsec.body")}
            </p>
            <div>
              <button className="land-btn"> {t("Landing.getstart")}</button>
            </div>
          </Col>
          <Col md={4} className="right-side">
            <img src={vbn}></img>
          </Col>
        </Row>
      </div>
      <section id="aboutus">
        <OurSpecialists />
      </section>
      <section id="services">
        <Services />
      </section>
      <div>
        <FindService />
      </div>
      <div>
        <OurClients />
      </div>
      <div className="landing-footer">
        <Fqs />
      </div>
    </>
  );
}
export default Landing;
