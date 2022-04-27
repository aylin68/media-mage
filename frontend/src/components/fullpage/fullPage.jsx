import React, { useEffect, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftBar from "@components/leftBar/leftBar";
import RightBar from "@components/rightBar/rightBar";
import "./fullPage.css";
import { Outlet } from "react-router-dom";
// import ForgetPassword from "./pages/ForgetPassword";
import { AuthContext } from "../../context/AuthContext";

function FullPage() {
  const { user, error, isFetching } = useContext(AuthContext);

  return (
    <Container className="fullPageBodyContainer">
      <Row lg={12}>
        <Col className="leftBar" lg={2}>
          <LeftBar />
        </Col>
        <Col className="feedBody" lg={8}>
          <Outlet />
        </Col>
        <Col className="rightBar" lg={2}>
          <RightBar />
        </Col>
      </Row>
    </Container>
  );
}
export default FullPage;
