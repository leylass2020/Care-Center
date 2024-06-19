import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { Icon } from "react-icons-kit";
import { ChangeEvent, useState } from "react";
import user from "../imgs/icons/person.svg";
import email from "../imgs/icons/iconamoon_email-bold.svg";
import edit from "../imgs/icons/ic_baseline-edit.svg";
import "../styles/provideraccount.css";
import person from "../imgs/icons/person12.svg";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";

function PatientAccount(Props) {
  const [t] = useTranslation("general");
  const [type1, setType1] = useState("password");
  const [icon1, setIcon1] = useState(view);
  const [inputText1, setInputText1] = useState("");

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText1(e.target.value);
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
  const providerinfo = {
    name: "jone",
    email: "jone12@gmail.com",
    password: "1234sdf67@23",
    bank: "First",
    iban: "22334456",
    swift: [4, 1, 0, 4],
  };
  return (
    <>
      <div className="col col-12 right-reset right-account patient-acc">
        <Row>
          <div className="per-con">
            <img src={person} className="person-img"></img>
          </div>
        </Row>

        <form>
          <div>
            <div>
              <label
                htmlFor="user-name"
                style={{ display: t("language") === "Ar" ? "none" : "" }}
              >
                {" "}
                {t("username")}:{" "}
              </label>
            </div>
            <div>
              <div className="input-new">
                <img className="icon1" src={edit}></img>
                <input
                  type="text"
                  id="user-name"
                  required
                  placeholder={providerinfo.name}
                ></input>
                <img className="icon1" src={user} />
              </div>
            </div>
            <div>
              <label
                htmlFor="user-name"
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft: "40px",
                  fontSize: "20px",
                }}
              >
                {" "}
                : {t("username")}{" "}
              </label>
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="email"
                style={{ display: t("language") === "Ar" ? "none" : "" }}
              >
                {" "}
                {t("email")}:{" "}
              </label>
            </div>
            <div className="input-new">
              <img className="icon1" src={edit}></img>
              <input
                type="email"
                placeholder={providerinfo.email}
                id="email"
                required
              ></input>
              <img className="icon1" src={email} />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft: "40px",
                  fontSize: "20px",
                }}
              >
                {" "}
                : {t("email")}{" "}
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="new-pass"
              style={{
                display: t("language") === "Ar" ? "none" : "",
              }}
            >
              {" "}
              {t("password")} :{" "}
            </label>
            <div className="input-new">
              <img className="icon1" src={edit}></img>
              <input
                type={type1}
                placeholder={providerinfo.password}
                onChange={handleChange1}
                id="new-pass"
                minLength={8}
                defaultValue={inputText1}
                required
              ></input>
              <Icon
                className="icon1"
                onClick={handleToggle1}
                size={24}
                icon={icon1}
              />
            </div>
            <div>
              <label
                htmlFor="new-pass"
                style={{
                  display: t("language") === "En" ? "none" : "",
                  marginLeft: "10px",
                  fontSize: "20px",
                }}
              >
                : {t("password")}{" "}
              </label>
            </div>
          </div>
          <div className="attach-btn">
            <button type="submit" className="edit">
              {t("edit")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default PatientAccount;
