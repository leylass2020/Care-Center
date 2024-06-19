import facebook from "../imgs/icons/facebook.svg";
import twit from "../imgs/icons/twitter.svg";
import inst from "../imgs/icons/instagram.svg";
import link from "../imgs/icons/linkedin.svg";
import you from "../imgs/icons/youtube.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row footer ">
          <div className="col col-lg-6 col-md-8 text-foot">
            <p>All rights reserved ® uifry.com | Terms and conditions apply!</p>
          </div>
          <div className="col col-lg-6 col-icon">
            <img className="icon" src={facebook}></img>
            <img className="icon" src={inst}></img>
            <img className="icon" src={you}></img>
            <img className="icon" src={link}></img>
            <img className="icon" src={twit}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
