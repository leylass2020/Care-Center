import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../imgs/Rectangle 652.svg";
import Arr1 from "../imgs/icons/Arr1.svg";
import Arr2 from "../imgs/icons/Arr2.svg";

import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import "../styles/ourspecialist.css";
import OneService from "./OneService";
import { useTranslation } from "react-i18next";

function Services() {
  const [t,i18n]= useTranslation("general");
  const [List, setList] = useState([
    {
      id: 0,
      title: "medicen",
      servicetype: "type0",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "60 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 1,
      title: "medicen",
      servicetype: "type1",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "100 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 2,
      title: "medicen",
      servicetype: "type2",
      serviceprovider: "provider8",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "50 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 3,
      title: "medicen",
      servicetype: "type3",
      serviceprovider: "provider6",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "100 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 4,
      title: "medicen",
      servicetype: "type4",
      serviceprovider: "provider3",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "200 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 5,
      title: "medicen",
      servicetype: "type5",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "90 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 6,
      title: "medicen",
      servicetype: "type6",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "110 $",
      type: "Buy",
      style: { width: "170px" },
    },
  ]);
  const [first, setFirst] = useState(List[0]);
  const [second, setSecond] = useState(List[1]);
  const [third, setThird] = useState(List[2]);
  const [four, setFour] = useState(List[3]);
  const [count, setCount] = useState(0);
  const [v2, setV2] = useState(true);
  const [v3, setV3] = useState(true);
  const [v4, setV4] = useState(true);
  const reduce = () => {
    if (count > 0) {
      setFirst(List[count - 1]);
      if (count < List.length) {
        setSecond(List[count]);
        setV2(true);
      }
      if (count + 1 < List.length) {
        setThird(List[count + 1]);
        setV3(true);
      }
      if (count + 2 < List.length) {
        setFour(List[count + 2]);
        setV4(true);
      }
      setCount(count - 1);
    }
  };
  const add = () => {
    if (List.length > count) {
      if (count + 1 < List.length) {
        setFirst(List[count + 1]);
      }
      if (count + 2 < List.length) {
        setSecond(List[count + 2]);
      } else {
        setV2(false);
      }
      if (count + 3 < List.length) {
        setThird(List[count + 3]);
      } else {
        setV3(false);
      }
      if (count + 4 < List.length) {
        setFour(List[count + 4]);
      } else {
        setV4(false);
      }
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="mainser" id="services">
        <div className="container">
          <Row>
            <h1>{t("Landing.services.title")} </h1>
          </Row>
          <Row>
            <p>
            {t("Landing.services.body")} 
            </p>
          </Row>
          <Row>
            <OneService
              item={first}
            />
            {v2 && (
              <OneService
              item={second}
              />
            )}
            {v3 && (
              <OneService
              item={third}
              />
            )}
            {v4 && (
              <OneService
              item={four}
              />
            )}
          </Row>
          <Row className="twobtn">
            <Col xs={3}>
              <button onClick={reduce}>
                <img src={Arr2} className="arr-i"></img>
              </button>
            </Col>
            <Col xs={3}>
              <button onClick={add}>
                <img src={Arr1} className="arr-i"></img>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default Services;
