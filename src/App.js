import "./App.css";
import Login from "./component/loginPage";
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavigationBar from "./component/NavBar";
import AdmissionEnquiry from "./component/adminComponent/frontOffice/AdmissionEnquiry";
import AdminPage from './component/AdminPage';
import {
  BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    
  
    <BrowserRouter>
        {/* <Sidebar/> */}
        

        <Routes>
          <Route path="/" element ={<NavigationBar/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admissionenquiry" element={<AdmissionEnquiry/>}/>
        
 
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
