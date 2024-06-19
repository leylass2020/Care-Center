import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import "../styles/fqs.css";
import { useTranslation } from "react-i18next";
import listq1 from "../Data/fqs.json"
import listq2 from "../Data/fgs_ar.json"
import { useEffect, useState } from "react";


function Fqs() {
  const [t, i18n] = useTranslation("general");
  const [listq,setListq]=useState([]);

  useEffect(()=>{
    if(t("language")==="En"){
      setListq(listq1);

    }else{
      setListq(listq2);

    }
  },[]);
  return (
    <>
      <div className="fqs">
        <div className="container">
          <h1>{t("Landing.fqs.title")}</h1>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            {t("Landing.fqs.body")}
          </p>
          <div className="qustions">
            <Col lg={6}>
              <Accordion defaultActiveKey="0">
                {listq.map((q) => (
                  <Accordion.Item eventKey={q.id}>
                    <Accordion.Header className="mb-0">
                      <li style={{textAlign:t("language")==="En"?"left":"right"}}>{q.title}</li>
                    </Accordion.Header>
                    <Accordion.Body style={{textAlign:t("language")==="En"?"left":"right"}}>{q.body}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </div>
          {/* end question  */}
        </div>
        {/* end container  */}
      </div>
    </>
  );
}

export default Fqs;
