import NameandLogo from "./NameandLogo";
import "../styles/reseatPass.css";
import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { Icon } from "react-icons-kit";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap";

const ResetPass = () => {
  const [t, i18n] = useTranslation("general");
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const [icon1, setIcon1] = useState(view);
  const [icon2, setIcon2] = useState(view);
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [nameclass, setNameclass] = useState("none");

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText1(e.target.value);
  };
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText2(e.target.value);
  };
  const handleToggle1 = () => {
    if (type1 === "password") {
      setIcon1(view_off);
      setType1("text");
    } else {
      setIcon1(view);
      setType1("password");
    }
  };
  const handleToggle2 = () => {
    if (type2 === "password") {
      setIcon2(view_off);
      setType2("text");
    } else {
      setIcon2(view);
      setType2("password");
    }
  };
  const handleClick = () => {
    if (inputText1 != inputText2) {
      setNameclass("");
    }
  };

  return (
    <>
      <div>
        <h1 className="titRes">{t("resetpass")}</h1>
      </div>
      <div className="row reseat-row">
        <div className="col col-3">
          <NameandLogo />
        </div>
        <div className="col col-lg-6 col-8 right-reset">
          <form>
            <div className="sec-input">
              <div style={{ display: t("language") === "Ar" ? "none" : "" }}>
                <label htmlFor="new-pass"> {t("newpass")} : </label>
              </div>
              <div>
                <input
                  type={type1}
                  onChange={handleChange1}
                  id="new-pass"
                  minLength={8}
                  value={inputText1}
                  required
                ></input>
                <Icon
                  className="icon"
                  onClick={handleToggle1}
                  size={25}
                  icon={icon1}
                />
              </div>
              <div style={{ display: t("language") === "En" ? "none" : "" ,marginLeft:"15px"}}>
                <label htmlFor="new-pass"> :{t("newpass")} </label>
              </div>
            </div>
            <div className="sec-input">
              <div style={{ display: t("language") === "Ar" ? "none" : "" }}>
                <label htmlFor="conf-pass"> {t("confirmpass")} : </label>
              </div>
              <div>
                <input
                  type={type2}
                  onChange={handleChange2}
                  id="conf-pass"
                  minLength={8}
                  value={inputText2}
                  required
                ></input>
                <Icon
                  className="icon"
                  onClick={handleToggle2}
                  size={25}
                  icon={icon2}
                />
              </div>
              <div
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft:"15px"
                }}
              >
                <label htmlFor="conf-pass"> :{t("confirmpass")} </label>
              </div>
            </div>
            <span style={{ display: nameclass, color: "red" }}>
              the Two passwords are not Mattched
            </span>
            <div>
              <button onClick={handleClick} type="submit">
                {" "}
                {t("resetpass")}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ResetPass;
