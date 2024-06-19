import logo from "../imgs/logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/namelogo.css"

function NameandLogo(){
    return(
        <>
        <div className="left-col">
            <h1>
              <span>C</span>are
            </h1>
            <img className="logoCo" src={logo}></img>
          </div>
        </>
    )

}
export default NameandLogo;