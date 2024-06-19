
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import PatientMenu from "./PatientMenu";
import { Outlet } from "react-router-dom";

function PatientMain() {
  return (
    <>
      <Row>
        <Col lg={3}>
          <PatientMenu />
        </Col>
        <Col lg={8}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default PatientMain;
