import React from "react";
import useMediaQuery from "@components/hooks/MediaQuery";
import TopbarDesktop from "./topbarDesktop";
import TopbarMobile from "./topbarMobile";

const Topbar = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return <div>{isDesktop ? <TopbarDesktop /> : <TopbarMobile />}</div>;
};

export default Topbar;
