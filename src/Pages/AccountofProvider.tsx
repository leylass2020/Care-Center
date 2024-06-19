import LeftSideAccPro from "../Components/LeftSideAccPro";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/leftmanage.css"
import { Outlet } from "react-router-dom";

function AccountofProvider() {
  return (
    <div className="container row mb-3 row-pro">
      <Row>
        <Col lg={4}>
          <LeftSideAccPro />
        </Col>
        <Col lg={8} >
          <Outlet/>
        </Col>
      </Row>
    </div>
  );
}

export default AccountofProvider;
