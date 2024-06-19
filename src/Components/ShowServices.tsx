import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import edit from "../imgs/icons/ic_baseline-editblue.svg";
import del from "../imgs/icons/fluent_delete-20-filled.svg";
import "../styles/allaboutproduct.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ShowServices(Props) {
  const [k,i18]= useTranslation("general");
  const pro = Props.service;
  const navigate = useNavigate();
  const handleClick1 = () => {
    console.log("hello");
  };

  return (
    <div className="show-pro">
      <Col >
        <div className="head-pro">
          <Col lg={2}>
            <button
              onClick={() => {
                navigate("../editeservice",{
                  state: {ty:"edit"},
                });
              }}
            >
              <img src={edit} className="icon"></img>
            </button>
          </Col>
          <Col lg={2}>
            <button onClick={Props.delete}>
              <img src={del}></img>
            </button>
          </Col>
        </div>
        <div className="body-pro service-body">
          <Col lg={5}>
            <p>{k("section")}</p>
            <p style={{ fontSize: "bold" }}>{pro.Section}</p>
            <p>{k("name")}</p>
            <p style={{ fontSize: "bold" }}>{pro.Name}</p>
            <p>{k("price")}</p>
            <p style={{ fontSize: "bold" }}>{pro.price}</p>
          </Col>
          <Col lg={5}>
            <p>{k("discount")}</p>
            <p style={{ fontSize: "bold" }}>{k("after")} :{pro.After}</p>
            <p style={{ fontSize: "bold" }}>{k("befor")} :{pro.Befor}</p>
          </Col>
        </div>
      </Col>
    </div>
  );
}

export default ShowServices;
