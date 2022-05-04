import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftBar from "@components/leftBar/leftBar";
import RightBar from "@components/rightBar/rightBar";
import "./fullPage.css";
import { Outlet } from "react-router-dom";
// import ForgetPassword from "./pages/ForgetPassword";
import { AuthContext } from "../../context/AuthContext";
import { SearchContextProvider } from "../../context/SearchContext";
import {SearchContext} from "../../context/SearchContext";
//import { useOutletContext } from "react-router-dom";


function FullPage() {
  const { user, error, isFetching } = useContext(AuthContext);
  // const {searchResults, setSearchResults} = useContext(SearchContext);
  // console.log(searchResults, setSearchResults);
  console.log({ user, error, isFetching });
  return (
    <Container className="fullPageBodyContainer">
      <Row  lg={12}>
        <Col className="leftBar" s={0} md={0} lg={2}>
          <LeftBar />
        </Col>
        <Col className="feedBody" s={12} md={12} lg={8}>
        
          <Outlet />
        
        </Col>
        <Col className="rightBar" s={0} md={0} lg={2}>
          <RightBar />
        </Col>
      </Row>
    </Container>
  );
}
export default FullPage;
