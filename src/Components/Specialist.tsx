import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/specialist.css";

function Specialist(Props) {
  const spec1 = Props.spec;
  return (
    <>
      <div
        className="col col-3 container sp-con"
        style={{ marginTop: 20 }}
      >
        <div>
          <img src={spec1.imgSrc} className="sp-im"></img>
        </div>
        <div className="specila">
          <h3>{spec1.name}</h3>
          <h6>{spec1.spe}</h6>
        </div>
      </div>
    </>
  );
}
export default Specialist;
