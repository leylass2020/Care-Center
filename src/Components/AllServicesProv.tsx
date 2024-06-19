import { Col } from "react-bootstrap";
import ShowServices from "./ShowServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AllServicesProv() {

  const navigate = useNavigate();

  const [ser, setSer] = useState([
    {
      id: 1,
      name: "Name",
      section: "Nurse",
      price: "200$",
      After: "150$",
      Befor: "200$",
    },
    {
      id: 2,
      name: "Name",
      section: "Nurse",
      price: "200$",
      After: "150$",
      Befor: "200$",
    },
    {
      id: 3,
      name: "Service",
      section: "Doctor",
      price: "400$",
      After: "150$",
      Befor: "200$",
    },
  ]);
  const handleNavigate = ()=>{

  }
  const handleDelete = (id) => {
    const newSer = ser.filter((item) => item.id != id);
    setSer(newSer);
  };
  return (
    <>
      <div>
        {ser &&
          ser.map((item) => (
            <div>
              {" "}
              <Col lg={5}>
                <ShowServices
                  service={item}
                  delete={() => handleDelete(item.id)}
                  
                />
              </Col>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllServicesProv;
