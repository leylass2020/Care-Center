import CreatAccountAsPatient from "../Components/CreatAccountAsPatient";
import { Col } from "react-bootstrap";
import NameandLogo from "../Components/NameandLogo";

function CreatPatient() {
  return (
    <>
      <div>
        <h1 className="titRes">Creat Account as patient</h1>
      </div>
      <div className="row reseat-row">
        <Col lg={3}>
          <NameandLogo />
        </Col>
        <Col lg={5}><CreatAccountAsPatient/></Col>
      </div>

        
    
    </>
  );
}
export default CreatPatient;
