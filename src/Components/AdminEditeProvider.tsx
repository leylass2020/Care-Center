import "../styles/admin.css";
import view from "../imgs/icons/eyeblue.svg";
import { ChangeEvent, useState } from "react";
import user from "../imgs/icons/userblue.svg";
import email from "../imgs/icons/emailblue.svg";
import edit from "../imgs/EditeMan.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AdminEditeProvider(Props) {
  const [t, i18n] = useTranslation("general");
  const [visible, setVisible] = useState("none");
  const [inputText1, setInputText1] = useState("");
  const navigate = useNavigate();
  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText1(e.target.value);
  };
  const handlesubmit = (e: ChangeEvent) => {
    setVisible("flex");

    e.preventDefault();
  };
  const handleclick1 = () => {
    navigate("../ProvidersTable");
  };

  return (
    <>
      <div className="col col-12 admin-acc">
        <form onSubmit={handlesubmit}>
          <div className="section-input">
            <div
              style={{
                display: t("language") === "Ar" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="user-name"> {t("username")}: </label>
            </div>
            <div className="input-new">
              <input type="text" id="user-name" required></input>
              <img className="icon" src={user} />
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
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
                minWidth: "110px",
              }}
            >
              <label htmlFor="email"> {t("email")}: </label>
            </div>
            <div className="input-new">
              <input type="email" id="email" required></input>
              <img className="icon" src={email} />
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
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
                minWidth: "110px",
              }}
            >
              <label htmlFor="new-pass">{t("newpass")} : </label>
            </div>
            <div className="input-new">
              <input
                type="password"
                onChange={handleChange1}
                id="new-pass"
                minLength={8}
                value={inputText1}
                required
              ></input>
              <img className="icon" src={view} />
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="new-pass">{t("newpass")} : </label>
            </div>
          </div>
          <div className="section-input">
            <div
              style={{
                display: t("language") === "Ar" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="pank"> {t("bank")}: </label>
            </div>
            <div className="input-new">
              <input type="text" id="pank" required></input>
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="pank">: {t("bank")} </label>
            </div>
          </div>
          <div className="iban-cod">
            <div
              style={{
                display: t("language") === "Ar" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="code"> {t("iban")}: </label>
            </div>
            <div
              style={{
                alignItems: "center",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div className="input-new1" style={{ width: "50px" }}>
                <input
                  style={{ width: "30px", marginRight: "-20px" }}
                  className="iban"
                  type="text"
                  id="code"
                  required
                  maxLength={1}
                ></input>
              </div>
              <div className="input-new1" style={{ width: "50px" }}>
                <input
                  style={{ width: "30px", marginRight: "-20px" }}
                  className="iban"
                  type="text"
                  id="code"
                  required
                  maxLength={1}
                ></input>
              </div>
              <div className="input-new1 " style={{ width: "50px" }}>
                <input
                  style={{ width: "30px", marginRight: "-20px" }}
                  className="iban"
                  type="text"
                  id="code"
                  required
                  maxLength={1}
                ></input>
              </div>
              <div className="input-new1" style={{ width: "50px" }}>
                <input
                  style={{ width: "30px", marginRight: "-20px" }}
                  className="iban"
                  type="text"
                  id="code"
                  required
                  maxLength={1}
                ></input>
              </div>
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
              }}
            >
              <label htmlFor="code"> :{t("iban")} </label>
            </div>
          </div>
          <div className="section-input">
            <div
              style={{
                display: t("language") === "Ar" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="file"> {t("pdf")}: </label>
            </div>
            <div className="edit-btn">
              <button type="button">
                {t("upload")}
                <input
                  type="file"
                  required
                  style={{
                    border: "1px solid black",
                    marginLeft: "-150px",
                    marginTop: "-10px",
                    position: "absolute",
                    opacity: 0,
                  }}
                />
              </button>
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="file"> :{t("pdf")} </label>
            </div>
          </div>
          <div className="section-input">
            <div
              style={{
                display: t("language") === "Ar" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="res"> {t("editeres")}: </label>
            </div>
            <div className="input-new">
              <textarea id="res" required></textarea>
            </div>
            <div
              style={{
                display: t("language") === "En" ? "none" : "",
                marginLeft: "15px",
                minWidth: "110px",
              }}
            >
              <label htmlFor="pank">: {t("editeres")} </label>
            </div>
          </div>
          <div className="section-input">
            <div>
              
            </div>
            <div className="edit-btn">
              <button type="submit"> {t("edite")} </button>
            </div>
          </div>
        </form>
      </div>
      <div
        onClick={handleclick1}
        style={{
          borderRadius: "5px",
          backgroundColor: "white",
          top: "30px",
          left: "140px",
          position: "absolute",
          width: "80%",
          padding: "20px",
          display: visible,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid black",
        }}
      >
        <img src={edit} style={{ width: "80%" }}></img>
        <h1 style={{ color: "rgba(193, 232, 177, 1)" }}>{t("providerEd")}</h1>
      </div>
    </>
  );
}
export default AdminEditeProvider;
