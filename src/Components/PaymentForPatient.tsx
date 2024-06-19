import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import img7 from "../imgs/stuf/image 7.svg";
import img8 from "../imgs/stuf/image 8.svg";
import img1 from "../imgs/Rectangle 652.svg";
import OneService from "./OneService";
import OneSpecDetails from "./OneSpecDetails";

import Specialist from "./Specialist";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function PaymentForPatient() {
  const [ListPayment, setListPayment] = useState([]);
  const [k] = useTranslation("general");
  const navigate = useNavigate();
  useEffect(() => {
    if (k("language") === "En") {
      setListPayment(ListPaymenten);
    } else {
      setListPayment(ListPaymentar);
    }
  }, []);
  const ListPaymenten = [
    {
      id: 1,
      kind: "ser",
      title: "medicen",
      servicetype: "type1",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "100 $",
      statu: "in progress",
      statval: "In Progress",
    },
    {
      id: 0,
      kind: "spec",
      name: "Wade Warren",
      spe: "Endodontist",
      imgSrc: img7,
      date: "12/5",
      cost: "200$",
      location: "location",
      statu: "Canceled",
      statval: "Canceled",
      reason:
        "Reason for cancel: lorim ipsumlorim ipsumlorim ipsumlorim ipsumlorim ipsumlorim ipsum.",
    },

    {
      id: 0,
      kind: "spec",
      name: "Wade Warren",
      spe: "Endodontist",
      imgSrc: img7,
      date: "12/5",
      cost: "200$",
      location: "location",
      statu: "Delivered",
      statval: "Delivered",
    },
    {
      id: 1,
      kind: "spec",
      name: "Jenny Wilson",
      spe: "Periodontist",
      imgSrc: img8,
      date: "14/6",
      cost: "100$",
      location: "location jenny",
      statu: "Delivered",
      statval: "Delivered",
    },
  ];
  const ListPaymentar = [
    {
      id: 1,
      kind: "ser",
      title: "دواء",
      servicetype: "نوع 1",
      serviceprovider: "مزود 1",
      text: "لوريم ايبسوم لوريم ايبسوم.",
      imgSrc: img1,
      price: "100 دولار",
      statu: "in progress",
      statval: "قيد الانجاز",
    },
    {
      id: 0,
      kind: "spec",
      name: "لوريم ايبسوم",
      spe: "طبيب اسنان",
      imgSrc: img7,
      date: "12/5",
      cost: "200$",
      location: "موقع 7",
      statu: "Canceled",
      statval: "ملغى",
      reason:
        "لوريم  ايبسومايبسومايبسومايبسومايبسومايبسومايبسوم   ايبسومايبسومايبسوم  ايبسوم ايبسومر .",
    },

    {
      id: 0,
      kind: "spec",
      name: "لوريم ايبسوم",
      spe: "طبيب اسنان",
      imgSrc: img7,
      date: "12/5",
      cost: "200$",
      location: "موقع 3",
      statu: "Delivered",
      statval: "تم التوصيل",
    },

    {
      id: 1,
      kind: "spec",
      name: "جيني ويلسون",
      spe: "Pطبيب اسنان",
      imgSrc: img8,
      date: "14/6",
      cost: "100$",
      location: "موقع 2",
      statu: "Delivered",
      statval: "تم التوصيل",
    },
  ];
  const show = (item) => {
    if (item.kind === "ser") {
      return <OneService item={item} />;
    }
    if (item.kind === "spec") {
      return (
        <div style={{ height: "500px", width: "300px" }}>
          <Specialist spec={item} />
        </div>
      );
    }
  };
  return (
    <>
      <div className="container">
        <Row lg={8}>
          {ListPayment.map((item) => (
            <Col
              lg={6}
              style={{
                backgroundColor: "rgba(243, 247, 250, 1)",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                width: "fit-content",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
              }}
            >
              <div style={{ width: "100%", height: "450px" }}>{show(item)}</div>
              <h3
                style={{
                  color:
                    item.statu === "Canceled"
                      ? "rgba(234, 30, 30, 1)"
                      : "rgba(116, 188, 238, 1)",
                  textAlign: "center",
                }}
              >
                {item.statu}
              </h3>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default PaymentForPatient;
