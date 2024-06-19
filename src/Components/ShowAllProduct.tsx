import { Col } from "react-bootstrap";
import ShowProd from "./ShowProd";
import { useState } from "react";
import pro from "../imgs/product.svg";
import ed from "../imgs/undraw_Create_re_57a3 1(1).svg";

function ShowAllProduct() {
  const [showMs, setShowMs] = useState("none");
  const [ser, setSer] = useState([
    {
      id: 1,
      name: "product",
      im: pro,
      price: "200$",
      After: "150$",
      Befor: "200$",
    },
    {
      id: 2,
      name: "product",
      im: pro,
      price: "200$",
      After: "150$",
      Befor: "200$",
    },
    {
      id: 3,
      name: "product",
      price: "400$",
      After: "150$",
      im: pro,
      Befor: "200$",
    },
  ]);
  const handleDelete = (id) => {
    const newSer = ser.filter((item) => item.id != id);
    setSer(newSer);
    setShowMs("flex");
  };
  return (
    <>
      <div>
      <div
        className="show-message"
        style={{
          display: showMs,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column"
        }}
        onClick={() => {
          setShowMs("none");
        }}
      >
        <img src={ed} style={{ width: "90%" }}></img>
        <h3>Product Was Edited</h3>
      </div>
        {ser.map((item) => (
          <div>
            {" "}
            <Col lg={5}>
              <ShowProd prod={item} delete={() => handleDelete(item.id)} />
            </Col>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default ShowAllProduct;
