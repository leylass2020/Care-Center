import LoginInfo from "../Components/loginInfo";
import { useNavigate } from "react-router-dom";

function LogInProvider() {
  const navigate = useNavigate();
  const ProvidersArr=[{id:0,
  email:"lili@gmail.com",
password:"1234Said"},];
  const handleSubmit =()=>{
    navigate("/AccountofProvider/AllAboutPro");
  }
  return (
    <>
      <LoginInfo handlesubmit={handleSubmit}/>
    </>
  );
}
export default LogInProvider;
