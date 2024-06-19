import Col from "react-bootstrap/Col";
import imgPro from "../imgs/Productde.svg";
import Row from "react-bootstrap/Row";
import "../styles/productdetail.css";
import "bootstrap/dist/css/bootstrap.css";

function ProductDetail() {
  return (
    <>
      <div className="main-detail">
        <div className="detail container">
          <h1>Product Details</h1>
          <Row>
            <Col lg={5} className="left-detail">
              <Row lg={12}>
                <img src={imgPro}></img>
              </Row>
              <p>Service Name</p>
              <p>Service Provider</p>
            </Col>
            <Col lg={5} className="right-detail">
              <Row lg={12}>
                <img src={imgPro}></img>
              </Row>
              <p>
                cost:<span style={{ opacity: 0 }}>-----</span>200$
              </p>
              <p>Service Type</p>
            </Col>
          </Row>
          <button className="buy">Buy</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
