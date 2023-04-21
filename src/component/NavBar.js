import React, { useState } from "react";
import "./Navbar.css";
import {
  BsPersonCircle,
  BsWhatsapp,
  BsCalendarDay,
  BsFillFlagFill,
} from "react-icons/bs";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { RiTaskLine } from "react-icons/ri";
import {
  Container,
  Navbar,
  Nav,
  Form,

} from "react-bootstrap";
import { Us } from "react-flags-select";
import Card from "react-bootstrap/Card";
import SlideBar from "./AdminPage";

const NavigationBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container className="containerClass">
          <div onClick={() => setShowSideBar(!showSideBar)}>
            <div>
              <AiOutlineMenu className={`${showSideBar ? 'menu' : 'closedMenu'}`}></AiOutlineMenu>
            </div>
          </div>
       
          <div className="searchBarPanel">
            <div>
              <Card.Body>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="searchBar"
                  aria-label="Search"
                />
              </Card.Body>
            </div>
            <AiOutlineSearch className="searchIcon"></AiOutlineSearch>
          </div>
          {/* <BsFillFlagFill className="flag"></BsFillFlagFill> */}
          <Us className="flag-style"/>
          <BsCalendarDay className="cal"></BsCalendarDay>
          <RiTaskLine className="task"> </RiTaskLine>
          <BsWhatsapp className="whatsApp"></BsWhatsapp>
          <BsPersonCircle className="styleProfile"></BsPersonCircle>
        </Container>
      </Navbar>
      <SlideBar showSideBar={showSideBar} />
      
    </>
  );
};
export default NavigationBar;
