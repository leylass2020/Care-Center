import Col from "react-bootstrap/esm/Col";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/allaboutproduct.css";

function EditeProduct() {
  const [t, i18n] = useTranslation("general");
  const lo = useLocation();
  const navigate = useNavigate();
  const onsubmit = (e) => {
    e.preventDefault();
    navigate("../");
  };
  return (
    <div className="edit-product">
      <Col md={12}>
        <form onSubmit={onsubmit}>
          <div className="form-control">
            <div>
              <label
                htmlFor="name"
                style={{ marginLeft: t("language") === "Ar" ? "250px" : "0" }}
              >
                {t("name")}
              </label>
            </div>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-control">
            <div>
              <label
                htmlFor="price"
                style={{ marginLeft: t("language") === "Ar" ? "250px" : "0" }}
              >
                {t("price")}
              </label>
            </div>
            <input type="text" id="price" name="price" />
          </div>
          <div className="form-control-disc">
            <div>
              <label
                htmlFor="discount"
                style={{ marginLeft: t("language") === "Ar" ? "250px" : "0" }}
              >
                {t("discount")}
              </label>
            </div>
            <div className="two-sec">
              <div>
                <input
                  style={{
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
          <div className="form-control-upload">
            <div>
              <label
                htmlFor="photo"
                style={{ marginLeft: t("language") === "Ar" ? "75%" : "0" }}
              >
                {t("addphoto")}
              </label>
            </div>
            <div className="upload-sec">
              <div style={{ marginBottom: "10px", marginTop: "10px",width:"50%" }}>
                <div className="photo">
                  <p>{t("uploadphoto")}</p>
                  <input type="file" style={{ opacity: 0 }} />
                </div>
              </div>
              <div style={{width:"50%" }}>
                <div className="photo">
                  <p>{t("uploadphoto")}</p>
                  <input type="file" style={{ opacity: 0 }} />
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
              {t("addpro")}
            </button>
            <button
              style={{
                display: lo.state.ty === "edit" ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {t("editprod")}
            </button>
          </div>
        </form>
      </Col>
    </div>
  );
}

export default EditeProduct;
