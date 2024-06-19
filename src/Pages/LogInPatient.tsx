
import { useNavigate } from "react-router-dom";
import LoginInfo from "../Components/loginInfo";


function LogInPatient(){
    const navigate = useNavigate();
    const handlesubmit=()=>{
        navigate("../allAboutpatient/LandForPatient");

    }
    return(
        <>
        <LoginInfo handlesubmit={handlesubmit} />
        </>
    )

}
export default LogInPatient;