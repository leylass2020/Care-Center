import "bootstrap/dist/css/bootstrap-grid.css";
import "../styles/servicedetail.css";
import Col from "react-bootstrap/Col";
import Specialist from "./specialist";
import img7 from "../imgs/stuf/image 7.svg";
import img8 from "../imgs/stuf/image 8.svg";
import img9 from "../imgs/stuf/image 9.svg";
import { useEffect } from "react";

function ServiceDetail(Props) {
  const List = [
    { id: 0, name: "Wade Warren", spe: "Endodontist", imgSrc: img7 },
    { id: 1, name: "Jenny Wilson", spe: "Periodontist", imgSrc: img8 },
    { id: 3, name: "Jacob Jones", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 4, name: "Jacob Jones", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 5, name: "Wade name5", spe: "Endodontist", imgSrc: img7 },
    { id: 6, name: "Jenny name6", spe: "Periodontist", imgSrc: img8 },
    { id: 7, name: "Jacob name7", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 8, name: "Jacob name8", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 9, name: "Wade name9", spe: "Endodontist", imgSrc: img7 },
    { id: 10, name: "Jenny name10", spe: "Periodontist", imgSrc: img8 },
    { id: 11, name: "Jacob name11", spe: "Pediatric Dentist", imgSrc: img9 },
  ];

  const d = List.filter((item) => {
    item.id === Props.id;
  });
  return (
    <div>
      <Col lg={4}>
        <h1>Service Details</h1>
        <h2>
          Doctor Name
          <br />
          Doctor Locatuion
          <br />
          17/5<span style={{ opacity: 0 }}>---</span>20:30
          <br />
          Cost<span style={{ opacity: 0 }}>----</span>200$
        </h2>
      </Col>
      <Col lg={3}></Col>
      <Col lg={4}>
        <Specialist name={d.name} imgSrc={d.imgSrc} spec={d.spe} />
      </Col>
    </div>
  );
}

export default ServiceDetail;
