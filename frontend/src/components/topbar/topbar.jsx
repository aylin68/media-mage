import React, { useContext } from "react";
import useMediaQuery from "@components/hooks/MediaQuery";
import TopbarDesktop from "./topbarDesktop";
import TopbarMobile from "./topbarMobile";
import TopbarLoggedout from "./topbarLoggedout";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  const { user } = useContext(AuthContext);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  return (
    <div>
      {user ? (
        isDesktop ? (
          <TopbarDesktop />
        ) : (
          <TopbarMobile />
        )
      ) : (
        <TopbarLoggedout />
      )}
    </div>
  );
}

export default Topbar;
