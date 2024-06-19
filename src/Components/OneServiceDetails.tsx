import { useLocation } from "react-router-dom";
import "../styles/oneproduct.css";
import { useTranslation } from "react-i18next";

function OneServiceDetails() {
  const [k] = useTranslation("general");
  const t = useLocation();
  return (
    <>
      <div className="container ">
        <div className="one-pro">
          <div className="one-left">
            <div>
              <h1
                style={{
                  width: "100%",
                  textAlign: k("language") === "Ar" ? "right" : "left",
                  marginLeft: k("language") === "Ar" ? "180px" : "",
                }}
              >
                {k("proddetail")}
              </h1>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-end", gap: "110px" }}
            >
              <div style={t.state.styl}>{k("sernam")}</div>
              <div>{t.state.name}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
              <div style={t.state.styl}>{k("serpro")}</div>
              <div>{t.state.serviceprovider}</div>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-end", gap: "80px" }}
            >
              <div style={t.state.styl}>{k("sertype")}</div>
              <div>{t.state.servicetype}</div>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-end", gap: "110px" }}
            >
              <div style={t.state.styl}>{k("price")}</div>
              <div>{t.state.cost}</div>
            </div>
            <div
              style={{
                display: t.state.type === "Cnceled" ? "flex" : "none",
                border: "1px solid black",
              }}
            >
              <p>{t.state.reason}</p>
            </div>
            <div>
              <button
                style={{
                  backgroundColor:
                    t.state.type === "Canceled"
                      ? "rgba(234, 30, 30, 1)"
                      : t.state.type === "in progress"
                      ? "rgba(89, 193, 46, 1)"
                      : "rgba(37, 180, 248, 1)",
                }}
              >
                {t.state.type}
              </button>
            </div>
          </div>
          <div>
            <img src={t.state.imgSrc} style={{ height: "100%",marginTop:"20px" }}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneServiceDetails;
