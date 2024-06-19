import view from "../imgs/icons/eyeblue.svg";
import { view_off } from "react-icons-kit/ikons/view_off";
import { ChangeEvent, useState } from "react";
import user from "../imgs/icons/userblue.svg";
import email from "../imgs/icons/emailblue.svg";
import "../styles/admin.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function EditeAdmin(Props) {
  const [t, i18n] = useTranslation("general");
  const navigate = useNavigate();
  const [visible, setVisible] = useState("none");
  const [inputText1, setInputText1] = useState("");
  const lo = useLocation();

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    setVisible("flex");
  };
  return (
    <>
      <div className="col col-12 admin-acc">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="section-input">
              <div
                style={{
                  display: t("language") === "Ar" ? "none" : "",
                  marginLeft: "15px",
                }}
              >
                <label htmlFor="user-name"> {t("username")}: </label>
              </div>
              <div>
                <div className="input-new">
                  <input
                    type="text"
                    id="user-name"
                    required
                    placeholder={lo.state.name}
                  ></input>
                  <img className="icon1" src={user} />
                </div>
              </div>
              <div
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft: "15px",
                }}
              >
                <label htmlFor="user-name"> :{t("username")} </label>
              </div>
            </div>
            <div className="section-input">
              <div
                style={{
                  display: t("language") === "Ar" ? "none" : "",
                  marginLeft: "15px",
                }}
              >
                <label htmlFor="email"> {t("email")}: </label>
              </div>
              <div>
                <div className="input-new">
                  <input
                    type="email"
                    placeholder={lo.state.email}
                    id="email"
                    required
                  ></input>
                  <img className="icon1" src={email} />
                </div>
              </div>
              <div
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft: "15px",
                }}
              >
                <label htmlFor="email">: {t("email")} </label>
              </div>
            </div>
            <div className="section-input">
              <div
                style={{
                  display: t("language") === "Ar" ? "none" : "",
                  marginLeft: "15px",
                }}
              >
                <label htmlFor="new-pass"> {t("password")}: </label>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <div className="input-new">
                  <input
                    type="password"
                    id="new-pass"
                    minLength={8}
                    defaultValue={inputText1}
                    required
                  ></input>
                  <img className="icon1" src={view} />
                </div>
              </div>
              <div
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft: "15px",
                }}
              >
                <label htmlFor="new-pass">: {t("password")} </label>
              </div>
            </div>
            <div>
              <div className="edit-btn" >
                <button>
                  {t("edite")}
                </button>
              </div>
            </div>
          </form>
        </div>
        
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
                navigate("../AdminTable");
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
    </>
  );
}
export default EditeAdmin;
