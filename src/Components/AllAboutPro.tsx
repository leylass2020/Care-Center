import Col from "react-bootstrap/esm/Col";
import "../styles/allaboutproduct.css";
import addim from "../imgs/icons/lets-icons_add-duotone.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AllAboutPro() {
  const navigate = useNavigate();
  const [k,i18] = useTranslation("general");
  return (
    <div className="container1" style={{ marginTop: "20px" }}>
      <Col md={12}>
        <button
          className="add"
          onClick={() => {
            navigate("EditeProduct", {
              state: {ty:"edit"},
            });
          }}
        >
          <img src={addim}></img>{k("addpro")}
        </button>
        <Outlet />
      </Col>
    </div>
  );
}

export default AllAboutPro;
