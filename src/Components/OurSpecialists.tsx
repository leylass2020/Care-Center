import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import img7 from "../imgs/stuf/image 7.svg";
import img8 from "../imgs/stuf/image 8.svg";
import img9 from "../imgs/stuf/image 9.svg";
import Arr1 from "../imgs/icons/Arr1.svg";
import Arr2 from "../imgs/icons/Arr2.svg";

import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Specialist from "./Specialist";
import "../styles/ourspecialist.css";
import { useTranslation } from "react-i18next";

function OurSpecialists() {
  const [t,i18n] = useTranslation("general");
  const navigate = useNavigate();
  const ty = "Buy";
  const s = { width: "170px" };
  const List = [
    {
      id: 0,
      name: "Wade Warren",
      spe: "Endodontist",
      imgSrc: img7,
      date: "12/5",
      cost: "200$",
      location: "location",
    },
    {
      id: 1,
      name: "Jenny Wilson",
      spe: "Periodontist",
      imgSrc: img8,
      date: "14/6",
      cost: "100$",
      location: "location jenny",
    },
    {
      id: 3,
      name: "Jacob Jones",
      spe: "Pediatric Dentist",
      imgSrc: img9,
      date: "11/3",
      cost: "250$",
      location: "location Jacob",
    },
    {
      id: 4,
      name: "Jacob Jones",
      spe: "Pediatric Dentist",
      imgSrc: img9,
      date: "11/3",
      cost: "250$",
      location: "location Jacob",
    },
    {
      id: 5,
      name: "Wade name5",
      spe: "Endodontist",
      imgSrc: img7,
      date: "11/3",
      cost: "150$",
      location: "location wade",
    },
    {
      id: 6,
      name: "Jenny name6",
      spe: "Periodontist",
      imgSrc: img8,
      date: "14/6",
      cost: "100$",
      location: "location jenny",
    },
    {
      id: 7,
      name: "Jacob name7",
      spe: "Pediatric Dentist",
      imgSrc: img9,
      date: "11/3",
      cost: "250$",
      location: "location Jacob",
    },
    {
      id: 8,
      name: "Jacob name8",
      spe: "Pediatric Dentist",
      imgSrc: img9,
      date: "11/3",
      cost: "250$",
      location: "location Jacob",
    },
    {
      id: 9,
      name: "Wade name9",
      spe: "Endodontist",
      imgSrc: img7,
      date: "11/3",
      cost: "150$",
      location: "location wade",
    },
    {
      id: 10,
      name: "Jenny name10",
      spe: "Periodontist",
      imgSrc: img8,
      date: "14/6",
      cost: "100$",
      location: "location jenny",
    },
    {
      id: 11,
      name: "Jacob name11",
      spe: "Pediatric Dentist",
      imgSrc: img9,
      date: "11/3",
      cost: "250$",
      location: "location Jacob",
    },
  ];
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
      <div className="mainour ">
        <div className="container">
          <Row>
            <h1>{t("Landing.specialits.title")}</h1>
          </Row>
          <Row>
            <p style={{maxWidth:"600px",textAlign:"center"}}>
            {t("Landing.specialits.body")}
            </p>
          </Row>
          <Row>
            <Col lg={3}>
              <a
                onClick={() => {
                  navigate("/OneSpecDetails", {
                    state: {
                      name: first.name,
                      location: first.location,
                      date: first.date,
                      imgSrc: first.imgSrc,
                      cost: first.cost,
                      spe: first.spe,
                      type: ty,
                      styl: s,
                    },
                  });
                }}
              >
                <Specialist
                  spec={first}
                />
              </a>
            </Col>
            <Col lg={3}>
              {v2 && (
                <a
                  onClick={() => {
                    navigate("/OneSpecDetails", {
                      state: {
                        name: second.name,
                        location: second.location,
                        date: second.date,
                        imgSrc: second.imgSrc,
                        cost: second.cost,
                        spe: second.spe,
                        type: ty,
                        styl: s,
                      },
                    });
                  }}
                >
                  <Specialist
                    spec={second}
                  />
                </a>
              )}
            </Col>
            <Col lg={3}>
              {v3 && (
                <a
                  onClick={() => {
                    navigate("/OneSpecDetails", {
                      state: {
                        name: third.name,
                        location: third.location,
                        date: third.date,
                        imgSrc: third.imgSrc,
                        cost: third.cost,
                        spe: third.spe,
                        type: ty,
                        styl: s,
                      },
                    });
                  }}
                >
                  <Specialist
                    spec={third}
                  />
                </a>
              )}
            </Col>
            <Col lg={3}>
              {v4 && (
                <a
                  onClick={() => {
                    navigate("/OneSpecDetails", {
                      state: {
                        name: four.name,
                        location: four.location,
                        date: four.date,
                        imgSrc: four.imgSrc,
                        cost: four.cost,
                        spe: four.spe,
                        type: ty,
                        styl: s,
                      },
                    });
                  }}
                >
                  <Specialist
                    spec={four}
                  />
                </a>
              )}
            </Col>
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
export default OurSpecialists;
