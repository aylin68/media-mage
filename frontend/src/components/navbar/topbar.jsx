import React, {useContext} from "react";
import useMediaQuery from "@components/hooks/MediaQuery";
import TopbarDesktop from "./topbarDesktop";
import TopbarMobile from "./topbarMobile";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
    const { user, dispatch } = useContext(AuthContext);
  const logOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.clear();
    console.log("hey");
  };
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return <div>{isDesktop ? <TopbarDesktop /> : <TopbarMobile />}</div>;
};

export default Topbar
