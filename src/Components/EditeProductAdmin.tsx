import { useState } from "react";
import "../styles/allaboutproduct.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function EditeProductAdmin() {
  const [t, i18n] = useTranslation("general");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState("none");
  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    setVisible("flex");
  };

  return (
    <div>
      <div className="edit-service">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-control">
              <div>
                <label
                  htmlFor="name"
                  style={{
                    fontSize: "20px",
                    marginLeft: t("language") === "Ar" ? "260px" : "",
                  }}
                >
                  {t("name")}
                </label>
              </div>
              <input
                style={{ width: "300px" }}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="form-control">
              <div>
                <label
                  htmlFor="price"
                  style={{
                    fontSize: "20px",
                    marginLeft: t("language") === "Ar" ? "260px" : "",
                  }}
                >
                  {t("price")}
                </label>
              </div>
              <input
                style={{ width: "300px" }}
                type="text"
                id="price"
                name="price"
              />
            </div>
            <div className="form-control-disc">
              <div>
                <label
                  htmlFor="discount"
                  style={{
                    fontSize: "20px",
                    marginLeft: t("language") === "Ar" ? "260px" : "",
                  }}
                >
                  {t("discount")}
                </label>
              </div>
              <div
                className="two-sec"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div>
                  <input
                    style={{
                      marginRight: "20px",
                      width: "150px",
                      textAlign: t("language") === "Ar" ? "right" : "left",
                    }}
                    type="text"
                    id="befor"
                    name="befor"
                    placeholder={t("befor")}
                  />
                </div>
                <div>
                  <input
                    style={{
                      width: "150px",
                      textAlign: t("language") === "Ar" ? "right" : "left",
                    }}
                    type="text"
                    id="after"
                    name="after"
                    placeholder={t("after")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="button-control">
            <button>{t("edite")}</button>
          </div>
        </form>
      </div>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: "#E6F6FE",
          width: "60%",
          padding: "20px",
          display: visible,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
          marginTop: "50px",
        }}
      >
        <p style={{ color: "black" }}>{t("messageedite")}</p>
        <div>
          <button
            style={{
              border: "none",
              backgroundColor: "#74BCEE",
              color: "white",
              width: "70px",
              marginRight: "20px",
            }}
            onClick={() => {
              navigate("../Producttable");
            }}
          >
            {" "}
            {t("yes")}
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#74BCEE",
              color: "white",
              width: "70px",
              marginRight: "20px",
            }}
            onClick={() => setVisible("none")}
          >
            {" "}
            {t("no")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditeProductAdmin;
