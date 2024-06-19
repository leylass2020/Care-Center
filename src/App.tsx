import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LogIn from "./Pages/LogIn";
import Landing from "./Pages/Landing";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import GetInTouch from "./Pages/GetInTouch";
import LogInmain from "./Pages/LogInmain";
import ServiceProvider from "./Pages/ServiceProvider";
import LogInPatient from "./Pages/LogInPatient";
import LogInProvider from "./Pages/LogInProvider";
import CreatPatient from "./Pages/CreatPatient";
import CreatProvider from "./Pages/CreatProvider";
import ResetPassPatient from "./Pages/ResetPassPatient";
import ResetPassProvider from "./Pages/ResetPassProvider";
import FindSevicePage from "./Pages/FindSevicePage";
import AccountofProvider from "./Pages/AccountofProvider";
import ProviderAccount from "./Components/ProviderAccount";
import AllAboutPro from "./Components/AllAboutPro";
import EditeProduct from "./Components/EditeProduct";
import AllAboutService from "./Components/AllAboutService";
import EditeService from "./Components/EditeService";
import OneSpecDetails from "./Components/OneSpecDetails";
import ServiceDetail from "./Components/ServiceDetail";
import PatientAccount from "./Components/PatientAccount";
import AllAboutPatient from "./Components/AllAboutPatient";
import PaymentForPatient from "./Components/PaymentForPatient";
import Home from "./Components/Home";
import OneServiceDetails from "./Components/OneServiceDetails";
import ShowProviderAccount from "./Components/ShowProviderAccount";
import LandForPatient from "./Components/LandForPatient";
import Admin from "./Pages/Admin";
import ProvidersTable from "./Components/ProvidersTable";
import ReservationTable from "./Components/ReservationTable";
import AdminTable from "./Components/AdminTable";
import PatientsTable from "./Components/PatientsTable";
import ServicesTable from "./Components/ServicesTable";
import EditeAdmin from "./Components/EditeAdmin";
import EditeProductAdmin from "./Components/EditeProductAdmin";
import ProductsTable from "./Components/ProductsTable";
import AdminEditeProvider from "./Components/AdminEditeProvider";
import PatientCart from "./Components/PatientCart";
import AllServicesProv from "./Components/AllServicesProv";
import ShowAllProduct from "./Components/ShowAllProduct";
import SalesTable from "./Components/SalesTable";
import CreatAccount2 from "./Components/CreatAccount2";
import Confirm from "./Components/Confirm";
import ResetPass from "./Components/ResetPass";
import PatientMain from "./Components/PatientMain";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route index element={<Landing />} />
        <Route path="/#services" element={<Landing />} />
        <Route path="/#aboutus" element={<Landing />} />
        <Route path="/LogInmain" element={<LogInmain />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="ServiceProvider" element={<ServiceProvider />} />
        <Route path="LogInPatient" element={<LogInPatient />} />
        <Route path="LogInProvider" element={<LogInProvider />} />
        <Route path="CreatPatient" element={<CreatPatient />} />
        <Route path="Confirm" element={<Confirm />} />
        <Route path="CreatAccount" element={<CreatAccount2 />} />
        <Route path="CreatProvider" element={<CreatProvider />} />
        <Route path="ResetPass" element={<ResetPass />} />
        
        <Route path="FindSevicePage" element={<FindSevicePage />}></Route>
        <Route path="OneSpecDetails" element={<OneSpecDetails />} />
        <Route path="OneServiceDetails" element={<OneServiceDetails />} />
        <Route path="ServiceDetail" element={<ServiceDetail />} />

        <Route path="AccountofProvider" element={<AccountofProvider />}>
          <Route path="AllAboutPro" element={<AllAboutPro />}>
            <Route path="ShowAllProduct" element={<ShowAllProduct />} />
            <Route path="EditeProduct" element={<EditeProduct />} />
          </Route>
          <Route path="AllAboutService" element={<AllAboutService />}>
            <Route path="AllServicesProv" element={<AllServicesProv />} />
            <Route path="EditeService" element={<EditeService />} />
          </Route>
          <Route path="ProviderAccount" element={<ProviderAccount />} />
          <Route path="ShowProviderAccount" element={<ShowProviderAccount />} />
        </Route>
        
      </Route>

      <Route path="allAboutpatient" element={<AllAboutPatient />}>
        <Route path="GetInTouch" element={<GetInTouch />} />
        <Route path="LandForPatient" element={<LandForPatient />}>
          <Route path="Landing" element={<Landing />} />
        </Route>
        <Route path="PatientMain" element={<PatientMain />}>
          <Route path="patientAccount" element={<PatientAccount />} />
          <Route path="PaymentForPatient" element={<PaymentForPatient />} />
          <Route path="PatientCart" element={<PatientCart />} />
        </Route>
      </Route>
      <Route path="Admin" element={<Admin />}>
        <Route path="salesTable" element={<SalesTable />} />
        <Route path="ProvidersTable" element={<ProvidersTable />} />
        <Route path="ReservationTable" element={<ReservationTable />} />
        <Route path="AdminTable" element={<AdminTable />} />
        <Route path="PatientsTable" element={<PatientsTable />} />
        <Route path="ServicesTable" element={<ServicesTable />} />
        <Route path="ProductsTable" element={<ProductsTable />} />
        <Route path="EditeService" element={<EditeService />} />
        <Route path="EditeAdmin" element={<EditeAdmin />} />
        <Route path="EditeProductAdmin" element={<EditeProductAdmin />} />
        <Route path="AdminEditeProvider" element={<AdminEditeProvider />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
