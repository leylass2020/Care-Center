import { useLocation } from "react-router-dom";
import "../styles/oneproduct.css";
import Specialist from "./Specialist";
import { useTranslation } from "react-i18next";

function OneSpecDetails() {
  const t = useLocation();
  const [k] = useTranslation("general");
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
                  marginLeft: k("language") === "Ar" ? "80px" : "",
                }}
              >
                {k("serdetail")}
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div style={t.state.styl}>{k("doctorname")}</div>
                  <div>{t.state.name}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div style={t.state.styl}>{k("doctorloc")}</div>
                  <div>{t.state.location}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div style={t.state.styl}>{k("date")}</div>
                  <div>{t.state.date}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
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
                      width: "200px",
                      marginTop: "130px",
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
                <Specialist spec={t.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneSpecDetails;
