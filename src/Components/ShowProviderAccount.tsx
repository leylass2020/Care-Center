import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { Icon } from "react-icons-kit";
import { ChangeEvent, useState } from "react";
import user from "../imgs/icons/person.svg";
import email from "../imgs/icons/iconamoon_email-bold.svg";
import "../styles/provideraccount.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import person from "../imgs/icons/person12.svg";

function ShowProviderAccount(Props) {
  const [k, i18] = useTranslation("general");
  const navigate = useNavigate();
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
    
      <div className="per-con container" style={{border:"2px solid black" ,height:"10vw" , width:"10vw"}}>
        <img src={person} className="person-img"></img>
      </div>
      <div className="col col-8 right-account">
        <form>
          <div className="pro-new">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="user-name"> {k("username")}: </label>
            </div>
            <div className="input-new">
              <input
                type="text"
                value={providerinfo.name}
                id="user-name"
                required
                placeholder="user name"
              ></input>
              <img className="icon1" src={user} />
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "30px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="user-name"> :{k("username")} </label>
            </div>
          </div>
          <div className="pro-new">
            <div
              style={{
                display: k("language") === "Ar" ? "none" : "",
                marginRight: "20px",
              }}
            >
              <label htmlFor="email"> {k("email")}: </label>
            </div>
            <div className="input-new">
              <input
                type="email"
                value={providerinfo.email}
                id="email"
                required
              ></input>
              <img className="icon1" src={email} />
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "30px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="email"> :{k("email")} </label>
            </div>
          </div>
          <div className="pro-new">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="new-pass"> {k("password")} : </label>
            </div>
            <div className="input-new">
              <input
                type={type1}
                value={providerinfo.password}
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
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="new-pass"> :{k("password")} </label>
            </div>
          </div>
          <div className="pro-new">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="pank"> {k("bank")}: </label>
            </div>
            <div className="input-new">
              <input
                type="text"
                id="pank"
                required
                value={providerinfo.bank}
              ></input>
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="pank">: {k("bank")} </label>
            </div>
          </div>
          <div className="pro-new">
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="iban"> {k("iban")}: </label>
            </div>
            <div className="input-new">
              <input
                type="text"
                value={providerinfo.iban}
                id="iban"
                required
              ></input>
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",

                fontSize: "18px",
              }}
            >
              <label htmlFor="iban"> :{k("iban")} </label>
            </div>
          </div>
          <div
            className="pro-new"
            style={{ justifyContent: "flex-start", gap: "30px" }}
          >
            <div style={{ display: k("language") === "Ar" ? "none" : "" }}>
              <label htmlFor="code"> {k("swift")}: </label>
            </div>
            <div className="input-new" style={{ border: "none" }}>
              <input
                className="swift"
                value={providerinfo.swift[0]}
                type="text"
                id="code"
                required
                maxLength={1}
                readOnly
              ></input>
              <input
                className="swift"
                value={providerinfo.swift[1]}
                type="text"
                id="code"
                required
                maxLength={1}
                readOnly
              ></input>
              <input
                className="swift"
                value={providerinfo.swift[2]}
                type="text"
                id="code"
                required
                maxLength={1}
                readOnly
              ></input>
              <input
                className="swift"
                value={providerinfo.swift[3]}
                type="text"
                id="code"
                required
                maxLength={1}
                readOnly
              ></input>
            </div>
            <div
              style={{
                display: k("language") === "En" ? "none" : "",
                marginRight: "-20px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="code">: {k("swift")} </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ShowProviderAccount;
