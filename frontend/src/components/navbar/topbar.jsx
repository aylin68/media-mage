import React from "react";
import useMediaQuery from "@components/hooks/MediaQuery";
import TopbarDesktop from "./topbarDesktop";
import TopbarMobile from "./topbarMobile";

const Topbar = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return <div>{isDesktop ? <TopbarDesktop /> : <TopbarMobile />}</div>;
};

export default Topbar
