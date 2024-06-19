import AdminLeftSide from "../Components/AdminLeftSide";
import Col from "react-bootstrap/esm/Col";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <div
        className="admin"
        style={{ display: "flex", alignItems: "flex-start", }}
      >
        <Col lg={4}>
          <AdminLeftSide />
        </Col>
        <Col lg={9} style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",marginRight:"5px"}}>
          <Outlet />
        </Col>
      </div>
    </>
  );
}

export default Admin;
