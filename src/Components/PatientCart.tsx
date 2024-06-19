import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import img7 from "../imgs/stuf/image 7.svg";
import img8 from "../imgs/stuf/image 8.svg";
import img1 from "../imgs/Rectangle 652.svg";
import ServiceCart from "./ServiceCart";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function PatientCart() {
  const [k] = useTranslation("general");
  const [ListPayment, setListPayment] = useState([]);
  useEffect(() => {
    if (k("language") === "En") {
      setListPayment(ListPaymenten);
    } else {
      setListPayment(ListPaymentar);
    }
  }, []);
  const ListPaymenten = [
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
      kind: "ser",
      title: "دواء",
      servicetype: "نوع 1",
      serviceprovider: "مزود 1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "100 دولار",
      statu: "in progress",
      statval: "قيد الانجاز",
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
      return (
        <div>
          {" "}
          <ProductCart item={item} />
        </div>
      );
    }
    if (item.kind === "spec") {
      return (
        <div>
          <ServiceCart item={item} />
        </div>
      );
    }
  };
  return (
    <>
      <Row>
        {ListPayment.map((item) => (
          <div>{show(item)}</div>
        ))}
      </Row>
    </>
  );
}

export default PatientCart;
