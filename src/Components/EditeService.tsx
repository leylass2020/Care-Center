import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import "../styles/allaboutproduct.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

function EditeService() {
  const [t, i18n] = useTranslation("general");
  const [options, setOptions] = useState([]);
  const lo = useLocation();
  useEffect(() => {
    const options1 = [
      "Dentist",
      "Nurse",
      "Plastic Surgery",
      "Medical x Ray",
      "Nutiritions",
      "Ophthalmologist",
    ];
    const optionar = ["طبيب اسنان", "ممرض", "جراحة", "اشعة", "تغذية", "بصريات"];
    if (t("language") === "En") {
      setOptions(options1);
    } else {
      setOptions(optionar);
    }
  }, []);

  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState("none");
  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    setVisible("flex");
  };

  function onChange(i) {
    setSelected((prev) => (i === prev ? null : i));
  }
  return (
    <>
      <div className="edit-service">
        <form>
          <div
            className="select"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "250px" }}>
              <div className="choices form-control">
                <p
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "20px",
                    marginLeft: t("language") === "Ar" ? "200px" : "",
                  }}
                >
                  {t("section")}
                </p>
                <div className="list-choices">
                  {options.map((o, i) => (
                    <label
                      key={i}
                      style={{
                        width: "230px",
                        height: "30px",
                        marginBottom: "5px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={i === selected}
                        onChange={() => onChange(i)}
                      />{" "}
                      {o}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div className="form-control">
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      fontSize: "20px",
                      marginLeft: t("language") === "Ar" ? "200px" : "",
                    }}
                  >
                    {t("name")}
                  </label>
                </div>
                <input
                  style={{ width: "250px" }}
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
                      marginLeft: t("language") === "Ar" ? "200px" : "",
                    }}
                  >
                    {t("price")}
                  </label>
                </div>
                <input
                  style={{ width: "250px" }}
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
                      marginLeft: t("language") === "Ar" ? "200px" : "",
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
                        marginRight: "30px",
                        width: "110px",
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
                        width: "110px",
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
          </div>
          <div className="button-control">
          <button
              style={{
                display: lo.state.ty === "add" ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {t("addser")}
            </button>
            <button
              style={{
                display: lo.state.ty === "edit" ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {t("editser")}
            </button>
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
    </>
  );
}

export default EditeService;
