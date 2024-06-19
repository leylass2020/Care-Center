import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

function ContactRight() {
  const [phoneNum, setPhonenum] = useState("");
  const [valid, setValid] = useState(true);
  const handlChangeNum = (value) => {
    setPhonenum(value);
    setValid(validatePhoneNum(value));
  };
  const validatePhoneNum = (phoneNum) => {
    const phoneNumberPatern = /^\d{12}$/;
    return phoneNumberPatern.test(phoneNum);
  };

  const [t, i18n] = useTranslation("general");
  return (
    <div className="container-right">
      <Form className="contact-form">
        <Row className="mb-3">
          <Col>
            <Form.Label
              htmlFor="name"
              style={{ marginLeft: t("language") === "Ar" ? "85%" : "0" }}
            >
              {t("contact.firstn")}
            </Form.Label>
            <Form.Control
              style={{ textAlign: t("language") === "Ar" ? "right" : "left" }}
              id="name"
              required
              placeholder={t("contact.firstn")}
            />
          </Col>
          <Col>
            <Form.Label
              htmlFor="lastname"
              style={{ marginLeft: t("language") === "Ar" ? "85%" : "0" }}
            >
              {t("contact.lastn")}
            </Form.Label>
            <Form.Control
              style={{ textAlign: t("language") === "Ar" ? "right" : "left" }}
              id="lastname"
              required
              placeholder={t("contact.lastn")}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label
              htmlFor="email"
              style={{ marginLeft: t("language") === "Ar" ? "400px" : "0" }}
            >
              {t("contact.email")}
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              required
              placeholder="you@company.com"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label
              htmlFor="phone"
              style={{ marginLeft: t("language") === "Ar" ? "400px" : "0" }}
            >
              {t("contact.phone")}
            </Form.Label>
            <PhoneInput
              country={"us"}
              value={phoneNum}
              onChange={handlChangeNum}
              inputProps={{ required: true }}
              inputStyle={{ width: "100%", color: "gray", height: "40px" }}
            />
            {!valid && <p style={{color:"red",marginTop:"10px"}}>please enter valid phone number</p>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label
              htmlFor="date"
              style={{ marginLeft: t("language") === "Ar" ? "400px" : "0" }}
            >
              {t("contact.selectd")}
            </Form.Label>
            <Form.Control type="date" id="date" required placeholder="" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label
              htmlFor="message"
              style={{ marginLeft: t("language") === "Ar" ? "400px" : "0" }}
            >
              {t("contact.message")}
            </Form.Label>
            <Form.Control as="textarea" rows={8} id="message" required />
          </Col>
        </Row>
        <Row className="mb-3 ">
          <Col>
            <Button
              type="submit"
              className="mb-3 button-submit "
              style={{ width: "200px" }}
            >
              {t("contact.book")}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContactRight;
