import "bootstrap/dist/css/bootstrap.css";
import "../styles/service.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OneService(Props) {
  const [k] = useTranslation("general");
  const navigate = useNavigate();
  const item = Props.item;
  return (
    <>
      <div className=" col col-3  container ser-con">
        <div className="card" style={{ width: "16rem" }}>
          <img src={item.imgSrc} className="card-img-top" />
          <div className="card-body">
            <a className="btn btn-primary"  onClick={() => {
                    navigate("/OneServiceDetails", {
                      state: {
                        name: item.title,
                        imgSrc: item.imgSrc,
                        cost: item.cost,
                        serviceprovider:item.serviceprovider,
                        servicetype:item.servicetype,
                        type: item.type,
                        styl:item.styl,
                      },
                    });
                  }}>
              {k("review")}
            </a>
            <h5 className="card-title">{item.title}<span style={{opacity:0}}>------</span>{item.type}</h5>
            <p className="card-text">{item.text}</p>
          </div>
          <div className="card-footer bg-transparent">{item.price}</div>
        </div>
      </div>
    </>
  );
}
export default OneService;
