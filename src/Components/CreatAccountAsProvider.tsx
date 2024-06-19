import "../styles/reseatPass.css";
import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { Icon } from "react-icons-kit";
import { ChangeEvent, useState } from "react";
import user from "../imgs/icons/person.svg";
import email from "../imgs/icons/iconamoon_email-bold.svg";
import wait from "../imgs/waitsubmit.svg";
import { useNavigate } from "react-router-dom";

function CreatAccountAsProvider() {
  const [visible, setVisible] = useState("none");
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const [icon1, setIcon1] = useState(view);
  const [icon2, setIcon2] = useState(view);
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [nameclass, setNameclass] = useState("none");
  const navigate = useNavigate();

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText1(e.target.value);
  };
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText2(e.target.value);
    if (inputText1 != inputText2) {
      setNameclass("display");
    } else {
      setNameclass("none");
    }
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
  const handlesubmit = (e: ChangeEvent) => {
    setVisible("flex");

    e.preventDefault();
  };
  const handleclick1 = () => {
    navigate("./CreatAccount");
  };

  return (
    <>
      <div className="row reseat-row p-row">
        <div className="right-reset">
          <form onSubmit={handlesubmit}>
            <div className="r-row">
              <label htmlFor="user-name"> User Name: </label>
              <div>
                <input type="text" id="user-name" required></input>
                <img className="icon" src={user} />
              </div>
            </div>
            <div className="r-row">
              <label htmlFor="email"> Email: </label>
              <div>
                <input type="email" id="email" required></input>
                <img className="icon" src={email} />
              </div>
            </div>
            <div className="r-row">
              <label htmlFor="new-pass"> New Password : </label>
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
                  size={24}
                  icon={icon1}
                />
              </div>
            </div>
            <div>
              <span
                style={{
                  width: 300,
                  fontSize: 8,
                  color: "black",
                  marginRight: -60,
                }}
              >
                password must contain letters and numbers and be 8 characters
              </span>
            </div>
            <div className="r-row">
              <label htmlFor="conf-pass"> Confirm Password : </label>
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
                  size={24}
                  icon={icon2}
                />
              </div>
            </div>
            <div>
              <span style={{ display: nameclass, color: "red" }}>
                the Two passwords are not Mattched
              </span>
            </div>
            <div className="r-row">
              <label htmlFor="pank"> Bank Name: </label>

              <input type="text" id="pank" required></input>
            </div>
            <div className="iban-cod">
              <label htmlFor="code"> Iban Code: </label>
              <div className="one-i">
                <div>
                  <input
                    style={{ width: "30px" }}
                    type="text"
                    id="code"
                    required
                    maxLength={1}
                  ></input>
                </div>

                <div>
                  <input
                    style={{ width: "40px" }}
                    className="iban"
                    type="text"
                    id="code"
                    required
                    maxLength={1}
                  ></input>
                </div>

                <input
                  className="iban"
                  type="text"
                  id="code"
                  required
                  maxLength={1}
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="file"> Pdf: </label>
              <div>
                <button type="button">
                  Upload
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
            </div>
            <div>
              <button type="submit"> Creat Account </button>
            </div>
          </form>
        </div>
        <div
          onClick={handleclick1}
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
            top: "230px",
            left: "320px",
            position: "absolute",
            width: "800px",
            padding: "20px",
            display: visible,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={wait}></img>
          <h1 style={{ color: "rgba(193, 232, 177, 1)" }}>
            Wait Until Admin Accept
          </h1>
        </div>
      </div>
    </>
  );
}
export default CreatAccountAsProvider;
