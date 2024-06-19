import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/findsrvice.css";
import OneService from "./OneService";
import { useState } from "react";

function SearchFindService(Props) {
  const last1 = (List) => {
    if (List.length % 3 === 1)
      return (
        <div>
          <Row
            style={{
              backgroundColor: "#22ACF1",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80vw",
              marginBottom: "20px",
              marginLeft: "10vw",
            }}
          >
            <Col>
              <OneService item={List[List.length - 1]} />
            </Col>
          </Row>
        </div>
      );
  };
  const last2 = (List) => {
    if (List.length % 3 === 2)
      return (
        <div>
          <Row
            style={{
              backgroundColor: "#22ACF1",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80vw",
              marginBottom: "20px",
              marginLeft: "10vw",
            }}
          >
            <Col>
              <OneService item={List[List.length - 1]} />
            </Col>
            <Col>
              <OneService item={List[List.length - 2]} />
            </Col>
          </Row>
        </div>
      );
  };
  const List = Props.list;
  return (
    <>
      <Row>
        {List.map((item, index) => {
          if (index % 3 === 0 && index < List.length - 2)
            return (
              <Row
                style={{
                  backgroundColor: "#22ACF1",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "80vw",
                  marginBottom: "20px",
                  marginLeft: "10vw",
                }}
              >
                <Col>
                  <OneService item={List[index]} />
                </Col>
                <Col>
                  <OneService item={List[index + 1]} />
                </Col>
                <Col>
                  <OneService item={List[index + 2]} />
                </Col>
              </Row>
            );
        })}
        {last1(List)}
        {last2(List)}
      </Row>
    </>
  );
}

export default SearchFindService;
