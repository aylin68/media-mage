import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftBar from "@components/leftBar/leftBar";

import RightBar from "@components/rightBar/rightBar";
import "./fullPage.css";
import { Outlet } from "react-router-dom";

function FullPage() {
  return (
    <Container>
      <Row lg={12}>
        <Col lg={2}>
          <LeftBar />
        </Col>
        <Col lg={8}>
          <Outlet />
        </Col>
        <Col lg={2}>
          <RightBar />
        </Col>
      </Row>
    </Container>
  );
}
export default FullPage;
