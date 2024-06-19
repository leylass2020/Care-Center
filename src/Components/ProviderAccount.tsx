import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { Icon } from "react-icons-kit";
import { ChangeEvent, useState } from "react";
import user from "../imgs/icons/person.svg";
import email from "../imgs/icons/iconamoon_email-bold.svg";
import edit from "../imgs/icons/ic_baseline-edit.svg";
import "../styles/provideraccount.css";
import person from "../imgs/icons/person12.svg";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ProviderAccount(Props) {
  const navigate = useNavigate();
  const [k, i] = useTranslation("general");
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
      <div
        className="per-con container"
        style={{ border: "2px solid black", height: "10vw", width: "10vw" }}
      >
        <img src={person} className="person-img"></img>
      </div>
      <div className="col col-10 right-accoun">
        <form>
          <div className="pro-new1">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="user-name"> {k("username")}: </label>
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
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "60px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="user-name"> :{k("username")} </label>
            </div>
          </div>
          <div className="pro-new1">
            <div
              style={{
                display: k("language") === "Ar" ? "none" : "",
                marginLeft: "30px",
              }}
            >
              <label htmlFor="email"> {k("email")}: </label>
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
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "60px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="email">: {k("email")} </label>
            </div>
          </div>
          <div className="pro-new1">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="new-pass"> {k("password")} : </label>
            </div>
            <div className="input-new">
              <img className="icon1" src={edit}></img>
              <input
                type={type1}
                placeholder={providerinfo.password}
                onChange={handleChange1}
                id="new-pass"
                minLength={8}
                required
              ></input>
              <Icon
                className="icon1"
                onClick={handleToggle1}
                size={24}
                icon={icon1}
              />
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "28px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="new-pass">: {k("password")} </label>
            </div>
          </div>
          <div className="pro-new1">
            <div
              style={{
                display: k("language") === "Ar" ? "none" : "",
                marginLeft: "5px",
              }}
            >
              <label htmlFor="pank"> {k("bank")}: </label>
            </div>

            <div className="input-new">
              <img className="icon1" src={edit}></img>
              <input
                type="text"
                id="pank"
                required
                placeholder={providerinfo.bank}
              ></input>
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "33px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="pank"> :{k("bank")} </label>
            </div>
          </div>
          <div className="pro-new1">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="iban"> {k("iban")}: </label>
            </div>
            <div className="input-new">
              <img className="icon1" src={edit}></img>
              <input
                type="text"
                placeholder={providerinfo.iban}
                id="iban"
                required
              ></input>
            </div>
            <div style={{ display: k("language") === "En" ? "none" : "",fontSize:"18px" , marginLeft:"8px"}}>
              <label htmlFor="iban"> :{k("iban")} </label>
            </div>
          </div>
          <div className="swift-cod">
            <div style={{ display: k("language") === "Ar" ? "none" : "" ,marginRight:"10px"}}>
              <label htmlFor="code"> {k("swift")}: </label>
            </div>
            <div className="input-new" style={{ border: "none" }}>
              <input
                className="swift"
                color="gray"
                placeholder={providerinfo.swift[0]}
                type="text"
                id="code"
                required
                maxLength={1}
              ></input>
              <input
                className="swift"
                placeholder={providerinfo.swift[1]}
                type="text"
                id="code"
                color="gray"
                required
                maxLength={1}
              ></input>
              <input
                className="swift"
                placeholder={providerinfo.swift[2]}
                type="text"
                id="code"
                color="gray"
                required
                maxLength={1}
              ></input>
              <input
                className="swift"
                placeholder={providerinfo.swift[3]}
                type="text"
                id="code"
                color="gray"
                required
                maxLength={1}
              ></input>
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft:"10px",
                fontSize:"20px"
              }}
            >
              <label htmlFor="code"> :{k("swift")} </label>
            </div>
          </div>
          <div className="pro-new1">
            <div
              style={{
                display: k("language") === "Ar" ? "none" : "",
              }}
            >
              <label htmlFor="file"> {k("pdf")}: </label>
            </div>
            <div className="attach-file">
              <p style={{ marginBottom: "-30px", marginLeft: "40%" }}>Upload</p>
              <input
                type="file"
                required
                style={{
                  opacity: 0,
                  width: "200px",
                  height: "50px",
                  marginLeft: "20px",
                }}
              />
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "30px",
              }}
            >
              <label htmlFor="file">: {k("pdf")}</label>
            </div>
          </div>
          <div className="attach-btn" style={{ marginRight: "10vw" }}>
            <button
              className="edit"
              onClick={() => {
                navigate("../");
              }}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              {k("edit")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ProviderAccount;
