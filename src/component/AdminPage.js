import React from "react";
import "./AdminPage.css";
import { BsFillPersonPlusFill, BsCash } from "react-icons/bs";
import { TbBrandCashapp, TbBrandZoom, TbReportSearch } from "react-icons/tb";
import { GiExpense, GiHumanPyramid, GiFamilyHouse } from "react-icons/gi";
import {
  MdOutlineCastForEducation,
  MdWifi,
  MdOutlinePlayLesson,
  MdDownload,
  MdOutlineHomeWork,
  MdInventory,
  MdOutlineComputer,
  MdCastForEducation,
} from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { FaBuysellads, FaDiscourse } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  SiGooglemeet,
  SiTransportforlondon,
  SiOnlyoffice,
} from "react-icons/si";
import { BiBookAdd } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const SlideBar = ({ showSideBar }) => {

  const navigate = useNavigate();

  return (
    <>
      {showSideBar == false ? (
        <div>
          <div className="sideBarContainer">
            <div className="flexContainer">
              <SiOnlyoffice />
            </div>
            <div className="flexContainer">
              <BsFillPersonPlusFill />
            </div>
            <div className="flexContainer">
              <BsCash />
            </div>
            <div className="flexContainer">
              <TbBrandCashapp />
            </div>
            <div className="flexContainer">
              <GiExpense />
            </div>
            <div className="flexContainer">
              <TbReportSearch />
            </div>
            <div className="flexContainer">
              <FaBuysellads />
            </div>
            <div className="flexContainer">
              <MdWifi />
            </div>
            <div className="flexContainer">
              <MdOutlinePlayLesson />
            </div>
            <div className="flexContainer">
              <GiHumanPyramid />
            </div>
            <div className="flexContainer">
              <MdOutlineCastForEducation />
            </div>
            <div className="flexContainer">
              <HiOutlineSpeakerphone />
            </div>
            <div className="flexContainer">
              <FaDiscourse />
            </div>
            <div className="flexContainer">
              <TbBrandZoom />
            </div>
            <div className="flexContainer">
              <SiGooglemeet />
            </div>
            <div className="flexContainer">
              <MdDownload />
            </div>
            <div className="flexContainer">
              <MdOutlineHomeWork />
            </div>
            <div className="flexContainer">
              <BiBookAdd />
            </div>
            <div className="flexContainer">
              <MdInventory />
            </div>
            <div className="flexContainer">
              <SiTransportforlondon />
            </div>
            <div className="flexContainer">
              <GiFamilyHouse />
            </div>
            <div className="flexContainer">
              <GrCertificate />
            </div>
            <div className="flexContainer">
              <MdOutlineComputer />
            </div>
            <div className="flexContainer">
              <MdCastForEducation />
            </div>
            <div className="flexContainer">
              <TbReportSearch />
            </div>
            <div className="flexContainer">
              <FiSettings />
            </div>
          </div>
        </div>
      ) : (
        showSideBar && (
          <div >
            <div className="sidebar-style">
              <div className="sidebarPannel">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <SiOnlyoffice />
                        Front Office
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body" onClick={()=>navigate('/admissionenquiry')} >Admission Enquiry</div>
                      <div class="accordion-body">Visitor Book</div>
                      <div class="accordion-body">Phone Call Log</div>
                      <div class="accordion-body">Postal Dispatch</div>
                      <div class="accordion-body">Postal Receive</div>
                      <div class="accordion-body">Complain</div>
                      <div class="accordion-body">Setup Front Office</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <BsFillPersonPlusFill />
                        Student Infromation
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div class="accordion-body">Admission Enquiry</div>
                        <div class="accordion-body">Visitor Book</div>
                        <div class="accordion-body">Phone Call Log</div>
                        <div class="accordion-body">Postal Dispatch</div>
                        <div class="accordion-body">Postal Receive</div>
                        <div class="accordion-body">Complain</div>
                        <div class="accordion-body">Setup Front Office</div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                          <BsCash />
                       Cash Collection
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                      <div class="accordion-body">Admission Enquiry</div>
                        <div class="accordion-body">Visitor Book</div>
                        <div class="accordion-body">Phone Call Log</div>
                        <div class="accordion-body">Postal Dispatch</div>
                        <div class="accordion-body">Postal Receive</div>
                        <div class="accordion-body">Complain</div>
                        <div class="accordion-body">Setup Front Office</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              
              <div className="flexContainer">
                <TbBrandCashapp />
                <div>Income</div>
              </div>
              <div className="flexContainer">
                <GiExpense />
                <div>Expenses</div>
              </div>
              <div className="flexContainer">
                <TbReportSearch />
                <div>Examination</div>
              </div>
              <div className="flexContainer">
                <FaBuysellads />
                <div>Attendance</div>
              </div>
              <div className="flexContainer">
                <MdWifi />
                <div>Online Examination</div>
              </div>
              <div className="flexContainer">
                <MdOutlinePlayLesson />
                <div>Lesson Plan</div>
              </div>
              <div className="flexContainer">
                <GiHumanPyramid />
                <div>Human Resource</div>
              </div>
              <div className="flexContainer">
                <MdOutlineCastForEducation />
                <div>Academics</div>
              </div>
              <div className="flexContainer">
                <HiOutlineSpeakerphone />
                <div>Communicate</div>
              </div>
              <div className="flexContainer">
                <FaDiscourse />
                <div>Online Course</div>
              </div>
              <div className="flexContainer">
                <TbBrandZoom />
                <div>Zoom Live Classes</div>
              </div>
              <div className="flexContainer">
                <SiGooglemeet />
                <div>Gmeet Live Classes</div>
              </div>
              <div className="flexContainer">
                <MdDownload />
                <div>Download Center</div>
              </div>
              <div className="flexContainer">
                <MdOutlineHomeWork />
                <div>Homework</div>
              </div>
              <div className="flexContainer">
                <BiBookAdd />
                <div>Library</div>
              </div>
              <div className="flexContainer">
                <MdInventory />
                <div>Inventory</div>
              </div>
              <div className="flexContainer">
                <SiTransportforlondon />
                <div>Transport</div>
              </div>
              <div className="flexContainer">
                <GiFamilyHouse />
                <div>Hostel</div>
              </div>
              <div className="flexContainer">
                <GrCertificate />
                <div>Certificate</div>
              </div>
              <div className="flexContainer">
                <MdOutlineComputer />
                <div>Front CMS</div>
              </div>
              <div className="flexContainer">
                <MdCastForEducation />
                <div>Alumni</div>
              </div>
              <div className="flexContainer">
                <TbReportSearch />
                <div>Reports</div>
              </div>
              <div className="flexContainer">
                <FiSettings />
                <div>System Settings</div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SlideBar;
