import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { SiIntellijidea } from "react-icons/si";
import { FaSlack,FaFigma,FaDocker } from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSlack/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker/>
      </Col>
    </Row>
  );
}

export default Toolstack;
