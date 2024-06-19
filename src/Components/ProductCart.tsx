
import { useLocation } from "react-router-dom";
import "../styles/oneproduct.css";
import { useTranslation } from "react-i18next";

function ProductCart(Props) {
  const [k] = useTranslation("general");
  const item = Props.item;
  return (
    <>
      <div className="container ">
        <div className="one-pro" style={{ width: "80%" }}>
          <div className="one-left">
            <h1 style={{ fontSize: "40px" }}>{k("proddetail")}</h1>
            <div style={{display:"flex",alignItems:"center"}}>
              <div style={{ width: "170px" }}>
                {k("sernam")}
              </div>
              <div>{item.title}</div>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
              <div style={{ width: "170px" }}>
              {k("serpro")}
              </div>
              <div>{item.serviceprovider}</div>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
              <div  style={{ width: "170px" }}>
              {k("sertype")}
              </div>
              <div>{item.servicetype}</div>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
              <div  style={{ width: "170px" }}>
              {k("price")}
              </div>
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
          <div >
            <img
              src={item.imgSrc}
              style={{ width: "100%"}}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
