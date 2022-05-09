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
import useMediaQuery from "@components/hooks/MediaQuery";


function FullPage() {
  const { user, error, isFetching } = useContext(AuthContext);
  // const {searchResults, setSearchResults} = useContext(SearchContext);
  // console.log(searchResults, setSearchResults);
  console.log({ user, error, isFetching });
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Container className="fullPageBodyContainer" >
    {isDesktop? <Row lg={12}>
        <Col className="leftBar" lg={2}>
          <LeftBar />
        </Col>
        <Col className="feedBody"  lg={8}>
        
          <Outlet />
        
        </Col>
        <Col className="rightBar" lg={2}>
          <RightBar />
        </Col>
      </Row> : <Row lg={8}>
        
        <Col className="feedBody"  lg={8}>
        
          <Outlet />
        
        </Col>
       
      </Row> }
      
    </Container>
  );
}
export default FullPage;
