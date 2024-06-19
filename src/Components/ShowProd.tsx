import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import edit from "../imgs/icons/ic_baseline-editblue.svg";
import del from "../imgs/icons/fluent_delete-20-filled.svg";
import "../styles/allaboutproduct.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ShowProd(Props) {
  const [t, i18n] = useTranslation("general");
  const navigate = useNavigate();
  const prod = Props.prod;
  return (
    <div className="show-pro">
      <div className="head-pro">
        <Col lg={2}>
          <button
            onClick={() => {
              navigate("../EditeProduct", {
                state: { ty: "edit" },
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
      <div
        className="body-pro service-body"
        style={{ flexDirection: "column" }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "5px" }}>
            <img src={prod.im}></img>
          </div>
          <div>
            <img src={prod.im}></img>
          </div>
        </div>

        <div
          className="product-detail"
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-around",
            marginLeft:"10px",
            width:"400px"
            
          }}
        >
          <div >
            <p>{t("name")}</p>
            <p>{prod.name}</p>
            <p>{t("price")}</p>
            <p>{prod.price}</p>
          </div>
          <div>
            <p>{t("discount")}</p>
            <p>
              {" "}
              {t("after")} {Props.prod.After}{" "}
            </p>
            <p>
              {t("befor")} {Props.prod.Befor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProd;
