import { useTranslation } from "react-i18next";
import "../styles/oneproduct.css";
import Specialist from "./Specialist";

function ServiceCart(Props) {
  const [k] = useTranslation("general");
  const item = Props.item;
  return (
    <>
      <div className="container">
        <div className="one-pro" style={{ width: "80%" }}>
          <div className="one-left">
            <h1 style={{ fontSize: "40px" }}>{k("serdetail")}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "170px" }}>{k("doctorname")}</div>
              <div>{item.name}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "170px" }}>{k("doctorloc")}</div>
              <div>{item.location}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "170px" }}>{k("date")}</div>
              <div>{item.date}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "170px" }}>{k("price")}</div>
              <div>{item.cost}</div>
            </div>
            <div>
              <div
                style={{
                  display: item.statu === "Canceled" ? "flex" : "none",
                  border:
                    item.statu === "Canceled" ? "1px solid black" : "none",
                  width: "100%",
                  fontSize: "10px",
                }}
              >
                {item.reason}
              </div>
            </div>

            <div
              className="cart-button"
              style={{
                backgroundColor:
                  item.statu === "Canceled"
                    ? "rgba(234, 30, 30, 1)"
                    : item.statu === "in progress"
                    ? "rgba(89, 193, 46, 1)"
                    : "rgba(37, 180, 248, 1)",
              }}
            >
              <div>{item.statval}</div>
            </div>
          </div>
          <div>
            <Specialist spec={item} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCart;
