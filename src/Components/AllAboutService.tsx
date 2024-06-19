import Col from "react-bootstrap/esm/Col";
import "../styles/allaboutproduct.css";
import addim from "../imgs/icons/lets-icons_add-duotone.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AllAboutService() {
  const navigate = useNavigate();
  const [k, i18] = useTranslation("general");
  return (
    <div className="container1 " style={{ marginTop: "20px" }}>
      <button
        className="add"
        onClick={() => {
          navigate("./EditeService", {
            state: {ty:"add"},
          });
        }}
      >
        <img src={addim}></img>{k("addser")}
      </button>
      <Col lg={6}>
        <Outlet />
      </Col>
    </div>
  );
}

export default AllAboutService;
