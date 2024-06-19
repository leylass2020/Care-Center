import CreatAccountAsProvider from "../Components/CreatAccountAsProvider";
import NameandLogo from "../Components/NameandLogo";
import { Col } from "react-bootstrap";

function CreatProvider() {
  return (
    <>
      <div>
        <h1 className="titRes">Creat Account as Provider</h1>
      </div>
      <div className="row reseat-row">
        <Col lg={3}>
          <NameandLogo />
        </Col>
        <Col lg={5}>
          <CreatAccountAsProvider />
        </Col>
      </div>
    </>
  );
}
export default CreatProvider;
