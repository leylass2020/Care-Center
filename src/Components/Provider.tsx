
import "../styles/provider.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../imgs/logo.svg"

function Provider(){
    return (
        <>
        <div className="prov">
            <h1><span>C</span>are</h1>
            <img className="logo" src={logo}></img>
            <button>Patient</button>
            <button >Provider</button>
        </div>
        </>
    )
}
export default Provider;