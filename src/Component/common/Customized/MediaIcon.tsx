import { theme } from "@/Styles/theme";
import React, { ReactElement } from "react";
import styled from "styled-components";
interface itemProp {
  key: string | number;
  link: string;
  component: ReactElement;
}
const RapperDiv = styled.div`
height:32px;
width:32px;
background:${theme.background.component_redbg};
color:${theme.content.white_text};
border-radius:50%;
box-sizing:border-box;
padding:8px;
cursor: pointer;
`;
export default function MediaIcon({ item }: { item: itemProp }) {
  const handleOpenInNewTab = () => {
    window.open(item.link, "_blank");
  };
  return <RapperDiv onClick={handleOpenInNewTab}>{item.component}</RapperDiv>;
}
