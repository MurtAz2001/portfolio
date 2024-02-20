import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { RiVuejsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSpring } from "react-icons/si";
import { FaBootstrap,FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrReactjs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsLine/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdCss/>
      </Col>
    </Row>
  );
}

export default Techstack;
