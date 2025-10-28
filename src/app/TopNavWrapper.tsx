"use client";
import MediaIcon from "@/Component/common/Customized/MediaIcon";
import FooterContainer from "@/Component/common/Footer/Footer";
import TopNavigationBar from "@/Component/common/TopNavbar/TopNavBar";
import { scrollTop } from "@/Component/constant/FooterItems";
import { Flex } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
export default function TopNavWrapper({ children }: { children: ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    // listen for scroll continuously
    window.addEventListener("scroll", handleScroll);

    // clean up when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    setScrollProgress(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div style={{ width: "100%" }}>
      <TopNavigationBar scrollProgress={scrollProgress} />
      {children}
      <FooterContainer />
      <div style={{ position: "fixed", right: "20px", bottom: "50px" }}>
        <MediaIcon item={scrollTop[0]} onClick={handleScrollTop} />
      </div>
    </div>
  );
}
