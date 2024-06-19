
import { Outlet } from "react-router-dom";
import PatientNavbar from "./PatientNavbar";

function AllAboutPatient() {
  return (
    <>
    <PatientNavbar />
    <Outlet/>
      
    </>
  );
}

export default AllAboutPatient;
